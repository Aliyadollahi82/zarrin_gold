"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "./products";

export type CartItem = Product & {
  qty: number;
};

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

const CART_STORAGE_KEY = "zarrin-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  // مشخص می‌کند اطلاعات سبد از localStorage خوانده شده یا نه
  const [isHydrated, setIsHydrated] = useState(false);

  // خواندن سبد خرید هنگام باز شدن سایت
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setItems(parsedCart);
        }
      }
    } catch (error) {
      console.error("خطا در خواندن سبد خرید:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // ذخیره سبد خرید
  // تا قبل از خواندن localStorage چیزی ذخیره نمی‌کنیم
  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error("خطا در ذخیره سبد خرید:", error);
    }
  }, [items, isHydrated]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
        },
      ];
    });

    // سبد خرید خودکار باز نمی‌شود
  };

  const removeItem = (id: string) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const increment = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  };

  const decrement = (id: string) => {
    setItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) {
          return [item];
        }

        if (item.qty <= 1) {
          return [];
        }

        return [
          {
            ...item,
            qty: item.qty - 1,
          },
        ];
      })
    );
  };

  const count = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.qty,
        0
      ),
    [items]
  );

  const total = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.price * item.qty,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      count,
      total,
      isOpen,
      setOpen,
      addItem,
      removeItem,
      increment,
      decrement,
    }),
    [items, count, total, isOpen]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return ctx;
}