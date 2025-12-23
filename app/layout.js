import "./globals.css";

export const metadata = {
  title: "Sameer | Full Stack Developer Portfolio",
  description:
    "Hi, I'm Sameer — a passionate Full Stack Developer crafting elegant, high-performance web applications using Next.js, React, and Tailwind CSS.",
  keywords: [
    "Sameer",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Sameer", url: "https://your-portfolio.vercel.app" }],
  metadataBase: new URL("https://your-portfolio.vercel.app"), // ✅ Update after deployment
  openGraph: {
    title: "Sameer | Full Stack Developer Portfolio",
    description:
      "Explore Sameer’s modern, responsive web portfolio — powered by Next.js 14, Tailwind CSS, and Framer Motion.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Sameer Portfolio",
    images: [
      {
        url: "/og-image.png", // ✅ Place inside /public
        width: 1200,
        height: 630,
        alt: "Sameer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer | Full Stack Developer Portfolio",
    description:
      "Modern portfolio designed and built with Next.js 14 + Tailwind CSS.",
    images: ["/og-image.png"],
    creator: "@sameer", // optional handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white scroll-smooth antialiased selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
