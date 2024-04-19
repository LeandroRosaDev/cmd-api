import type { Metadata } from "next";

import Menu from "@/components/Menu";
import { UserContextProvider } from "@/context/user-context";
import { userGetAction } from "@/actions/user/user-get-action";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Komode Moveis",
  description: "API Para Cadastro de Produtos Komode Moveis",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGetAction();
  return (
    <html lang="pt-BR">
      <body>
        <UserContextProvider user={user}>
          <Menu />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
