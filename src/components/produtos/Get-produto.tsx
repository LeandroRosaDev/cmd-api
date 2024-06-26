"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/Types";
import { getProdutosAction } from "@/actions/products/get-produtos";
import Image from "next/image";
import { putProdutosction } from "@/actions/products/put-produtos-action";
import { deleteProdutosAction } from "@/actions/products/delete-produtos-action";

export default function GetProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await getProdutosAction();
      setProdutos(data);
    }
    loadProducts();
  }, []);

  function handleDelete(produtoNome: any) {
    deleteProdutosAction(produtoNome);
    window.location.reload();
  }

  return (
    <main>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} : R$ {produto.preco}
            {produto.fotos && produto.fotos.length > 0 && (
              <Image
                src={produto.fotos[1].src}
                alt={`Imagem de ${produto.nome}`}
                width={100}
                height={100}
              />
            )}
            <li style={{ width: "500px" }}>{produto.situacao}</li>
            <li style={{ width: "500px" }}>{produto.categoria}</li>
            <li style={{ width: "500px" }}>{produto.sub_categoria}</li>
            <li style={{ width: "500px" }}>{produto.disponibilidade}</li>
            <div>
              <form action={putProdutosction}>
                <select id="disponibilidade" name="disponibilidade">
                  <option value="">Disponibilidade do produto</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
                <button type="submit">Enviar</button>
              </form>
            </div>
            <button onClick={() => handleDelete(produto.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
