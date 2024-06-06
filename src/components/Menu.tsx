import { Conta } from "@/Types";
import { userGetAction } from "@/actions/user/user-get-action";
import Link from "next/link";
import { ButtonBack } from "./ButtonBack";

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
          {conta.autorizado ? (
            <Link href="/produtos"> Produtos </Link>
          ) : (
            <p></p>
          )}
        </li>
        <ButtonBack>Voltar</ButtonBack>
      </ul>
    </>
  );
}
