import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCI",
  description: "CCI MAIN WEB",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html>
      <body className={inter.className}>   
        <Navbar/>              
            {children}          
        {/* <Footer/> */}
      </body>
    </html>
  );
}
