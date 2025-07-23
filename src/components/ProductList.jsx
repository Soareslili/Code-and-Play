'use client';

import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-white">Carregando produtos...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(prod => (
        <ProductCard
          key={prod._id}
          imagem={prod.imagem}
          nome={prod.nome}
          descricao={prod.descricao}
          preco={prod.preco}
        />
      ))}
    </div>
  );
}
