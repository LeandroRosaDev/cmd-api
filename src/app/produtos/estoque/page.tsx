"use client";

import GetProduto from "@/components/produtos/Get-produto";
import Link from "next/link";

export default function GetProdutosPage() {
  return (
    <div>
      <h1>Confira os Produtos disponíveis em estoque!</h1>
      <ul>
        <li>
          <Link href="/categorias/Sala de Estar"> Sala de Estar </Link>
        </li>
        <li>
          <Link href="/categorias/Quarto de Casal"> Quarto de Casal </Link>
        </li>
        <li>
          <Link href="/categorias/Quarto de Solteiro">Quarto de Solteiro</Link>
        </li>
        <li>
          <Link href="/categorias/Cozinha"> Cozinha </Link>
        </li>
        <li>
          <Link href="/categorias/Lavanderia"> Lavanderia </Link>
        </li>
        <li>
          <Link href="/categorias/Escritorio"> Escritorio </Link>
        </li>
      </ul>
      {/* <GetProduto /> */}
    </div>
  );
}
