# Atelier Lume — Site institucional

Site autoral para escritório de arquitetura, construído com React, TypeScript, Vite, GSAP + ScrollTrigger, Lenis e Lucide React. Sem backend — pronto para GitHub e Vercel.

## 1. Como criar o projeto no computador

1. Extraia o arquivo `.zip` recebido em uma pasta, por exemplo `atelier-lume`.
2. Abra essa pasta no terminal (ou no VS Code → "Abrir pasta").
3. Certifique-se de ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior). Para conferir:
   ```bash
   node -v
   ```

## 2. Como instalar as dependências

Dentro da pasta do projeto:

```bash
npm install
```

## 3. Como executar localmente

```bash
npm run dev
```

O terminal mostrará um endereço, geralmente `http://localhost:5173`. Abra-o no navegador. O site recarrega automaticamente a cada alteração salva.

## 4. Como substituir imagens, textos, WhatsApp e informações do arquiteto

**WhatsApp, e-mail, Instagram e localização:** edite um único arquivo:
`src/data/siteConfig.ts`

**Imagens e textos dos projetos** (Casa Horizonte, Apartamento Nômade, Casa Maré, Galeria Orbe): edite
`src/data/projects.ts` — todas as URLs de imagem (temporárias, do Unsplash) estão centralizadas ali. Para usar fotos reais, troque a URL por um caminho local, por exemplo:
1. Coloque as imagens em `public/images/casa-horizonte/hero.jpg`
2. No `projects.ts`, use `heroImage: '/images/casa-horizonte/hero.jpg'`

**Textos da página inicial** (manifesto, chamada final, introdução "sobre"): também em `siteConfig.ts` e em `src/pages/Home/Home.tsx`.

**Página Sobre:** o arquivo `src/pages/About/About.tsx` contém um aviso claro `[Espaço reservado...]` onde deve entrar a história real do escritório — nenhum currículo, prêmio ou nome de arquiteto foi inventado, propositalmente.

**Favicon:** substitua `public/favicon.svg` por um logotipo próprio (mantendo o mesmo nome de arquivo).

**Número do WhatsApp:** em `siteConfig.ts`, altere `whatsapp` (formato internacional, apenas dígitos, ex: `5511987654321`) e `whatsappDisplay` (formato visual).

## 5. Como criar o repositório no GitHub

1. Crie uma conta em [github.com](https://github.com), se ainda não tiver.
2. No GitHub, clique em **New repository**, dê um nome (ex: `atelier-lume`) e não marque nenhuma opção de inicialização (sem README, sem .gitignore).
3. Copie a URL do repositório, algo como `https://github.com/seu-usuario/atelier-lume.git`.

## 6. Como enviar os arquivos pelo terminal

Dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Primeira versão do site Atelier Lume"
git branch -M main
git remote add origin https://github.com/seu-usuario/atelier-lume.git
git push -u origin main
```

## 7. Como publicar gratuitamente na Vercel

1. Crie uma conta em [vercel.com](https://vercel.com) usando seu login do GitHub.
2. Clique em **Add New → Project**.
3. Selecione o repositório `atelier-lume` que você acabou de enviar.
4. A Vercel detecta automaticamente que é um projeto Vite — não é necessário alterar nenhuma configuração.
5. Clique em **Deploy**. Em poucos minutos, você recebe um endereço público (`.vercel.app`), que pode depois ser trocado por um domínio próprio nas configurações do projeto.

## 8. Como corrigir problemas de rota ao atualizar uma página

Este é um site de página única (SPA) com rotas administradas pelo React Router. Se, ao atualizar (F5) uma página interna como `/projetos/casa-mare`, aparecer um erro 404 do servidor, o motivo é que o servidor não sabe redirecionar essa URL de volta para o `index.html`.

- **Na Vercel:** o arquivo `vercel.json`, já incluído neste projeto, resolve isso automaticamente — ele redireciona todas as rotas para `index.html`, deixando o React Router assumir a navegação.
- **Em outro provedor:** procure a opção de "SPA fallback" ou "rewrite all routes to index.html" nas configurações de hospedagem.

## 9. Como gerar a versão de produção

```bash
npm run build
```

Isso cria a pasta `dist/`, com os arquivos otimizados prontos para hospedagem. Para conferir localmente antes de publicar:

```bash
npm run preview
```

---

## Estrutura do projeto

```
src/
  assets/
  components/
    Header/ Footer/ Preloader/ ProjectCard/
    BeforeAfter/ ContactForm/ SmoothScroll/ PageTransition/
  data/
    projects.ts      → conteúdo e imagens dos projetos
    siteConfig.ts     → WhatsApp, e-mail, Instagram, textos-chave
  pages/
    Home/ Projects/ ProjectDetail/ About/ Contact/ NotFound/
  styles/
    variables.css     → paleta, tipografia, espaçamentos
    globals.css
    animations.css
  App.tsx
  main.tsx
public/
  favicon.svg
  robots.txt
  sitemap.xml
```

## Notas técnicas

- O formulário de contato não possui backend: ao ser enviado, monta uma mensagem estruturada e abre o WhatsApp automaticamente.
- Todas as animações (GSAP/ScrollTrigger e o preloader) respeitam `prefers-reduced-motion`.
- O comparador de antes/depois funciona com mouse, toque e teclado (setas ← →, Home, End).
- O conteúdo permanece visível mesmo que o JavaScript falhe — nenhuma animação oculta texto ou imagens por padrão.
