import "../styles/globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext"; 

export const metadata = {
  title: "Code & Play",
  description: "Vista sua paixão pela programação!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white font-sans">
        <CartProvider>
          <Header />
          <main className="pt-20">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
