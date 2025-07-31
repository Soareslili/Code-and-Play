'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 py-4 px-6 shadow-md transition-colors duration-500
        backdrop-blur-md
        ${scrolled ? "bg-black bg-opacity-90" : "bg-black bg-opacity-30"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between ml-20">



        <nav className="hidden md:flex space-x-8 text-lg font-medium text-white">
          <Link href="/#hero" className="hover:text-pink-400 transition">Início</Link>
          <Link href="/#categorias" className="hover:text-pink-400 transition">Produtos</Link>
          <Link href="/#contato" className="hover:text-pink-400 transition">Contato</Link>

        </nav>

        <div
          className="cursor-pointer hover:scale-110 transition-transform text-white mr-15"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ShoppingCart
            size={28}
            className={`transition-transform ${isHovered ? "rotate-12" : "rotate-0"}`}
          />
        </div>
      </div>
    </header>
  );
}
