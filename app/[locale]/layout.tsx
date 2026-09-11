import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReliNova",
  description: "Engineering Reliability. Inspiring Excellence.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(); 

  // تحديد اتجاه الصفحة بناءً على اللغة (RTL للعربية، LTR للإنجليزية)
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} dir={dir}>
      {/* أضفنا هنا bg-[#0B1628] text-white لتصبح الخلفية داكنة على مستوى الموقع بالكامل */}
      <body className="min-h-full flex flex-col bg-[#0B1628] text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}