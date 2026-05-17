"use client"

import { useState } from "react"
import { Send, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [waUrl, setWaUrl] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (!res.ok) {
        setErrorMsg(json.error ?? "Erro ao enviar mensagem.")
        setStatus("error")
        return
      }

      setWaUrl(json.waUrl ?? "")
      setStatus("success")
      form.reset()
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 shadow-sm text-center">
        <CheckCircle className="h-12 w-12 text-green-600" />
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground">Mensagem recebida!</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            Entraremos em contato em até 1 dia útil. Se preferir uma resposta mais rápida, use o WhatsApp.
          </p>
        </div>
        {waUrl && (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#1ebe5d] transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Abrir no WhatsApp
          </a>
        )}
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      aria-label="Formulário de contato"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nome <span className="text-destructive" aria-hidden>*</span>
          </label>
          <Input id="name" name="name" type="text" placeholder="Seu nome" autoComplete="name" required minLength={2} maxLength={100} className="h-10" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Telefone / WhatsApp
          </label>
          <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" autoComplete="tel" maxLength={20} className="h-10" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail <span className="text-destructive" aria-hidden>*</span>
        </label>
        <Input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" required maxLength={200} className="h-10" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem <span className="text-destructive" aria-hidden>*</span>
        </label>
        <Textarea id="message" name="message" placeholder="Escreva sua mensagem, dúvida ou pedido aqui..." required minLength={5} maxLength={2000} rows={5} className="resize-none min-h-[120px]" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {errorMsg}
        </p>
      )}

      <p className="text-xs text-muted-foreground">
        Campos marcados com <span className="text-destructive font-medium">*</span> são obrigatórios.
      </p>

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full gap-2 h-11 text-sm font-semibold">
        <Send className="h-4 w-4" aria-hidden />
        {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}

export default ContactForm
