import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "سوالات متداول | زرین",
};

const faqs = [
  {
    q: "آیا محصولات زرین دارای گواهی اصالت هستند؟",
    a: "بله، تمام محصولات به همراه شناسنامه معتبر با ذکر عیار و وزن ارسال می‌شوند.",
  },
  {
    q: "زمان ارسال سفارش چقدر است؟",
    a: "سفارش‌ها معمولاً بین ۲ تا ۵ روز کاری، بسته به شهر مقصد، تحویل داده می‌شوند.",
  },
  {
    q: "آیا امکان بازگشت کالا وجود دارد؟",
    a: "بله، تا ۷ روز پس از تحویل و در صورت سالم بودن کالا و بسته‌بندی، امکان بازگشت وجود دارد. برای جزئیات صفحه شرایط بازگشت کالا را ببینید.",
  },
  {
    q: "روش‌های پرداخت چیست؟",
    a: "پرداخت آنلاین از طریق درگاه بانکی معتبر و پرداخت در محل (در برخی شهرها) امکان‌پذیر است.",
  },
  {
    q: "آیا می‌توانم طرح سفارشی سفارش دهم؟",
    a: "بله، تیم طراحی زرین امکان ساخت جواهر با طرح و حکاکی اختصاصی را فراهم می‌کند. از طریق صفحه تماس با ما درخواست خود را ثبت کنید.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="سوالات متداول"
          description="پاسخ سوالات پرتکرار درباره خرید، ارسال و بازگشت کالا."
        />

        <section className="bg-ink py-14 lg:py-20">
          <div className="container-page max-w-2xl space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-ink-line bg-ink-soft px-5 py-4 open:border-gold-500/50"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-cream">
                  {item.q}
                  <span className="shrink-0 text-gold-300 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-cream-dim/80">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
