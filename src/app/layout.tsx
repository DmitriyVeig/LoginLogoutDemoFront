import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "LoginLogoutDemo",
    description: "My small pet project",
};

export default function RootLayout({ children, }: { children: React.ReactNode; })
{
    return (
        <html lang="en">
        <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex justify-center items-center">{children}</main>
        <Footer />
        </body>
        </html>
    );
}