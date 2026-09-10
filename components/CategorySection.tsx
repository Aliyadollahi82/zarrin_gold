"use client";

import { ChevronIcon, GemIcon } from "./icons";
import { JewelTile } from "./JewelTile";
import { categories, type CategoryKey } from "./products";
import { useShop } from "./ShopContext";

export function CategorySection() {
  const { activeCategory, setActiveCategory, setQuery } = useShop();

  const handleSelect = (key: CategoryKey | null) => {
    setQuery("");
    setActiveCategory(key);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="categories" className="bg-cream py-16 text-ink lg:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="gold-underline inline-block text-2xl font-bold sm:text-3xl">
            دسته‌بندی محصولات
          </h2>
          <p className="mt-6 text-sm text-ink/60">
            انتخابی برای هر سلیقه و هر لحظه
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => handleSelect(null)}
            className={`focus-ring group overflow-hidden rounded-xl border bg-ink text-start ${
              activeCategory === null ? "border-gold-500" : "border-ink-line"
            }`}
          >
            {/* به‌جای icon={<GemIcon />} عکس دلخواهتان را آدرس‌دهی کنید */}
<JewelTile image="/images/all.jpg" icon={<GemIcon />} alt="همه محصولات" className="aspect-square w-full" />
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-sm font-medium text-cream">همه</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-500/50 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-ink">
                <ChevronIcon className="h-3.5 w-3.5 rotate-180" />
              </span>
            </div>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleSelect(cat.key)}
              className={`focus-ring group overflow-hidden rounded-xl border bg-ink text-start ${
                activeCategory === cat.key ? "border-gold-500" : "border-ink-line"
              }`}
            >
              <JewelTile image={cat.image} icon={cat.icon} alt={cat.label} className="aspect-square w-full" />
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-sm font-medium text-cream">
                  {cat.label}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-500/50 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-ink">
                  <ChevronIcon className="h-3.5 w-3.5 rotate-180" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}