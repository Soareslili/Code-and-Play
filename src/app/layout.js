import "../styles/globals.css";



export const metadata = {
  title: "Code & Play",
  description: "Vista sua paixão pela programação!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
