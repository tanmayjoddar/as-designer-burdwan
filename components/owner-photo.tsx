"use client"

interface OwnerPhotoProps {
  className?: string
  priority?: boolean
}

export function OwnerPhoto({ className = "" }: OwnerPhotoProps) {
  return (
    <div
      className={`relative select-none overflow-hidden rounded-2xl border border-border shadow-lg bg-card ${className}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Actual Owner Photo */}
      <img
        src="/images/owner-samarjit-sharma.png"
        alt="Samarjit Sharma — Founder & Interior Designer at AS Designer Burdwan"
        draggable={false}
        className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-700 hover:scale-105"
        style={{
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      />

      {/* Transparent Protective Shield Layer - prevents right-click save and dragging */}
      <div
        className="absolute inset-0 z-20 cursor-default bg-transparent"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      />

      {/* Subtle overlay badge at bottom */}
      <div className="absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 text-white">
        <span className="text-[11px] uppercase tracking-wider text-[rgb(251,146,60)] font-semibold block">
          Founder & Principal Designer
        </span>
        <h4 className="text-lg font-medium tracking-tight">Samarjit Sharma</h4>
        <p className="text-xs text-white/70 mt-0.5">
          4+ Years Professional Experience · Turnkey Interior Expert
        </p>
      </div>
    </div>
  )
}
