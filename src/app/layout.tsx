import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reach Institute Thinktank",
  description: "Reach Institute Thinktank の公式Webサイト",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
