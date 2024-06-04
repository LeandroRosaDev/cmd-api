"use client";
import { loginAction } from "@/actions/login/login-action";
import { Button } from "./Button";

export default function Login() {
  return (
    <form action={loginAction}>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password" />
      <Button>Login</Button>
    </form>
  );
}
