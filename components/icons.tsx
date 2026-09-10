import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function RingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="30" r="12" />
      <path d="M18 18l6-10 6 10-6 5-6-5z" />
      <path d="M24 8v10" />
    </svg>
  );
}

export function NecklaceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M10 8c0 12 6 20 14 20s14-8 14-20" />
      <path d="M24 28l-5 9 5 4 5-4-5-9z" />
    </svg>
  );
}

export function EarringIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="12" r="5" />
      <path d="M24 17v6" />
      <path d="M17 23a7 7 0 0 0 14 0" />
      <path d="M24 30v9" />
    </svg>
  );
}

export function BraceletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <ellipse cx="24" cy="24" rx="16" ry="10" />
      <path d="M12 19l6 10M18 17l6 12M24 16l6 14M30 17l6 10" />
    </svg>
  );
}

export function SetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 6l4 7-4 4-4-4 4-7z" />
      <path d="M24 17v8" />
      <circle cx="14" cy="34" r="4" />
      <circle cx="34" cy="34" r="4" />
      <path d="M18 34h-0M30 34h0" />
      <path d="M24 25c-4 0-6 4-6 6M24 25c4 0 6 4 6 6" />
    </svg>
  );
}

export function GemIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M9 17l7-9h16l7 9-17 22L9 17z" />
      <path d="M9 17h30M16 8l3 9-3 22M32 8l-3 9 3 22M16 17h16" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 6l14 5v11c0 10-6 16-14 20-8-4-14-10-14-20V11l14-5z" />
      <path d="M18 24l4 4 8-9" />
    </svg>
  );
}

export function InvoiceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M13 5h22v38l-5-4-5 4-5-4-5 4-2-38z" />
      <path d="M19 15h10M19 22h10M19 29h6" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M5 14h20v18H5z" />
      <path d="M25 20h9l7 7v5h-16z" />
      <circle cx="14" cy="35" r="3.4" />
      <circle cx="33" cy="35" r="3.4" />
    </svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M7 18h34v8H7z" />
      <path d="M10 26h28v16H10z" />
      <path d="M24 18v24" />
      <path d="M24 18c-3-8-14-8-14 0M24 18c3-8 14-8 14 0" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 4h2l2.2 12.4a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18" cy="21" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 20s-7-4.4-9.5-9C.7 7.7 2.6 4 6.2 4c2 0 3.4 1 5.8 3.3C14.4 5 15.8 4 17.8 4c3.6 0 5.5 3.7 3.7 7-2.5 4.6-9.5 9-9.5 9z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M21 4L3 11.5l6 2M21 4L10.5 20l-1.5-6.5M21 4L9 13.5" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 18l-1.5 3.3L8 20a8 8 0 1 0-3-3z" />
      <path d="M8.5 8.8c.3 2.7 2.6 5 5.3 5.3.9.1 1.2-.5 1.2-1v-1l-2-.6-.7.9c-1-.5-1.9-1.4-2.4-2.4l.9-.7-.6-2h-1c-.5 0-1 .4-.7 1.5z" />
    </svg>
  );
}
