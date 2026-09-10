"use client";

import { useMemo, useState } from "react";
import { useCart } from "./CartContext";
import { useShop } from "./ShopContext";
import { CartIcon, HeartIcon } from "./icons";
import { JewelTile } from "./JewelTile";
import { categories, categoryIcon, formatToman, products, type Product } from "./products";

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <div className="group overflow-hidden rounded-xl border border-ink-line bg-ink-soft">
      <div className="relative">
        <JewelTile 
          image={product.image} 
          icon={categoryIcon[product.category]} 
          alt={product.name} 
          className="aspect-square w-full" 
        />
        <button
          aria-label="افزودن به علاقه‌مندی‌ها"
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className={`focus-ring absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
            liked
              ? "border-gold-500 bg-gold-500 text-ink"
              : "border-ink-line bg-ink/70 text-cream hover:border-gold-500/60"
          }`}
        >
          <HeartIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-[15px] font-medium text-cream">{product.name}</h3>
        <p className="mt-1.5 text-sm text-gold-300">
          {formatToman(product.price)} <span className="text-cream-dim/70">تومان</span>
        </p>
        <button
          onClick={() => addItem(product)}
          className="focus-ring mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-300"
        >
          <CartIcon className="h-4 w-4" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export function BestSellers() {
  const { query, activeCategory, setActiveCategory } = useShop();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesQuery = query.trim()
        ? p.name.toLowerCase().includes(query.trim().toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const activeLabel = categories.find((c) => c.key === activeCategory)?.label;

  return (
    <section id="shop" className="bg-ink py-16 lg:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="gold-underline inline-block text-2xl font-bold text-cream sm:text-3xl">
            {activeLabel ? `محصولات ${activeLabel}` : "محصولات پرفروش"}
          </h2>
          <p className="mt-6 text-sm text-cream-dim/70">
            {query
              ? `نتایج جستجو برای «${query}»`
              : "محبوب‌ترین انتخاب‌های مشتریان"}
          </p>
        </div>

        {(activeCategory || query) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {activeLabel && (
              <button
                onClick={() => setActiveCategory(null)}
                className="focus-ring flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-gold-500/10 px-3.5 py-1.5 text-xs text-gold-300 hover:bg-gold-500/20"
              >
                {activeLabel}
                <span aria-hidden>×</span>
              </button>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-cream-dim/60">
            محصولی با این مشخصات پیدا نشد.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}