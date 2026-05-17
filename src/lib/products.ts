export type ProductCategory = "country" | "social" | "acessorio";
export type ProductGender = "masculino" | "feminino" | "unisex" | "infantil";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  ref?: string;
  category: ProductCategory;
  gender: "masculino" | "feminino" | "unisex" | "infantil";
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  isNew?: boolean;
  promoEndDate?: string;
  description: string;
  longDescription: string;
  features: string[];
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  inStock: boolean;
  badge?: string;
}

export const STANDARD_SIZES = [
  "90cm",
  "95cm",
  "100cm",
  "105cm",
  "110cm",
  "115cm",
  "120cm",
];

const products: Product[] = [
  {
    id: "1",
    slug: "country-tooled",
    ref: "PC-001",
    name: "Cinto Country Tooled",
    category: "country",
    gender: "masculino",
    price: 189.9,
    originalPrice: 229.9,
    discountPercent: 17,
    promoEndDate: "2026-05-15T23:59:59",
    description:
      "Cinto de couro legítimo feito à mão com gravação artesanal de arabescos e fivela western prateada. Pimenta Country AJ.",
    longDescription:
      "O Cinto Country Tooled é uma peça de artesanato genuíno, produzido em couro legítimo curtido ao vegetal. Cada cinto passa por horas de trabalho manual: a gravação de arabescos é feita à mão por nossos artesãos, garantindo que nenhuma peça seja idêntica à outra. A fivela western prateada com acabamento polido completa o visual clássico do estilo country, ideal para shows, rodeios e o dia a dia do campo.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal de arabescos feita à mão",
      "Fivela western prateada com acabamento polido",
      "Largura de 4 cm",
      "Passador e ponteira em aço inoxidável",
      "Costura reforçada dupla",
    ],
    colors: [
      { name: "Havana", hex: "#6B3A2A" },
      { name: "Preto", hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-tooled-floral.jpg",
      "/products/colecao-real-geral.jpg",
    ],
    inStock: true,
    badge: "Mais Vendido",
  },
  {
    id: "2",
    slug: "country-trancado",
    ref: "PC-002",
    name: "Cinto Country Trançado",
    category: "country",
    gender: "unisex",
    price: 219.9,
    isNew: true,
    description:
      "Cinto de couro legítimo trançado à mão no padrão basket weave com fivela western trabalhada. Artesanato Pimenta Country AJ.",
    longDescription:
      "O Cinto Country Trançado une técnica e tradição em cada tira de couro. O trançado no padrão basket weave é executado artesanalmente, entrelaçando tiras de couro legítimo para criar uma textura única que confere resistência extra e um visual inconfundível. A fivela western trabalhada, com detalhes em relevo, eleva ainda mais o caráter artístico da peça. Perfeito para quem aprecia o melhor do artesanato brasileiro.",
    features: [
      "Couro legítimo em tiras trançadas",
      "Padrão basket weave feito à mão",
      "Fivela western trabalhada com detalhes em relevo",
      "Largura de 4 cm",
      "Alta resistência pela estrutura trançada",
      "Acabamento com cera protetora natural",
    ],
    colors: [
      { name: "Café", hex: "#4A2C17" },
      { name: "Caramelo", hex: "#C68642" },
      { name: "Preto", hex: "#1A1A1A" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-trancado-real.jpg",
      "/products/colecao-real-country3.jpg",
    ],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "3",
    slug: "country-rodeo",
    ref: "PC-003",
    name: "Cinto Country Fivela Rodeo",
    category: "country",
    gender: "masculino",
    price: 249.9,
    description:
      "Cinto de couro legítimo feito à mão com estampa western e fivela grande oval com cavaleiro dourado em alto relevo. Pimenta Country AJ.",
    longDescription:
      "O Cinto Country Fivela Rodeo foi criado para quem não abre mão de presença e personalidade. O couro recebe estampa western trabalhada, criando uma superfície rica em detalhes. Mas a grande estrela é a fivela: de grande porte, no formato oval/retangular, traz em alto relevo a icônica figura de um cavaleiro dourado — símbolo da cultura rodeio que carrega história e identidade. Uma declaração de estilo para as pistas e além.",
    features: [
      "Couro legítimo com estampa western trabalhada",
      "Fivela grande oval/retangular em zamak dourado",
      "Cavaleiro em alto relevo na fivela",
      "Largura de 4,5 cm",
      "Reforço interno em aço",
      "Ideal para shows e rodeios",
    ],
    colors: [
      { name: "Havana", hex: "#6B3A2A" },
      { name: "Preto", hex: "#1A1A1A" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-tooled-penas.jpg",
      "/products/colecao-real-country2.jpg",
    ],
    inStock: true,
  },
  {
    id: "4",
    slug: "social-classico",
    ref: "PS-001",
    name: "Cinto Social Clássico",
    category: "social",
    gender: "masculino",
    price: 149.9,
    originalPrice: 189.9,
    discountPercent: 21,
    promoEndDate: "2026-05-15T23:59:59",
    description:
      "Cinto social de couro legítimo liso polido, feito à mão com fivela retangular cromada e acabamento fino. Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Clássico é a escolha certa para quem busca elegância sem exageros. Produzido em couro liso com acabamento polido de alta qualidade, o cinto tem caimento perfeito tanto em ternos quanto em calças casuais. A fivela retangular cromada com brilho espelhado garante um toque sofisticado e atemporal. Costura invisível e bordas aparadas à mão completam uma peça que resistirá ao tempo tanto em estilo quanto em durabilidade.",
    features: [
      "Couro liso polido de alta qualidade",
      "Fivela retangular cromada com brilho espelhado",
      "Largura de 3,5 cm",
      "Costura invisível",
      "Bordas aparadas à mão",
      "Versátil: formal e casual",
    ],
    colors: [
      { name: "Preto", hex: "#1A1A1A" },
      { name: "Marrom Escuro", hex: "#3B1E08" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-social-preto.jpg",
      "/products/colecao-real-social.jpg",
    ],
    inStock: true,
  },
  {
    id: "5",
    slug: "social-premium",
    ref: "PS-002",
    name: "Cinto Social Premium",
    category: "social",
    gender: "masculino",
    price: 179.9,
    description:
      "Cinto social de couro legítimo feito à mão com textura diamond cross-hatch e fivela prateada escovada. Qualidade artesanal Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Premium eleva o conceito de acessório masculino a outro patamar. O couro recebe tratamento especial que resulta na textura diamond cross-hatch — um padrão geométrico sutil em losangos que confere profundidade visual e toque diferenciado. A fivela prateada de design elegante, com linhas limpas e acabamento escovado, equilibra sofisticação e modernidade. Uma peça para quem entende que detalhes fazem toda a diferença.",
    features: [
      "Couro com textura diamond cross-hatch",
      "Fivela prateada com acabamento escovado",
      "Largura de 3,5 cm",
      "Tratamento anti-umidade",
      "Interior forrado em microfibra",
      "Embalagem premium para presente",
    ],
    colors: [
      { name: "Café", hex: "#4A2C17" },
      { name: "Preto", hex: "#1A1A1A" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-social-diamond.jpg",
      "/products/cinto-social-whisky.jpg",
    ],
    inStock: true,
    badge: "Premium",
  },
  // ─── Produtos do catálogo CSV ───────────────────────────────────────────────
  {
    id: "9",
    slug: "cinto-country-4cm",
    ref: "PC-006",
    name: "Cinto Country 4.0cm",
    category: "country",
    gender: "unisex",
    price: 137.0,
    description: "Cinto country de couro legítimo 4.0cm com ilhós artesanais e fivela ornamentada. Estilo country autêntico. Pimenta Country AJ.",
    longDescription: "O Cinto Country 4.0cm é um clássico da Pimenta Country AJ. Produzido em couro legítimo com largura de 4.0cm, disponível com ou sem ilhós. A versão com ilhós traz dupla fileira de ilhós metálicos aplicados à mão ao longo da correia, e fivela ornamentada com detalhes em relevo. Resistente e versátil, ideal para o uso no campo ou em eventos country.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 4.0 cm",
      "Disponível com ilhós decorativos",
      "Fivela ornamentada artesanal",
      "Costura reforçada dupla",
      "Modelo unissex",
    ],
    colors: [{ name: "Preto", hex: "#1A1A1A" }, { name: "Havana", hex: "#6B3A2A" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-country-4cm-ilhos.jpg", "/products/cinto-country-4cm-ilhos-2.jpg"],
    inStock: true,
  },
  {
    id: "10",
    slug: "cinto-americano-4-5cm",
    ref: "PC-007",
    name: "Cinto Americano 4.5cm",
    category: "country",
    gender: "masculino",
    price: 147.0,
    description: "Cinto country americano 4.5cm de couro legítimo com fivela oval grande estilo rodeo. Gravação artesanal e couro premium. Pimenta Country AJ.",
    longDescription: "O Cinto Americano 4.5cm é a peça para quem quer presença e estilo no campo e nas pistas. Com largura de 4.5cm em couro legítimo, traz gravação artesanal de cenas country ao longo de toda a correia. A fivela oval grande no estilo americano com cavaleiro ou acabamento prateado é a assinatura inconfundível do estilo country do centro-oeste. Feito à mão por artesãos especializados.",
    features: [
      "Couro legítimo premium",
      "Largura de 4.5 cm",
      "Gravação artesanal de cenas country",
      "Fivela oval estilo americano/rodeo",
      "Passador e ponteira artesanais",
      "Ideal para shows e rodeios",
    ],
    colors: [{ name: "Havana", hex: "#6B3A2A" }, { name: "Café", hex: "#4A2C17" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-americano-4-5cm-rodeo.jpg", "/products/cinto-americano-4-5cm.jpg"],
    inStock: true,
    badge: "Mais Vendido",
  },
  {
    id: "11",
    slug: "cinto-social-3-5cm",
    ref: "PS-004",
    name: "Cinto Social 3.5cm Liso",
    category: "social",
    gender: "masculino",
    price: 95.0,
    description: "Cinto social de couro legítimo liso 3.5cm com textura diamond e fivela western. Elegância e qualidade artesanal. Pimenta Country AJ.",
    longDescription: "O Cinto Social 3.5cm Liso combina elegância e durabilidade para o uso diário. Confeccionado em couro legítimo com textura diamond, disponível em preto, havana e outras cores. A fivela western discreta e o acabamento polido conferem um visual sofisticado que vai do casual ao social. Uma peça versátil para o homem moderno que aprecia qualidade artesanal.",
    features: [
      "Couro legítimo polido",
      "Largura de 3.5 cm",
      "Textura diamond artesanal",
      "Fivela western elegante",
      "Disponível em múltiplas cores",
      "Uso diário — casual e social",
    ],
    colors: [{ name: "Preto", hex: "#1A1A1A" }, { name: "Havana", hex: "#6B3A2A" }, { name: "Whisky", hex: "#A0522D" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-social-3-5cm.jpg", "/products/cinto-social-3-5cm-colecao.jpg"],
    inStock: true,
  },
  {
    id: "12",
    slug: "cinto-social-3-5cm-pesp",
    ref: "PS-005",
    name: "Cinto Social 3.5cm Pesponto",
    category: "social",
    gender: "masculino",
    price: 97.0,
    description: "Cinto social de couro legítimo 3.5cm com textura diamond e pesponto contrastante. Fivela western. Artesanato Pimenta Country AJ.",
    longDescription: "O Cinto Social 3.5cm Pesponto diferencia-se pelo acabamento refinado: o pesponto (costura aparente) em linha contrastante percorre toda a extensão do couro, adicionando um detalhe visual exclusivo. A textura diamond do couro e a fivela western com acabamento prateado completam uma peça que transita entre o clássico e o diferenciado. Feito à mão em Sertanópolis, Paraná.",
    features: [
      "Couro legítimo com textura diamond",
      "Largura de 3.5 cm",
      "Pesponto artesanal contrastante",
      "Fivela western prateada",
      "Acabamento premium",
      "Costura reforçada dupla",
    ],
    colors: [{ name: "Havana", hex: "#6B3A2A" }, { name: "Preto", hex: "#1A1A1A" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-social-3-5cm-pesp.jpg", "/products/cinto-social-3-5cm-pesp-2.jpg"],
    inStock: true,
  },
  {
    id: "13",
    slug: "cinto-feminino-americano-2cm",
    ref: "PF-001",
    name: "Cinto Feminino Americano 2cm",
    category: "country",
    gender: "feminino",
    price: 87.0,
    isNew: true,
    description: "Cinto feminino americano 2cm de couro legítimo com fivela cravejada de cristais. Estilo e brilho para o look country feminino. Pimenta Country AJ.",
    longDescription: "O Cinto Feminino Americano 2cm é a peça que une o estilo country com o glamour feminino. Confeccionado em couro legítimo fino de 2cm, traz como destaque a fivela cravejada de cristais, que adiciona brilho e sofisticação a qualquer look. Perfeito para festas, shows e eventos country femininos. Acabamento artesanal premium com passador e ponteira refinados.",
    features: [
      "Couro legítimo fino polido",
      "Largura de 2.0 cm",
      "Fivela cravejada de cristais",
      "Acabamento artesanal premium",
      "Ponteira e passador refinados",
      "Ideal para festas e shows country",
    ],
    colors: [{ name: "Preto", hex: "#1A1A1A" }, { name: "Café", hex: "#4A2C17" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-feminino-americano-2cm.jpg", "/products/cinto-feminino-americano-2cm-2.jpg"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "14",
    slug: "cinto-feminino-1-5cm",
    ref: "PF-002",
    name: "Cinto Feminino Country 1.5cm",
    category: "country",
    gender: "feminino",
    price: 85.0,
    description: "Cinto feminino country 1.5cm de couro legítimo com fivela western e ponteira artesanal. Fino, leve e estiloso. Pimenta Country AJ.",
    longDescription: "O Cinto Feminino Country 1.5cm é perfeito para quem busca discrição e elegância no estilo country feminino. A espessura fina de 1.5cm em couro legítimo de qualidade resulta numa peça levinha que valoriza qualquer look — de vestidos a jeans. A fivela western com ponteira artesanal completa o visual com autenticidade.",
    features: [
      "Couro legítimo fino",
      "Largura de 1.5 cm",
      "Fivela western artesanal",
      "Ponteira metálica",
      "Leve e confortável",
      "Versátil: combina com vestidos, jeans e saias",
    ],
    colors: [{ name: "Preto", hex: "#1A1A1A" }, { name: "Marrom Escuro", hex: "#3B1E08" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-feminino-1-5cm.jpg", "/products/cinto-feminino-1-5cm-2.jpg"],
    inStock: true,
  },
  {
    id: "15",
    slug: "cinto-social-feminino-1-5cm",
    ref: "PF-003",
    name: "Cinto Social Feminino 1.5cm",
    category: "social",
    gender: "feminino",
    price: 85.0,
    description: "Cinto social feminino 1.5cm de couro legítimo liso com fivela elegante. Para o look social com toque artesanal. Pimenta Country AJ.",
    longDescription: "O Cinto Social Feminino 1.5cm é a escolha certa para compor looks sociais e elegantes. Confeccionado em couro legítimo liso havana ou preto, com espessura de 1.5cm que garante leveza e versatilidade. A fivela delicada de acabamento polido adiciona o toque final de sofisticação. Uma peça artesanal para o dia a dia e ocasiões especiais.",
    features: [
      "Couro legítimo liso polido",
      "Largura de 1.5 cm",
      "Fivela elegante de acabamento polido",
      "Disponível em havana e preto",
      "Leve e versátil",
      "Para uso social e casual",
    ],
    colors: [{ name: "Havana", hex: "#6B3A2A" }, { name: "Preto", hex: "#1A1A1A" }],
    sizes: STANDARD_SIZES,
    images: ["/products/cinto-social-1-5cm.jpg", "/products/cinto-social-1-5cm-havana.jpg"],
    inStock: true,
  },
  // ─── Acessórios: Capas de Celular ────────────────────────────────────────────
  {
    id: "16",
    slug: "capa-celular-canguru",
    ref: "AC-001",
    name: "Capa de Celular Canguru",
    category: "acessorio",
    gender: "unisex",
    price: 77.0,
    isNew: true,
    description: "Capa de celular artesanal em couro legítimo estilo canguru com gravação country. Presa no cinto, protege e decora. Pimenta Country AJ.",
    longDescription: "A Capa de Celular Canguru é um acessório artesanal único da Pimenta Country AJ. Confeccionada em couro legítimo com textura basket weave e gravação temática country (cavalo, touro), a capinha prende-se diretamente no cinto com laço de couro. Protege o celular com estilo e autenticidade, sendo perfeita para quem trabalha no campo, vai a rodeios ou simplesmente aprecia o estilo country no dia a dia.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Textura basket weave artesanal",
      "Gravação temática country (cavalo/touro)",
      "Fecho em botão de pressão",
      "Laço de couro para prender no cinto",
      "Compatível com smartphones médios",
    ],
    colors: [{ name: "Havana", hex: "#6B3A2A" }, { name: "Café", hex: "#4A2C17" }],
    sizes: ["Único"],
    images: ["/products/capa-celular-canguru-cavalo.jpg", "/products/capa-celular-canguru-touro.jpg"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "17",
    slug: "capa-celular-gg",
    ref: "AC-002",
    name: "Capa de Celular GG",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description: "Capa de celular artesanal em couro legítimo GG. Para smartphones maiores. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription: "A Capa de Celular GG foi desenvolvida para acomodar smartphones de tela maior. Feita em couro legítimo liso ou com gravação country, com fecho em botão de pressão resistente e encaixe direto no cinto. Disponível em preto e havana, é a combinação perfeita de funcionalidade e estilo artesanal para quem não abre mão da praticidade sem perder a identidade country.",
    features: [
      "Couro legítimo",
      "Tamanho GG — para smartphones maiores",
      "Fecho em botão de pressão",
      "Encaixe no cinto",
      "Disponível em preto e havana",
      "Costura reforçada artesanal",
    ],
    colors: [{ name: "Preto", hex: "#1A1A1A" }, { name: "Havana", hex: "#6B3A2A" }],
    sizes: ["GG"],
    images: ["/products/capa-celular-gg-preta.jpg", "/products/capa-celular-gg-havana.jpg"],
    inStock: true,
  },
  // ─── Acessórios: Bainhas ─────────────────────────────────────────────────────
  {
    id: "18",
    slug: "bainha-tomate-g",
    ref: "AC-003",
    name: "Bainha de Couro Artesanal G",
    category: "acessorio",
    gender: "unisex",
    price: 25.0,
    description: "Bainha artesanal de couro legítimo tamanho G com gravação country. Para canivete ou ferramenta. Pimenta Country AJ.",
    longDescription: "A Bainha de Couro Artesanal G é feita em couro legítimo com textura basket weave e gravação country personalizada. Ideal para guardar canivetes, facas ou pequenas ferramentas de campo. O fecho em botão de pressão segura o item com firmeza, e o laço lateral permite prendê-la ao cinto. Tamanho G — para itens maiores.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Textura basket weave artesanal",
      "Gravação country personalizada",
      "Fecho em botão de pressão",
      "Laço para cinto",
      "Tamanho G — para canivetes e ferramentas maiores",
    ],
    colors: [{ name: "Café", hex: "#4A2C17" }, { name: "Havana", hex: "#6B3A2A" }],
    sizes: ["G"],
    images: ["/products/bainha-tomate-g.jpg", "/products/bainha-tomate-g-2.jpg"],
    inStock: true,
  },
  {
    id: "19",
    slug: "bainha-tomate-m",
    ref: "AC-004",
    name: "Bainha de Couro Artesanal M",
    category: "acessorio",
    gender: "unisex",
    price: 25.0,
    description: "Bainha artesanal de couro legítimo tamanho M com gravação de logo Pimenta Country. Para canivete ou ferramenta. Pimenta Country AJ.",
    longDescription: "A Bainha de Couro Artesanal M traz o símbolo da Pimenta Country gravado em destaque sobre textura basket weave. Produzida em couro legítimo havana, com fecho em pressão e laço para cinto. Tamanho M para canivetes e ferramentas de porte médio. Uma peça artesanal com identidade.",
    features: [
      "Couro legítimo havana",
      "Gravação do símbolo Pimenta Country",
      "Textura basket weave artesanal",
      "Fecho em botão de pressão",
      "Laço para cinto",
      "Tamanho M",
    ],
    colors: [{ name: "Havana", hex: "#6B3A2A" }],
    sizes: ["M"],
    images: ["/products/bainha-tomate-m.jpg", "/products/bainha-tomate-m-2.jpg"],
    inStock: true,
  },
  {
    id: "20",
    slug: "bainha-tomate-p",
    ref: "AC-005",
    name: "Bainha de Couro Artesanal P",
    category: "acessorio",
    gender: "unisex",
    price: 25.0,
    description: "Bainha artesanal de couro legítimo tamanho P. Para canivetes pequenos e ferramentas. Pimenta Country AJ.",
    longDescription: "A Bainha de Couro Artesanal P é a versão compacta da linha de bainhas Pimenta Country AJ. Feita em couro legítimo com acabamento artesanal, fecho em pressão e laço para cinto. Tamanho P, ideal para canivetes pequenos, chave faca e ferramentas compactas de campo. Um presente funcional e com estilo.",
    features: [
      "Couro legítimo artesanal",
      "Fecho em botão de pressão",
      "Laço para cinto",
      "Tamanho P — canivetes pequenos",
      "Acabamento polido",
      "Presente ideal para quem gosta do campo",
    ],
    colors: [{ name: "Havana", hex: "#6B3A2A" }, { name: "Café", hex: "#4A2C17" }],
    sizes: ["P"],
    images: ["/products/bainha-tomate-p.jpg", "/products/bainha-tomate-m.jpg"],
    inStock: true,
  },
  {
    id: "6",
    slug: "country-unisex-ilhos",
    ref: "PC-004",
    name: "Cinto Country Unisex com Ilhós",
    category: "country",
    gender: "unisex",
    price: 169.9,
    isNew: true,
    description:
      "Cinto de couro legítimo artesanal com dupla fileira de ilhós e fivela decorada. Estilo country autêntico para todos. Pimenta Country AJ.",
    longDescription:
      "O Cinto Country Unisex com Ilhós é uma das peças mais versáteis da Pimenta Country AJ. Produzido em couro legítimo curtido ao vegetal, seu diferencial é a dupla fileira de ilhós aplicados à mão ao longo de toda a extensão da correia, criando um visual robusto e cheio de personalidade. A fivela decorada com acabamento especial completa o conjunto com sofisticação country. Peça unissex, perfeita para quem quer estilo sem abrir mão de autenticidade.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Dupla fileira de ilhós aplicados à mão",
      "Fivela decorada com acabamento especial",
      "Largura de 3,5 cm",
      "Acabamento reforçado nas bordas",
      "Modelo unissex — serve masculino e feminino",
    ],
    colors: [
      { name: "Havana", hex: "#6B3A2A" },
      { name: "Preto", hex: "#1A1A1A" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-unisex-ilhos.jpg",
      "/products/colecao-real-unisex.jpg",
    ],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "7",
    slug: "country-infantil-fazendinha",
    ref: "PC-005",
    name: "Cinto Infantil Country Fazendinha",
    category: "country",
    gender: "infantil",
    price: 80.0,
    isNew: true,
    description:
      "Cinto infantil de couro legítimo com gravação artesanal de cenas de fazenda e fivela oval decorada. Para os pequenos cowboys. Pimenta Country AJ.",
    longDescription:
      "O Cinto Infantil Country Fazendinha é feito especialmente para os pequenos fãs do estilo country. Confeccionado em couro legítimo de alta qualidade, traz gravação artesanal com cenas de fazenda — cavalos, flores do campo e vida rural — em toda a extensão do cinto. A fivela oval decorada com detalhes dourados é o toque especial que faz qualquer criança se sentir um verdadeiro cowboy. Resistente, confortável e com acabamento seguro para uso infantil.",
    features: [
      "Couro legítimo de alta qualidade",
      "Gravação artesanal com cenas de fazenda",
      "Fivela oval decorada com detalhes dourados",
      "Largura de 2,5 cm — tamanho infantil",
      "Acabamento seguro, sem rebarbas",
      "Perfeito para festas juninas e eventos country",
    ],
    colors: [
      { name: "Havana", hex: "#6B3A2A" },
      { name: "Café", hex: "#4A2C17" },
    ],
    sizes: ["40cm", "45cm", "50cm", "55cm", "60cm", "65cm"],
    images: [
      "/products/cinto-infantil-fazendinha.jpg",
      "/products/cinto-infantil-escuro.jpg",
    ],
    inStock: true,
    badge: "Infantil",
  },
  {
    id: "8",
    slug: "social-feminino-fino",
    ref: "PS-003",
    name: "Cinto Social Feminino Fino",
    category: "social",
    gender: "feminino",
    price: 129.9,
    isNew: true,
    description:
      "Cinto social feminino de couro legítimo fino, feito à mão com fivela western delicada e ponteira metálica. Elegância e estilo. Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Feminino Fino é a escolha perfeita para mulheres que apreciam a sofisticação do couro artesanal. Com espessura reduzida e acabamento polido, o cinto valoriza qualquer look — de vestidos a calças sociais. A fivela western delicada com detalhes em prata e a ponteira metálica nas extremidades são assinaturas do cuidado artesanal Pimenta Country AJ. Uma peça que transita entre o estilo country feminino e o social com elegância.",
    features: [
      "Couro legítimo fino polido",
      "Fivela western delicada em prata",
      "Ponteira metálica artesanal",
      "Largura de 2,5 cm",
      "Acabamento liso e polido",
      "Versátil: combina com looks sociais e country feminino",
    ],
    colors: [
      { name: "Preto", hex: "#1A1A1A" },
      { name: "Marrom Escuro", hex: "#3B1E08" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      "/products/cinto-social-fino.jpg",
      "/products/cinto-social-fino2.jpg",
    ],
    inStock: true,
    badge: "Novo",
  },
];

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge !== undefined);
}

export function getPromoProducts(): Product[] {
  return products.filter((p) => (p.discountPercent ?? 0) > 0);
}

export function getAllColors(): Array<{ name: string; hex: string }> {
  const seen = new Set<string>();
  const colors: Array<{ name: string; hex: string }> = [];
  for (const product of products) {
    for (const color of product.colors) {
      if (!seen.has(color.hex)) {
        seen.add(color.hex);
        colors.push(color);
      }
    }
  }
  return colors;
}

export function getProductsByGender(gender: string): Product[] {
  return products.filter((p) => p.gender === gender);
}

export function getUnisexAndInfantilProducts(): Product[] {
  return products.filter((p) => p.gender === "unisex" || p.gender === "infantil");
}

export function getAccessories(): Product[] {
  return products.filter((p) => p.category === "acessorio");
}

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
