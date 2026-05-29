---
name: gerar-questoes
description: >-
  Gera questões de múltipla escolha de uma disciplina de odontologia para o
  DentIQ. Organiza a disciplina em tópicos numa ordem pedagógica, seleciona os
  pontos mais importantes de cada tópico (ancorados nos livros-texto de
  referência), elabora as questões com alternativas SEM vícios de construção e a
  posição da correta randomizada/balanceada, e escreve os objetos Question direto
  em data/questions.ts. Use quando o usuário pedir para "gerar questões",
  "criar questões de <disciplina>", "popular o banco de questões" ou similar.
---

# Gerar questões — DentIQ

Esta skill produz questões de múltipla escolha confiáveis para a plataforma
DentIQ. O resultado é escrito direto em `data/questions.ts`; depois o usuário
roda `scripts/seed-questions.ts` para subir ao Supabase. **Uma rodada = uma
disciplina inteira.**

## Argumentos

- **Disciplina** (obrigatório): nome da disciplina, ex: "Endodontia", "Prótese
  Total". Se não vier, pergunte qual.
- **Quantidade** (opcional): nº de questões por tópico. Default: **6 por tópico**.
- **Distribuição de dificuldade** (opcional). Default: **40% Básico, 40%
  Intermediário, 20% Avançado**.

## Formato de saída (não negociável)

Cada questão é um objeto que satisfaz a interface `Question` de
`data/questions.ts`:

```ts
{
  id: string;            // ver "Padrão de ID" abaixo — único, sem colidir
  subject: Subject;      // valor exato do tipo Subject
  topic: string;         // nome do tópico (consistente entre questões do tópico)
  difficulty: Difficulty;// "Básico" | "Intermediário" | "Avançado"
  question: string;      // enunciado em pt-BR
  options: string[];     // exatamente 4 alternativas
  correctIndex: number;  // 0–3, posição da correta (balanceado — ver anti-viés)
  explanation: string;   // por que a correta está certa, fundamentada na fonte
}
```

Conteúdo e UI em **português brasileiro**. Não traduza termos técnicos
consagrados desnecessariamente.

## Padrão de ID

Use `{prefixo}-c{NN}-{NN}`: prefixo da disciplina, `c` + número do tópico na
ordem pedagógica (2 dígitos), e número sequencial da questão dentro do tópico (2
dígitos). Ex: `endo-c03-04` = Endodontia, 3º tópico, 4ª questão.

Os prefixos por disciplina estão em [references/bibliografia.md](references/bibliografia.md).
**Antes de gerar**, faça `grep -oE '"<prefixo>-[^"]+"' data/questions.ts` para ver
o que já existe e nunca repetir um ID.

## Workflow

### Fase 0 — Preparação
1. Identifique a disciplina e mapeie para o tipo `Subject` e o prefixo de ID
   (tabela em [references/bibliografia.md](references/bibliografia.md)).
2. **Disciplina nova** (ainda não está no tipo `Subject` de `data/questions.ts`):
   - Adicione o valor ao tipo `Subject` e ao array `subjects[]` em `data/questions.ts`.
   - Em `data/areas.ts`, preencha o campo `subject` da disciplina correspondente
     com esse mesmo valor (é o que faz a disciplina aparecer com questões na UI).
3. Leia [references/bibliografia.md](references/bibliografia.md) para as obras de
   referência da disciplina. **Todo o conteúdo deve ancorar nelas.**
4. Verifique os IDs já existentes do prefixo (grep acima).

### Fase 1 — Organização em tópicos (ordem pedagógica)
Liste os tópicos da disciplina numa sequência que **construa o conhecimento
progressivamente**: fundamentos → anatomia/biologia aplicada → diagnóstico →
técnicas → materiais/instrumentos → complicações → tópicos avançados/clínicos.
Baseie a divisão na estrutura dos livros-texto de referência.

Apresente ao usuário a lista numerada de tópicos antes de gerar as questões (é
barato e evita gerar 100+ questões sobre uma estrutura errada). Prossiga em
seguida — não espere aprovação tópico a tópico (escopo é a disciplina inteira).

### Fase 2 — Seleção dos pontos-chave por tópico
Para cada tópico, liste os conceitos essenciais que uma boa cobertura precisa
abranger: definições, classificações, indicações/contraindicações, técnicas e
passos, materiais/instrumentos, dados numéricos relevantes, complicações e
manejo. **Cubra o tópico de forma abrangente** — não concentre só no que é fácil
de perguntar.

### Fase 3 — Elaboração das questões
Para cada ponto-chave, escreva uma questão de 4 alternativas seguindo
RIGOROSAMENTE [references/anti-vies.md](references/anti-vies.md). Distribua a
dificuldade conforme o parâmetro. A `explanation` deve justificar a correta com
base na fonte (cite autor/obra quando fortalecer a resposta — **nunca invente
número de página ou citação**).

**Confiabilidade factual:** ao afirmar dados específicos e arriscados (valores,
percentuais, classificações, doses, datas), se houver qualquer dúvida, confirme
com WebSearch antes de fixar a alternativa. Não chute números.

### Fase 4 — Anti-viés e balanceamento do lote
Antes de escrever, rode o checklist de [references/anti-vies.md](references/anti-vies.md)
em cada questão E verifique o lote inteiro:
- `correctIndex` distribuído ~uniformemente entre 0,1,2,3 (cada um ≈25%, nenhum
  acima de ~35%).
- A correta **não** é sistematicamente a alternativa mais longa nem a mais
  detalhada.

### Fase 5 — Escrita no arquivo
Anexe os objetos no array `questions` de `data/questions.ts`, **imediatamente
antes do `];`** que fecha o array (logo acima de `// ── Helpers`). Mantenha a
formatação idêntica à do arquivo (indentação de 2 espaços, vírgula final,
comentários de cabeçalho de capítulo `// ═══ CAP. N — TÍTULO ═══` se quiser
separar tópicos, como no padrão existente).

### Fase 6 — Validação
1. Rode `npx tsc --noEmit` (obrigatório após editar `data/`).
2. Se passar, reporte um resumo: total de questões, distribuição por dificuldade,
   distribuição de `correctIndex` (para evidenciar o balanceamento), e a lista de
   tópicos cobertos.

Não faça `git commit`/`git push` — isso é decisão do usuário.
