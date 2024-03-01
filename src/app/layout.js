import React from "react";
import "./globals.css";
import { Inter, Red_Hat_Display } from "next/font/google";

import Script from "next/script";
import { Footer } from "@/components";
import SessionProvider from "@/components/SessionProvider/SessionProvider";

const GTM_ID = "GTM-K8JG7N8N";
const FB_PIXEL_ID = 276016891965827;
const inter = Inter({ subsets: ["latin"] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

// export const metadata = {
//   title: "FBA Prep, 3PL Warehouse Solutions for Amazon Sellers",
//   // title: "FBA Prep, 3PL Warehouse Solutions",
//   description: `The company PPC (Prime Preparation Center) Warehouses provides 3PL (Third-Party Logistics) services, which include:
// Warehousing (receiving and storing your products at our warehouse in Las Vegas, USA)
// Processing your products to meet the requirements of major American e-commerce platforms such as Amazon, eBay, Etsy, Lowe's, Walmart, Wayfair etc.
// Labeling each unit
// Kit assembly
// Handling returns from all e-commerce platforms
// Forwarding your products in manufacturer's packaging to FBA (Fulfillment by Amazon) and FBW (Fulfillment by Walmart)
// Inspection of products received from your supplier at our warehouse
// We have a personalized approach to each client, and all services and prices are negotiated individually according to the client's requirements. By relying on us, you will gain a reliable fulfillment partner in the United States.`,
//   icons: {
//     icon: ["/favicon.ico"],
//     apple: ["/apple-touch-icon.png"],
//     shortcut: ["/android-chrome-192x192.png"],
//   },
//   images: [
//     {
//       url: "/favicon-32x32.png",
//       width: 800,
//       height: 600,
//     },
//     {
//       url: "/favicon-32x32.png",
//       width: 1800,
//       height: 1600,
//       alt: "ppcwarehouses",
//     },
//   ],
//   name: "Vasya",
//   locale: "en_US",
//   type: "website",
//   manifest: "/site.webmanifest",
// };

// const jsonLdData = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   name: "PPC Warehouses",
//   alternateName: ["PPC", "Prime Preparation Center Warehouses"],
//   url: "https://ppcwarehouses.com/",
// };
const jsonLd = {
  "@type": "WebSite",
  name: "PPC Warehouses",
  alternateName: ["PPC", "Prime Preparation Center Warehouses"],
  url: "https://ppcwarehouses.com/",
};
export const metadata = {
  title: "FBA Prep, 3PL Warehouse Solutions for Amazon Sellers",
  url: "https://ppcwarehouses.com/",
  siteName: "PPC Warehouses",
  locale: "en_US",
  type: "website",
  description: `The company PPC (Prime Preparation Center) Warehouses provides 3PL (Third-Party Logistics) services, which include:
Warehousing (receiving and storing your products at our warehouse in Las Vegas, USA)
Processing your products to meet the requirements of major American e-commerce platforms such as Amazon, eBay, Etsy, Lowe's, Walmart, Wayfair etc.
Labeling each unit
Kit assembly
Handling returns from all e-commerce platforms
Forwarding your products in manufacturer's packaging to FBA (Fulfillment by Amazon) and FBW (Fulfillment by Walmart)
Inspection of products received from your supplier at our warehouse
We have a personalized approach to each client, and all services and prices are negotiated individually according to the client's requirements. By relying on us, you will gain a reliable fulfillment partner in the United States.`,
  manifest: "/site.webmanifest",
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL,
  openGraph: {
    title: "FBA Prep, 3PL Warehouse Solutions for Amazon Sellers",
    description: `The company PPC (Prime Preparation Center) Warehouses provides 3PL (Third-Party Logistics) services, which include:
Warehousing (receiving and storing your products at our warehouse in Las Vegas, USA)
Processing your products to meet the requirements of major American e-commerce platforms such as Amazon, eBay, Etsy, Lowe's, Walmart, Wayfair etc.
Labeling each unit
Kit assembly
Handling returns from all e-commerce platforms
Forwarding your products in manufacturer's packaging to FBA (Fulfillment by Amazon) and FBW (Fulfillment by Walmart)
Inspection of products received from your supplier at our warehouse
We have a personalized approach to each client, and all services and prices are negotiated individually according to the client's requirements. By relying on us, you will gain a reliable fulfillment partner in the United States.`,
    url: "https://ppcwarehouses.com",
    siteName: "PPC Warehouses",

    icons: {
      icon: ["/favicon.ico"],
      apple: ["/apple-touch-icon.png"],
      shortcut: ["/android-chrome-192x192.png"],
    },
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 800,
        height: 600,
        alt: "ppcwarehouses",
      },
      {
        url: "/android-chrome-512x512.png",
        width: 1800,
        height: 1600,
        alt: "ppcwarehouses",
      },
    ],
    locale: "en_US",
    type: "website",
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></Script>

      <Script id="fb-pixel" strategy="afterInteractive">
        {`           
         !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
            `}
      </Script>

      <Script type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <body className={redHatDisplay.className}>
        <SessionProvider>
          <div id="modal-root"></div>
          {children}
          <Footer />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
          />`,
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
