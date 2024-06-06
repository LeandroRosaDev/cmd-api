import { PageParams } from "@/Types";
import Image from "next/image";
import style from "./produtos.module.css";
import { ButtonBack } from "@/components/ButtonBack";

export default async function produtoPage({ params }: PageParams) {
  const response = await fetch(
    `https://apikomode.altuori.com/wp-json/api/produto/${params.produto}`,
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWtvbW9kZS5hbHR1b3JpLmNvbSIsImlhdCI6MTcxNTY0NDgwMCwibmJmIjoxNzE1NjQ0ODAwLCJleHAiOjI1Nzk2NDQ4MDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.tQ-Uuz58JbI2ksAdPJz-6OaBh6TUAE31jsbg84oXshQ",
      },
    }
  );
  const data = await response.json();

  return (
    <section>
      <div className={style.informacoes}>
        <h1>Produto</h1>
        <ButtonBack>Voltar</ButtonBack>
        <a target="blank" href={data.link_1}>
          Clique aqui e saiba mais
        </a>
        <p>{data.nome_long}</p>
        <p>{data.cor}</p>
        <p>{data.estrutura}</p>
      </div>
      {/* Exibindo a primeira imagem separadamente */}
      {data.fotos.length > 0 && (
        <div>
          <Image
            src={data.fotos[0].src}
            alt={data.fotos[0].titulo}
            width={500}
            height={400}
          />
        </div>
      )}
      {/* Exibindo todas as imagens */}
      <div>
        <h2>Todas as Imagens:</h2>
        {data.fotos.map((foto: any, index: any) => (
          <Image
            key={index}
            src={foto.src}
            alt={foto.titulo}
            width={200}
            height={100}
          />
        ))}
      </div>
    </section>
  );
}
