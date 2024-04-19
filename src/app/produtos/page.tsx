"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/Types";
import { getProductsAction } from "@/actions/products/get-produtos";
import { removerProdutoAction } from "@/actions/products/remover-produto.action";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await getProductsAction();
      setProdutos(data);
    }

    loadProducts();
  }, []);

  function handleDelete(produtoNome: string) {
    const formattedName = produtoNome.replace(/\s+/g, "-");
    removerProdutoAction(formattedName);
    window.location.reload();
  }

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} : R$ {produto.preco}
            <button onClick={() => handleDelete(produto.nome)}>Deletar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
