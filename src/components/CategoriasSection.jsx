"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

const COLORS_TOP = ["#FF3385", "#00FFCC"];

const categorias = [
  { nome: "Roupas", valor: "roupas", imagem: "/categorias/roupas.png" },
  { nome: "Acessórios", valor: "acessorios", imagem: "/categorias/acessorios.png" },
  { nome: "Decoração", valor: "decoracao", imagem: "/categorias/decoracao.png" },
];

export default function CategoriasSection() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section

      style={{ backgroundImage }}
      className="py-20 text-white px-6"
    >
      <h2 className="text-5xl font-bold mb-10 text-center">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-84">
        {categorias.map((cat) => (
          <div
            key={cat.valor}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img src={cat.imagem} alt={cat.nome} className="w-full h-60 object-cover" />
            <h3 className="text-xl font-semibold mb-6 px-4">{cat.nome}</h3>
            <Link
              href={`/categorias/${cat.valor}`}
              className="bg-pink-600 text-white shadow-lg px-6 py-2 mb-10 rounded-2xl font-semibold cursor-pointer inline-block mx-4"
            >
              Ver produtos
            </Link>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
