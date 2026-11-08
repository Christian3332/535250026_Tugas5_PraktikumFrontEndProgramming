import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaCare - Laundry Antar Jemput",
  description: "LaCare, laundry kiloan murah, bersih, dan wangi dengan layanan antar jemput.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
