import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dashboard-de-vendas",
  description: "Aplicação criada pela Twizo AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}