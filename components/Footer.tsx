import Link from "next/link";
import {
  ArrowUpIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "./icons";

const quickLinks = [
  { label: "فروشگاه", href: "/#shop" },
  { label: "کالکشن‌ها", href: "/#categories" },
  { label: "درباره ما", href: "/#about" },
  { label: "تماس با ما", href: "/contact" },
];

const serviceLinks = [
  { label: "راهنمای خرید", href: "/guide" },
  { label: "سوالات متداول", href: "/faq" },
  { label: "شرایط بازگشت کالا", href: "/returns" },
  { label: "حریم خصوصی", href: "/privacy" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-line bg-ink">
      {/* =====================================
          بخش اصلی فوتر
      ====================================== */}
      <div
        className="
          container-page
          grid
          gap-10
          py-14
          text-center
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* =====================================
            برند
        ====================================== */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/60 text-gold-300">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M12 2l3 4H9l3-4z" />
                <path d="M4 8l8 13 8-13H4z" />
                <path d="M4 8h16M9 8l3 5 3-5" />
              </svg>
            </span>

            <span className="flex flex-col text-start leading-tight">
              <span className="text-base font-semibold text-cream">
                زرین
              </span>

              <span className="text-[11px] text-gold-300/80">
                زیبایی ماندگار
              </span>
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-cream-dim/70">
            ما را در شبکه‌های اجتماعی دنبال کنید
          </p>

          {/* شبکه‌های اجتماعی */}
          <div className="mt-4 flex items-center justify-center gap-3">
            {[InstagramIcon, TelegramIcon, WhatsappIcon].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="شبکه اجتماعی"
                  className="
                    focus-ring
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-ink-line
                    text-cream-dim
                    transition-colors
                    hover:border-gold-500/60
                    hover:text-gold-300
                  "
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            )}
          </div>
        </div>

        {/* =====================================
            لینک‌های سریع
        ====================================== */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-cream">
            لینک‌های سریع
          </h4>

          <ul className="mt-4 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="
                    focus-ring
                    text-sm
                    text-cream-dim/70
                    transition-colors
                    hover:text-gold-300
                  "
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================
            خدمات مشتریان
        ====================================== */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-cream">
            خدمات مشتریان
          </h4>

          <ul className="mt-4 space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="
                    focus-ring
                    text-sm
                    text-cream-dim/70
                    transition-colors
                    hover:text-gold-300
                  "
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================
            تماس با ما
        ====================================== */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-cream">
            تماس با ما
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-cream-dim/70">
            <li className="text-center">
              تهران، خیابان طلافروشان
            </li>

            <li
              dir="ltr"
              className="text-center"
            >
              021-1234-5678
            </li>

            <li
              dir="ltr"
              className="text-center"
            >
              info@zarrin.ir
            </li>
          </ul>
        </div>
      </div>

      {/* =====================================
          کپی‌رایت
      ====================================== */}
      <div className="border-t border-ink-line">
        <div
          className="
            container-page
            flex
            flex-col-reverse
            items-center
            justify-center
            gap-4
            py-5
            sm:flex-row
            sm:justify-between
          "
        >
          <p className="text-center text-xs text-cream-dim/50">
            © زرین ۱۴۰۵. تمامی حقوق محفوظ است.
          </p>

          <a
            href="#home"
            aria-label="بازگشت به بالا"
            className="
              focus-ring
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-ink-line
              text-cream-dim
              transition-colors
              hover:border-gold-500/60
              hover:text-gold-300
            "
          >
            <ArrowUpIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}