// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Poppins Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Título personalizado */}
        <title>Deco31416 Boilerplate - Quick Product Integration</title>

        {/* SEO Metadata */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Deco31416 Boilerplate: A streamlined template for quick product integration and development testing. Discover more at deco31416.com."
        />
        <meta
          name="keywords"
          content="Deco31416, boilerplate, fast integration, blockchain development, DApp, rapid prototyping, Deco31416.com, template"
        />
        <meta name="author" content="Deco31416" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content="Deco31416 Boilerplate - Fast Product Integration & Development" />
        <meta
          property="og:description"
          content="A template designed to facilitate quick product integration and testing for blockchain and DApps. Learn more at deco31416.com."
        />
        <meta property="og:image" content="/img/og-image.png" />
        <meta property="og:url" content="https://deco31416.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for Twitter Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deco31416 Boilerplate" />
        <meta
          name="twitter:description"
          content="Boilerplate for fast integration and testing in DApp development. Discover more at deco31416.com."
        />
        <meta name="twitter:image" content="/img/twitter-card.png" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
            `,
          }}
        />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
