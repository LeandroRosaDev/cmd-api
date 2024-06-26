"use client";
import { useState } from "react";
import { Button } from "../Button";
import style from "./Adicionar-produto.module.css";
import { postProdutosAction } from "@/actions/products/post-produtos-action";
import { ButtonBack } from "../ButtonBack";

export default function PostProduto() {
  const [situacao, setSituacao] = useState("");
  const [rangedevalor, setRangedevalor] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [subcategoriaSelecionada, setsubCategoriaSelecionada] = useState("");

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
    formData.append("situacao", situacao);
    formData.append("rangedevalor", rangedevalor);
    formData.append("categoria", categoriaSelecionada);
    formData.append("sub_categoria", subcategoriaSelecionada);
    formData.append("descricao", event.currentTarget.descricao.value);
    formData.append("preco", event.currentTarget.preco.value);
    formData.append("preco_original", event.currentTarget.preco_original.value);
    formData.append(
      "preco_parcelado",
      event.currentTarget.preco_parcelado.value
    );
    formData.append("altura", event.currentTarget.altura.value);
    formData.append("largura", event.currentTarget.largura.value);
    formData.append("cor", event.currentTarget.cor.value);
    formData.append("link_1", event.currentTarget.link_1.value);
    formData.append("link_2", event.currentTarget.link_2.value);
    formData.append(
      "disponibilidade",
      event.currentTarget.disponibilidade.value
    );
    formData.append(
      "profundidade_aberto",
      event.currentTarget.profundidade_aberto.value
    );
    formData.append("estrutura", event.currentTarget.estrutura.value);

    if (subcategoriaSelecionada == "Sofa Retratil") {
      formData.append("assento", event.currentTarget.assento.value);
      formData.append("encosto", event.currentTarget.encosto.value);
      formData.append("braco", event.currentTarget.braco.value);
      formData.append("revestimento", event.currentTarget.revestimento.value);
      formData.append(
        "profundidade_fechado",
        event.currentTarget.profundidade_fechado.value
      );
    }
    await postProdutosAction(formData);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type="text" id="nome" name="nome" placeholder="Nome do produto" />
      <input
        type="text"
        id="nome_long"
        name="nome_long"
        placeholder="Nome longo do Produto"
      />
      <input
        type="text"
        id="produto_cod"
        name="produto_cod"
        placeholder="Código do Produto"
      />
      <select
        id="situacao"
        name="situacao"
        value={situacao}
        onChange={(e) => setSituacao(e.target.value)}
      >
        <option value="">Situação do Produto</option>
        <option value="destaque">Produto em Destaque</option>
        <option value="promocao">Produto em Promoção</option>
        <option value="queima">Produto em Queima de estoque</option>
      </select>
      <select
        id="categoria"
        name="categoria"
        value={categoriaSelecionada}
        onChange={(e) => setCategoriaSelecionada(e.target.value)}
      >
        <option value="">Categoria</option>
        <option value="Sala de estar">Sala de estar</option>
        <option value="Cozinha">Cozinha</option>
        <option value="Banheiro">Banheiro</option>
        <option value="Quarto de casal">Quarto de casal</option>
        <option value="Quarto de solteiro">Quarto de solteiro</option>
        <option value="Escritorio">Escritório</option>
        <option value="Lavanderia">Lavanderia</option>
      </select>
      <select
        id="sub_categoria"
        name="sub_categoria"
        value={subcategoriaSelecionada}
        onChange={(e) => setsubCategoriaSelecionada(e.target.value)}
      >
        <option value="">Sub Categoria</option>
        {categoriaSelecionada == "Sala de estar" && (
          <>
            <option value="Sofa Retratil">Sofá Retrátil</option>
            <option value="Sofa Canto">Sofá de Canto</option>
            <option value="Sofa 2 e 3 lugares">Sofá de 2 e 3 lugares</option>
            <option value="Estante">Estante</option>
            <option value="Painel">Painel</option>
            <option value="Armario">Armário</option>
            <option value="Mesa de jantar">Mesa de Jantar</option>
          </>
        )}
        {categoriaSelecionada == "Cozinha" && (
          <>
            <option value="Balcao de Cozinha">Balcão de cozinha</option>
            <option value="Mesa de aluminio">Mesa de aluminio</option>
            <option value="Kit de cozinha">Kit Cozinha</option>
          </>
        )}
        {categoriaSelecionada == "Banheiro" && (
          <>
            <option value="Armario de banheiro">Armário de Banheiro</option>
          </>
        )}
        {categoriaSelecionada == "Quarto de casal" && (
          <>
            <option value="Cama de Casal">Cama de Casal</option>
            <option value="Guarda Roupa Casal">Guarda Roupa Casal</option>{" "}
            <option value="Base de Casal">Base de Casal</option>
            <option value="Colchão de Casal">Colchão de Casal</option>
          </>
        )}
        {categoriaSelecionada == "Quarto de solteiro" && (
          <>
            <option value="Cama de Solteiro">Cama de Solteiro</option>
            <option value="Base de Solteiro">Base de Solteiro</option>
            <option value="Colchão de Solteiro">Colchão de Solteiro</option>
            <option value="Guarda Roupa Solteiro">Guarda Roupa Solteiro</option>
          </>
        )}
        {categoriaSelecionada == "Escritório" && (
          <>
            <option value="Escrivaninha">Escrivaninha</option>
            <option value="Estante de livros">Estante de Livros</option>
          </>
        )}
        {categoriaSelecionada == "Lavanderia" && (
          <>
            <option value="Multiuso">Multiuso</option>
          </>
        )}
      </select>
      <input
        type="text"
        id="descricao"
        name="descricao"
        placeholder="Descrição"
      />
      <input
        type="text"
        id="profundidade_aberto"
        name="profundidade_aberto"
        placeholder="Profundidade/Profundidade Aberto (Retrátil)"
      />
      <select
        id="rangedevalor"
        name="rangedevalor"
        value={rangedevalor}
        onChange={(e) => setRangedevalor(e.target.value)}
      >
        <option value="">Selecione o Range de Valor</option>
        <option value="499">Menor de R$500,00</option>
        <option value="999">Menor de R$1000,00</option>
        <option value="1499">Menor de R$1500,00</option>
        <option value="1999">Menor de R$2000,00</option>
        <option value="2499">Menor de R$2500,00</option>
        <option value="2999">Menor de R$3000,00</option>
        <option value="3999">Menor de R$4000,00</option>
        <option value="4999">Menor de R$5000,00</option>
      </select>
      <input type="text" id="preco" name="preco" placeholder="Preço" />
      <input
        type="text"
        id="preco_original"
        name="preco_original"
        placeholder="Preço Riscado"
      />
      <input
        type="text"
        id="preco_parcelado"
        name="preco_parcelado"
        placeholder="Preço em 10x"
      />
      <input type="text" id="altura" name="altura" placeholder="Altura" />
      <input type="text" id="largura" name="largura" placeholder="Largura" />
      <input
        type="text"
        id="estrutura"
        name="estrutura"
        placeholder="Estrutura/Características"
      />
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
        <option value="Rosa Escuro">Rosa Escuro</option>
        <option value="Vinho">Vinho</option>
        <option value="Rose">Rose</option>
        <option value="Bege Claro">Bege Claro</option>
        <option value="Cinza Claro">Cinza Claro</option>
        <option value="Amarelo">Amarelo</option>
        <option value="Branco">Branco</option>
        <option value="Off white">Off white</option>
        <option value="Capuccino">Capuccino</option>
        <option value="Cinza/Grafite">Cinza/Grafite</option>
        <option value="Mel">Mel</option>
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
      {subcategoriaSelecionada == "Sofa Retratil" && (
        <>
          <input
            type="text"
            id="profundidade_fechado"
            name="profundidade_fechado"
            placeholder="Profundidade fechado"
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
      <input
        type="hidden"
        id="disponibilidade"
        name="disponibilidade"
        placeholder="Disponibilidade"
        value="sim"
      />
      <input type="file" name="img" id="img" multiple />
      <Button>Adicionar</Button>
      <ButtonBack>Retornar</ButtonBack>
    </form>
  );
}
