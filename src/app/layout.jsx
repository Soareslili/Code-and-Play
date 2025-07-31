import "../styles/globals.css";
import Header from "@/components/Header"; 

export const metadata = {
  title: "Code & Play",
  description: "Vista sua paixão pela programação!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white font-sans">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
