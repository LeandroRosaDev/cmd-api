"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function removerProdutoAction(nomeDoProduto: string) {
  const token = cookies().get("token")?.value;
  const response = await fetch(
    `https://api.komodemoveis.com.br/wp-json/api/produto/${nomeDoProduto}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer" + token,
      },
    }
  );
  revalidatePath("/produtos");
}
