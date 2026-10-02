import { Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Khushi Singh | Web Developer & Frontend Specialist",
  description:
    "I build modern websites, landing pages & digital experiences for businesses that are fast, responsive and user-friendly.",
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-page font-sans text-ink" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <WhatsAppFloat />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
