import type { Metadata } from 'next';
import { Space_Grotesk, Noto_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import LayoutShell from '@/components/LayoutShell';

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const notoSans = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: "WeSellAll - Nigeria's Premium Marketplace",
  description: 'Post Free. Sell Fast. Cash out instantly.',
  keywords: ['marketplace', 'nigeria', 'buy and sell', 'classifieds'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-display overflow-x-hidden">
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
