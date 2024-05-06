"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/Types";
import { getProductsAction } from "@/actions/products/get-produtos";
import { removerProdutoAction } from "@/actions/products/remover-produto.action";
import Image from "next/image";

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
    const formattedName = produtoNome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/gi, "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    removerProdutoAction(formattedName);

    window.location.reload();
  }

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.produto_cod} Cód: {produto.nome} : R$ {produto.preco}
            {produto.fotos && produto.fotos.length > 0 && (
              <Image
                src={produto.fotos[1].src}
                alt={`Imagem de ${produto.nome}`}
                width={100}
                height={100}
              />
            )}
            {produto.nome_long}
            <button>
              <a
                target="_blank"
                href={produto.link_1}
                style={{ color: "white", textDecoration: "none" }}
              >
                Chame nos no Whatsapp
              </a>
            </button>
            <button
              style={{ color: "white" }}
              onClick={() => handleDelete(produto.nome)}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
