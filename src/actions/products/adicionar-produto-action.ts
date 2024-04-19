"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function adicionarProdutoAction(formData: FormData) {
  const token = cookies().get("token")?.value;
  const response = await fetch(
    "https://api.komodemoveis.com.br/wp-json/api/produto",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formData,
    }
  );
  await response.json();

  revalidatePath("/produtos");
}
