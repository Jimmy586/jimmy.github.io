import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
    title: "Jimmy VATOSOA | Architect of Intelligence",
    description: "Portfolio of Jimmy VATOSOA - AI Engineer, Entrepreneur, and Professor.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${montserrat.variable} font-sans bg-obsidian text-slate-200 antialiased`}>
                {children}
            </body>
        </html>
    );
}
