import { Header } from "@components/layout/Header";
import "./globals.css";
import Head from "./head";

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <Head />
      <body className="container">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
