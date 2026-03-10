import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bar Ready LV - Professional Mock Health Inspections for Las Vegas Bars",
  description: "Pass your health inspection every time. Expert mock health & safety inspections for Las Vegas bars. Get detailed feedback before the real inspection.",
  keywords: "health inspection, bar inspection, Las Vegas, mock inspection, health department, bar safety, food safety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
