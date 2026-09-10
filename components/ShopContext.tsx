"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CategoryKey } from "./products";

type ShopContextValue = {
  query: string;
  setQuery: (q: string) => void;
  activeCategory: CategoryKey | null;
  setActiveCategory: (c: CategoryKey | null) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);

  const value = useMemo(
    () => ({ query, setQuery, activeCategory, setActiveCategory }),
    [query, activeCategory]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
