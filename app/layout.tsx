import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { ShopProvider } from "@/components/ShopContext";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "زرین | زیبایی ماندگار",
  description:
    "زرین؛ فروشگاه آنلاین طلا و جواهرات. خاص‌ترین و زیباترین زیورآلات طلا با تضمین اصالت و ارسال امن.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <ShopProvider>
          <CartProvider>{children}</CartProvider>
        </ShopProvider>
      </body>
    </html>
  );
}
