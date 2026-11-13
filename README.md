# Diego's Hospedagens — site

Site estático em Astro. Conteúdo em `src/data/site.ts`, fotos em `src/assets/photos/` (o Astro gera AVIF/WebP em vários tamanhos no build).

## Rodar
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # gera dist/

## Publicar (Vercel)
1. Suba esta pasta para um repositório no GitHub e importe na Vercel (preset Astro é detectado sozinho).
2. Em Settings › Environment Variables defina:
   - `SITE_URL` — domínio definitivo (canonical, Open Graph e sitemap). Atualize também `public/robots.txt`.
   - `PUBLIC_GA_ID` e `PUBLIC_META_PIXEL_ID` — opcionais; sem valor, nenhum script de rastreamento é carregado.
3. Aponte o domínio na Vercel.

## Eventos de conversão
Todo link com `data-evento` dispara `clique_whatsapp`, `clique_airbnb` (GA4) e `Contact`/`ViewContent` (Meta Pixel), com o parâmetro `local` indicando de onde veio o clique (hero, flat-203, transfer, barra-mobile…). A galeria envia `abrir_galeria`.

## Pendências de conteúdo
- Perguntas "O chuveiro é aquecido?" e "O transfer pode ser contratado sem a hospedagem?" estão em `perguntas` com `pendente: true` — preencha `r` e remova `pendente` para publicar.
- Confirmar número de WhatsApp, horário de checkout do 204 e se o 203 tem ar-condicionado.
