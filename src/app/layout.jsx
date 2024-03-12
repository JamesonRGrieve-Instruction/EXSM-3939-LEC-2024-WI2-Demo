import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EXSM3939 Demo",
  description: "Demo code for EXSM3939 - React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
