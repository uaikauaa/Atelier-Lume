// ─────────────────────────────────────────────────────────────
// DADOS DOS PROJETOS
// Todas as imagens (temporárias, do Unsplash) estão centralizadas
// aqui. Para usar fotos reais, basta substituir as URLs abaixo
// por caminhos locais (ex: '/images/casa-horizonte/hero.jpg').
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = 'Residencial' | 'Interiores' | 'Comercial'

export interface ProjectImage {
  src: string
  alt: string
  orientation: 'horizontal' | 'vertical'
}

export interface BeforeAfter {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
}

export interface Project {
  slug: string
  name: string
  category: ProjectCategory
  city: string
  year: number
  area: string
  concept: string
  description: string
  heroImage: string
  heroImageAlt: string
  cardImage: string
  cardImageAlt: string
  gallery: ProjectImage[]
  materials: string[]
  beforeAfter?: BeforeAfter
}

export const projects: Project[] = [
  {
    slug: 'casa-horizonte',
    name: 'Casa Horizonte',
    category: 'Residencial',
    city: 'São Paulo',
    year: 2023,
    area: '410 m²',
    concept: 'Uma casa desenhada em torno da linha do horizonte visível a partir do terreno.',
    description:
      'A Casa Horizonte parte de uma única decisão de projeto: preservar, de qualquer ponto da casa, a visão da linha onde o terreno encontra o céu. Os volumes foram organizados em platôs que acompanham o desnível natural do lote, evitando cortes e aterros desnecessários. A estrutura em concreto aparente dialoga com painéis de madeira que se abrem totalmente para o jardim, tornando difusa a fronteira entre dentro e fora. A iluminação natural foi estudada estação a estação, resultando em brises que filtram o sol de verão sem bloquear o calor desejado no inverno.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    heroImageAlt: 'Fachada da Casa Horizonte com estrutura em concreto e grandes aberturas de vidro ao entardecer',
    cardImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop',
    cardImageAlt: 'Vista externa da Casa Horizonte integrada à paisagem',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop', alt: 'Sala de estar integrada ao jardim da Casa Horizonte', orientation: 'horizontal' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop', alt: 'Detalhe da escada em concreto aparente', orientation: 'vertical' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop', alt: 'Cozinha com marcenaria em madeira natural', orientation: 'horizontal' },
      { src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1400&auto=format&fit=crop', alt: 'Suíte principal com vista para o horizonte', orientation: 'vertical' },
    ],
    materials: ['Concreto aparente', 'Madeira de reflorestamento', 'Vidro laminado', 'Pedra local'],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1600585152915-8a5e0b3c8f2b?q=80&w=1800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop',
      beforeAlt: 'Terreno original antes da intervenção do Atelier Lume',
      afterAlt: 'Sala integrada ao jardim após a reforma da Casa Horizonte',
    },
  },
  {
    slug: 'apartamento-nomade',
    name: 'Apartamento Nômade',
    category: 'Interiores',
    city: 'São Paulo',
    year: 2022,
    area: '138 m²',
    concept: 'Um apartamento pensado para moradores que vivem entre cidades, sem perder o sentido de lar.',
    description:
      'O desafio do Apartamento Nômade era criar uma base estável para moradores com rotina de viagens constantes. A solução foi reduzir a planta a poucos elementos fixos — um núcleo de marcenaria que concentra armazenamento e serviços — e liberar o restante do espaço para se reconfigurar conforme a necessidade. Cortinas de linho substituem portas em parte do apartamento, permitindo que a luz atravesse os ambientes ao longo do dia. A paleta neutra foi escolhida para acomodar objetos trazidos de diferentes lugares sem gerar ruído visual.',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2000&auto=format&fit=crop',
    heroImageAlt: 'Sala de estar minimalista do Apartamento Nômade com marcenaria em madeira clara',
    cardImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop',
    cardImageAlt: 'Quarto do Apartamento Nômade com luz natural difusa',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1800&auto=format&fit=crop', alt: 'Cozinha integrada do Apartamento Nômade', orientation: 'horizontal' },
      { src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop', alt: 'Detalhe da marcenaria sob medida', orientation: 'vertical' },
      { src: 'https://images.unsplash.com/photo-1600566752734-2a0cd53d1a83?q=80&w=1800&auto=format&fit=crop', alt: 'Corredor com cortina de linho separando ambientes', orientation: 'horizontal' },
    ],
    materials: ['Madeira clara', 'Linho natural', 'Latão escovado', 'Microcimento'],
  },
  {
    slug: 'casa-mare',
    name: 'Casa Maré',
    category: 'Residencial',
    city: 'Ubatuba',
    year: 2021,
    area: '295 m²',
    concept: 'Uma casa de temporada erguida sobre pilotis para respeitar o solo e o regime das marés.',
    description:
      'Erguida sobre pilotis de madeira tratada, a Casa Maré foi projetada para conviver com a variação natural do terreno próximo ao mar, minimizando impermeabilização do solo e preservando a vegetação nativa ao redor. A cobertura em quatro águas responde ao regime intenso de chuvas da região, enquanto grandes venezianas de madeira permitem ventilação cruzada em todos os ambientes, dispensando o uso constante de ar-condicionado. Internamente, os espaços sociais se abrem para uma varanda contínua, tratada como uma extensão da casa voltada à paisagem.',
    heroImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop',
    heroImageAlt: 'Casa Maré vista do jardim, com estrutura elevada sobre pilotis de madeira',
    cardImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop',
    cardImageAlt: 'Varanda da Casa Maré com vista para a vegetação',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1800&auto=format&fit=crop', alt: 'Varanda contínua da Casa Maré', orientation: 'horizontal' },
      { src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1400&auto=format&fit=crop', alt: 'Detalhe das venezianas de madeira', orientation: 'vertical' },
      { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1800&auto=format&fit=crop', alt: 'Sala de estar com ventilação cruzada natural', orientation: 'horizontal' },
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop', alt: 'Quarto com vista para a mata', orientation: 'vertical' },
    ],
    materials: ['Madeira de peroba tratada', 'Telha cerâmica', 'Ferro patinado', 'Pedra São Tomé'],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1533619043865-1efab89e5750?q=80&w=1800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1800&auto=format&fit=crop',
      beforeAlt: 'Terreno da Casa Maré antes da construção',
      afterAlt: 'Varanda finalizada da Casa Maré integrada à paisagem',
    },
  },
  {
    slug: 'galeria-orbe',
    name: 'Galeria Orbe',
    category: 'Comercial',
    city: 'Campinas',
    year: 2023,
    area: '620 m²',
    concept: 'Um espaço expositivo neutro, desenhado para desaparecer diante da arte que abriga.',
    description:
      'A Galeria Orbe ocupa um antigo galpão industrial reconvertido em espaço expositivo. O projeto manteve a estrutura metálica original aparente, tratando-a como parte do acervo arquitetônico do lugar, e inseriu um sistema de paredes móveis que permite reconfigurar completamente os percursos de visitação a cada mostra. A luz zenital foi controlada por um forro técnico difusor, garantindo iluminação homogênea sem a necessidade de luz artificial durante o dia. Um pátio interno serve como pausa entre as salas e amplia a percepção de escala do edifício.',
    heroImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000&auto=format&fit=crop',
    heroImageAlt: 'Interior amplo da Galeria Orbe com estrutura metálica aparente e luz zenital',
    cardImage: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1600&auto=format&fit=crop',
    cardImageAlt: 'Sala expositiva da Galeria Orbe com paredes móveis',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1509805735755-6d3d1a6e5f8c?q=80&w=1800&auto=format&fit=crop', alt: 'Pátio interno da Galeria Orbe', orientation: 'horizontal' },
      { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop', alt: 'Detalhe da estrutura metálica original preservada', orientation: 'vertical' },
      { src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1800&auto=format&fit=crop', alt: 'Corredor de circulação entre salas expositivas', orientation: 'horizontal' },
    ],
    materials: ['Aço estrutural preservado', 'Concreto polido', 'Vidro fosco', 'Forro técnico difusor'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev: Project; next: Project } {
  const index = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return { prev, next }
}
