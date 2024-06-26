"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function putProdutosction(formData: FormData) {
  const token = cookies().get("token")?.value;
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto/teste",

    {
      next: {
        revalidate: 1,
      },
      method: "PUT",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formData,
    }
  );
  await response.json();

  revalidatePath("/produtos");
}
