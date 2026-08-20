import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  await saveSubmission(payload as Record<string, unknown>).catch((error) => {
    console.error("Could not save submission", error);
  });
  return NextResponse.json({ ok: true, saved: true });
}
