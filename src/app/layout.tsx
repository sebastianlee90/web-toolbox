import { AppSidebar } from "@/components/layout/appSideBar";
import { NavigationMenu } from "@/components/layout/navMenu";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ui/themeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Toolbox",
  description: "Web Toolbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // style={{
        //   // backgroundImage: "url('/landscape-scene.jpg')",
        //   // backgroundImage: "url('/illustration-anime-city.jpg')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
        //   minHeight: "100vh",
        // }}
      >
        <AuroraBackground />
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="relative w-full">
              <NavigationMenu />
              <Toaster richColors duration={5000} closeButton />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
