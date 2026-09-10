import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "تماس با ما | زرین",
};

const info = [
  { label: "آدرس", value: "تهران، خیابان طلافروشان، پلاک ۱۲" },
  { label: "تلفن", value: "021-1234-5678" },
  { label: "ایمیل", value: "info@zarrin.ir" },
  { label: "ساعات کاری", value: "شنبه تا پنجشنبه، ۹ تا ۲۰" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="تماس با ما"
          description="هر سوالی درباره محصولات، سفارش یا خدمات پس از فروش دارید، تیم زرین پاسخگوی شماست."
        />

        <section className="bg-ink py-14 lg:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="gold-underline inline-block text-xl font-bold text-cream">
                اطلاعات تماس
              </h2>
              <dl className="mt-8 space-y-5">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 border-b border-ink-line pb-4">
                    <dt className="text-sm text-cream-dim/70">{item.label}</dt>
                    <dd className="text-sm text-cream" dir={item.label === "تلفن" || item.label === "ایمیل" ? "ltr" : undefined}>
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <form className="rounded-xl border border-ink-line bg-ink-soft p-6">
              <h2 className="gold-underline inline-block text-xl font-bold text-cream">
                ارسال پیام
              </h2>
              <div className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-cream-dim/70">
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="نام شما"
                    className="focus-ring w-full rounded-lg border border-ink-line bg-ink px-4 py-2.5 text-sm text-cream placeholder:text-cream-dim/40 focus:border-gold-500/60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-cream-dim/70">
                    ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    dir="ltr"
                    className="focus-ring w-full rounded-lg border border-ink-line bg-ink px-4 py-2.5 text-sm text-cream placeholder:text-cream-dim/40 focus:border-gold-500/60"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs text-cream-dim/70">
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="پیام خود را بنویسید..."
                    className="focus-ring w-full resize-none rounded-lg border border-ink-line bg-ink px-4 py-2.5 text-sm text-cream placeholder:text-cream-dim/40 focus:border-gold-500/60"
                  />
                </div>
                <button
                  type="button"
                  className="focus-ring w-full rounded-full bg-gold-500 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-300"
                >
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
