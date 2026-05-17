import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Política de Privacidade | Pimenta Country AJ",
  description:
    "Entenda como a Pimenta Country AJ coleta, usa e protege seus dados pessoais em conformidade com a LGPD — Lei Geral de Proteção de Dados.",
  openGraph: {
    title: "Política de Privacidade | Pimenta Country AJ",
    description:
      "Como a Pimenta Country AJ trata seus dados pessoais em conformidade com a LGPD.",
    type: "website",
    locale: "pt_BR",
  },
  alternates: { canonical: "/privacidade" },
  robots: { index: false, follow: false },
}

const sections = [
  {
    id: "coleta",
    title: "1. Coleta de Dados",
    content: [
      "A Pimenta Country AJ coleta dados pessoais fornecidos diretamente por você ao realizar um cadastro, efetuar uma compra, entrar em contato via formulário ou WhatsApp, ou assinar nossa newsletter.",
      "Os dados coletados incluem: nome completo, CPF, endereço de entrega e cobrança, endereço de e-mail, número de telefone/WhatsApp e informações de pagamento (processadas com segurança por gateways certificados — nunca armazenamos dados de cartão em nossos servidores).",
      "Também coletamos automaticamente dados técnicos de navegação como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, com a finalidade exclusiva de melhorar a experiência no site.",
    ],
  },
  {
    id: "uso",
    title: "2. Uso dos Dados",
    content: [
      "Utilizamos seus dados para: processar e gerenciar seus pedidos; comunicar o status de entrega; oferecer suporte ao cliente; enviar comunicações de marketing (somente com seu consentimento); personalizar sua experiência de navegação; cumprir obrigações legais e fiscais.",
      "Não utilizamos seus dados para finalidades incompatíveis com as descritas nesta política sem comunicá-lo previamente e, quando necessário, obter seu consentimento.",
      "Com base no artigo 7º da Lei nº 13.709/2018 (LGPD), o tratamento dos seus dados é realizado mediante legítimo interesse, execução de contrato, cumprimento de obrigação legal ou com seu consentimento expresso, conforme cada finalidade.",
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies",
    content: [
      "Utilizamos cookies e tecnologias semelhantes para garantir o funcionamento correto do site, manter itens no carrinho, lembrar suas preferências e analisar o tráfego de forma agregada e anonimizada.",
      "Você pode gerenciar ou desativar cookies nas configurações do seu navegador. A desativação de cookies essenciais pode afetar o funcionamento de algumas funcionalidades do site, como o carrinho de compras.",
      "Não utilizamos cookies para rastrear sua navegação em outros sites nem para criar perfis comportamentais sem seu consentimento.",
    ],
  },
  {
    id: "compartilhamento",
    title: "4. Compartilhamento de Dados",
    content: [
      "Seus dados pessoais podem ser compartilhados com: transportadoras e operadores logísticos (nome e endereço para entrega); gateways de pagamento certificados (dados de cobrança); autoridades governamentais quando exigido por lei.",
      "Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros para fins de marketing sem seu consentimento expresso.",
      "Quando necessário compartilhar dados com parceiros, exigimos contratualmente que esses parceiros adotem medidas de segurança compatíveis com as nossas e que tratem os dados exclusivamente para a finalidade autorizada.",
    ],
  },
  {
    id: "seguranca",
    title: "5. Segurança",
    content: [
      "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, destruição ou alteração. Nosso site utiliza protocolo HTTPS com certificado SSL/TLS atualizado.",
      "O acesso aos dados pessoais é restrito aos colaboradores e parceiros que necessitam deles para executar suas funções, e todos estão sujeitos a obrigações de confidencialidade.",
      "Em caso de incidente de segurança que possa acarretar risco ou dano relevante a você, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados conforme determina a LGPD.",
    ],
  },
  {
    id: "direitos",
    title: "6. Direitos do Usuário",
    content: [
      "Nos termos da LGPD (Lei nº 13.709/2018), você tem direito a: confirmar a existência de tratamento; acessar seus dados; corrigir dados incompletos, inexatos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; solicitar a portabilidade dos dados; revogar o consentimento a qualquer momento.",
      "Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail indicado na seção de Contato. Responderemos em até 15 dias úteis.",
      "Caso considere que seus direitos não foram atendidos adequadamente, você pode apresentar reclamação perante a Autoridade Nacional de Proteção de Dados (ANPD) em www.gov.br/anpd.",
    ],
  },
  {
    id: "contato",
    title: "7. Contato",
    content: [
      "Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO):",
      "E-mail: privacidade@pimentacountryaj.com.br | WhatsApp: disponível no rodapé do site.",
      "Esta política pode ser atualizada periodicamente. Sempre que houver alterações relevantes, publicaremos a versão atualizada nesta página com a nova data de vigência. Recomendamos que você a consulte regularmente.",
    ],
  },
]

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Pimenta Country AJ
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD —
              Lei nº 13.709/2018), descrevemos abaixo como coletamos,
              usamos e protegemos seus dados pessoais.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Última atualização:</span>{" "}
              11 de abril de 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">

            {/* Sidebar nav */}
            <aside className="hidden lg:flex flex-col gap-1 h-fit sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Seções
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                >
                  {s.title}
                </a>
              ))}
            </aside>

            {/* Main content */}
            <div className="flex flex-col gap-10">
              {sections.map((section, idx) => (
                <div key={section.id} className="flex flex-col gap-4">
                  <div id={section.id} className="flex flex-col gap-3 scroll-mt-24">
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-3">
                      {section.content.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  {idx < sections.length - 1 && <Separator className="mt-2" />}
                </div>
              ))}

              {/* LGPD notice */}
              <div className="rounded-xl border border-border bg-muted p-6 mt-2">
                <p className="text-sm font-semibold text-foreground mb-1">
                  Base Legal — LGPD
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Esta política foi elaborada em conformidade com a Lei nº 13.709/2018
                  (Lei Geral de Proteção de Dados Pessoais — LGPD) e demais normativas
                  aplicáveis. Para dúvidas, entre em contato com nosso DPO ou acesse
                  o site oficial da ANPD em{" "}
                  <a
                    href="https://www.gov.br/anpd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    www.gov.br/anpd
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
