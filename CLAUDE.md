# DentIQ — Contexto do Projeto

## Permissões Claude Code
As ferramentas abaixo são pré-aprovadas — Claude não precisa pedir confirmação:
```json
allowedTools: ["Bash", "PowerShell", "Read", "Write", "Edit", "Glob", "Grep"]
```
Arquivo de configuração: `.claude/settings.json` na raiz do projeto.

Plataforma educacional de odontologia com jogos interativos para
estudantes revisarem conteúdo por matéria, assunto e dificuldade.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Supabase (auth + progresso do aluno)
- Anthropic SDK (IA tutora — fase 2)
- Deploy: Vercel

## Design
- Fundo: #0a0f0a (escuro)
- Cor principal: #1D9E75 (verde)
- Títulos: fonte Syne (800)
- Corpo: fonte DM Sans (400/500)
- Sem gradientes. Bordas finas (0.5px). Visual limpo e profissional.

## Estrutura de pastas
app/
  page.tsx               → landing page
  jogos/page.tsx         → seleção com filtros
  jogos/quiz/page.tsx    → quiz múltipla escolha
  jogos/anatomia/page.tsx → drag & drop anatomia
  tutor/page.tsx         → chat com IA (fase 2)
  api/chat/route.ts      → endpoint da IA tutora
components/
  jogos/                 → componentes dos jogos
  ui/                    → componentes reutilizáveis
lib/
  supabase.ts
  anthropic.ts
data/
  questions.ts           → banco de questões hardcoded (MVP)

## Matérias disponíveis
Implantodontia, Prótese Parcial Fixa, Prótese Total

## Níveis de dificuldade
Básico, Intermediário, Avançado

## Jogos planejados
1. Quiz (múltipla escolha) ← prioridade
2. Drag & Drop 
3. Diagnóstico Clínico (casos clínicos)
4. RX Challenge (identificar estruturas em rx)
5. Materiais Master (associar propriedades)

## Convenções
- Português brasileiro em todo o conteúdo e UI
- Nomes de componentes em inglês (PascalCase)
- Questões ficam em data/questions.ts com tipo Question
- Nunca hardcodar cores — usar variáveis Tailwind ou CSS vars
- Commits pequenos e descritivos
