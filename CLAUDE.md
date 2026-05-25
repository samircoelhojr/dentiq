# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Permissões Claude Code
As ferramentas abaixo são pré-aprovadas — Claude não precisa pedir confirmação:
```json
allowedTools: ["Bash", "PowerShell", "Read", "Write", "Edit", "Glob", "Grep"]
```
Arquivo de configuração: `.claude/settings.json` na raiz do projeto.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento em localhost:3000
npm run build    # build de produção (valida TypeScript + Next.js)
npm run lint     # ESLint com regras do Next.js
npx tsc --noEmit # type-check sem gerar arquivos (rodar após editar data/)
```

Não há testes automatizados no momento. Para validar mudanças em `data/questions.ts` ou `data/dragdrop.ts`, sempre rodar `npx tsc --noEmit` antes de commitar.

## Arquitetura

Plataforma educacional de odontologia — MVP com jogos interativos. Sem autenticação nem backend ainda (tudo client-side com dados hardcoded).

### Estrutura real atual

```
app/
  layout.tsx              → fontes Google (Syne + DM Sans via next/font), metadata global
  page.tsx                → landing page
  cadastro/page.tsx       → tela de cadastro (placeholder)
  jogos/page.tsx          → hub de seleção com filtros (matéria, assunto, dificuldade, quantidade)
  jogos/quiz/page.tsx     → jogo de múltipla escolha
  jogos/dragedrop/page.tsx → jogo de anatomia com imagem + pontos clicáveis
data/
  questions.ts            → banco de questões + helpers de filtragem
  dragdrop.ts             → desafio de drag & drop (zonas com coordenadas % sobre imagem)
public/
  implant-diagram.png     → diagrama educacional do implante osseointegrado
```

`components/` e `lib/` não existem ainda — todo código está inline nas pages.

### Fluxo de dados do Quiz

`/jogos` coleta filtros via estado local → monta query string → navega para `/jogos/quiz?subject=&topic=&difficulty=&count=`. O quiz lê os params com `useSearchParams()` (envolto em `<Suspense>`), chama `filterQuestions()` de `data/questions.ts`, embaralha e serve as questões. Sem chamadas de API.

### `data/questions.ts`

É o arquivo mais crítico do projeto. Contém:
- Tipos `Difficulty`, `Subject`, `Question`
- Array `questions: Question[]` com ~150 questões (Implantodontia, Prótese Parcial Fixa, Prótese Total)
- `subjects[]`, `difficulties[]` — usados nos selects do hub
- `getTopics(subject)` — extrai topics únicos de um subject para popular o select de assunto
- `filterQuestions({ subject?, topic?, difficulty? })` — filtragem combinada

IDs de questão seguem o padrão `"imp-c1-01"` (matéria-capítulo-número), `"ppf-c1-01"`, `"pt-c1-01"`.

### Drag & Drop

Não usa HTML5 drag API (não funciona bem no mobile). Usa mecânica de tap/click: selecionar chip de label → tocar zona na imagem. Zonas são `<button>` com `position: absolute`, `left: X%`, `top: Y%` sobre `<Image fill>` com `aspect-ratio: 4/5`. Coordenadas em `data/dragdrop.ts` precisam ser calibradas visualmente contra `public/implant-diagram.png`.

### Design system

Tailwind com tokens customizados em `tailwind.config.ts`:
- `brand.bg` (#0a0f0a) — fundo
- `brand.surface` (#111611) — cards
- `brand.border` (#1e2a1e) — bordas
- `brand.green` (#1D9E75) — cor principal
- `brand.text` (#e8f0e8), `brand.text-dim` (#8a9e8a), `brand.muted` (#4a5a4a)
- `font-syne` (títulos, bold 700/800), `font-dm` (corpo, 400/500)
- Bordas sempre `0.5px`. Sem gradientes.

Na prática o código usa os hex diretamente (ex: `text-[#1D9E75]`) — ao refatorar, preferir os tokens `brand.*`.

## Convenções

- Português brasileiro em todo o conteúdo e UI; nomes de componentes/variáveis em inglês
- Cada page é `"use client"` — não há Server Components ainda
- Deploy automático na Vercel a partir do branch `master` do repo `samircoelhojr/dentiq`
- Nunca fazer `git push` sem instrução explícita do usuário

## Roadmap (fases futuras)

- Supabase: auth + persistência de progresso do aluno
- Anthropic SDK: tutor de IA em `/tutor` + `/api/chat`
- Novos jogos: Diagnóstico Clínico, RX Challenge, Materiais Master
