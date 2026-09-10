import type { ReactNode } from "react";

export function JewelTile({
  icon,
  image,
  alt = "",
  className = "",
}: {
  icon?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#3a2f1a,#0e0c09_70%)] ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(198,154,69,0.08) 0px, rgba(198,154,69,0.08) 1px, transparent 1px, transparent 14px)",
        }}
      />
      {image ? (
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="relative text-gold-300 [&>svg]:h-14 [&>svg]:w-14 lg:[&>svg]:h-16 lg:[&>svg]:w-16">
          {icon}
        </div>
      )}
    </div>
  );
}