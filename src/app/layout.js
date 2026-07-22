import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "../../node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Prayana Holidays",
  description: "Thoughtfully planned holidays and memorable journeys.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
