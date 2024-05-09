import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './Components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Search",
  description: "An Open Source Google Clone built with NextJs and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
