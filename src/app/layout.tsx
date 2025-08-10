import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive"></Script>
        <script type="text/javascript">
          {`
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103654771', 'ym');

    ym(103654771, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
    `}
        </script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103654771"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>

      <body className={roboto.className}>{children}</body>
    </html>
  );
}
