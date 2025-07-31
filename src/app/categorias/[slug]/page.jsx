"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoriaPage() {
  const { slug } = useParams();
  const [produtos, setProdutos] = useState([]);

  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get("http://localhost:3001/produtos");
        const filtrados = response.data.filter(
          (p) =>
            normalizarTexto(p.categoria) === normalizarTexto(slug)
        );
        setProdutos(filtrados);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
      }
    }

    fetchProdutos();
  }, [slug]);

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6 capitalize">Categoria: {slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto._id}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{produto.nome}</h3>
            <p className="text-gray-400">{produto.descricao}</p>
            <p className="text-green-400 mt-2">R$ {produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
