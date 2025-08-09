import { Roboto } from 'next/font/google';
import './globals.scss';

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
