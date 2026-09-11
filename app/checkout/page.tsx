"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useCart } from "@/components/CartContext";
import { formatToman } from "@/components/products";

export default function CheckoutPage() {
  const { items, total } = useCart();

  const [customerName, setCustomerName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [address, setAddress] =
    useState("");

  // ==========================================
  // شماره فاکتور
  // ==========================================

  const invoiceNumber = useMemo(() => {
    const now = new Date();

    const year = now.getFullYear();

    const month = String(
      now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      now.getDate()
    ).padStart(2, "0");

    const random = Math.floor(
      1000 + Math.random() * 9000
    );

    return `ZAR-${year}${month}${day}-${random}`;
  }, []);

  // ==========================================
  // تاریخ
  // ==========================================

  const invoiceDate = useMemo(() => {
    return new Intl.DateTimeFormat(
      "fa-IR",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    ).format(new Date());
  }, []);

  // ==========================================
  // هزینه ارسال
  // سفارش بالای 50 میلیون رایگان
  // ==========================================

  const shippingCost =
    total >= 50000000
      ? 0
      : 250000;

  // ==========================================
  // مبلغ نهایی
  // ==========================================

  const finalTotal =
    total + shippingCost;

  // ==========================================
  // اگر سبد خالی باشد
  // ==========================================

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-ink px-5 py-16 text-cream">

        <div className="mx-auto max-w-xl rounded-2xl border border-ink-line bg-ink-soft p-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 text-2xl text-gold-300">
            🛒
          </div>

          <h1 className="mt-5 text-2xl font-bold">
            سبد خرید شما خالی است
          </h1>

          <p className="mt-3 text-sm text-cream-dim/70">
            برای مشاهده فاکتور ابتدا
            محصولی را به سبد خرید اضافه
            کنید.
          </p>

          <Link
            href="/#shop"
            className="mt-7 inline-flex rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-300"
          >
            بازگشت به فروشگاه
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl">

        {/* ======================================
            عنوان صفحه
        ======================================= */}

        <div className="mb-8 text-center">

          <p className="text-xs tracking-[0.3em] text-gold-300">
            ZARRIN
          </p>

          <h1 className="mt-2 text-3xl font-bold text-cream">
            تسویه حساب
          </h1>

          <p className="mt-3 text-sm text-cream-dim/70">
            اطلاعات سفارش خود را بررسی
            و تکمیل کنید
          </p>

        </div>

        {/* ======================================
            اطلاعات گیرنده
        ======================================= */}

        <div className="mb-6 rounded-2xl border border-ink-line bg-ink-soft p-5 sm:p-7">

          <h2 className="text-lg font-bold text-cream">
            اطلاعات گیرنده
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {/* نام */}
            <div>
              <label className="mb-2 block text-xs text-cream-dim">
                نام و نام خانوادگی
              </label>

              <input
                type="text"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(
                    e.target.value
                  )
                }
                placeholder="نام و نام خانوادگی"
                className="focus-ring w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/40 focus:border-gold-500/60"
              />
            </div>

            {/* تلفن */}
            <div>
              <label className="mb-2 block text-xs text-cream-dim">
                شماره تماس
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="09123456789"
                dir="ltr"
                className="focus-ring w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/40 focus:border-gold-500/60"
              />
            </div>

            {/* آدرس */}
            <div className="md:col-span-2">

              <label className="mb-2 block text-xs text-cream-dim">
                آدرس کامل
              </label>

              <textarea
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
                placeholder="استان، شهر، خیابان، کوچه، پلاک..."
                rows={3}
                className="focus-ring w-full resize-none rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/40 focus:border-gold-500/60"
              />

            </div>
          </div>
        </div>

        {/* ======================================
            فاکتور
        ======================================= */}

        <div
          id="invoice"
          className="rounded-2xl border border-ink-line bg-[#F4EEDF] text-ink shadow-2xl"
        >

          {/* ====================================
              سربرگ
          ===================================== */}

          <div className="border-b border-ink/10 p-5 sm:p-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* لوگو */}
              <div className="flex items-center gap-3">

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/70 text-gold-600">

                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M12 2l3 4H9l3-4z" />
                    <path d="M4 8l8 13 8-13H4z" />
                    <path d="M4 8h16M9 8l3 5 3-5" />
                  </svg>

                </span>

                <div>
                  <h2 className="text-xl font-bold">
                    زرین
                  </h2>

                  <p className="text-xs text-ink/55">
                    زیبایی ماندگار
                  </p>
                </div>

              </div>

              {/* اطلاعات فاکتور */}
              <div className="text-right">

                <p className="text-lg font-bold">
                  فاکتور فروش
                </p>

                <p className="mt-1 text-xs text-ink/60">
                  شماره فاکتور:{" "}
                  <span dir="ltr">
                    {invoiceNumber}
                  </span>
                </p>

                <p className="mt-1 text-xs text-ink/60">
                  تاریخ: {invoiceDate}
                </p>

              </div>

            </div>
          </div>

          {/* ====================================
              اطلاعات خریدار
          ===================================== */}

          <div className="grid gap-4 border-b border-ink/10 p-5 sm:grid-cols-3 sm:p-8">

            <div>
              <p className="text-xs text-ink/50">
                خریدار
              </p>

              <p className="mt-1 text-sm font-semibold">
                {customerName ||
                  "ثبت نشده"}
              </p>
            </div>

            <div>
              <p className="text-xs text-ink/50">
                شماره تماس
              </p>

              <p
                dir="ltr"
                className="mt-1 text-sm font-semibold"
              >
                {phone ||
                  "ثبت نشده"}
              </p>
            </div>

            <div>
              <p className="text-xs text-ink/50">
                وضعیت سفارش
              </p>

              <p className="mt-1 text-sm font-semibold text-gold-700">
                در انتظار پرداخت
              </p>
            </div>

            <div className="sm:col-span-3">

              <p className="text-xs text-ink/50">
                آدرس تحویل
              </p>

              <p className="mt-1 text-sm leading-6">
                {address ||
                  "ثبت نشده"}
              </p>

            </div>
          </div>

          {/* ====================================
              جدول محصولات
          ===================================== */}

          <div className="overflow-x-auto p-5 sm:p-8">

            <table className="w-full min-w-[650px] border-collapse text-sm">

              <thead>

                <tr className="border-b border-ink/15 text-xs text-ink/60">

                  <th className="px-3 py-3 text-right">
                    محصول
                  </th>

                  <th className="px-3 py-3 text-center">
                    تعداد
                  </th>

                  <th className="px-3 py-3 text-center">
                    قیمت واحد
                  </th>

                  <th className="px-3 py-3 text-left">
                    مبلغ
                  </th>

                </tr>

              </thead>

              <tbody>

                {items.map((item) => {

                  const itemTotal =
                    item.price * item.qty;

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-ink/10 last:border-0"
                    >

                      {/* محصول */}
                      <td className="px-3 py-4">

                        <div className="font-semibold">
                          {item.name}
                        </div>

                        <div className="mt-1 text-xs text-ink/50">
                          کد محصول:{" "}
                          {item.id}
                        </div>

                      </td>

                      {/* تعداد */}
                      <td className="px-3 py-4 text-center">
                        {item.qty}
                      </td>

                      {/* قیمت واحد */}
                      <td className="px-3 py-4 text-center">

                        {formatToman(
                          item.price
                        )}

                        <span className="mr-1 text-xs text-ink/50">
                          تومان
                        </span>

                      </td>

                      {/* مبلغ */}
                      <td className="px-3 py-4 text-left font-semibold">

                        {formatToman(
                          itemTotal
                        )}

                        <span className="mr-1 text-xs font-normal text-ink/50">
                          تومان
                        </span>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

          {/* ====================================
              جمع فاکتور
          ===================================== */}

          <div className="border-t border-ink/10 p-5 sm:p-8">

            <div className="mr-auto w-full max-w-md space-y-4">

              {/* جمع محصولات */}
              <div className="flex items-center justify-between text-sm">

                <span className="text-ink/60">
                  جمع محصولات
                </span>

                <span className="font-semibold">
                  {formatToman(total)} تومان
                </span>

              </div>

              {/* ارسال */}
              <div className="flex items-center justify-between text-sm">

                <span className="text-ink/60">
                  هزینه ارسال
                </span>

                <span className="font-semibold">

                  {shippingCost === 0
                    ? "رایگان"
                    : `${formatToman(
                        shippingCost
                      )} تومان`}

                </span>

              </div>

              {/* مبلغ نهایی */}
              <div className="border-t border-ink/15 pt-4">

                <div className="flex items-center justify-between">

                  <span className="text-base font-bold">
                    مبلغ قابل پرداخت
                  </span>

                  <span className="text-lg font-bold text-gold-700">
                    {formatToman(
                      finalTotal
                    )}{" "}
                    تومان
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* ====================================
              توضیحات
          ===================================== */}

          <div className="border-t border-ink/10 px-5 py-5 sm:px-8">

            <p className="text-xs leading-6 text-ink/55">
              این فاکتور به‌صورت سیستمی
              بر اساس محصولات موجود در
              سبد خرید صادر شده است.
              قیمت‌ها به تومان محاسبه
              شده‌اند و هزینه ارسال در
              مبلغ نهایی لحاظ شده است.
            </p>

          </div>

        </div>

        {/* ======================================
            دکمه‌های پایین فاکتور
        ======================================= */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">

          {/* چاپ فاکتور */}
          <button
            type="button"
            onClick={() =>
              window.print()
            }
            className="focus-ring rounded-full border border-gold-500/60 px-7 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500 hover:text-ink"
          >
            چاپ فاکتور
          </button>

          {/* ادامه خرید */}
          <Link
            href="/#shop"
            className="focus-ring rounded-full bg-gold-500 px-7 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-gold-300"
          >
            ادامه خرید
          </Link>

        </div>

      </div>
    </main>
  );
}