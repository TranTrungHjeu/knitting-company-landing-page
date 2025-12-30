import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function IconLayout({ children }: { children: React.ReactNode }) {
  return children;
}
