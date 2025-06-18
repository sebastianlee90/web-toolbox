import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenu } from "@/components/layout/navMenu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/appSideBar";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} px-2 antialiased`}
        style={{
          // backgroundImage: "url('/landscape-scene.jpg')",
          // backgroundImage: "url('/illustration-anime-city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <NavigationMenu />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
