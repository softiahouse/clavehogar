# ClaveHogar — clavehogar.es

Site institucional da empresa ClaveHogar, em Torrevieja (Alicante, Espanha).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + glassmorphism
- **Framer Motion** (animações)
- Deploy na **Vercel**

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abrir em: http://localhost:3000

## Deploy na Vercel

### Opção 1 — Via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opção 2 — Via Dashboard

1. Fazer push do projeto para GitHub/GitLab
2. Acessar vercel.com → Add New Project
3. Importar o repositório
4. Configurações:
   - Framework: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
5. Clicar em **Deploy**

## Configurar domínio clavehogar.es

Após o deploy:
1. No dashboard Vercel → Settings → Domains
2. Adicionar `clavehogar.es` e `www.clavehogar.es`
3. No painel DNS do seu registrador, apontar:
   - Tipo A → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`

## Contatos no site

- **Gilson**: +34 693 976 311 — https://wa.me/34693976311
- **Paul**: +34 612 266 321 — https://wa.me/34612266321

## Estrutura

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── QuienesSomos.tsx
│   ├── Servicios.tsx
│   ├── Paquetes.tsx
│   ├── Testimonios.tsx
│   ├── PorQueElegirnos.tsx
│   ├── Contacto.tsx
│   ├── Footer.tsx
│   └── WhatsAppFAB.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```
