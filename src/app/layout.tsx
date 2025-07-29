import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVE Online - Universe Awaits",
  description: "Experience the ultimate sci-fi MMO. Explore a vast universe, engage in epic space battles, and build your empire in EVE Online.",
  keywords: ["EVE Online", "MMO", "space", "sci-fi", "gaming", "spaceship", "universe"],
  authors: [{ name: "EVE Online Team" }],
  openGraph: {
    title: "EVE Online - Universe Awaits",
    description: "Experience the ultimate sci-fi MMO. Explore a vast universe and build your empire.",
    url: "https://eveonline.com",
    siteName: "EVE Online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVE Online - Universe Awaits",
    description: "Experience the ultimate sci-fi MMO.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
