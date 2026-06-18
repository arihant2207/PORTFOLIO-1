import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arihant Jain | AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Arihant Jain showcasing AI/ML projects, full-stack development skills, hackathons, and cloud expertise.",
  keywords: [
    "Arihant Jain",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Cloud Enthusiast",
    "Silver Oak University",
    "GeoVision",
    "Sentiment Analysis",
    "AWS",
    "Google Cloud",
    "NLP",
    "Machine Learning"
  ],
  authors: [{ name: "Arihant Jain" }],
  creator: "Arihant Jain",
  metadataBase: new URL("https://arihantjain.dev"),
  openGraph: {
    title: "Arihant Jain | AI/ML Engineer & Full-Stack Developer",
    description: "Portfolio of Arihant Jain showcasing AI/ML projects, full-stack development skills, hackathons, and cloud expertise.",
    url: "https://github.com/arihant2207",
    siteName: "Arihant Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arihant Jain | AI/ML Engineer & Full-Stack Developer",
    description: "Portfolio of Arihant Jain showcasing AI/ML projects, full-stack development skills, hackathons, and cloud expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#050505] text-white font-sans selection:bg-orange-500/20 selection:text-orange-200">
        <SmoothScroll>
          <div className="relative min-h-screen overflow-hidden bg-[#050505]">
            {/* Dot Grid Background Overlay */}
            <div className="absolute inset-0 dot-grid opacity-85 pointer-events-none z-0" />

            {/* Ambient Background Glow Blobs */}
            <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/5 blur-[130px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '5s' }} />
            <div className="absolute top-[35%] right-[15%] w-[400px] h-[400px] rounded-full bg-orange-600/3 blur-[110px] pointer-events-none" />
            
            {/* Vertical Guide Lines (Design System Blueprint Grid) */}
            <div className="absolute inset-y-0 left-[4%] w-[1px] bg-white/[0.12] pointer-events-none z-0" />
            <div className="absolute inset-y-0 left-[18%] xl:left-[calc(50%-640px)] w-[1px] bg-white/[0.14] pointer-events-none z-0" />
            <div className="absolute inset-y-0 right-[18%] xl:right-[calc(50%-640px)] w-[1px] bg-white/[0.14] pointer-events-none z-0" />
            <div className="absolute inset-y-0 right-[4%] w-[1px] bg-white/[0.12] pointer-events-none z-0" />

            {/* Page content */}
            <div className="relative z-10 flex flex-col min-h-screen">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
