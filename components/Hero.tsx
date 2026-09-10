"use client";

import { useEffect, useState } from "react";
import { ChevronIcon } from "./icons";

const slides = [
  {
    image: "/images/hero-1.jpg",
    eyebrow: "ZARRIN",
    title: "زرین؛ زیبایی ماندگار",
    text: "مجموعه‌ای از خاص‌ترین و زیباترین زیورآلات طلا و جواهر برای لحظات ارزشمند زندگی شما.",
  },
  {
    image: "/images/hero-2.jpg",
    eyebrow: "کالکشن جدید",
    title: "درخشش برای هر مناسبت",
    text: "زیورآلاتی خاص و چشم‌نواز که زیبایی و اصالت را در کنار یکدیگر به شما هدیه می‌دهند.",
  },
  {
    image: "/images/hero-3.jpg",
    eyebrow: "سفارشی‌سازی",
    title: "جواهری با امضای شما",
    text: "طرح دلخواهتان را با سنگ و حکاکی اختصاصی، به همراه طراحان زرین بسازید.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const currentSlide = slides[index];

  // اسلاید بعدی
  const nextSlide = () => {
    setIndex((current) => (current + 1) % slides.length);
  };

  // اسلاید قبلی
  const prevSlide = () => {
    setIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  // تغییر خودکار هر 5 ثانیه
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="
        relative isolate overflow-hidden
        border-b border-ink-line/70
        bg-ink

        h-[330px]
        sm:h-[360px]
        md:h-[390px]
        lg:h-[420px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGES
      ====================================================== */}

      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`
            absolute inset-0
            bg-cover bg-center bg-no-repeat
            transition-opacity duration-700 ease-in-out

            ${i === index ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        />
      ))}

      {/* =====================================================
          LIGHT OVERLAY
          سایه بسیار کمتر از قبل
      ====================================================== */}

      <div className="absolute inset-0 bg-black/10" />

      {/* =====================================================
          VERY LIGHT GRADIENT
          فقط برای خوانایی متن
      ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-l
          from-black/40
          via-black/10
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container-page relative z-10 flex h-full items-center justify-center px-12 sm:px-14">
        <div
          key={index}
          className="
            w-full
            max-w-[650px]
            text-center
          "
          style={{
            animation: "heroTextFade 0.6s ease-in-out",
          }}
        >
          {/* نام برند */}

          <p
            className="
              mb-2
              text-[10px]
              font-medium
              tracking-[0.3em]
              text-gold-300

              sm:mb-3
              sm:text-xs

              lg:text-sm
            "
          >
            {currentSlide.eyebrow}
          </p>

          {/* عنوان */}

          <h1
            className="
              text-2xl
              font-bold
              leading-[1.4]
              text-white

              sm:text-3xl

              md:text-4xl

              lg:text-5xl
            "
          >
            {currentSlide.title}
          </h1>

          {/* توضیحات */}

          <p
            className="
              mx-auto
              mt-2
              max-w-[560px]
              text-[11px]
              leading-5
              text-white/90

              sm:mt-3
              sm:text-xs
              sm:leading-6

              md:text-sm
              md:leading-7

              lg:text-[15px]
            "
          >
            {currentSlide.text}
          </p>

          {/* =====================================================
              BUTTON
          ====================================================== */}

          <a
            href="#shop"
            className="
              focus-ring
              mx-auto
              mt-4
              inline-flex
              h-9
              items-center
              gap-2
              rounded-full
              bg-gold-500
              px-6
              text-[11px]
              font-semibold
              text-ink
              shadow-lg
              transition-all
              duration-300

              hover:bg-gold-300
              hover:shadow-[0_0_25px_rgba(201,162,39,0.35)]

              sm:mt-5
              sm:h-10
              sm:px-7
              sm:text-xs

              md:h-11
              md:px-8
              md:text-sm
            "
          >
            مشاهده محصولات

            <ChevronIcon className="h-3 w-3 rotate-180 sm:h-4 sm:w-4" />
          </a>

          {/* =====================================================
              SLIDER DOTS
          ====================================================== */}

          <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`رفتن به اسلاید ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    i === index
                      ? "w-7 bg-gold-400"
                      : "w-1.5 bg-white/60 hover:bg-white"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          PREVIOUS BUTTON
      ====================================================== */}

      <button
        type="button"
        aria-label="اسلاید قبلی"
        onClick={prevSlide}
        className="
          focus-ring
          absolute
          left-3
          top-1/2
          z-30
          flex
          h-8
          w-8
          -translate-y-1/2
          rotate-180
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/20
          text-white
          backdrop-blur-sm
          transition-all
          duration-300

          hover:border-gold-400
          hover:bg-black/40
          hover:text-gold-300

          sm:left-5
          sm:h-10
          sm:w-10

          lg:left-7
          lg:h-11
          lg:w-11
        "
      >
        <ChevronIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
      </button>

      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}

      <button
        type="button"
        aria-label="اسلاید بعدی"
        onClick={nextSlide}
        className="
          focus-ring
          absolute
          right-3
          top-1/2
          z-30
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/20
          text-white
          backdrop-blur-sm
          transition-all
          duration-300

          hover:border-gold-400
          hover:bg-black/40
          hover:text-gold-300

          sm:right-5
          sm:h-10
          sm:w-10

          lg:right-7
          lg:h-11
          lg:w-11
        "
      >
        <ChevronIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
      </button>
    </section>
  );
}