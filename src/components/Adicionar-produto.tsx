"use client";
import { adicionarProdutoAction } from "@/actions/products/adicionar-produto-action";
import { Button } from "./Button";

export default function AdicionarProduto() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    const imagens = event.currentTarget.img.files;
    for (let i = 0; i < imagens.length; i++) {
      formData.append(imagens[i].name, imagens[i]);
    }
    formData.append("nome", event.currentTarget.nome.value);
    formData.append("nome_long", event.currentTarget.nome_long.value);
    formData.append("categoria", event.currentTarget.categoria.value);
    formData.append("descricao", event.currentTarget.descricao.value);
    formData.append("preco", event.currentTarget.preco.value);
    formData.append("altura", event.currentTarget.altura.value);
    formData.append("largura", event.currentTarget.largura.value);
    formData.append(
      "profundidade_aberto",
      event.currentTarget.profundidade_aberto.value
    );
    formData.append(
      "profundidade_fechado",
      event.currentTarget.profundidade_fechado.value
    );
    formData.append("assento", event.currentTarget.assento.value);
    formData.append("encosto", event.currentTarget.encosto.value);
    formData.append("braco", event.currentTarget.braco.value);
    formData.append("estrutura", event.currentTarget.estrutura.value);
    formData.append("revestimento", event.currentTarget.revestimento.value);
    await adicionarProdutoAction(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="nome_long">Nome Longo</label>
      <input type="text" id="nome_long" name="nome_long" />
      <label htmlFor="categoria">Categoria</label>
      <input type="text" id="categoria" name="categoria" />
      <label htmlFor="descricao">Descriçao</label>
      <input type="text" id="descricao" name="descricao" />
      <label htmlFor="preco">Preço</label>
      <input type="text" id="preco" name="preco" />
      <label htmlFor="altura">Altura</label>
      <input type="text" id="altura" name="altura" />
      <label htmlFor="largura">Largura</label>
      <input type="text" id="largura" name="largura" />
      <label htmlFor="profundidade_fechado">Profundidade_fechado</label>
      <input
        type="text"
        id="profundidade_fechado"
        name="profundidade_fechado"
      />
      <label htmlFor="profundidade_aberto">Profundidade_aberto</label>
      <input type="text" id="profundidade_aberto" name="profundidade_aberto" />
      <label htmlFor="assento">Assento</label>
      <input type="text" id="assento" name="assento" />
      <label htmlFor="encosto">Encosto</label>
      <input type="text" id="encosto" name="encosto" />
      <label htmlFor="braco">Braços</label>
      <input type="text" id="braco" name="braco" />
      <label htmlFor="estrutura">Estrutura</label>
      <input type="text" id="estrutura" name="estrutura" />
      <label htmlFor="revestimento">Revestimento</label>
      <input type="text" id="revestimento" name="revestimento" />
      <input type="file" name="img" id="img" multiple />
      <Button>Adicionar</Button>
    </form>
  );
}
