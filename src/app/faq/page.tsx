import type { Metadata } from "next"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Pimenta Country AJ",
  description:
    "Tire suas dúvidas sobre os cintos de couro artesanais Pimenta Country AJ — couro legítimo, tamanhos, pedidos, entrega, trocas e muito mais.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Perguntas Frequentes | Pimenta Country AJ",
    description:
      "Respostas para as principais dúvidas sobre cintos de couro artesanais, pedidos e entrega da Pimenta Country AJ.",
    type: "website",
    locale: "pt_BR",
  },
}

const faqCategories = [
  {
    id: "produtos",
    title: "Produtos",
    icon: "🐮",
    items: [
      {
        q: "Os cintos são de couro legítimo?",
        a: "Sim. Todos os cintos da Pimenta Country AJ são fabricados com couro bovino legítimo, selecionado pelo toque, espessura e textura. Não utilizamos couro sintético, ecológico ou bonded leather em nenhum dos nossos produtos. Cada peça carrega as marcas naturais do couro, que são características valorizadas — não defeitos.",
      },
      {
        q: "Como escolher o tamanho correto do cinto?",
        a: "O tamanho do cinto deve corresponder à medida da sua cintura onde você costuma usar o cinto, não ao tamanho da calça. Meça com uma fita métrica passando pela posição do furo que você mais usaria e consulte nossa tabela de medidas na página do produto. Em caso de dúvida entre dois tamanhos, recomendamos o maior — é mais fácil fazer um furo adicional do que encurtar.",
      },
      {
        q: "Qual a diferença entre os modelos country e social?",
        a: "Os cintos country são mais largos (geralmente 4 cm ou mais), com fivelas grandes, apliques e detalhes típicos do universo western — ideais para shows, festas country e uso casual. Os cintos sociais são mais estreitos (2,5 a 3,5 cm), com acabamento refinado e fivelas discretas, perfeitos para uso no trabalho, eventos formais e combinações com calça social.",
      },
      {
        q: "Como cuidar do meu cinto de couro?",
        a: "Para conservar seu cinto por muitos anos: evite contato prolongado com água; limpe com pano seco ou levemente úmido; aplique cera ou condicionador de couro a cada 3-6 meses; guarde em local seco e arejado, de preferência pendurado; evite dobrar o cinto em ângulo muito agudo. Com o uso e os cuidados corretos, o couro envelhece com personalidade.",
      },
      {
        q: "Os cintos são feitos à mão?",
        a: "Sim. Todo o processo de fabricação é artesanal — do corte à costura, passando pela fixação das fivelas e o acabamento final com cera. Cada peça pode apresentar pequenas variações que são marcas da produção artesanal e agregam unicidade ao produto.",
      },
    ],
  },
  {
    id: "pedidos",
    title: "Pedidos",
    icon: "🛒",
    items: [
      {
        q: "Como faço para comprar?",
        a: "Navegue pelo nosso catálogo, escolha o modelo e o tamanho desejado, adicione ao carrinho e finalize a compra preenchendo seus dados de entrega e escolhendo a forma de pagamento. Após a confirmação do pagamento, você receberá um e-mail de confirmação com os detalhes do pedido.",
      },
      {
        q: "Quais são as formas de pagamento aceitas?",
        a: "Aceitamos Pix (confirmação imediata), cartão de crédito (parcelamento disponível conforme condições vigentes), cartão de débito e boleto bancário (prazo de compensação de até 2 dias úteis). Todos os pagamentos são processados por gateways certificados e seguros.",
      },
      {
        q: "Posso cancelar ou alterar meu pedido?",
        a: "Cancelamentos e alterações podem ser feitos até o momento do despacho do pedido. Entre em contato imediatamente pelo WhatsApp caso precise fazer alguma alteração. Após o envio, será necessário aguardar o recebimento e seguir o processo de troca ou devolução.",
      },
    ],
  },
  {
    id: "entrega",
    title: "Entrega",
    icon: "📦",
    items: [
      {
        q: "Qual o prazo de entrega?",
        a: "Trabalhamos com Correios PAC (5 a 10 dias úteis) e SEDEX (2 a 5 dias úteis). Os prazos são contados a partir da confirmação do pagamento e podem variar conforme a região. Regiões Norte e Nordeste podem ter prazos ligeiramente maiores. Confira nossa página de Prazo de Entrega para detalhes por região.",
      },
      {
        q: "O frete é grátis?",
        a: "Sim! Pedidos acima de R$ 299,90 têm frete grátis via PAC para todo o Brasil. Para pedidos abaixo desse valor, o frete é calculado automaticamente no checkout com base no CEP de entrega e na modalidade escolhida.",
      },
      {
        q: "Como rastrear meu pedido?",
        a: "Após o despacho, você receberá o código de rastreio por e-mail e WhatsApp. Use esse código no site dos Correios (correios.com.br) para acompanhar a entrega em tempo real. Se não receber o código em 2 dias úteis após a confirmação do pagamento, entre em contato conosco.",
      },
      {
        q: "Entregam para todo o Brasil?",
        a: "Sim, entregamos para todos os estados brasileiros via Correios. Para localidades de difícil acesso, o prazo pode ser um pouco maior do que o estimado. Caso seu CEP não apareça no checkout, entre em contato conosco.",
      },
    ],
  },
  {
    id: "trocas",
    title: "Trocas e Devoluções",
    icon: "🔄",
    items: [
      {
        q: "Posso trocar se o cinto não servir?",
        a: "Sim. Você tem 30 dias corridos após o recebimento para solicitar a troca por outro tamanho, modelo ou cor. O produto deve estar sem uso, com embalagem original e etiquetas intactas. Entre em contato pelo WhatsApp para iniciar o processo. O custo do frete de devolução em trocas por preferência é do cliente.",
      },
      {
        q: "E se eu me arrepender da compra?",
        a: "Conforme o Código de Defesa do Consumidor, você tem 7 dias corridos após o recebimento para desistir da compra sem qualquer justificativa, com reembolso integral do valor pago incluindo o frete. Nesse caso, o frete de devolução é por nossa conta.",
      },
      {
        q: "O que fazer se o produto chegar com defeito?",
        a: "Entre em contato imediatamente pelo WhatsApp enviando fotos do defeito. Produtos com defeito de fabricação têm garantia de 90 dias conforme o CDC. Providenciaremos troca ou reembolso completo, com o frete de devolução inteiramente por nossa conta.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Atendimento
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Perguntas Frequentes
            </h1>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              Encontre respostas para as dúvidas mais comuns sobre nossos
              produtos, pedidos, entregas e trocas.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story strip ── */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Mais de 30 anos de artesanato em couro.</span>{" "}
              A família Silva produz cintos legítimos desde Sertanópolis, PR — e está aqui para
              esclarecer qualquer dúvida que você tiver.
            </p>
            <Link
              href="/nossa-historia"
              className="shrink-0 text-xs font-semibold text-accent hover:underline underline-offset-4 transition-colors"
            >
              Conheça nossa história →
            </Link>
          </div>
        </div>
      </div>

      {/* ── FAQ Content ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Category nav — quick scroll */}
          <nav className="flex flex-wrap gap-2 mb-12 justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <span aria-hidden>{cat.icon}</span>
                {cat.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14">
            {faqCategories.map((category, catIdx) => (
              <div key={category.id} className="flex flex-col gap-6">
                <div
                  id={category.id}
                  className="flex items-center gap-3 scroll-mt-24"
                >
                  <span className="text-2xl" aria-hidden>{category.icon}</span>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {category.items.map((item, itemIdx) => (
                    <details
                      key={itemIdx}
                      className="group rounded-xl border border-border bg-card overflow-hidden"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-4 px-6 py-4 text-sm font-semibold text-foreground hover:bg-muted transition-colors list-none select-none">
                        <span className="leading-relaxed">{item.q}</span>
                        <span
                          aria-hidden
                          className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-border px-6 py-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>

                {catIdx < faqCategories.length - 1 && (
                  <Separator className="mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section className="bg-muted py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Não encontrou o que procurava?
            </h2>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Nossa equipe está pronta para te ajudar. Fale diretamente com a
              gente pelo WhatsApp.
            </p>
            <a
              href={`https://wa.me/554391432721?text=${encodeURIComponent("Olá! Tenho uma dúvida sobre os produtos da Pimenta Country AJ.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
