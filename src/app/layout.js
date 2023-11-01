import React from "react";
import ChatButton from "@/components/ChatButton/ChatButton";
import "./globals.css";
import { Inter, Red_Hat_Display } from "next/font/google";

import Script from "next/script";
import { Footer } from "@/components";

const GTM_ID = "GTM-K8JG7N8N";
const FB_PIXEL_ID = 276016891965827;
const inter = Inter({ subsets: ["latin"] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "PPC",
  description: "Prime Preparation Center",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/android-chrome-192x192.png"],
  },
  manifest: "/site.webmanifest",
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

      <body className={redHatDisplay.className}>
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
      </body>
    </html>
  );
}
