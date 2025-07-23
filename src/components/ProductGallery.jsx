"use client";


import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";

const categorias = [
  { nome: "Roupas", valor: "roupas" },
  { nome: "Acessórios", valor: "acessorios" },
  { nome: "Decoração", valor: "decoracao" },
];

export default function ProductGallery() {
  const [produtos, setProdutos] = useState([]);
 const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");


  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get("http://localhost:3001/produtos");
        console.log("Produtos da API:", response.data);
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos();
  }, []);

 const normalize = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const produtosFiltrados =
  categoriaSelecionada === "Todos"
    ? produtos
    : produtos.filter(
        (p) => normalize(p.categoria || "") === normalize(categoriaSelecionada)
      );

  return (
    <div className="container mx-auto px-4">

      <div className="flex flex-wrap justify-center gap-4 mb-10">
  {categorias.map((cat) => (
    <button
      key={cat.valor}
      onClick={() => setCategoriaSelecionada(cat.valor)}
      className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer
        ${
          categoriaSelecionada === cat.valor
            ? "bg-pink-600 text-white shadow-lg"
            : "bg-gray-200 text-gray-800 hover:bg-pink-500 hover:text-white"
        }`}
    >
      {cat.nome}
    </button>
  ))}
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {produtosFiltrados.map((produto) => (
          <ProductCard key={produto._id}
            imagem={produto.imagem}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
          />
         
        ))}
      </div>


      {produtosFiltrados.length === 0 && (
        <p className="text-center text-white mt-10">Nenhum produto encontrado nessa categoria.</p>
      )}
    </div>
  );
}
