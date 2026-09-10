import {
  ChevronIcon,
  GiftIcon,
  InvoiceIcon,
  ShieldIcon,
  TruckIcon,
} from "./icons";

const features = [
  {
    icon: <ShieldIcon />,
    title: "تضمین اصالت",
    text: "همراه با شناسنامه معتبر",
  },
  {
    icon: <InvoiceIcon />,
    title: "فاکتور معتبر",
    text: "با ذکر عیار و وزن",
  },
  {
    icon: <TruckIcon />,
    title: "ارسال امن",
    text: "بسته‌بندی مطمئن",
  },
  {
    icon: <GiftIcon />,
    title: "بسته‌بندی لوکس",
    text: "مخصوص هدیه",
  },
];

export function PromoSection() {
  return (
    <section
      id="about"
      className="grid overflow-hidden border-y border-ink-line/70 lg:grid-cols-2"
    >
      {/* =========================
          کالکشن جدید
          در دسکتاپ سمت چپ
      ========================== */}
      <div className="relative min-h-[360px] overflow-hidden bg-ink lg:order-1 lg:min-h-[470px]">

        {/* تصویر پس‌زمینه */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/collection-banner.jpg")',
          }}
        />

        {/* سایه کمتر روی عکس */}
        <div className="absolute inset-0 bg-black/25" />

        {/* گرادیان ملایم برای خوانایی متن */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-black/20 to-transparent" />

        {/* محتوا */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 lg:px-14">
          <p className="text-xs tracking-[0.25em] text-gold-300">
            NEW COLLECTION
          </p>

          <h3 className="mt-3 text-3xl font-bold text-cream">
            کالکشن جدید
          </h3>

          <p className="mt-3 max-w-xs text-sm text-cream-dim">
            ترکیبی از اصالت و مدرنیته
          </p>

          <a
            href="#shop"
            className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/70 px-5 py-2 text-xs text-cream transition hover:bg-gold-500 hover:text-ink"
          >
            مشاهده کالکشن

            <ChevronIcon className="h-4 w-4 rotate-180" />
          </a>
        </div>
      </div>

      {/* =========================
          چرا زرین؟
          در دسکتاپ سمت راست
      ========================== */}
      <div className="bg-[#E8DFCF] px-8 py-12 lg:order-2 lg:px-14">
        <div className="text-center">
          <h3 className="gold-underline text-2xl font-bold text-black">
            چرا زرین؟
          </h3>

          <p className="mt-4 text-sm text-ink/60">
            اعتماد شما، ارزشمندترین دارایی ماست
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center "
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold-300 [&>svg]:h-6 [&>svg]:w-6">
                {f.icon}
              </span>

              <p className="mt-3 text-sm font-bold text-ink">
                {f.title}
              </p>

              <p className="mt-1 text-xs text-ink/55">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}