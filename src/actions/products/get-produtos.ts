"use server";

import { cookies } from "next/headers";

export async function getProductsAction() {
  const token = cookies().get("token")?.value;
  const response = await fetch(
    "https://api.komodemoveis.com.br/wp-json/api/produto",
    {
      cache: "no-store",
      headers: {
        Authorization: "Bearer" + token,
      },
    }
  );
  const data = await response.json();
  return { data };
}