import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Entrar | Pimenta Country AJ",
  description:
    "Acesse sua conta na loja Pimenta Country AJ e acompanhe seus pedidos de cintos de couro artesanais.",
  alternates: { canonical: "/login" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm bg-card rounded-2xl shadow-lg ring-1 ring-foreground/10 p-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <Link href="/" aria-label="Pimenta Country AJ — página inicial">
          <Image
            src="/brand/logo.jpg"
            alt="Pimenta Country AJ"
            width={120}
            height={44}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Title */}
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Entrar
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Acesse sua conta
          </p>
        </div>

        {/* Form */}
        <form action="#" className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground"
            >
              Telefone / WhatsApp
            </label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="(00) 00000-0000"
              autoComplete="tel"
            />
          </div>

          <Button type="submit" className="w-full mt-2">
            Entrar
          </Button>
        </form>

        {/* Divider */}
        <div className="w-full border-t border-border" />

        {/* Links */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="text-muted-foreground">
            Não tem conta?{" "}
            <Link
              href="/cadastro"
              className="text-primary font-semibold hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-xs"
          >
            ← Voltar à loja
          </Link>
        </div>
      </div>
    </div>
  );
}
