# Ajustes visuais e nova área de Projetos

## O que muda

### 1. Remover a foto do Hero
- Remover o bloco do retrato (imagem + brilho) de `HeroSection.tsx`; o nome gigante passa a ocupar a largura total.
- Remover o campo `image` do JSON-LD em `src/pages/Index.tsx` e o campo `avatar` dos dados (`portfolio-data.ts`) e do tipo `PersonalInfo`.
- Excluir o arquivo `src/assets/geovane-avatar.jpg` (não será mais referenciado).

### 2. WhatsApp com logo e link direto
- Criar `src/components/icons/WhatsAppIcon.tsx` — SVG oficial do WhatsApp (o lucide-react não tem ícone de marca).
- Trocar o ícone `Phone` pelo `WhatsAppIcon` no rail de contato do Hero e no card da seção Contato.
- O número vira link para `https://wa.me/5511968828204?text=Olá%20Geovane!%20Vim%20pelo%20seu%20portfólio.` (mensagem curta e neutra, pré-preenchida).
- Centralizar o link em `portfolio-data.ts` (campo `whatsapp`) para reutilizar nos dois lugares.

### 3. Nova seção "Projetos"
- Nova `src/components/sections/ProjectsSection.tsx` entre Competências e Contato (`id="projetos"`).
- Estrutura pronta: grid de cards `glass-card` com título, descrição e tags de tecnologias — preenchidos com placeholder "Em breve" até você mandar os projetos reais.
- Adicionar link "Projetos" na `NavBar` (scroll-spy já funciona por id).

## Detalhes técnicos
- Nenhuma dependência nova (ícone WhatsApp = SVG inline).
- O link `wa.me` abre em nova aba com `rel="noopener noreferrer"`.
- Número no formato internacional: `55` + `11` + `968828204`.
