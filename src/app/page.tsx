"use client";

import logout from "@/actions/login/logout-action";
import { useUser } from "@/context/user-context";
import React from "react";

export default function Home() {
  const { user } = useUser();
  function handleLogout() {
    logout();
  }
  return (
    <main>
      <h1>Olá {user?.nome}</h1>
      <button onClick={handleLogout}>Sair</button>
    </main>
  );
}
