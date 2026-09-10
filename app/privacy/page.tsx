import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "حریم خصوصی | زرین",
};

const sections = [
  {
    title: "جمع‌آوری اطلاعات",
    text: "برای ثبت و ارسال سفارش، اطلاعاتی مانند نام، شماره تماس، آدرس و ایمیل شما دریافت می‌شود که صرفاً برای همین منظور استفاده می‌گردد.",
  },
  {
    title: "نگهداری اطلاعات پرداخت",
    text: "زرین هیچ‌گونه اطلاعات کارت بانکی مشتریان را ذخیره نمی‌کند؛ تمام پرداخت‌ها از طریق درگاه بانکی معتبر و رمزنگاری‌شده انجام می‌شود.",
  },
  {
    title: "به‌اشتراک‌گذاری اطلاعات",
    text: "اطلاعات شخصی شما با هیچ شخص یا سازمان ثالثی به‌جز شرکت‌های همکار در حمل و نقل سفارش، به‌اشتراک گذاشته نمی‌شود.",
  },
  {
    title: "کوکی‌ها",
    text: "این وب‌سایت از کوکی برای بهبود تجربه کاربری، مانند حفظ محتوای سبد خرید، استفاده می‌کند.",
  },
  {
    title: "تماس با ما",
    text: "برای هرگونه سوال درباره حریم خصوصی اطلاعات خود، می‌توانید از طریق صفحه تماس با ما با تیم پشتیبانی زرین در ارتباط باشید.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="حریم خصوصی"
          description="حفظ حریم خصوصی و امنیت اطلاعات مشتریان برای زرین در اولویت است."
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
