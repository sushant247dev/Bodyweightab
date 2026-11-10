import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bodyweightlab.com"),
  title: "BodyweightLab — Elite Calisthenics & Handstand Coaching",
  description: "Personalized skill acquisition for athletes who want to master advanced bodyweight movements: handstands, presses, levers, and loaded flexibility.",
  keywords: [
    "calisthenics coaching",
    "handstand coach",
    "press to handstand",
    "planche coaching",
    "front lever",
    "bodyweight strength",
    "calisthenics mobility"
  ],
  authors: [{ name: "BodyweightLab" }],
  creator: "BodyweightLab",
  openGraph: {
    title: "BodyweightLab — Elite Calisthenics & Handstand Coaching",
    description: "Strength is built. Control is earned. Personalized calisthenics coaching built around your body, your goals and your progress.",
    url: "https://bodyweightlab.com",
    siteName: "BodyweightLab",
    images: [
      {
        url: "/images/hero/hero-athlete.svg",
        width: 1200,
        height: 1600,
        alt: "BodyweightLab Calisthenics Mastery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BodyweightLab — Elite Calisthenics & Handstand Coaching",
    description: "Strength is built. Control is earned. Personalized calisthenics coaching built around your body, your goals and your progress.",
    images: ["/images/hero/hero-athlete.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="antialiased selection:bg-neutral-900 selection:text-neutral-50"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F9F8F5] text-[#111111] font-body flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
