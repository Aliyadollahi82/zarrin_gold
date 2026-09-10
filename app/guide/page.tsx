import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "راهنمای خرید | زرین",
};

const steps = [
  {
    title: "انتخاب محصول",
    text: "از میان دسته‌بندی‌های دستبند، گوشواره، گردنبند، انگشتر و سرویس طلا، محصول مورد نظرتان را با جزئیات کامل قیمت و عیار مشاهده کنید.",
  },
  {
    title: "افزودن به سبد خرید",
    text: "با زدن دکمه «افزودن به سبد خرید»، محصول به سبد شما اضافه می‌شود. تعداد هر آیتم را می‌توانید از داخل سبد خرید تغییر دهید.",
  },
  {
    title: "تکمیل اطلاعات ارسال",
    text: "در مرحله تسویه حساب، آدرس، شماره تماس و روش ارسال خود را وارد کنید.",
  },
  {
    title: "پرداخت امن",
    text: "پرداخت از طریق درگاه بانکی معتبر انجام می‌شود و اطلاعات کارت شما نزد زرین ذخیره نمی‌شود.",
  },
  {
    title: "ارسال و تحویل",
    text: "سفارش شما با بسته‌بندی مطمئن و بیمه حمل، همراه با فاکتور معتبر ارسال می‌شود.",
  },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="راهنمای خرید"
          description="خرید از زرین در چند مرحله ساده انجام می‌شود."
        />

        <section className="bg-ink py-14 lg:py-20">
          <div className="container-page max-w-2xl">
            <ol className="space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-sm font-semibold text-gold-300">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-cream">{step.title}</h2>
                    <p className="mt-1.5 text-sm leading-7 text-cream-dim/80">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
