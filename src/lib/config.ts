// Fonte única de verdade para dados do negócio e constantes globais

export const WHATSAPP_NUMBER = "554391432721"

export const SITE_LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Pimenta Country AJ e gostaria de saber mais sobre os produtos."
  )}`,
  instagram: "https://instagram.com/ajpimentacountry",
  email: "contato@pimentacountry.com.br",
} as const

// Domínios válidos para redirecionamento pós-checkout (Open Redirect protection)
export const MERCADO_PAGO_ALLOWED_HOSTS = [
  "www.mercadopago.com.br",
  "www.mercadolibre.com",
  "mercadopago.com.br",
] as const

export const BUSINESS_INFO = {
  name: "Pimenta Country AJ",
  razaoSocial: "Alexandre José da Silva",
  // TODO: inserir CNPJ ou CPF do responsável — obrigatório por lei (Decreto 7962/2013)
  cnpj: "",
  city: "Sertanópolis",
  state: "PR",
} as const
