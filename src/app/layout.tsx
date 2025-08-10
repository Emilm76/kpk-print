import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://kpk-print.ru'),
};

// Roboto, Open Sans
const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
