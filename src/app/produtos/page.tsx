"use client";

import Link from "next/link";

export default function ProdutosPage() {
  return (
    <main className="flex flexcollun ">
      <Link href="/produtos/adicionar"> Adicionar Produtos </Link>
      <Link href="/produtos/estoque"> Visualizar Estoque </Link>
    </main>
  );
}
