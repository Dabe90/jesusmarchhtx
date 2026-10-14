import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { FORM_WEBHOOK } from "@/lib/links";

async function saveSubmission(data: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "submissions.json");
  await mkdir(dir, { recursive: true });
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
  } catch {
    existing = [];
  }
  existing.unshift({ receivedAt: new Date().toISOString(), ...data });
  await writeFile(file, JSON.stringify(existing, null, 2));
}

function cleanFormData(data: Record<string, unknown>) {
  const cleaned: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith("_")) continue;
    if (value === undefined || value === null || value === "") continue;
    cleaned[key] = value;
  }
  return cleaned;
}

async function notifyWebhook(data: Record<string, unknown>) {
  const webhook = process.env.CONTACT_WEBHOOK_URL || FORM_WEBHOOK;
  if (!webhook) return;

  const fields = cleanFormData(data);
  const firstName = String(fields.firstName ?? fields.first ?? "").trim();
  const lastName = String(fields.lastName ?? fields.last ?? "").trim();
  const fullName =
    String(fields.name ?? "").trim() ||
    [firstName, lastName].filter(Boolean).join(" ").trim();

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "form",
      ...fields,
      name: fullName || fields.formName || "Website form",
      first: firstName || undefined,
      last: lastName || undefined,
      email: fields.email,
      receivedAt: new Date().toISOString(),
      source: "jesusmarchhtx.com/api/contact",
    }),
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`);
  }

  const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (result && result.ok === false) {
    throw new Error(result.error || "Webhook returned ok:false");
  }
}

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;

  await saveSubmission(data).catch((error) => {
    console.error("Could not save submission", error);
  });

  await notifyWebhook(data).catch((error) => {
    console.error("Could not notify contact webhook", error);
  });

  return NextResponse.json({ ok: true, saved: true });
}
