// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO CENTRAL DO SITE
// Altere aqui: WhatsApp, e-mail, Instagram, endereço e textos-chave.
// Esses valores são usados em todo o site (cabeçalho, rodapé, contato).
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Atelier Lume',
  tagline: 'Arquitetura que permanece.',
  location: 'São Paulo — Brasil',

  // Número no formato internacional, somente dígitos (usado no link do WhatsApp)
  whatsapp: '5514999999999',
  whatsappDisplay: '+55 14 99999-9999',

  email: 'contato@atelierlume.com.br',
  instagram: '@atelierlume',
  instagramUrl: 'https://instagram.com/atelierlume',

  manifesto:
    'Projetamos espaços que atravessam o tempo, acolhem histórias e revelam novas formas de habitar.',

  aboutIntro:
    'O Atelier Lume nasce do encontro entre precisão e sensibilidade. Desenvolvemos projetos atentos ao contexto, à matéria e à vida cotidiana, buscando soluções que permaneçam relevantes com o passar do tempo.',

  positioning:
    'O Atelier Lume cria residências, interiores e espaços comerciais que equilibram matéria, luz, proporção e paisagem. Cada projeto é uma resposta única ao lugar e às pessoas que irão habitá-lo.',
}

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`
}
