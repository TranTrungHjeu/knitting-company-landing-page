import type { Metadata } from "next";
import { Be_Vietnam_Pro, Merriweather } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DỆT KIM LIÊN VIỆT",
  description:
    "Chuyên sản xuất, gia công các sản phẩm dệt kim chất lượng cao, uy tín tại TP. Hồ Chí Minh.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnamPro.variable} ${merriweather.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-be-vietnam-pro), sans-serif" }}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
