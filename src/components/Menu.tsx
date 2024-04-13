import { cookies, headers } from "next/headers";
import Link from "next/link";

type Conta = {
  autorizado: boolean;
  nome: any;
};

export default async function Menu() {
  let conta: Conta = {
    autorizado: false,
    nome: " ",
  };
  const token = cookies().get("token")?.value;
  const response = await fetch(
    "https://api.komodemoveis.com.br/wp-json/api/usuario",
    {
      headers: {
        Authorization: "Bearer" + token,
      },
    }
  );
  if (response.ok) {
    conta = (await response.json()) as Conta;
    conta.autorizado = true;
  }

  return (
    <>
      <ul className="menu flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {conta.autorizado ? conta.nome : <Link href="/login">Login</Link>}
        </li>
      </ul>
    </>
  );
}
