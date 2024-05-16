import "./globals.css";
import Footer from '@/Components/Footer';



export const metadata = {
  title: "Google Search",
  description: "An Open Source Google Clone built with NextJs and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'relative min-h-screen'}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
