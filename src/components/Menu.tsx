import { Conta } from "@/Types";
import { userGetAction } from "@/actions/user/user-get-action";
import Link from "next/link";

export default async function Menu() {
  const { data } = await userGetAction();
  let conta: Conta = {
    autorizado: false,
    nome: " ",
  };
  if (data.nome === undefined) {
    conta.autorizado = false;
  } else conta.autorizado = true;

  return (
    <>
      <ul className="menu flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {conta.autorizado ? data.nome : <Link href="/login">Login</Link>}
        </li>
        <li>
          {conta.autorizado ? (
            <Link href="/produtos"> Produtos </Link>
          ) : (
            <p></p>
          )}
        </li>
        <li>
          {conta.autorizado ? (
            <Link href="/produtos/adicionar"> Adicionar Produtos </Link>
          ) : (
            <p></p>
          )}
        </li>
      </ul>
    </>
  );
}
