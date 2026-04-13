import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/context/AuthContext";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PG Academy | Premium LMS",
  description: "A unique AI Learning Management System designed explicitly for Arab markets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", outfit.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col selection:bg-brand-accent selection:text-white">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow pt-20 flex flex-col">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
