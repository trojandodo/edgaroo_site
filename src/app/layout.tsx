import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// basePath is empty in dev/preview and "/<repo>" on GitHub Pages project sites.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Edgaroo — Getting Value from Data | AI, ML & Quantitative Research",
  description:
    "Edgaroo specializes in getting value from data. We use our expertise in artificial intelligence and machine learning to build smart systems for data science, quantitative research, algorithmic trading, and LLMs & agents.",
  keywords: [
    "machine learning",
    "data science",
    "algorithmic trading",
    "deep learning",
    "quantitative research",
    "LLMs",
    "large language models",
    "AI agents",
    "artificial intelligence",
    "Edgaroo",
  ],
  authors: [{ name: "Edgaroo Inc" }],
  icons: {
    icon: `${basePath}/edgaroo-logo.png`,
    apple: `${basePath}/edgaroo-logo.png`,
  },
  openGraph: {
    title: "Edgaroo — Getting Value from Data",
    description:
      "Innovation. Intelligence. Experience. Our expertise in artificial intelligence and machine learning helps your business make the right decisions.",
    url: "https://www.edgaroo.com/",
    siteName: "Edgaroo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgaroo — Getting Value from Data",
    description:
      "AI, machine learning and quantitative research for smarter decisions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
