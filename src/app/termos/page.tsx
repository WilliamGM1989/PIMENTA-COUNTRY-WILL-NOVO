import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Termos de Uso | Pimenta Country AJ",
  description:
    "Leia os Termos de Uso da Pimenta Country AJ — condições para compra, envio, trocas e responsabilidades aplicáveis a clientes no Brasil.",
  openGraph: {
    title: "Termos de Uso | Pimenta Country AJ",
    description:
      "Condições gerais de uso e compra na loja Pimenta Country AJ.",
    type: "website",
    locale: "pt_BR",
  },
  alternates: { canonical: "/termos" },
  robots: { index: false, follow: false },
}

const sections = [
  {
    id: "aceitacao",
    title: "1. Aceitação dos Termos",
    content: [
      "Ao acessar e utilizar o site da Pimenta Country AJ (doravante \"Loja\"), bem como ao realizar qualquer compra, você declara ter lido, compreendido e aceito integralmente estes Termos de Uso e nossa Política de Privacidade.",
      "Se você não concordar com qualquer disposição destes Termos, solicitamos que não utilize os serviços da Loja. O uso continuado do site após alterações nos Termos implica aceitação das novas condições.",
      "Estes Termos são regidos pela legislação brasileira, em especial pelo Código de Defesa do Consumidor (Lei nº 8.078/1990), pelo Marco Civil da Internet (Lei nº 12.965/2014) e pela LGPD (Lei nº 13.709/2018).",
    ],
  },
  {
    id: "produtos",
    title: "2. Produtos e Preços",
    content: [
      "Todos os cintos comercializados pela Pimenta Country AJ são fabricados artesanalmente com couro legítimo. As descrições, fotografias e especificações dos produtos são elaboradas com o máximo de fidelidade possível; pequenas variações de cor e textura são inerentes à natureza do couro natural e não constituem defeito.",
      "Os preços exibidos são em Reais (R$) e incluem os tributos aplicáveis, salvo indicação em contrário. A Loja se reserva o direito de alterar preços a qualquer momento, sendo que o preço válido para o cliente é sempre aquele vigente no momento da confirmação do pedido.",
      "Eventuais erros de precificação serão comunicados ao cliente antes da confirmação do pagamento, garantindo a opção de cancelamento sem qualquer custo.",
    ],
  },
  {
    id: "pedidos",
    title: "3. Pedidos e Pagamentos",
    content: [
      "Os pedidos somente são confirmados após a aprovação do pagamento pelo processador financeiro. Nos pagamentos via Pix ou boleto bancário, o prazo de compensação pode ser de até 2 dias úteis.",
      "Aceitamos as seguintes formas de pagamento: Pix (confirmação instantânea), cartão de crédito (parcelamento conforme condições vigentes), cartão de débito e boleto bancário.",
      "A Loja se reserva o direito de cancelar pedidos em caso de suspeita de fraude, inconsistência cadastral ou indisponibilidade do produto, com reembolso integral ao cliente em até 7 dias úteis.",
    ],
  },
  {
    id: "envio",
    title: "4. Envio e Entrega",
    content: [
      "Os pedidos são enviados via Correios (PAC ou SEDEX) ou por transportadora parceira, conforme opção selecionada no checkout. Os prazos de entrega são estimados e contados a partir da confirmação do pagamento e despacho da mercadoria.",
      "O frete grátis é aplicado automaticamente em pedidos acima de R$ 299,90 para todo o Brasil, mediante uso da modalidade PAC. Para regiões remotas ou de difícil acesso, poderá haver acréscimo no prazo de entrega.",
      "A Loja não se responsabiliza por atrasos decorrentes de greves, eventos climáticos, restrições operacionais dos Correios ou situações de força maior. Em caso de extravio, abriremos reclamação junto à transportadora e providenciaremos reenvio ou reembolso.",
    ],
  },
  {
    id: "trocas",
    title: "5. Trocas e Devoluções",
    content: [
      "Conforme o Código de Defesa do Consumidor, o cliente tem direito a se arrepender da compra em até 7 dias corridos a partir do recebimento do produto, sem necessidade de justificativa, com reembolso integral incluindo frete.",
      "Para troca por tamanho, modelo ou cor, o prazo é de 30 dias corridos a partir do recebimento. O produto deve ser devolvido sem uso, com embalagem original e etiquetas intactas.",
      "Produtos com defeito de fabricação são cobertos por garantia de 90 dias conforme o CDC. Para solicitar troca ou devolução, entre em contato via WhatsApp ou e-mail antes de enviar o produto. Consulte nossa página de Trocas e Devoluções para o passo a passo completo.",
    ],
  },
  {
    id: "propriedade",
    title: "6. Propriedade Intelectual",
    content: [
      "Todos os conteúdos presentes no site — incluindo logotipo, textos, fotografias, descrições de produtos, layout e código-fonte — são de propriedade exclusiva da Pimenta Country AJ e estão protegidos pela Lei de Direitos Autorais (Lei nº 9.610/1998).",
      "É vedada a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo sem autorização prévia e expressa por escrito da Pimenta Country AJ.",
      "O uso indevido dos direitos de propriedade intelectual aqui descritos sujeitará o infrator às sanções cíveis e penais previstas na legislação brasileira.",
    ],
  },
  {
    id: "responsabilidade",
    title: "7. Limitação de Responsabilidade",
    content: [
      "A Pimenta Country AJ não se responsabiliza por danos decorrentes de uso indevido dos produtos, informações incorretas fornecidas pelo cliente no cadastro ou no pedido, ou por falhas em sistemas de terceiros (processadores de pagamento, transportadoras, provedores de internet).",
      "Nossa responsabilidade total em qualquer hipótese fica limitada ao valor efetivamente pago pelo cliente no pedido em questão.",
      "Nada nestes Termos exclui ou limita direitos que não possam ser excluídos ou limitados pela lei brasileira aplicável ao consumidor.",
    ],
  },
  {
    id: "lei",
    title: "8. Lei Aplicável",
    content: [
      "Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil.",
      "Quaisquer disputas decorrentes destes Termos serão submetidas ao foro da comarca do domicílio do consumidor, nos termos do art. 101, inciso I, do Código de Defesa do Consumidor.",
      "A Pimenta Country AJ incentiva a resolução amigável de conflitos. Em caso de insatisfação, entre em contato com nosso suporte antes de qualquer medida judicial ou administrativa.",
    ],
  },
]

export default function TermosPage() {
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
              Termos de Uso
            </h1>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              Leia atentamente as condições abaixo antes de utilizar nosso site
              ou realizar qualquer compra. Ao navegar ou comprar, você concorda
              com estes termos.
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

              {/* CDC notice */}
              <div className="rounded-xl border border-border bg-muted p-6 mt-2">
                <p className="text-sm font-semibold text-foreground mb-1">
                  Proteção ao Consumidor
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seus direitos como consumidor são garantidos pelo Código de
                  Defesa do Consumidor (Lei nº 8.078/1990). Em caso de
                  insatisfação, você também pode registrar reclamação no{" "}
                  <a
                    href="https://www.consumidor.gov.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    consumidor.gov.br
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
