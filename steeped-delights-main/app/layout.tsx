import type { Metadata } from "next";
import { Providers } from "./providers";
import "../index.css";

export const metadata: Metadata = {
  title: "Tealeaf store",
  description: "Explore our carefully curated selection of premium teas from around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
