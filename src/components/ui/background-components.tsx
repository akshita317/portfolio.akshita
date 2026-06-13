import React from "react";

export function SunnyBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, #fde047 0%, transparent 65%)`,
          opacity: 0.55,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SunriseBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative overflow-hidden" style={{ background: '#fff' }}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #eab308, transparent)`,
          opacity: 0.18,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
