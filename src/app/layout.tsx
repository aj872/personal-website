import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharv Jayprakash | Portfolio",
  description: "Personal portfolio website of Atharv Jayprakash — software engineer, builder, and creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
