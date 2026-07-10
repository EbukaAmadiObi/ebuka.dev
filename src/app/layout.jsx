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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ebuka.dev/#website",
      url: "https://ebuka.dev",
      name: "ebuka.dev",
      description:
        "Ebuka Amadi-Obi and his cool stuff. Portfolio, projects and technical writing.",
      publisher: { "@id": "https://ebuka.dev/#person" },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": "https://ebuka.dev/#person",
      name: "Ebuka Amadi-Obi",
      url: "https://ebuka.dev",
      image: "https://ebuka.dev/ogImage.png",
      jobTitle: "Software Engineer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University College Dublin",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressCountry: "IE",
      },
      sameAs: [
        "https://github.com/EbukaAmadiObi",
        "https://www.linkedin.com/in/ebuka-amadi-obi/",
        "https://www.instagram.com/ebuka.mp4/",
        "https://x.com/ebuka_dot_dev",
        "https://www.tiktok.com/@ebuka.mp4",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
