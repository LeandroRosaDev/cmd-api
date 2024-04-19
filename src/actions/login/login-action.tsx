"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const credencials = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };
  const response = await fetch(
    "https://api.komodemoveis.com.br/wp-json/jwt-auth/v1/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credencials),
    }
  );
  const data = await response.json();
  cookies().set("token", data.token);
  redirect("/");
}
