import ChatButton from "@/components/ChatButton/ChatButton";
import "./globals.css";
import { Inter, Red_Hat_Display } from "next/font/google";

import Script from "next/script";

const GTM_ID = "GTM-KB97P7BJ";
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

      <body className={redHatDisplay.className}>
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
