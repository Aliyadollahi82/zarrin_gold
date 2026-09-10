"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./products";

export type CartItem = Product & { qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const increment = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decrement = (id: string) => {
    setItems((prev) =>
      prev.flatMap((i) => {
        if (i.id !== id) return [i];
        if (i.qty <= 1) return [];
        return [{ ...i, qty: i.qty - 1 }];
      })
    );
  };

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, count, total, isOpen, setOpen, addItem, removeItem, increment, decrement }),
    [items, count, total, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
