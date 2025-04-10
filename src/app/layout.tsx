import type { Metadata } from "next";
import { Montserrat, Forum, Six_Caps} from "next/font/google";
import "./globals.css";
import ReactLenis from 'lenis/react'

// Move font declarations inside
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SixCaps = Six_Caps ({
  subsets: ['latin'],
  variable: '--SixCaps',
  display: 'swap',
  weight: "400"
});

const forum = Forum({
  subsets: ['latin'],
  variable: '--font-forum',
  display: 'swap',
  weight: "400"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.athan.my.id'),
  title: {
    default: "Fathan Syahputra Wali - Ilustrator & Artist Portfolio",
    template: "%s | Fathan Syahputra Wali"
  },
  description: "Student portfolio of Fathan Syahputra Wali, a Visual Communication Design specialist creating innovative comics and graphic designs. Explore my creative work and design projects.",
  keywords: ["comic design", "graphic design", "visual communication", "student portfolio", "DKV student", "Indonesian designer"],
  authors: [{ name: "Fathan Syahputra Wali" }],
  creator: "Fathan Syahputra Wali",
  publisher: "Fathan Syahputra Wali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Fathan Syahputra Wali Portfolio',
    title: 'Fathan Syahputra - Comics & Graphic Design Portfolio',
    description: 'Explore the creative work of an emerging Visual Communication Design talent',
    images: [{
      url: '/assets/Projects/Pj5.jpg',
      width: 1200,
      height: 630,
      alt: 'Fathan Syahputra Wali Portfolio Preview'
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    creator: '@fathan_syaputra',

    title: {
      default: "Fathan Syahputra Wali - Ilustrator & Artist Portfolio",
      template: "%s | Fathan Syahputra Wali"
    },
    description:
    "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
 
  images: [
    {
      url: "/assets/Projects/Pj5.jpg",
      width: 1000,
      height: 1200,
    },
  ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${montserrat.variable} ${forum.variable} ${SixCaps.variable} font-montserrat dark antialiased`}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
