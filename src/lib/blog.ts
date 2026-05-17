export type BlogCategory = "Dicas" | "Cultura" | "Artesanato" | "Eventos";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: BlogCategory;
  readTime: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    slug: "como-escolher-cinto-de-couro-ideal",
    title: "Como escolher o cinto de couro ideal: guia completo para couro legítimo",
    excerpt:
      "Largura, fivela, tipo de couro legítimo e ocasião — há muito mais numa escolha do que parece. Neste guia da Pimenta Country AJ explicamos tudo o que você precisa saber para escolher o cinto artesanal perfeito.",
    date: "28 de março de 2026",
    category: "Dicas",
    readTime: "5 min",
    image: "/products/colecao-country.jpg",
    content: `Escolher o cinto de couro certo é uma arte que começa pelo entendimento do seu próprio estilo. Antes de qualquer coisa, pense na ocasião: um cinto country para shows e rodeios pede fivelas grandes e couro com gravações, enquanto um cinto social para o trabalho ou eventos formais favorece linhas limpas e metal discreto. Essa distinção fundamental vai guiar todas as outras decisões.

A largura é o segundo critério mais importante. Cintos country tradicionais costumam ter entre 4 e 4,5 cm, o que combina com calças jeans de passadores maiores e dá o impacto visual que o estilo pede. Para o universo social, a largura ideal fica entre 3 e 3,5 cm — compatível com calças sociais e ternos sem comprometer o caimento. Aqui na Pimenta Country AJ, toda peça já chega com a largura calibrada para a categoria.

O tipo de couro define durabilidade e caráter. Couro curtido ao vegetal, como o que usamos em nossa linha country, desenvolve uma pátina bonita ao longo dos anos: vai escurecendo e amolecendo nos pontos de dobra, criando uma peça única que conta a história do seu dono. Já o couro liso polido dos modelos sociais mantém aparência mais uniforme e é mais fácil de limpar no dia a dia.

A fivela merece atenção especial porque é o ponto focal do conjunto. Fivelas western grandes pedem equilíbrio — se a fivela for chamativa, o couro pode ser mais sóbrio, e vice-versa. Para modelos sociais, prefira fivelas com acabamento cromado ou escovado que não reflitam em excesso sob luz de escritório. Verifique também a resistência do mecanismo: uma fivela de qualidade deve abrir e fechar com firmeza, sem folga.

Por fim, sempre meça sua cintura na posição onde o cinto vai assentar — geralmente 2 a 3 cm abaixo do umbigo para o estilo country, e na linha natural da cintura para o social. Nossos cintos são disponibilizados de 90 cm a 120 cm e a numeração indica o comprimento total da peça, do furo central até a ponteira. Quando em dúvida entre dois tamanhos, prefira o maior: couro estica levemente com o uso e um cinto apertado perde forma mais rápido.`,
  },
  {
    slug: "cultura-country-no-parana-tradicao-que-pulsa",
    title: "A cultura country no Paraná: tradição que pulsa no norte do estado",
    excerpt:
      "Do norte ao sul do estado, o Paraná tem uma das cenas country mais vibrantes do Brasil. Entenda como essa cultura chegou ao Paraná, o papel de cidades como Sertanópolis, e por que ela só cresce.",
    date: "15 de março de 2026",
    category: "Cultura",
    readTime: "6 min",
    image: "/lifestyle/horses.jpg",
    content: `O Paraná é um dos estados onde a cultura country encontrou solo mais fértil. Isso não é por acaso: o processo de colonização do interior paranaense, especialmente no norte do estado, trouxe famílias vindas de São Paulo, Minas Gerais e do Sul, muitas delas com forte tradição rural e pecuária. Quando essas raízes se misturaram à música americana que chegava pelo rádio nos anos 1970 e 1980, nasceu um estilo de vida genuinamente paranaense.

O norte do Paraná concentra hoje alguns dos maiores eventos country do Brasil. Cidades como Londrina, Maringá e Cornélio Procópio sediam festas que reúnem dezenas de milhares de pessoas a cada edição, com shows de artistas nacionais e internacionais, rodeios profissionais e competições de laço. Sertanópolis, cidade onde nasceu a Pimenta Country AJ, é parte central dessa história: criada no auge do café, a cidade sempre teve no campo sua alma e identidade.

Os cavalos são símbolo vivo dessa cultura no Paraná. Os Haras espalhados pelo norte do estado criam animais de competição que participam de provas em todo o Brasil. Cada fim de semana, em alguma cidade da região, há uma cavalgada, um rodeio ou uma exposição agropecuária onde famílias inteiras se reúnem com seus animais. O cinto de couro faz parte desse universo tanto quanto a bota ou o chapéu — é adorno funcional e declaração de pertencimento.

A música sertaneja universitária e raiz convive no Paraná com o country americano puro. Nas festas de interior, não é raro ouvir uma música de Zé Neto & Cristiano seguida de uma de George Strait, e o público dança os dois igualmente bem. Essa fusão cultural criou um consumidor sofisticado, que valoriza autenticidade sem rejeitar novidade, e que entende a diferença entre um cinto bem feito e um produto industrial sem história.

A moda country paranaense tem identidade própria. O jeans desgastado, a camisa xadrez, a bota pontuda e o cinto com fivela trabalhada formam um conjunto que é ao mesmo tempo prático para o trabalho no campo e bonito para o palco. É uma estética que nasceu da necessidade e virou arte — e é esse espírito que a Pimenta Country AJ carrega em cada peça produzida em Sertanópolis.`,
  },
  {
    slug: "cuidados-com-cinto-de-couro-guia-completo",
    title: "Cuidados com seu cinto de couro legítimo: guia completo de conservação",
    excerpt:
      "Couro legítimo envelhece com personalidade — mas precisa de atenção. Aprenda como limpar, hidratar e guardar seu cinto artesanal Pimenta Country AJ para que ele dure décadas.",
    date: "5 de março de 2026",
    category: "Dicas",
    readTime: "4 min",
    image: "/products/country-tooled.jpg",
    content: `Um cinto de couro legítimo bem cuidado dura décadas. O couro é uma pele que, assim como a nossa, precisa de hidratação, limpeza regular e proteção contra agentes que a ressecam ou mancham. Entender esses cuidados básicos é a diferença entre uma peça que envelhece com graça e uma que racha e desfia em poucos anos.

A limpeza deve ser feita sempre com produto adequado para couro. Evite detergente comum, álcool ou qualquer produto com acetona — eles retiram os óleos naturais do couro e aceleram o ressecamento. Para sujeiras leves do dia a dia, um pano de flanela levemente úmido já basta. Para sujeiras mais profundas, como barro seco ou gordura, use sabão de glicerina neutro diluído em água, aplique com esponja macia em movimentos circulares suaves e seque em seguida com pano seco.

A hidratação é o passo mais importante e o mais negligenciado. Dependendo do clima e da frequência de uso, o cinto deve ser hidratado a cada dois a três meses. Produtos à base de lanolina ou cera de abelha são os mais indicados para couro curtido ao vegetal — penetram nas fibras sem alterar a cor original. Aplique com um pano seco em quantidade moderada, massageie por toda a extensão do cinto, incluindo as bordas e o verso, e deixe absorver por algumas horas antes de usar.

Guarde o cinto sempre enrolado frouxamente, nunca dobrado. A dobra repetida no mesmo ponto fragiliza as fibras e com o tempo pode causar rachamento. Um gancho ou suporte específico para cintos é o ideal, mas enrolar com o lado do couro para dentro e guardar em gaveta separada também funciona bem. Evite guardar em sacolas plásticas fechadas: o couro precisa respirar e a umidade acumulada favorece mofo.

Molhou com chuva? Seque à sombra, longe de fontes de calor direto como secador ou sol forte — o calor excessivo endurece o couro irreversivelmente. Quando estiver quase seco, aplique uma camada fina de condicionador para recuperar a flexibilidade. Se surgirem manchas brancas (eflorescência de sais), esfregue suavemente com pano seco: são depósitos salinos que surgem quando o couro molha e seca rapidamente, e somem com o tratamento.`,
  },
  {
    slug: "sertanopolis-cidade-que-vive-o-country",
    title: "Sertanópolis, Paraná: a cidade que vive o country e berço da Pimenta Country AJ",
    excerpt:
      "A 80 km de Londrina, Sertanópolis é uma das cidades mais country do Paraná — terra de tradição rural, festivais e berço da Pimenta Country AJ, marca de cintos de couro artesanais.",
    date: "20 de fevereiro de 2026",
    category: "Cultura",
    readTime: "5 min",
    image: "/lifestyle/campo.jpg",
    content: `Sertanópolis foi fundada em 1946, no auge da expansão cafeeira no norte do Paraná. O nome vem justamente dessa identidade rural: "cidade do sertão", do interior, da terra. Em menos de um século, a cidade construiu uma cultura que mistura o orgulho do trabalho no campo com uma vida social vibrante, centrada nas festas, nos rodeios e nas tradições que os colonizadores trouxeram consigo.

A paisagem ao redor de Sertanópolis é das mais bonitas do norte paranaense. Pastos verdes alternados com lavouras de soja e milho, salpicados de haras e fazendas de gado, formam o cenário que inspirou gerações de artesãos, músicos e artistas locais. É nesse ambiente que a Pimenta Country AJ nasceu — como expressão legítima de uma cultura que não se importa com tendências porque tem raízes profundas demais para precisar delas.

A festa country de Sertanópolis é um dos eventos mais aguardados da região. Realizada anualmente, reúne artistas do cenário nacional, competições de rodeio, exposições de artesanato e muito forró e sertanejo raiz. Para os moradores, é muito mais que uma festa: é o momento em que a cidade para, os parentes chegam de fora e toda a identidade local se celebra junta. O cinto de couro aparece em praticamente todos os trajes — é o acessório que unifica gerações.

A agricultura familiar ainda é forte em Sertanópolis, com pequenos produtores de café, leite e cana convivendo com grandes fazendas mecanizadas. Esse tecido social diverso criou consumidores que valorizam o que é feito perto, por quem eles conhecem, com materiais que entendem. A Pimenta Country AJ se encaixa perfeitamente nessa lógica: cada cinto é produzido na cidade, por mãos da região, com couro selecionado a critério de quem entende de artesanato.

Visitar Sertanópolis é mergulhar numa versão do Brasil interior que resiste ao tempo. Os moradores sabem o nome do artesão que faz o cinto que vestem, conhecem o criador cujo couro foi usado, e sentem orgulho genuíno de carregar algo feito ali perto. Essa proximidade entre produtor e consumidor é rara no mundo contemporâneo — e é o maior diferencial de tudo o que nasce dessa terra.`,
  },
  {
    slug: "fivelas-western-como-escolher-a-fivela-perfeita",
    title: "Fivelas western para cinto de couro: como escolher a fivela perfeita",
    excerpt:
      "A fivela western é a alma do cinto country artesanal. Saiba o que diferencia uma fivela de qualidade, quais formatos existem e como combinar com seu cinto de couro legítimo.",
    date: "10 de fevereiro de 2026",
    category: "Dicas",
    readTime: "4 min",
    image: "/products/country-rodeo.jpg",
    content: `A fivela western é muito mais do que um mecanismo de fechamento: é o ponto focal do conjunto, o primeiro detalhe que os olhos encontram quando você entra em um recinto. No universo country, a fivela comunica estilo, pertencimento e, muitas vezes, conquistas — fivelas de rodeio premiadas são carregadas com o mesmo orgulho que troféus.

Os formatos mais comuns são o oval, o retangular e o square (quadrado). Fivelas ovais têm um ar mais clássico e western tradicional, remetendo às peças que cowboys americanos usavam no século XIX. As retangulares equilibram tradição e modernidade e são as mais versáteis para o estilo country urbano. As quadradas são mais contemporâneas e menos comuns no interior, mas ganharam espaço nos shows e festivais das cidades grandes.

O material define durabilidade e aparência ao longo do tempo. Zamak (liga de zinco com alumínio) é o mais usado e oferece boa resistência a um custo acessível — mas requer cuidado para não riscar o acabamento. Fivelas em aço inoxidável são mais resistentes e mantêm o brilho por mais tempo, especialmente em ambientes úmidos como o interior do Paraná na estação das chuvas. Evite fivelas muito baratas sem procedência: o acabamento descasca rápido e mancha o couro do cinto.

Os relevos e motivos da fivela contam histórias. Cavaleiros a cavalo, longhorns, estrelas e arabescos florais são os motivos mais tradicionais da estética western. Para shows e rodeios, quanto mais elaborada a fivela, melhor — o cenário pede presença. Para o uso diário, uma fivela com detalhes mais sóbrios em alto relevo equilibra personalidade e versatilidade. A fivela rodeo da Pimenta Country AJ, com cavaleiro dourado em alto relevo, é um exemplo de peça que funciona em ambos os contextos.

Ao escolher, verifique se o mecanismo é sólido: empurre o pino de fechamento e solte algumas vezes. Uma boa fivela trava com firmeza e solta sem esforço excessivo. A haste que segura o couro deve ser espaçosa o suficiente para a largura do seu cinto — uma haste muito justa desgasta o couro na borda e dificulta o ajuste. Com esses critérios em mente, você vai encontrar a fivela que faz o seu conjunto brilhar.`,
  },
  {
    slug: "artesanato-em-couro-no-norte-do-parana",
    title: "Artesanato em couro no norte do Paraná: tradição viva em Sertanópolis",
    excerpt:
      "Uma tradição de couro legítimo feito à mão que veio com os colonizadores e encontrou no solo paranaense o ambiente certo para florescer. Conheça a história do artesanato em couro na região onde nasceu a Pimenta Country AJ.",
    date: "28 de janeiro de 2026",
    category: "Artesanato",
    readTime: "7 min",
    image: "/lifestyle/fabricacao.jpg",
    content: `O trabalho com couro no norte do Paraná tem raízes que remontam à colonização. Quando as primeiras famílias chegaram à região, vindas principalmente do interior paulista e mineiro, trouxeram consigo o conhecimento do curtume, do trabalho com talhadeira e da costura de couro — técnicas que aprenderam com seus pais e avós e que eram essenciais para a vida no campo. Seleiros, arreeiros e sapateiros foram algumas das primeiras profissões a se estabelecerem nas novas cidades.

O couro era um material estratégico para a vida rural. Arreios, selas, bruacas, guaiacas e cintos eram equipamentos de trabalho antes de serem adornos. Um bom arreio bem curtido e costurado podia durar décadas, e o artesão que sabia fazê-lo era respeitado como um profissional indispensável para toda a comunidade. Nesse contexto, o artesanato em couro não era hobby nem arte decorativa — era tecnologia aplicada à sobrevivência.

Com o tempo, à medida que a mecanização do campo reduziu a necessidade de arreios feitos à mão, os artesãos migraram para itens de uso pessoal: cintos, carteiras, bolsas e acessórios. E foi nessa transição que o artesanato ganhou dimensão estética. Sem a pressão da necessidade pura, os artesãos começaram a adicionar gravações, trançados, pinturas e detalhes que transformaram peças funcionais em objetos de desejo.

As técnicas mais usadas no norte do Paraná incluem o tooling (gravação com ferramentas de talhar), o trançado com tiras de couro cortadas à faca, a pintura com tinturas de anilina e o acabamento com ceras e óleos naturais. Cada artesão desenvolve sua maneira particular de trabalhar — uma assinatura invisível que quem conhece a fundo o artesanato consegue reconhecer em qualquer peça.

A Pimenta Country AJ é herdeira direta dessa tradição. Cada cinto que sai da oficina em Sertanópolis carrega horas de trabalho manual, ferramentas herdadas de gerações anteriores e o conhecimento acumulado de quem aprendeu o ofício como arte. Numa época em que a produção em escala industrial domina o mercado, preservar esse jeito de fazer é ao mesmo tempo um ato cultural e uma proposta de valor genuína para quem busca o que é verdadeiro.`,
  },
  {
    slug: "cinto-country-vs-cinto-social-quando-usar-cada-um",
    title: "Cinto country vs cinto social: quando usar cada um e como escolher",
    excerpt:
      "Dois estilos distintos, duas identidades diferentes. Entenda as diferenças entre cintos de couro legítimo country e social da Pimenta Country AJ e saiba qual escolher para cada ocasião.",
    date: "15 de janeiro de 2026",
    category: "Dicas",
    readTime: "5 min",
    image: "/products/social-premium.jpg",
    content: `A distinção entre cinto country e cinto social vai muito além do visual. São dois objetos criados para contextos diferentes, com linguagens estéticas próprias e funções que atendem a necessidades distintas. Entender essa diferença é fundamental para montar conjuntos coesos — e para saber o momento certo de investir em cada tipo.

O cinto country nasceu do campo e ainda carrega essa origem. Mais largo (geralmente 4 a 4,5 cm), com fivelas de maior porte e couro muitas vezes trabalhado com gravações, ele é projetado para ser visto. Em shows, rodeios, festas de peão e qualquer ambiente onde a estética country é celebrada, o cinto country é o acessório central do conjunto — não um detalhe, mas o protagonista. Ele combina com jeans, botas e camisas xadrez ou de flanela, e fica estranho com calças sociais ou ternos.

O cinto social tem proposta oposta: ele quer desaparecer para que a roupa brilhe. Mais estreito (3 a 3,5 cm), com couro liso ou com texturas sutis e fivelas de metal discreto, seu objetivo é completar o visual sem competir com ele. Em ambientes corporativos, eventos formais ou jantares, o cinto social é o que demonstra atenção aos detalhes sem chamar atenção desnecessária. Ele combina com calças sociais, ternos, blazers e até jeans mais ajustados em ocasiões semi-formais.

Há uma zona de intersecção nos contextos semi-formais urbanos. Um bom cinto country com fivela de tamanho médio e couro mais sóbrio pode funcionar muito bem com jeans e camisa social para um almoço de negócios no interior. E um cinto social premium com couro de textura diferenciada pode aparecer numa festa elegante do ambiente country sem destoar. A chave é calibrar o nível de formalidade do acessório com o da ocasião.

Nossa linha country inclui os modelos Tooled, Trançado e Rodeo — cada um com personalidade própria dentro do universo western. Já a linha social conta com o Clássico e o Premium, para quem quer sofisticação sem abrir mão da qualidade artesanal. Se você hesitar entre os dois estilos, lembre-se: o cinto country faz barulho, o social faz silêncio — e os dois fazem muito bem o que se propõem.`,
  },
  {
    slug: "rodeios-e-festas-country-no-parana-calendario-2026",
    title: "Rodeios e festas country no Paraná em 2026: calendário completo de eventos",
    excerpt:
      "O Paraná tem um dos melhores calendários de eventos country do Brasil. Confira os principais rodeios, festas e exposições agropecuárias do estado em 2026, incluindo eventos perto de Sertanópolis.",
    date: "5 de janeiro de 2026",
    category: "Eventos",
    readTime: "5 min",
    image: "/lifestyle/rodeo.jpg",
    content: `O Paraná consolidou nas últimas décadas um calendário de eventos country que rivaliza com os estados vizinhos em qualidade e diversidade. Do litoral ao extremo oeste, passando pelo norte cafeeiro onde a Pimenta Country AJ tem suas raízes, há sempre uma festa, um rodeio ou uma exposição agropecuária reunindo o público que ama o campo e tudo o que vem com ele.

O primeiro semestre começa aquecido. Em março, Maringá realiza a ExpoMaEng — Exposição Agropecuária e Industrial —, um dos maiores eventos agro do estado, com rodeio profissional, leilões de animais de alto padrão e shows de grandes nomes do sertanejo. Em abril, a Expoingá, também em Maringá, continua o calendário com estrutura para dezenas de milhares de visitantes por dia. Já em maio, Londrina sedia a ExpoLondrina, uma das maiores feiras do agronegócio do país, com área dedicada ao entretenimento country e rodeio indoor.

O inverno paranaense concentra as festas de peão e os rodeios de menor porte nas cidades do interior. Cornélio Procópio, Cambé, Rolândia, Arapongas e Bandeirantes realizam seus festivais locais entre junho e agosto, atraindo principalmente o público regional. São eventos com clima familiar, onde o artesanato local tem espaço de destaque e os cintos da Pimenta Country AJ costumam aparecer em quantidade expressiva.

Setembro e outubro marcam o pico da temporada com festas country em toda a região. Sertanópolis realiza seu tradicional evento country anual nesse período, com shows, rodeio, praça de alimentação com culinária regional e espaço para artesãos e produtores locais. A programação deste ano promete nomes de peso do sertanejo universitário e raiz, além de competições de laço comprido com participação de equipes de toda a região sul.

O fim de ano tem o calendário reduzido, mas não menos emocionante. Em novembro, algumas cidades realizam cavalgadas comemorativas que atravessam o perímetro rural e terminam em festas comunitárias. É o tipo de evento que não aparece nas mídias nacionais mas que para quem participa tem um valor afetivo imensurável — é onde as famílias se reúnem, os jovens aprendem a tradição e o ciclo cultural do campo se renova a cada ano.`,
  },
  {
    slug: "historia-do-couro-no-brasil-do-campo-a-moda",
    title: "A história do couro legítimo no Brasil: do campo à moda artesanal",
    excerpt:
      "Do curtume colonial às passarelas contemporâneas, o couro legítimo brasileiro percorreu um longo caminho. Entenda como esse material moldou cultura, economia e identidade — e chegou aos cintos artesanais da Pimenta Country AJ.",
    date: "22 de dezembro de 2025",
    category: "Cultura",
    readTime: "8 min",
    image: "/lifestyle/country-style.jpg",
    content: `O couro está na base da civilização brasileira bem antes de o Brasil existir como nação. Os povos indígenas já curtiam peles de animais para confeccionar adornos, proteções e utensílios — um conhecimento acumulado por milênios que os colonizadores portugueses encontraram e incorporaram às técnicas europeias que trouxeram consigo. O encontro dessas tradições criou um artesanato em couro genuinamente brasileiro, com características que até hoje diferem dos estilos europeu e norte-americano.

O nordeste brasileiro foi o primeiro grande polo coureiro do país. Com o boi introduzido pelos colonizadores no sertão, o vaqueiro nordestino desenvolveu uma cultura de proteção em couro sem igual: gibão, calças, perneiras, chapéu e luvas — tudo feito do couro dos animais que criava. O curioso é que esse equipamento não era luxo, mas necessidade: a caatinga e suas plantas espinhosas exigiam proteção completa para trabalhar com o gado. Essa estética do vaqueiro nordestino influenciou diretamente o estilo country que conhecemos hoje.

Com a chegada da pecuária no centro-oeste e no sul do Brasil, novas tradições se formaram. O gaúcho trouxe do pampa uma cultura do couro influenciada pela Argentina e pelo Uruguai — as boleadeiras, o chimarrão e os bombachos convivendo com uma tradição coureira rica. No sul do Paraná e em Santa Catarina, essa influência gaúcha se misturou com a colonização alemã e italiana, que trouxeram artesãos com técnicas europeias de trabalho com couro.

O século XX transformou o couro de necessidade em símbolo cultural. A industrialização criou uma produção em massa que, paradoxalmente, valorizou ainda mais o produto artesanal. Quando qualquer pessoa passou a comprar um cinto por cinco reais na feira, o cinto feito à mão por um artesão com couro legítimo tornou-se objeto de distinção — não de classe social, mas de valores. Quem usa couro artesanal está dizendo que prefere o duradouro ao descartável, o singular ao genérico.

Hoje, o couro brasileiro é reconhecido internacionalmente pela qualidade. O Brasil tem o maior rebanho bovino comercial do mundo, e as indústrias de curtume nacionais desenvolveram técnicas de curtimento que preservam a qualidade das peles com menor impacto ambiental. O couro curtido ao vegetal, especialmente, voltou a ganhar espaço em ateliês artesanais de todo o país — incluindo a oficina da Pimenta Country AJ em Sertanópolis, onde cada cinto começa como um couro selecionado a dedo e termina como uma peça com identidade e história.`,
  },
];

// ─── Helper functions ─────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.category === category);
}
