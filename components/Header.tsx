"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useCart } from "./CartContext";
import { useShop } from "./ShopContext";
import { formatToman } from "./products";
import {
  CartIcon,
  MenuIcon,
  SearchIcon,
} from "./icons";

const navLinks = [
  { href: "/#home", label: "خانه" },
  { href: "/#categories", label: "کالکشن‌ها" },
  { href: "/#shop", label: "فروشگاه" },
  { href: "/#about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header() {
  const {
    items,
    count,
    total,
    isOpen,
    setOpen,
    removeItem,
    increment,
    decrement,
  } = useCart();

  const { query, setQuery } = useShop();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const cartRef =
    useRef<HTMLDivElement>(null);

  // بستن سبد خرید با کلیک بیرون
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        cartRef.current &&
        !cartRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, [setOpen]);

  // رفتن به محصولات
  const goToShop = () => {
    document
      .getElementById("shop")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/70 bg-ink/95 backdrop-blur">
      {/* =========================================
          HEADER اصلی
      ========================================== */}

      <div className="container-page flex h-20 items-center justify-between gap-6">

        {/* لوگو */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
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

          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-wide text-cream">
              زرین
            </span>

            <span className="text-[11px] text-gold-300/80">
              زیبایی ماندگار
            </span>
          </span>
        </a>

        {/* منوی دسکتاپ */}
        <nav className="hidden items-center gap-8 text-sm text-cream-dim lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* بخش سمت راست */}
        <div className="flex items-center gap-3">

          {/* جستجوی دسکتاپ */}
          <div className="relative hidden md:block">
            <input
              type="search"
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  goToShop();
                }
              }}
              placeholder="جستجوی محصول..."
              className="focus-ring w-52 rounded-full border border-ink-line bg-ink-soft py-2 pe-4 ps-9 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold-500/60 lg:w-64"
            />

            <SearchIcon className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-dim/60" />
          </div>

          {/* =====================================
              سبد خرید
          ====================================== */}

          <div
            ref={cartRef}
            className="relative"
          >
            <button
              aria-label="سبد خرید"
              onClick={() =>
                setOpen(!isOpen)
              }
              className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-cream transition-colors hover:border-gold-500/60 hover:text-gold-300"
            >
              <CartIcon className="h-5 w-5" />

              {count > 0 && (
                <span className="absolute -top-1.5 -end-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-semibold text-ink">
                  {count}
                </span>
              )}
            </button>

            {/* =================================
                پنجره سبد خرید
            ================================== */}

            {isOpen && (
              <div className="absolute end-0 top-12 z-50 w-80 rounded-xl border border-ink-line bg-ink-soft p-4 shadow-2xl">

                <p className="mb-3 text-sm font-semibold text-cream">
                  سبد خرید
                </p>

                {/* سبد خالی */}
                {items.length === 0 ? (
                  <p className="py-6 text-center text-sm text-cream-dim/60">
                    سبد خرید شما خالی است
                  </p>
                ) : (
                  <>
                    {/* محصولات */}
                    <ul className="max-h-72 space-y-3 overflow-y-auto pe-1">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between gap-2 border-b border-ink-line pb-3 last:border-0 last:pb-0"
                        >
                          {/* اطلاعات محصول */}
                          <div className="min-w-0">
                            <p className="truncate text-sm text-cream">
                              {item.name}
                            </p>

                            <p className="mt-0.5 text-xs text-gold-300">
                              {formatToman(
                                item.price
                              )}{" "}
                              تومان
                            </p>
                          </div>

                          {/* کنترل تعداد */}
                          <div className="flex items-center gap-2">

                            <button
                              onClick={() =>
                                decrement(
                                  item.id
                                )
                              }
                              aria-label="کاهش تعداد"
                              className="focus-ring flex h-6 w-6 items-center justify-center rounded-full border border-ink-line text-cream hover:border-gold-500/60"
                            >
                              −
                            </button>

                            <span className="w-4 text-center text-xs text-cream">
                              {item.qty}
                            </span>

                            <button
                              onClick={() =>
                                increment(
                                  item.id
                                )
                              }
                              aria-label="افزایش تعداد"
                              className="focus-ring flex h-6 w-6 items-center justify-center rounded-full border border-ink-line text-cream hover:border-gold-500/60"
                            >
                              +
                            </button>

                            <button
                              onClick={() =>
                                removeItem(
                                  item.id
                                )
                              }
                              aria-label="حذف از سبد"
                              className="focus-ring ms-1 text-cream-dim/60 hover:text-gold-300"
                            >
                              ×
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* جمع کل */}
                    <div className="mt-4 flex items-center justify-between border-t border-ink-line pt-3">
                      <span className="text-sm text-cream-dim">
                        جمع کل
                      </span>

                      <span className="text-sm font-semibold text-gold-300">
                        {formatToman(total)} تومان
                      </span>
                    </div>

                    {/* =================================
                        دکمه تسویه حساب
                    ================================== */}

                    <Link
                      href="/checkout"
                      onClick={() =>
                        setOpen(false)
                      }
                      className="focus-ring mt-4 flex w-full items-center justify-center rounded-full bg-gold-500 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-300"
                    >
                      تسویه حساب
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* منوی موبایل */}
          <button
            aria-label="باز کردن منو"
            onClick={() =>
              setMenuOpen((v) => !v)
            }
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-cream lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* =========================================
          جستجوی موبایل
      ========================================== */}

      <div className="border-t border-ink-line px-5 py-3 md:hidden">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                goToShop();
              }
            }}
            placeholder="جستجوی محصول..."
            className="focus-ring w-full rounded-full border border-ink-line bg-ink-soft py-2 pe-4 ps-9 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold-500/60"
          />

          <SearchIcon className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-dim/60" />
        </div>
      </div>

      {/* =========================================
          منوی موبایل
      ========================================== */}

      {menuOpen && (
        <nav className="border-t border-ink-line bg-ink lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3 text-sm text-cream-dim">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="focus-ring rounded px-2 py-2.5 hover:text-gold-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}