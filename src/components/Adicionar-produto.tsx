"use client";
import { useState } from "react";
import { adicionarProdutoAction } from "@/actions/products/adicionar-produto-action";
import { Button } from "./Button";
import style from "./Adicionar-produto.module.css";
export default function AdicionarProduto() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    const imagens = event.currentTarget.img.files;
    for (let i = 0; i < imagens.length; i++) {
      formData.append(imagens[i].name, imagens[i]);
    }
    formData.append("nome", event.currentTarget.nome.value);
    formData.append("nome_long", event.currentTarget.nome_long.value);
    formData.append("produto_cod", event.currentTarget.produto_cod.value);
    formData.append("categoria", categoriaSelecionada);
    formData.append("descricao", event.currentTarget.descricao.value);
    formData.append("preco", event.currentTarget.preco.value);
    formData.append("altura", event.currentTarget.altura.value);
    formData.append("largura", event.currentTarget.largura.value);
    formData.append("cor", event.currentTarget.cor.value);

    if (categoriaSelecionada == "Sofá") {
      formData.append("assento", event.currentTarget.assento.value);
      formData.append("encosto", event.currentTarget.encosto.value);
      formData.append("braco", event.currentTarget.braco.value);
      formData.append("revestimento", event.currentTarget.revestimento.value);
      formData.append(
        "profundidade_aberto",
        event.currentTarget.profundidade_aberto.value
      );
      formData.append(
        "profundidade_fechado",
        event.currentTarget.profundidade_fechado.value
      );
    }
    await adicionarProdutoAction(formData);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type="text" id="nome" name="nome" placeholder="Nome do Produto" />

      <input
        type="text"
        id="nome_long"
        name="nome_long"
        placeholder="Nome Longo"
      />

      <input
        type="text"
        id="produto_cod"
        name="produto_cod"
        placeholder="Cód do Produto"
      />
      <select
        id="categoria"
        name="categoria"
        value={categoriaSelecionada}
        onChange={(e) => setCategoriaSelecionada(e.target.value)}
      >
        <option value="">Categoria</option>
        <option value="Sofá">Sofá</option>
        <option value="Armário">Armário</option>
        <option value="Mesa">Mesa</option>
      </select>

      <input
        type="text"
        id="descricao"
        name="descricao"
        placeholder="Descrição"
      />
      <input type="text" id="preco" name="preco" placeholder="Preço" />
      <input type="text" id="altura" name="altura" placeholder="Altura" />
      <input type="text" id="largura" name="largura" placeholder="Largura" />
      <select id="cor" name="cor">
        <option value="">Cor</option>
        <option value="Azul">Azul</option>
        <option value="Vermelho">Vermelho</option>
        <option value="Preto">Preto</option>
        <option value="Cinza">Cinza</option>
        <option value="Marrom">Marrom</option>
        <option value="Terracota">Terracota</option>
        <option value="Verde">Verde</option>
        <option value="Bege">Bege</option>
        <option value="Rosa Bebê">Rosa Bebê</option>
        <option value="Vinho">Vinho</option>
        <option value="Rosê">Rosê</option>
        <option value="Bege Claro">Bege Claro</option>
        <option value="Cinza Claro">Cinza Claro</option>
      </select>
      <input
        type="text"
        id="link_1"
        name="link_1"
        placeholder="Whatsapp Link"
      />
      <input
        type="text"
        id="link_2"
        name="link_2"
        placeholder="Link Opcional"
      />
      {categoriaSelecionada == "Sofá" && (
        <>
          <input
            type="text"
            id="profundidade_fechado"
            name="profundidade_fechado"
            placeholder="Profundidade fechado"
          />
          <input
            type="text"
            id="profundidade_aberto"
            name="profundidade_aberto"
            placeholder="Profundidade aberto"
          />
          <input
            type="text"
            id="assento"
            name="assento"
            placeholder="Assento"
          />

          <input
            type="text"
            id="encosto"
            name="encosto"
            placeholder="Encosto"
          />

          <input type="text" id="braco" name="braco" placeholder="Braços" />

          <input
            type="text"
            id="revestimento"
            name="revestimento"
            placeholder="Revestimento"
          />
        </>
      )}
      <input type="file" name="img" id="img" multiple />
      <Button>Adicionar</Button>
    </form>
  );
}
