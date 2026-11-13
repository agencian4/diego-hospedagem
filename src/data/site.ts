// Fonte única de conteúdo do site. Tudo aqui veio do site atual e dos dois anúncios no Airbnb
// (consultados em 12/11/2026). Perguntas com `pendente: true` não são publicadas até o cliente confirmar.

export const contato = {
  marca: "Diego's Hospedagens",
  whatsapp: '5581994115335',
  whatsappExibicao: '(81) 99411-5335',
  endereco: 'Av. Litorânea, São Luís – MA',
};

export const wa = (texto: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`;

export const mensagens = {
  geral: "Olá! Vi o site da Diego's Hospedagens e quero consultar datas. Período: __ a __. Hóspedes: __.",
  flat203: 'Olá! Quero consultar o Flat 203 (2 quartos). Período: __ a __. Hóspedes: __.',
  flat204: 'Olá! Quero consultar o Flat 204 (varanda). Período: __ a __. Hóspedes: __.',
  transfer: 'Olá! Quero montar hospedagem + transfer. Período: __ a __. Hóspedes: __. Destino do transfer: __.',
};

type FotoGaleria = { arquivo: string; alt: string };
const galeria = (prefixo: string, itens: [string, string][]): FotoGaleria[] =>
  itens.map(([a, alt]) => ({ arquivo: `${prefixo}-${a}`, alt }));

export const flats = [
  {
    id: '203',
    slug: 'flat-203',
    titulo: 'Para a família toda, com dois banheiros',
    nota: '5,0',
    avaliacoes: 7,
    selo: 'Preferido dos hóspedes no Airbnb' as string | null,
    airbnb: 'https://airbnb.com/h/flat203slz',
    mensagem: mensagens.flat203,
    specs: [
      { rotulo: 'Hóspedes', valor: 'até 8' },
      { rotulo: 'Quartos', valor: '2' },
      { rotulo: 'Camas', valor: '4' },
      { rotulo: 'Banheiros', valor: '2' },
    ],
    descricao:
      'Quarto 1 com cama de casal; quarto 2 com cama de casal e duas de solteiro. Garagem privativa, lavadora no apartamento e cozinha completa. A churrasqueira fica na área da piscina.',
    citacao: { texto: 'Tudo exatamente como no anúncio.', autor: 'Maxwel', quando: 'setembro de 2026' },
    capa: 'f203-B01',
    capaAlt: 'Sala do Flat 203 com sofá, TV e mesa de jantar, iluminada pelas janelas',
    galeria: galeria('f203', [
      ['B01', 'Sala de estar com sofá e TV'],
      ['B05', 'Mesa de jantar e sala integradas'],
      ['B11', 'Sala vista a partir da varanda'],
      ['B12', 'Sala e acesso aos quartos'],
      ['B04', 'Quarto 1 com cama de casal'],
      ['B13', 'Quarto 1 com ar-condicionado'],
      ['B08', 'Quarto 1, outro ângulo'],
      ['B14', 'Quarto 2 com cama de casal e camas de solteiro'],
      ['B09', 'Cozinha com geladeira, micro-ondas e armários'],
      ['B10', 'Cozinha com fogão'],
      ['B16', 'Banheiro 1'],
      ['B17', 'Banheiro 2 com box de vidro'],
      ['B19', 'Área de serviço com lavadora'],
      ['B02', 'Varanda com vista para o mar'],
      ['B00', 'Piscina do condomínio'],
      ['B23', 'Piscina e churrasqueira'],
      ['B20', 'Entrada do condomínio'],
      ['B03', 'Fachada e portão do condomínio'],
      ['B28', 'A orla da Avenida Litorânea vista do prédio'],
    ]),
  },
  {
    id: '204',
    slug: 'flat-204',
    titulo: 'A varanda, as redes e o vento do mar',
    nota: '4,5',
    avaliacoes: 14,
    selo: null as string | null,
    airbnb: 'https://airbnb.com/h/flat204slz',
    mensagem: mensagens.flat204,
    specs: [
      { rotulo: 'Hóspedes', valor: 'até 7' },
      { rotulo: 'Quarto', valor: '1 + sala' },
      { rotulo: 'Redes', valor: '2' },
      { rotulo: 'Banheiro', valor: '1' },
    ],
    descricao:
      'Quarto com cama de casal, colchão extra e rede; na sala, duas camas de solteiro e outra rede. Ar-condicionado, máquina de lavar, cafeteira e espaço de trabalho exclusivo.',
    citacao: { texto: 'A sacada com vista para o mar lateral é um charme à parte.', autor: 'Gabriela', quando: 'agosto de 2026' },
    capa: 'f204-A05',
    capaAlt: 'Sacada do Flat 204 com vista lateral para o mar da Avenida Litorânea',
    galeria: galeria('f204', [
      ['A00', 'Varanda com vista lateral para o mar'],
      ['A05', 'Sacada voltada para a orla'],
      ['A16', 'O mar e os coqueiros da Litorânea vistos do flat'],
      ['A07', 'Fim de tarde visto do flat'],
      ['A02', 'Quarto com cama de casal e TV'],
      ['A09', 'Quarto com guarda-roupa'],
      ['A20', 'Quarto, outro ângulo'],
      ['A01', 'Mesa de jantar junto à janela'],
      ['A10', 'Sala com mesa e cozinha ao fundo'],
      ['A04', 'Sala com cama de solteiro e janela'],
      ['A12', 'Sala com camas de solteiro'],
      ['A23', 'Cama de solteiro na sala'],
      ['A15', 'Cozinha com fogão'],
      ['A22', 'Cozinha e pia'],
      ['A21', 'Armários da cozinha'],
      ['A08', 'Banheiro'],
      ['A26', 'Área de serviço com máquina de lavar'],
      ['A03', 'Piscina do condomínio'],
      ['A17', 'Piscina e churrasqueira'],
      ['A19', 'Estacionamento coberto'],
    ]),
  },
];

export const nosDois = [
  'Piscina no condomínio fechado',
  'Estacionamento gratuito',
  'Cozinha completa',
  'Wi-Fi e espaço de trabalho',
  'Pets são bem-vindos',
  'Self check-in com cofre de chaves',
];

export const orla = [
  { nome: 'Os flats', texto: 'Condomínio fechado na Av. Litorânea, no 2º andar', destaque: true, vazado: false },
  { nome: 'A praia', texto: 'Do outro lado da rua, como contam os hóspedes', destaque: false, vazado: false },
  { nome: 'Olho d’Água', texto: 'Cerca de 5 minutos a pé, com restaurantes e lojas', destaque: false, vazado: false },
  { nome: 'Mercado', texto: 'Supermercado grande a uns 15 minutos de caminhada', destaque: false, vazado: false },
  { nome: 'Centro Histórico', texto: 'Os casarões de azulejo, patrimônio da UNESCO, a uma corrida de carro', destaque: false, vazado: true },
];

export const transfer = [
  { destino: 'Barreirinhas', nota: 'Portal de entrada dos Lençóis Maranhenses', valor: 'R$ 1.000' },
  { destino: 'Santo Amaro do Maranhão', nota: 'O outro acesso aos Lençóis', valor: 'R$ 800' },
  { destino: 'Tutóia', nota: 'Litoral leste do Maranhão', valor: 'R$ 1.450' },
  { destino: 'Parnaíba', nota: 'Já no Piauí, porta do Delta', valor: 'R$ 1.600' },
];

export const depoimentos = {
  principal: { texto: 'Para chegar à praia é só atravessar a rua.', autor: 'Carlos Guilherme', flat: 'Flat 203', quando: 'setembro de 2026' },
  outros: [
    { texto: 'Fui com a família e aprovei, bem espaçoso e limpo.', autor: 'Amanda', flat: 'Flat 203', quando: 'outubro de 2026' },
    { texto: 'Local muito arejado, com vento natural.', autor: 'Kedson', flat: 'Flat 204', quando: 'outubro de 2026' },
  ],
};

export const perguntas: { p: string; r: string; pendente?: boolean }[] = [
  {
    p: 'Tem elevador?',
    r: 'Não. Os dois flats ficam no 2º andar e o acesso é por escada. Se alguém do grupo tem mobilidade reduzida ou se vocês viajam com muita bagagem, vale considerar antes de reservar.',
  },
  {
    p: 'Quantas pessoas cabem?',
    r: 'O Flat 203 recebe até 8 pessoas, com 2 quartos e 2 banheiros. O Flat 204 recebe até 7, com 1 quarto, sala com duas camas de solteiro, colchão extra e duas redes. Grupos maiores podem ficar nos dois, no mesmo condomínio.',
  },
  {
    p: 'Posso levar meu pet?',
    r: 'Pode. Os dois flats aceitam animais de estimação. Conte pelo WhatsApp quantos e de que porte, para combinarmos os detalhes.',
  },
  {
    p: 'Como funciona a chegada?',
    r: 'Os dois flats têm self check-in com cofre de chaves: você recebe as instruções antes e chega no seu horário, sem depender de alguém esperando.',
  },
  {
    p: 'Reservo pelo Airbnb ou direto com vocês?',
    r: 'Os dois caminhos funcionam. Pelo Airbnb você reserva com a proteção da plataforma; pelo WhatsApp você fala direto com a gente e já combina o transfer na mesma conversa.',
  },
  {
    p: 'Dá para ficar um mês?',
    r: 'Sim. O Flat 204 aceita estadias de 28 noites ou mais, com Wi-Fi e espaço de trabalho. Consulte as condições para o período.',
  },
  // Aguardando confirmação do cliente — só aparecem quando `pendente` for removido e a resposta preenchida.
  { p: 'O chuveiro é aquecido?', r: '', pendente: true },
  { p: 'O transfer pode ser contratado sem a hospedagem?', r: '', pendente: true },
];
