import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "./providers";

export const metadata = {
  title: "LinkShort",
  description: "A simple link shortener built with TanStack Query",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
