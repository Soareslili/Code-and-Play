"use client";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Produtos</h1>
      <pre>{JSON.stringify(produtos, null, 2)}</pre>
    </div>
  );
}
