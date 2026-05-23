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

const C = "/products/catalog"; // atalho para o prefixo das imagens do catálogo

const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CINTOS COUNTRY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "101",
    slug: "cinto-cavaleiro-4cm",
    ref: "PC-101",
    name: "Cinto Cavaleiro 4cm",
    category: "country",
    gender: "masculino",
    price: 134.0,
    description:
      "Cinto country de couro legítimo 4cm feito à mão com gravação artesanal e fivela western. Disponível em Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Cavaleiro 4cm é um dos modelos mais completos da Pimenta Country AJ. Produzido em couro legítimo curtido ao vegetal, com largura de 4cm, traz gravação artesanal ao longo de toda a correia e fivela western trabalhada com acabamento polido. Cada detalhe — da fivela à ponteira com o logo da marca — é trabalhado individualmente à mão. Disponível nas cores Bordô, Café, Preto e Whisky, é a escolha certa para shows de rodeio, festas country e o dia a dia do campo.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 4 cm",
      "Gravação artesanal em toda a correia",
      "Fivela western trabalhada com acabamento polido",
      "Ponteira com logo Pimenta Country AJ",
      "Costura reforçada dupla",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/cavaleiro-borde-1.jpg`,
      `${C}/cavaleiro-cafe-1.jpg`,
      `${C}/cavaleiro-borde-2.jpg`,
      `${C}/cavaleiro-cafe-2.jpg`,
      `${C}/cavaleiro-borde-fivela.jpg`,
      `${C}/cavaleiro-cafe-fivela.jpg`,
      `${C}/cavaleiro-cafe-corpo.jpg`,
      `${C}/cavaleiro-borde-ponteira.jpg`,
      `${C}/cavaleiro-cafe-ponteira.jpg`,
      `${C}/cavaleiro-borde-ponteira-logo.jpg`,
      `${C}/cavaleiro-borde-3.jpg`,
      `${C}/cavaleiro-preto-1.jpg`,
      `${C}/cavaleiro-whisky-1.jpg`,
    ],
    inStock: true,
    badge: "Mais Vendido",
  },
  {
    id: "102",
    slug: "cinto-balaio-country-4cm",
    ref: "PC-102",
    name: "Cinto Country Balaio 4cm",
    category: "country",
    gender: "masculino",
    price: 134.0,
    description:
      "Cinto country de couro legítimo 4cm com textura trançada tipo balaio e fivela western. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Country Balaio 4cm combina a robustez do couro legítimo com o charme inconfundível da textura balaio — padrão de trançado artesanal que confere resistência extra e visual marcante. A fivela western trabalhada completa o conjunto. Perfeito para rodeios, shows country e o campo. Disponível nas quatro cores clássicas da Pimenta Country AJ.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 4 cm",
      "Textura artesanal padrão balaio",
      "Fivela western trabalhada",
      "Passador e ponteira artesanais",
      "Costura reforçada",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/balaio-country-cafe-new1.jpg`,
      `${C}/balaio-country-cafe-new2.jpg`,
      `${C}/balaio-country-cafe-1.jpg`,
      `${C}/balaio-country-cafe-detalhe.jpg`,
      `${C}/balaio-country-borde-2.jpg`,
      `${C}/balaio-country-borde-1.jpg`,
      `${C}/balaio-country-preto-new1.jpg`,
      `${C}/balaio-country-preto-1.jpg`,
      `${C}/balaio-country-whisky-new1.jpg`,
      `${C}/balaio-country-whisky-1.jpg`,
    ],
    inStock: true,
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CINTOS SOCIAL MASCULINO
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "103",
    slug: "cinto-social-liso-3-5cm",
    ref: "PS-103",
    name: "Cinto Social Liso 3,5cm",
    category: "social",
    gender: "masculino",
    price: 93.0,
    description:
      "Cinto social de couro legítimo liso 3,5cm com fivela western elegante. Bordô, Café, Preto e Whisky. Artesanato Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Liso 3,5cm é a escolha clássica para quem quer elegância e qualidade no dia a dia. Feito em couro legítimo polido, com largura de 3,5cm, apresenta acabamento refinado em bordas aparadas à mão e fivela western de acabamento polido. Disponível nas cores Bordô, Café, Preto e Whisky — perfeito do escritório ao casual.",
    features: [
      "Couro legítimo polido premium",
      "Largura de 3,5 cm",
      "Fivela western polida",
      "Bordas aparadas à mão",
      "Passador e ponteira artesanais",
      "Versátil: formal e casual",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/social-liso-cafe-new1.jpg`,
      `${C}/social-liso-cafe-new2.jpg`,
      `${C}/social-liso-cafe-1.jpg`,
      `${C}/social-liso-cafe-2.jpg`,
      `${C}/social-liso-cafe-corpo.jpg`,
      `${C}/social-liso-cafe-fivela-1.jpg`,
      `${C}/social-liso-cafe-fivela-2.jpg`,
      `${C}/social-liso-cafe-ponteira.jpg`,
      `${C}/social-liso-borde-2.jpg`,
      `${C}/social-liso-borde-1.jpg`,
      `${C}/social-liso-preto-new1.jpg`,
      `${C}/social-liso-preto-1.jpg`,
      `${C}/social-liso-preto-corpo.jpg`,
      `${C}/social-liso-whisky-new1.jpg`,
      `${C}/social-liso-whisky-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "104",
    slug: "cinto-social-balaio-3-5cm",
    ref: "PS-104",
    name: "Cinto Social Balaio 3,5cm",
    category: "social",
    gender: "masculino",
    price: 97.0,
    description:
      "Cinto social de couro legítimo 3,5cm com textura balaio e fivela western. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Balaio 3,5cm une o charme do trançado artesanal ao estilo social refinado. A textura balaio do couro legítimo confere personalidade única, enquanto a fivela western com acabamento polido garante presença. Um produto que transita do casual elegante ao uso diário com versatilidade. Veja os detalhes da ponteira, fivela e corpo nas fotos.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 3,5 cm",
      "Textura artesanal padrão balaio",
      "Fivela western acabamento polido",
      "Ponteira artesanal",
      "Acabamento com cera protetora",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/social-balaio-whisky-1.jpg`,
      `${C}/social-balaio-whisky-2.jpg`,
      `${C}/social-balaio-whisky-fivela.jpg`,
      `${C}/social-balaio-preto-1.jpg`,
      `${C}/social-balaio-preto-corpo.jpg`,
      `${C}/social-balaio-preto-ponteira.jpg`,
      `${C}/social-balaio-cafe-corpo.jpg`,
      `${C}/social-balaio-cafe-ponteira.jpg`,
      `${C}/social-balaio-borde-2.jpg`,
      `${C}/social-balaio-borde-1.jpg`,
      `${C}/conjunto-balaio-bainha-whisky-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "105",
    slug: "cinto-social-fazenda-3-5cm",
    ref: "PS-105",
    name: "Cinto Social Fazenda 3,5cm",
    category: "social",
    gender: "masculino",
    price: 97.0,
    description:
      "Cinto social de couro legítimo 3,5cm com gravação fazenda e fivela western. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Fazenda 3,5cm traz a identidade rural expressa em couro legítimo premium. A gravação temática fazenda ao longo da correia — com detalhes de flora e vida do campo — é feita à mão por artesãos especializados. A fivela western de acabamento polido completa uma peça que carrega história e tradição.",
    features: [
      "Couro legítimo premium",
      "Largura de 3,5 cm",
      "Gravação artesanal temática fazenda",
      "Fivela western polida",
      "Detalhes de corpo e fivela visíveis nas fotos",
      "Costura reforçada dupla",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/social-fazenda-whisky-new1.jpg`,
      `${C}/social-fazenda-whisky-new2.jpg`,
      `${C}/social-fazenda-whisky-1.jpg`,
      `${C}/social-fazenda-whisky-2.jpg`,
      `${C}/social-fazenda-whisky-corpo.jpg`,
      `${C}/social-fazenda-whisky-fivela.jpg`,
      `${C}/social-fazenda-cafe-new1.jpg`,
      `${C}/social-fazenda-cafe-1.jpg`,
      `${C}/social-fazenda-borde-2.jpg`,
      `${C}/social-fazenda-borde-1.jpg`,
      `${C}/social-fazenda-preto-new1.jpg`,
      `${C}/social-fazenda-preto-1.jpg`,
    ],
    inStock: true,
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CINTOS FEMININO
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "106",
    slug: "cinto-fem-americano-1-5cm",
    ref: "PF-106",
    name: "Cinto Feminino Americano 1,5cm",
    category: "social",
    gender: "feminino",
    price: 85.0,
    description:
      "Cinto feminino americano 1,5cm de couro legítimo com fivela western fina. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Feminino Americano 1,5cm é elegante, fino e versátil. Com apenas 1,5cm de largura em couro legítimo de alta qualidade, é a escolha perfeita para compor looks femininos — de vestidos a jeans. A fivela americana fina com ponteira artesanal acrescenta o toque country ao visual. Disponível em quatro cores para combinar com qualquer estilo.",
    features: [
      "Couro legítimo fino polido",
      "Largura de 1,5 cm",
      "Fivela americana artesanal",
      "Ponteira metálica trabalhada",
      "Leve e confortável",
      "Versátil: vestidos, jeans, saias",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/fem-americano-cafe-new1.jpg`,
      `${C}/fem-americano-cafe-1.jpg`,
      `${C}/fem-americano-cafe-2.jpg`,
      `${C}/fem-americano-cafe-ponteira2.jpg`,
      `${C}/fem-americano-cafe-ponteira.jpg`,
      `${C}/fem-americano-preto-new1.jpg`,
      `${C}/fem-americano-preto-new2.jpg`,
      `${C}/fem-americano-preto-1.jpg`,
      `${C}/fem-americano-preto-2.jpg`,
      `${C}/fem-americano-preto-ponteira-1.jpg`,
      `${C}/fem-americano-preto-ponteira-2.jpg`,
      `${C}/fem-americano-borde-1.jpg`,
      `${C}/fem-americano-whisky-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "107",
    slug: "cinto-fem-social-1-5cm",
    ref: "PF-107",
    name: "Cinto Feminino Social 1,5cm",
    category: "social",
    gender: "feminino",
    price: 85.0,
    description:
      "Cinto feminino social 1,5cm de couro legítimo liso com fivela elegante. Bordô, Café, Preto e Whisky. Artesanato Pimenta Country AJ.",
    longDescription:
      "O Cinto Feminino Social 1,5cm é a peça para o look sofisticado do dia a dia. Feito em couro legítimo liso polido com largura de 1,5cm, apresenta caimento delicado e fivela de acabamento elegante. Uma peça que transita do casual ao social com graça e autenticidade artesanal.",
    features: [
      "Couro legítimo liso polido",
      "Largura de 1,5 cm",
      "Fivela elegante acabamento polido",
      "Ponteira artesanal",
      "Levíssimo e confortável",
      "Para uso social e casual",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/fem-social-cafe-1.jpg`,
      `${C}/fem-social-cafe-corpo.jpg`,
      `${C}/fem-social-borde-1.jpg`,
      `${C}/fem-social-preto-1.jpg`,
      `${C}/fem-social-whisky-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "108",
    slug: "cinto-fem-piramide-4cm",
    ref: "PF-108",
    name: "Cinto Feminino Pirâmide 4cm",
    category: "country",
    gender: "feminino",
    price: 87.0,
    description:
      "Cinto feminino country 4cm de couro legítimo com aplicações de pirâmide artesanais. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Feminino Pirâmide 4cm é o destaque da linha feminina da Pimenta Country AJ. Com largura de 4cm em couro legítimo, traz aplicações de pirâmide metálicas dispostas artesanalmente ao longo da correia, criando um visual marcante e cheio de personalidade. As fotos mostram todos os ângulos: corpo, fivela, ponteira e ambiente. Perfeito para festas country e shows.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 4 cm",
      "Aplicações de pirâmide metálica artesanais",
      "Fivela decorada",
      "Ponteira com acabamento especial",
      "Ideal para festas e shows country",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/fem-piramide-whisky-amb.jpg`,
      `${C}/fem-piramide-whisky-1.jpg`,
      `${C}/fem-piramide-whisky-2.jpg`,
      `${C}/fem-piramide-whisky-corpo2.jpg`,
      `${C}/fem-piramide-whisky-corpo.jpg`,
      `${C}/fem-piramide-whisky-fivela2.jpg`,
      `${C}/fem-piramide-whisky-fivela.jpg`,
      `${C}/fem-piramide-whisky-ponteira.jpg`,
      `${C}/fem-piramide-cafe-amb.jpg`,
      `${C}/fem-piramide-cafe-1.jpg`,
      `${C}/fem-piramide-preto-amb.jpg`,
      `${C}/fem-piramide-preto-1.jpg`,
      `${C}/fem-piramide-borde-1.jpg`,
    ],
    inStock: true,
    badge: "Novo",
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CINTO INFANTIL
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "109",
    slug: "cinto-fazenda-infantil-2-5cm",
    ref: "PI-109",
    name: "Cinto Fazenda Infantil 2,5cm",
    category: "country",
    gender: "infantil",
    price: 80.0,
    description:
      "Cinto infantil de couro legítimo 2,5cm com gravação fazendinha e fivela dourada decorada. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Fazenda Infantil 2,5cm foi criado para os pequenos cowboys e cowgirls da Pimenta Country AJ. Feito em couro legítimo de qualidade, com largura de 2,5cm adaptada ao tamanho infantil, traz gravação artesanal de cenas de fazenda — cavalinhos, flores e vida no campo. A fivela dourada decorada é o charme da peça. Seguro, confortável e com acabamento sem rebarbas.",
    features: [
      "Couro legítimo de qualidade",
      "Largura de 2,5 cm — tamanho infantil",
      "Gravação artesanal fazendinha",
      "Fivela dourada decorada",
      "Acabamento seguro, sem rebarbas",
      "Perfeito para festas juninas e eventos country",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["40cm", "45cm", "50cm", "55cm", "60cm", "65cm"],
    images: [
      `${C}/fazenda-infantil-whisky-1.jpg`,
      `${C}/fazenda-infantil-whisky-2.jpg`,
      `${C}/fazenda-infantil-cafe-1.jpg`,
      `${C}/fazenda-infantil-borde-1.jpg`,
      `${C}/fazenda-infantil-whisky-preto.jpg`,
    ],
    inStock: true,
    badge: "Infantil",
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CAPAS DE CELULAR
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "110",
    slug: "capa-celular-canguru-boi",
    ref: "AC-110",
    name: "Capa Canguru — Cabeça de Boi",
    category: "acessorio",
    gender: "unisex",
    price: 77.0,
    description:
      "Capa de celular estilo canguru em couro legítimo com gravação artesanal Cabeça de Boi. Disponível em Café e Whisky. Prende direto no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Canguru Cabeça de Boi é um acessório exclusivo da Pimenta Country AJ, confeccionada em couro legítimo com gravação artesanal da icônica cabeça de boi. Prende-se diretamente no cinto com laço de couro resistente e tem fecho em botão de pressão. Disponível nas cores Café e Whisky.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Cabeça de Boi",
      "Estilo canguru — prende no cinto",
      "Fecho em botão de pressão",
      "Laço de couro resistente",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/canguru-boi-cafe-1.jpg`,
      `${C}/canguru-boi-whisky-1.jpg`,
      `${C}/canguru-boi-whisky-2.jpg`,
    ],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "115",
    slug: "capa-celular-canguru-nossa-senhora",
    ref: "AC-115",
    name: "Capa Canguru — Nossa Senhora",
    category: "acessorio",
    gender: "unisex",
    price: 77.0,
    description:
      "Capa de celular estilo canguru em couro legítimo com gravação artesanal de Nossa Senhora Aparecida. Café e Whisky. Fé e artesanato. Pimenta Country AJ.",
    longDescription:
      "A Capa Canguru Nossa Senhora Aparecida une devoção e artesanato em couro legítimo. A gravação da silhueta de Nossa Senhora é feita à mão pelo Alexandre, criando uma peça única e especial. Prende no cinto com laço de couro e fecho em botão de pressão. Um presente cheio de significado.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Nossa Senhora Aparecida",
      "Estilo canguru — prende no cinto",
      "Fecho em botão de pressão",
      "Laço de couro resistente",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/canguru-nsa-cafe-1.jpg`,
      `${C}/canguru-nsa-cafe-silhueta.jpg`,
      `${C}/canguru-nsa-whisky-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "116",
    slug: "capa-celular-canguru-cavalo",
    ref: "AC-116",
    name: "Capa Canguru — Cabeça de Cavalo",
    category: "acessorio",
    gender: "unisex",
    price: 77.0,
    description:
      "Capa de celular estilo canguru em couro legítimo com gravação artesanal Cabeça de Cavalo. Bordô e Café. Prende no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Canguru Cabeça de Cavalo traz a nobreza do cavalo gravada à mão em couro legítimo. Uma peça para quem tem o campo e a lida com cavalos no sangue. Prende no cinto com laço de couro e fecho em botão de pressão. Disponível em Bordô e Café.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Cabeça de Cavalo",
      "Estilo canguru — prende no cinto",
      "Fecho em botão de pressão",
      "Laço de couro resistente",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Bordô", hex: "#722F37" },
      { name: "Café",  hex: "#4A2C17" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/canguru-cavalo-borde-1.jpg`,
      `${C}/canguru-cavalo-cafe-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "117",
    slug: "capa-celular-canguru-muladeiro",
    ref: "AC-117",
    name: "Capa Canguru — Muladeiro",
    category: "acessorio",
    gender: "unisex",
    price: 77.0,
    description:
      "Capa de celular estilo canguru em couro legítimo com gravação artesanal do Muladeiro. Café. Artesanato country autêntico. Pimenta Country AJ.",
    longDescription:
      "A Capa Canguru Muladeiro presta homenagem ao tropeiro e muladeiro brasileiro em couro legítimo gravado à mão. Uma peça rara e exclusiva da Pimenta Country AJ, para quem carrega a tradição do campo com orgulho. Prende no cinto com laço de couro e fecho em botão de pressão.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal do Muladeiro",
      "Estilo canguru — prende no cinto",
      "Fecho em botão de pressão",
      "Laço de couro resistente",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Café", hex: "#4A2C17" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/canguru-muladeiro-cafe-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "111",
    slug: "capa-celular-lisa",
    ref: "AC-111",
    name: "Capa Celular Lisa",
    category: "acessorio",
    gender: "unisex",
    price: 65.0,
    description:
      "Capa de celular em couro legítimo liso. Bordô, Café, Preto e Whisky. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Lisa é a versão clean e elegante da linha de capas da Pimenta Country AJ. Feita em couro legítimo liso polido, sem gravações, apresenta um visual sofisticado e atemporal. Disponível nas quatro cores clássicas: Bordô, Café, Preto e Whisky. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo liso polido",
      "Disponível em 4 cores",
      "Fecho em botão de pressão",
      "Encaixe no cinto",
      "Visual clean e elegante",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/lisa-cafe-2.jpg`,
      `${C}/lisa-cafe-1.jpg`,
      `${C}/lisa-preto-2.jpg`,
      `${C}/lisa-preto-1.jpg`,
      `${C}/lisa-whisky-2.jpg`,
      `${C}/lisa-whisky-1.jpg`,
      `${C}/lisa-borde-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "112",
    slug: "capa-celular-cruz-da-fe",
    ref: "AC-112",
    name: "Capa Celular — Cruz da Fé",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description:
      "Capa de celular em couro legítimo com gravação artesanal Cruz da Fé. Bordô, Café, Preto e Whisky. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Cruz da Fé une fé e artesanato em couro legítimo gravado à mão. A Cruz da Fé é entalhada com precisão pelo Alexandre, criando uma peça com significado e beleza. Disponível nas quatro cores clássicas: Bordô, Café, Preto e Whisky. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Cruz da Fé",
      "Fecho em botão de pressão",
      "Encaixe direto no cinto",
      "Disponível em 4 cores",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Bordô",  hex: "#722F37" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/parezinho-cruzdafe-cafe-2.jpg`,
      `${C}/parezinho-cruzdafe-cafe-1.jpg`,
      `${C}/parezinho-cruzdafe-preto-2.jpg`,
      `${C}/parezinho-cruzdafe-preto-1.jpg`,
      `${C}/parezinho-cruzdafe-whisky-2.jpg`,
      `${C}/parezinho-cruzdafe-whisky-1.jpg`,
      `${C}/parezinho-cruzdafe-borde-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "118",
    slug: "capa-celular-floral",
    ref: "AC-118",
    name: "Capa Celular — Floral",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description:
      "Capa de celular em couro legítimo com gravação artesanal Floral. Whisky. Delicada e feminina. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Floral traz a beleza das flores do campo gravada à mão em couro legítimo. O padrão floral é entalhado com delicadeza pelo Alexandre, criando uma peça elegante e única. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Floral",
      "Fecho em botão de pressão",
      "Encaixe direto no cinto",
      "Visual delicado e elegante",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/parezinho-floral-whisky-1.jpg`,
      `${C}/parezinho-floral-whisky-2.jpg`,
    ],
    inStock: true,
  },
  {
    id: "119",
    slug: "capa-celular-muladeiro",
    ref: "AC-119",
    name: "Capa Celular — Muladeiro",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description:
      "Capa de celular em couro legítimo com gravação artesanal do Muladeiro. Bordô, Café, Preto e Whisky. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Muladeiro presta homenagem ao tropeiro e muladeiro brasileiro em couro legítimo gravado à mão. Uma peça exclusiva e carregada de tradição. Disponível nas cores Bordô, Café, Preto e Whisky. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal do Muladeiro",
      "Fecho em botão de pressão",
      "Encaixe direto no cinto",
      "Disponível em 4 cores",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Whisky", hex: "#A0522D" },
      { name: "Bordô",  hex: "#722F37" },
      { name: "Preto",  hex: "#1A1A1A" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/parezinho-muladeiro-cafe-1.jpg`,
      `${C}/parezinho-muladeiro-whisky-1.jpg`,
      `${C}/parezinho-muladeiro-borde-1.jpg`,
      `${C}/parezinho-muladeiro-preto-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "123",
    slug: "capa-celular-cabeca-de-boi",
    ref: "AC-123",
    name: "Capa Celular — Cabeça de Boi",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description:
      "Capa de celular em couro legítimo com gravação artesanal Cabeça de Boi e textura balaio. Café. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Cabeça de Boi une o ícone máximo do campo — o zebu — com a técnica artesanal do balaio em couro legítimo. A gravação da cabeça de boi em relevo sobressai sobre a textura balaio entrelaçada, criando uma peça com personalidade e identidade country únicas. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Cabeça de Boi em relevo",
      "Textura balaio entrelaçada",
      "Fecho em botão de pressão",
      "Encaixe direto no cinto",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Café", hex: "#4A2C17" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/universal-boi-cafe-1.jpg`,
      `${C}/canguru-boi-cafe-1.jpg`,
    ],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "124",
    slug: "capa-celular-cabeca-de-cavalo",
    ref: "AC-124",
    name: "Capa Celular — Cabeça de Cavalo",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description:
      "Capa de celular em couro legítimo com gravação artesanal Cabeça de Cavalo e textura balaio. Bordô e Café. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Cabeça de Cavalo celebra a nobreza equina em couro legítimo com textura balaio. A gravação da cabeça de cavalo é feita à mão pelo Alexandre com detalhes expressivos que capturam o olhar e a crina do animal. Disponível em Bordô e Café. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Cabeça de Cavalo",
      "Textura balaio entrelaçada",
      "Fecho em botão de pressão",
      "Encaixe direto no cinto",
      "Disponível em Bordô e Café",
    ],
    colors: [
      { name: "Bordô", hex: "#722F37" },
      { name: "Café",  hex: "#4A2C17" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/universal-cavalo-borde-1.jpg`,
      `${C}/universal-cavalo-cafe-1.jpg`,
    ],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "120",
    slug: "capa-celular-team-roping",
    ref: "AC-120",
    name: "Capa Celular — Team Roping",
    category: "acessorio",
    gender: "unisex",
    price: 67.0,
    description:
      "Capa de celular em couro legítimo com gravação artesanal Team Roping. Whisky. Para quem vive o rodeio. Fecho em pressão, encaixe no cinto. Pimenta Country AJ.",
    longDescription:
      "A Capa Celular Team Roping celebra o esporte mais emocionante do rodeio em couro legítimo gravado à mão. A cena do laço em dupla é entalhada com detalhes pelo Alexandre. Uma peça para quem vive e respira rodeio. Fecho em botão de pressão e encaixe direto no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação artesanal Team Roping",
      "Fecho em botão de pressão",
      "Encaixe direto no cinto",
      "Exclusiva para apaixonados por rodeio",
      "Compatível com smartphones médios/grandes",
    ],
    colors: [
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Universal"],
    images: [
      `${C}/parezinho-teamroping-whisky-1.jpg`,
      `${C}/parezinho-teamroping-whisky-2.jpg`,
      `${C}/universal-teamroping-cafe-1.jpg`,
    ],
    inStock: true,
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // BAINHAS DE CANIVETE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "113",
    slug: "bainha-canivete-tradicional",
    ref: "AC-113",
    name: "Bainha Canivete Artesanal",
    category: "acessorio",
    gender: "unisex",
    price: 35.0,
    description:
      "Bainha artesanal de couro legítimo para canivete com gravação country. Fecho em pressão, laço para cinto. Tamanhos P, M e G. Pimenta Country AJ.",
    longDescription:
      "A Bainha Canivete Artesanal é confeccionada em couro legítimo com textura e gravação country feita à mão. Ideal para guardar canivetes, facas ou ferramentas de campo com estilo e segurança. O fecho em botão de pressão segura o item com firmeza e o laço lateral permite prendê-la diretamente no cinto. Disponível nos tamanhos P, M e G.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Gravação country artesanal",
      "Fecho em botão de pressão",
      "Laço para cinto incluso",
      "Tamanhos P, M e G disponíveis",
      "Presente ideal para quem aprecia o campo",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["P", "M", "G"],
    images: [
      "/products/bainha-tomate-g.jpg",
      "/products/bainha-tomate-g-2.jpg",
      "/products/bainha-tomate-m.jpg",
      "/products/bainha-tomate-m-2.jpg",
      "/products/bainha-tomate-p.jpg",
    ],
    inStock: true,
  },
  {
    id: "114",
    slug: "bainha-canivete-pingente",
    ref: "AC-114",
    name: "Bainha Canivete com Pingente",
    category: "acessorio",
    gender: "unisex",
    price: 27.0,
    description:
      "Bainha de couro legítimo para canivete com pingente artesanal de cavalo. Fecho em pressão, laço para cinto. Pimenta Country AJ.",
    longDescription:
      "A Bainha Canivete com Pingente é um acessório artesanal exclusivo da Pimenta Country AJ. Feita em couro legítimo, traz um pingente artesanal de cavalo no fecho, adicionando charme country ao visual. Fecho em botão de pressão e laço lateral para prender no cinto.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Pingente artesanal de cavalo",
      "Fecho em botão de pressão",
      "Laço para cinto incluso",
      "Peça exclusiva com detalhe especial",
      "Presente ideal para apreciadores do campo",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: ["Único"],
    images: [
      "/products/bainha-tomate-g.jpg",
      "/products/bainha-tomate-m.jpg",
    ],
    inStock: true,
  },
  {
    id: "125",
    slug: "cinto-boiadeiro-infantil-2-5cm",
    ref: "PI-125",
    name: "Cinto Boiadeiro Infantil 2,5cm",
    category: "country",
    gender: "infantil",
    price: 80.0,
    description:
      "Cinto infantil de couro legítimo 2,5cm com gravação de cenas equestres e fivela oval dourada com cavalo. Whisky e Preto. Pimenta Country AJ.",
    longDescription:
      "O Cinto Boiadeiro Infantil 2,5cm é feito para os pequenos apaixonados por cavalos. Em couro legítimo com gravação de cenas equestres ao longo de toda a correia — cavalos em movimento, cercas e vida no campo — traz a icônica fivela oval com cavalo dourado em alto relevo. Seguro, confortável e com acabamento sem rebarbas. A fivela oval traz um cavalo dourado que é o destaque da peça.",
    features: [
      "Couro legítimo de qualidade",
      "Largura de 2,5 cm — tamanho infantil",
      "Gravação de cenas equestres na correia",
      "Fivela oval dourada com cavalo em alto relevo",
      "Acabamento seguro, sem rebarbas",
      "Perfeito para festas e eventos country",
    ],
    colors: [
      { name: "Whisky", hex: "#A0522D" },
      { name: "Preto",  hex: "#1A1A1A" },
    ],
    sizes: ["40cm", "45cm", "50cm", "55cm", "60cm", "65cm"],
    images: [
      `${C}/infantil-boiadeiro-duo.jpg`,
      `${C}/infantil-boiadeiro-whisky-1.jpg`,
    ],
    inStock: true,
    badge: "Infantil",
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CINTOS ADICIONAIS (conforme tabela SKU)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "121",
    slug: "cinto-social-liso-4cm",
    ref: "PS-121",
    name: "Cinto Social Liso 4cm",
    category: "social",
    gender: "masculino",
    price: 110.0,
    description:
      "Cinto social de couro legítimo liso 4cm — largura maior para um visual mais marcante. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Liso 4cm é a versão de largura maior da linha social da Pimenta Country AJ. Com 4cm de largura em couro legítimo polido, apresenta acabamento refinado em bordas aparadas à mão e fivela western de acabamento polido. Uma opção de maior presença para o look social e casual. Disponível nas cores Bordô, Café, Preto e Whisky.",
    features: [
      "Couro legítimo polido premium",
      "Largura de 4 cm",
      "Fivela western polida",
      "Bordas aparadas à mão",
      "Passador e ponteira artesanais",
      "Versátil: formal e casual",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/social-liso-cafe-1.jpg`,
      `${C}/social-liso-cafe-fivela-1.jpg`,
      `${C}/social-liso-cafe-ponteira.jpg`,
      `${C}/social-liso-borde-1.jpg`,
      `${C}/social-liso-preto-1.jpg`,
      `${C}/social-liso-whisky-1.jpg`,
    ],
    inStock: true,
  },
  {
    id: "122",
    slug: "cinto-fem-americano-2cm",
    ref: "PF-122",
    name: "Cinto Feminino Americano 2cm",
    category: "social",
    gender: "feminino",
    price: 87.0,
    description:
      "Cinto feminino americano 2cm de couro legítimo — largura média para um visual equilibrado. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Feminino Americano 2cm encontra o equilíbrio perfeito entre o fino e o largo. Com 2cm de largura em couro legítimo de alta qualidade, é versátil para vestidos, calças sociais e jeans. A fivela americana com ponteira artesanal acrescenta o toque country ao look. Disponível em quatro cores.",
    features: [
      "Couro legítimo fino polido",
      "Largura de 2 cm",
      "Fivela americana artesanal",
      "Ponteira metálica trabalhada",
      "Leve e confortável",
      "Versátil: vestidos, jeans, saias",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/fem-americano-cafe-1.jpg`,
      `${C}/fem-americano-cafe-2.jpg`,
      `${C}/fem-americano-cafe-ponteira.jpg`,
      `${C}/fem-americano-preto-1.jpg`,
      `${C}/fem-americano-borde-1.jpg`,
      `${C}/fem-americano-whisky-1.jpg`,
    ],
    inStock: true,
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // NOVOS PRODUTOS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "126",
    slug: "cinto-americano-despontado-4-8cm",
    ref: "PC-126",
    name: "Cinto Country Americano Despontado 4,8cm",
    category: "country",
    gender: "masculino",
    price: 143.0,
    isNew: true,
    description:
      "Cinto country de couro legítimo 4,8cm com gravação artesanal e acabamento despontado à mão. Bordô, Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Country Americano Despontado 4,8cm é o mais robusto e imponente da coleção Pimenta Country AJ. Com 4,8cm de largura em couro legítimo curtido ao vegetal, traz gravação artesanal exclusiva ao longo de toda a correia e acabamento despontado feito à mão — técnica que expõe o corte do couro com precisão artesanal. A fivela western trabalhada com acabamento polido e a ponteira com o logo da marca completam uma peça de alto impacto visual. Disponível em Bordô, Café, Preto e Whisky.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 4,8 cm — o mais largo da linha",
      "Gravação artesanal exclusiva em toda a correia",
      "Acabamento despontado feito à mão",
      "Fivela western trabalhada com acabamento polido",
      "Ponteira com logo Pimenta Country AJ",
    ],
    colors: [
      { name: "Bordô",  hex: "#722F37" },
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/americano-despontado-borde-1.jpg`,
      `${C}/americano-despontado-borde-2.jpg`,
      `${C}/americano-despontado-borde-3.jpg`,
      `${C}/americano-despontado-borde-4.jpg`,
      `${C}/americano-despontado-borde-5.jpg`,
      `${C}/americano-despontado-borde-6.jpg`,
      `${C}/americano-despontado-borde-7.jpg`,
      `${C}/americano-despontado-borde-8.jpg`,
      `${C}/americano-despontado-borde-9.jpg`,
      `${C}/americano-despontado-borde-10.jpg`,
      `${C}/americano-despontado-cafe-1.jpg`,
      `${C}/americano-despontado-cafe-2.jpg`,
      `${C}/americano-despontado-cafe-3.jpg`,
      `${C}/americano-despontado-cafe-4.jpg`,
      `${C}/americano-despontado-cafe-5.jpg`,
      `${C}/americano-despontado-preto-1.png`,
      `${C}/americano-despontado-whisky-1.jpg`,
    ],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "127",
    slug: "cinto-social-piramide-3-5cm",
    ref: "PS-127",
    name: "Cinto Social Desenho Pirâmide 3,5cm",
    category: "social",
    gender: "masculino",
    price: 97.0,
    isNew: true,
    description:
      "Cinto social de couro legítimo 3,5cm com desenho de pirâmide artesanal e fivela western elegante. Café, Preto e Whisky. Pimenta Country AJ.",
    longDescription:
      "O Cinto Social Desenho Pirâmide 3,5cm une o estilo social refinado com o charme do desenho artesanal de pirâmide — padrão geométrico gravado à mão ao longo de toda a correia. Feito em couro legítimo com largura de 3,5cm, traz fivela western de acabamento polido e ponteira artesanal. Uma peça que combina tradição artesanal com visual contemporâneo. Disponível em Café, Preto e Whisky.",
    features: [
      "Couro legítimo curtido ao vegetal",
      "Largura de 3,5 cm",
      "Desenho geométrico de pirâmide gravado à mão",
      "Fivela western acabamento polido",
      "Ponteira artesanal",
      "Transita do casual elegante ao uso diário",
    ],
    colors: [
      { name: "Café",   hex: "#4A2C17" },
      { name: "Preto",  hex: "#1A1A1A" },
      { name: "Whisky", hex: "#A0522D" },
    ],
    sizes: STANDARD_SIZES,
    images: [
      `${C}/social-piramide-whisky-1.jpg`,
      `${C}/social-piramide-whisky-2.jpg`,
      `${C}/social-piramide-whisky-3.jpg`,
      `${C}/social-piramide-cafe-1.jpg`,
      `${C}/social-piramide-cafe-2.jpg`,
      `${C}/social-piramide-preto-1.jpg`,
      `${C}/social-piramide-preto-2.jpg`,
      `${C}/social-piramide-preto-3.jpg`,
    ],
    inStock: true,
    badge: "Novo",
  },
  // ───────────────────────────────────────────────────────────────────────────
  // FIM DO CATÁLOGO
  // ───────────────────────────────────────────────────────────────────────────
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
