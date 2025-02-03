import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Layout/footer";
import ReactClientProvider from "@/components/Provider/queryClientProvider";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sideBarWithStickyButton";
import {AppSidebar} from "@/components/app-sidebar/appSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anthony Lybliamay",
  description: "Portfolio de Anthony Lybliamay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ReactClientProvider>
          <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
               {children}
          </SidebarProvider>
          <Footer/>
      </ReactClientProvider>
      </body>
    </html>
  );
}
