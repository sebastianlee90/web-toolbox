import { Footer } from "@/components/form/footer";
import { Background } from "@/components/layout/background";
import { NavigationMenu } from "@/components/layout/navMenu";
import { SideBarWrapper } from "@/components/layout/sideBarWrapper";
import { ThemeProvider } from "@/components/ui/themeProvider";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Simplifying tasks, one tool at a time | selkcn/webtools",
    template: "%s | selkcn/webtools",
  },
  description: "Simplifying tasks, one tool at a time | selkcn/webtools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6276242306165107"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${roboto.variable} antialiased`}
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
        <Background />
        <ThemeProvider>
          <SideBarWrapper>
            <main className="relative w-full">
              <NavigationMenu />
              <Toaster richColors duration={5000} closeButton />
              {children}
              <Footer />
            </main>
          </SideBarWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
