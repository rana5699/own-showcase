import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider/ThemeProvider";
import AppNavbar from "@/components/modules/shared/AppNavbar";
import FooterSection from "@/components/modules/shared/FooterSection";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio - Full Stack Developer",
  description:
    "Welcome to my personal portfolio. Showcasing my projects, skills, and experience.",
  keywords: "Web Developer, Next.js, Full Stack, Portfolio",
  authors: [{ name: "Md Sohel Rana", url: "https://yourwebsite.com" }],
  creator: "Md Sohel Rana",
  openGraph: {
    title: "My Portfolio - Full Stack Developer",
    description: "Showcasing my projects, skills, and experience.",
    url: "https://yourwebsite.com",
    siteName: "My Portfolio",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AppNavbar/>
          <div className="min-h-screen">
          {children}
          </div>
          <FooterSection/>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
