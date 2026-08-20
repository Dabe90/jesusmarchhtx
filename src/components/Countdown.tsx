"use client";

import { useEffect, useState } from "react";

function lastSaturdayOfJanuary(year: number) {
  const lastDay = new Date(year, 1, 0);
  const offset = (lastDay.getDay() - 6 + 7) % 7;
  return new Date(year, 0, lastDay.getDate() - offset);
}

function nextLastSaturdayOfJanuary(from = new Date()) {
  const thisYear = lastSaturdayOfJanuary(from.getFullYear());
  return thisYear.getTime() >= from.getTime()
    ? thisYear
    : lastSaturdayOfJanuary(from.getFullYear() + 1);
}

export function Countdown({ target }: { target?: string }) {
  const end = target ? new Date(target) : nextLastSaturdayOfJanuary();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, end.getTime() - (now?.getTime() ?? end.getTime()));
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const cells = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="mt-8 grid grid-cols-4 gap-3">
      {cells.map((cell) => (
        <div key={cell.label} className="rounded-2xl bg-black/50 px-2 py-4 text-center">
          <p className="text-3xl font-bold text-gold md:text-4xl">{String(cell.value).padStart(2, "0")}</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80">{cell.label}</p>
        </div>
      ))}
    </div>
  );
}
