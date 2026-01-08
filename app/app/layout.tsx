import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sababa",
    template: "%s | King Chicken",
  },
  description:
    "Fresh, crispy chicken made to order. Order online for fast pickup at King Chicken.",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://kingchicken.com"), // update later
  openGraph: {
    title: "King Chicken",
    description:
      "Order fresh, crispy chicken online for fast pickup at King Chicken.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${headingFont.variable}
          ${bodyFont.variable}
          min-h-screen
          bg-app
          text-app
          antialiased
        `}
      >
        {/* Page Wrapper */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
