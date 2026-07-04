import Script from "next/script";
import "../index.css";
import { Providers } from "./providers";

export const metadata = {
  metadataBase: new URL("https://ebuka.dev"),
  title: "ebuka.dev",
  description:
    "Ebuka Amadi-Obi and his cool stuff. Portfolio, projects and technical writing.",
  keywords: [
    "Ebuka Amadi-Obi",
    "software engineer",
    "portfolio",
    "web developer",
    "projects",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    title: "ebuka.dev",
    capable: true,
    statusBarStyle: "black",
  },
  openGraph: {
    title: "ebuka.dev",
    description:
      "Ebuka Amadi-Obi and his cool stuff. Portfolio, projects and technical writing.",
    type: "website",
    url: "/",
    images: ["/ogImage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ebuka.dev",
    description:
      "Ebuka Amadi-Obi and his cool stuff. Portfolio, projects and technical writing.",
    images: ["/ogImage.png"],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844656534810081"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
