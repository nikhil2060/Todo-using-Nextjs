import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "./Header";
import { ContextProvider } from "@/components/clients";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo Next App",
  description: "This is Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
