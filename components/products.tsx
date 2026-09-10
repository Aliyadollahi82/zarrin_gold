import type { ReactNode } from "react";
import {
  BraceletIcon,
  EarringIcon,
  NecklaceIcon,
  RingIcon,
  SetIcon,
} from "./icons";

export type CategoryKey = "bracelet" | "earring" | "necklace" | "ring" | "set";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: CategoryKey;
  image: string;
};

export const categories: { key: CategoryKey; label: string; icon: ReactNode; image: string }[] = [
  { key: "bracelet", label: "دستبند", icon: <BraceletIcon />, image: "/images/bracelet.jpg" },
  { key: "earring", label: "گوشواره", icon: <EarringIcon />, image: "/images/earring.jpg" },
  { key: "necklace", label: "گردنبند", icon: <NecklaceIcon />, image: "/images/necklace.jpg" },
  { key: "ring", label: "انگشتر", icon: <RingIcon />, image: "/images/ring.jpg" },
  { key: "set", label: "سرویس طلا", icon: <SetIcon />, image: "/images/set.jpg" },
];

export const categoryIcon: Record<CategoryKey, ReactNode> = {
  bracelet: <BraceletIcon />,
  earring: <EarringIcon />,
  necklace: <NecklaceIcon />,
  ring: <RingIcon />,
  set: <SetIcon />,
};

export const products: Product[] = [
  { id: "b1", name: "دستبند زنجیری", price: 19800000, category: "bracelet", image: "/images/bracelet-1.jpg" },
  { id: "b2", name: "دستبند النگویی", price: 24500000, category: "bracelet", image: "/images/bracelet-2.jpg" },
  { id: "b3", name: "دستبند پروانه", price: 17200000, category: "bracelet", image: "/images/bracelet-3.jpg" },
  { id: "b4", name: "دستبند مروارید", price: 21300000, category: "bracelet", image: "/images/bracelet-4.jpg" },

  { id: "e1", name: "گوشواره کلاسیک", price: 21900000, category: "earring", image: "/images/earring-1.jpg" },
  { id: "e2", name: "گوشواره آویز", price: 18400000, category: "earring", image: "/images/earring-2.jpg" },
  { id: "e3", name: "گوشواره حلقه‌ای", price: 15900000, category: "earring", image: "/images/earring-3.jpg" },
  { id: "e4", name: "گوشواره سولیتر", price: 26700000, category: "earring", image: "/images/earring-4.jpg" },

  { id: "n1", name: "گردنبند گل رز", price: 28700000, category: "necklace", image: "/images/necklace-1.jpg" },
  { id: "n2", name: "گردنبند قلب", price: 23100000, category: "necklace", image: "/images/necklace-2.jpg" },
  { id: "n3", name: "گردنبند مدال", price: 31500000, category: "necklace", image: "/images/necklace-3.jpg" },
  { id: "n4", name: "گردنبند ظریف", price: 19600000, category: "necklace", image: "/images/necklace-4.jpg" },

  { id: "r1", name: "انگشتر الماس", price: 32500000, category: "ring", image: "/images/ring-1.jpg" },
  { id: "r2", name: "انگشتر سولیتر", price: 27800000, category: "ring", image: "/images/ring-2.jpg" },
  { id: "r3", name: "انگشتر نامزدی", price: 36900000, category: "ring", image: "/images/ring-3.jpg" },
  { id: "r4", name: "انگشتر ظریف", price: 15400000, category: "ring", image: "/images/ring-4.jpg" },

  { id: "s1", name: "سرویس طلا آفتاب", price: 68500000, category: "set", image: "/images/set-1.jpg" },
  { id: "s2", name: "سرویس طلا مروارید", price: 74200000, category: "set", image: "/images/set-2.jpg" },
  { id: "s3", name: "سرویس طلا سلطنتی", price: 89900000, category: "set", image: "/images/set-3.jpg" },
];

export function formatToman(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}