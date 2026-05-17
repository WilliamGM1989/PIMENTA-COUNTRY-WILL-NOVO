"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, MessageCircle, Search, User } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Cintos", href: "/produtos" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Contato", href: "/contato" },
] as const

const WHATSAPP_NUMBER = "554391432721"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Pimenta Country AJ e gostaria de saber mais sobre os produtos."
)
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function BrandLogo() {
  return (
    <Image
      src="/brand/logo.jpg"
      alt="Pimenta Country AJ"
      width={120}
      height={44}
      className="h-11 w-auto object-contain select-none"
      priority
    />
  )
}

interface CartButtonProps {
  count: number
  onClick: () => void
}

function CartButton({ count, onClick }: CartButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Carrinho — ${count} ${count === 1 ? "item" : "itens"}`}
      onClick={onClick}
      className="relative p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  )
}

function WhatsAppLink({ className }: { className?: string }) {
  return (
    <Link
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={className}
    >
      <MessageCircle className="h-3.5 w-3.5" />
      WhatsApp
    </Link>
  )
}

export function Header() {
  const { itemCount: cartCount } = useCart()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [cartOpen, setCartOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = React.useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          className="group hover:opacity-80 transition-opacity"
          aria-label="Pimenta Country AJ — página inicial"
        >
          <BrandLogo />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Pesquisar"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="/login"
            aria-label="Entrar"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <User className="h-5 w-5" />
          </Link>
          <WhatsAppLink className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1ebe5d] transition-colors" />
          <CartButton count={cartCount} onClick={() => setCartOpen(true)} />
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-2">
          <CartButton count={cartCount} onClick={() => setCartOpen(true)} />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Abrir menu de navegação"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
                <BrandLogo />
              </SheetHeader>

              <nav
                className="flex flex-col px-3 py-4 gap-0.5"
                aria-label="Menu mobile"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="px-6 pb-8 mt-2">
                <Link
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar pelo WhatsApp
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  )
}

export default Header
