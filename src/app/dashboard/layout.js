import "../globals.css";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "PPC | Dashboard",
  description: "Prime Preparation Center | Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  );
}
