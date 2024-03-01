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
export const metadata = {
  title: "FBA Prep, 3PL Warehouse Solutions for Amazon Sellers",
  url: "https://ppcwarehouses.com/",
  siteName: "PPC Warehouses",
  locale: "en_US",
  // type: "Service",
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
    manifest: "/manifest.json",
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
      <Script type="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Prime Preparation Center",
    "alternateName": ["Prime Preparation Center Warehouses"],
    "description": "The company PPC (Prime Preparation Center) Warehouses provides 3PL (Third-Party Logistics) services, which include:
Warehousing (receiving and storing your products at our warehouse in Las Vegas, USA)
Processing your products to meet the requirements of major American e-commerce platforms such as Amazon, eBay, Etsy, Lowe's, Walmart, Wayfair etc.
Labeling each unit
Kit assembly
Handling returns from all e-commerce platforms
Forwarding your products in manufacturer's packaging to FBA (Fulfillment by Amazon) and FBW (Fulfillment by Walmart)
Inspection of products received from your supplier at our warehouse
We have a personalized approach to each client, and all services and prices are negotiated individually according to the client's 
requirements. By relying on us, you will gain a reliable fulfillment partner in the United States.",
    "url": "https://ppcwarehouses.com/",
    "telephone": "+1(702)701-0078",
    "email": "info@ppcwarehouses.com",
    "serviceArea": {
      "@type": "Country",
      "name": "US"
    },
    "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehousing",
            "description": "Secure receiving and storage of your products in our state-of-the-art warehouse."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Processing",
            "description": "Tailored processing for leading American e-commerce platforms, ensuring products are perfectly prepared for sale."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Labeling",
            "description": "Meticulous labeling of each unit to comply with platform and regulatory standards."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kit Assembly",
            "description": "Customized assembly of product kits to meet diverse customer demands."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Returns Handling",
            "description": "Efficient management of returns from all e-commerce platforms, minimizing hassle and maximizing customer satisfaction."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Forwarding",
            "description": "Expert forwarding to FBA and FBW, ensuring a smooth transition from warehouse to customer."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Inspection",
            "description": "Thorough inspection of products to ensure only the highest quality items move forward in the supply chain."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FBA Preparation Services",
            "description": "Comprehensive preparation and forwarding services for Fulfillment by Amazon (FBA), ensuring products meet Amazon's stringent requirements."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FBM Preparation Services",
            "description": "Provides manuals, instructions, and information on specifications and requirements for sellers interested in using FBM to process and ship their products through the platform."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Arbitrage Support",
            "description": "Support for a business strategy where individuals or businesses purchase products at a lower price to sell them at a higher price on online marketplaces."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wholesale",
            "description": "Refers to the practice of purchasing goods or products in large quantities from manufacturers or distributors at a lower price per unit."
          },
          "areaServed": {
            "@type": "Country",
            "name": "US"
          }
        }
      ]
    }
`}
      </Script>

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
