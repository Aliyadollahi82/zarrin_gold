import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "شرایط بازگشت کالا | زرین",
};

const sections = [
  {
    title: "مهلت بازگشت کالا",
    text: "شما تا ۷ روز تقویمی پس از تحویل سفارش فرصت دارید تا در صورت عدم رضایت، درخواست بازگشت کالا ثبت کنید.",
  },
  {
    title: "شرایط پذیرش مرجوعی",
    text: "کالا باید بدون استفاده، با بسته‌بندی و شناسنامه اصلی و بدون هرگونه آسیب یا تغییر باشد. کالاهای سفارشی و حکاکی‌شده قابل بازگشت نیستند.",
  },
  {
    title: "فرآیند بازگشت وجه",
    text: "پس از دریافت و بررسی کالای مرجوعی، وجه پرداختی حداکثر تا ۷۲ ساعت کاری به همان روش پرداخت اولیه بازگردانده می‌شود.",
  },
  {
    title: "هزینه ارسال مرجوعی",
    text: "در صورتی که دلیل بازگشت، ایراد یا عدم تطابق از سمت زرین باشد، هزینه ارسال مرجوعی بر عهده زرین است؛ در غیر این صورت بر عهده مشتری خواهد بود.",
  },
];

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="شرایط بازگشت کالا"
          description="خیال شما در خرید از زرین راحت است؛ در صورت نارضایتی، فرآیند بازگشت کالا ساده و شفاف است."
        />

        <section className="bg-ink py-14 lg:py-20">
          <div className="container-page max-w-2xl space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-base font-semibold text-cream">{s.title}</h2>
                <p className="mt-2 text-sm leading-7 text-cream-dim/80">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
