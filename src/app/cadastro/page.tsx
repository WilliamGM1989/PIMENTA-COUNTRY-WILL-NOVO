import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Criar Conta | Pimenta Country AJ",
  description:
    "Crie sua conta na loja Pimenta Country AJ e acompanhe seus pedidos de cintos de couro artesanais.",
  alternates: { canonical: "/cadastro" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CadastroPage() {
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
            Criar Conta
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Junte-se à família Pimenta Country AJ
          </p>
        </div>

        {/* Form */}
        <form action="#" className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Nome Completo
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome completo"
              autoComplete="name"
              required
            />
          </div>

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

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Senha
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="new-password"
              required
            />
          </div>

          <Button type="submit" className="w-full mt-2">
            Criar Conta
          </Button>
        </form>

        {/* Divider */}
        <div className="w-full border-t border-border" />

        {/* Links */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="text-muted-foreground">
            Já tem conta?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Entre
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
