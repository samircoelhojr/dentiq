# Regras anti-viés na construção de alternativas

O objetivo é que a posição e o "formato" da alternativa correta **não dêem
nenhuma pista**. Um aluno que não saiba o conteúdo não pode ter vantagem
estatística olhando o estilo das opções. Aplique cada regra a TODA questão e a
verificação de lote ao conjunto inteiro.

## 1. Posição da correta — randomizada e balanceada
- `correctIndex` deve variar entre 0, 1, 2 e 3 ao longo do lote, distribuído de
  forma ~uniforme (cada índice ≈25%; nenhum acima de ~35%).
- Não siga padrões (não alterne 0,1,2,3,0,1,2,3…; não deixe a correta cair quase
  sempre em B/índice 1, que é o viés humano clássico).
- Decida a posição **independente** do conteúdo: escreva a correta e os 3
  distratores, depois sorteie a ordem das 4.

## 2. Paridade de comprimento e detalhe
- A correta **não pode** ser sistematicamente a mais longa, a mais específica ou
  a mais "bem explicada". Esse é o vício nº 1 das questões geradas por IA.
- As 4 alternativas devem ter comprimento e nível de detalhe comparáveis
  (diferença de tamanho pequena). Se a correta ficou muito mais longa, ou
  encurte-a, ou enriqueça os distratores no mesmo nível.
- No lote, verifique: a "mais longa da questão" deve ser a correta em ≈25% dos
  casos, não em 70%+.

## 3. Distratores plausíveis (não-absurdos)
- Cada distrator deve ser um **erro real e comum** de estudante: um conceito
  vizinho, uma troca clássica (ex.: estabilidade primária × secundária), um valor
  numérico próximo, a etapa errada de uma sequência.
- Nada de distrator obviamente ridículo ou fora de contexto — isso transforma a
  questão em "escolha a única que faz sentido".

## 4. Sem muletas estruturais
- **Proibido** "Todas as anteriores", "Nenhuma das anteriores", "As alternativas
  A e C estão corretas". Cada alternativa é uma afirmação independente.
- Exatamente **uma** alternativa defensável como correta; as outras 3 inequívocas
  como erradas. Sem "a mais correta entre duas certas".

## 5. Sem pistas gramaticais ou de linguagem
- O enunciado deve concordar gramaticalmente (gênero, número, artigo, regência)
  com **todas** as 4 alternativas. Nada de só a correta "encaixar" na frase.
- Estrutura sintática paralela: se uma começa com verbo no infinitivo, todas
  começam; se são sintagmas nominais, todas são. Mesmo tempo verbal e registro.
- Não repita na correta uma palavra-chave marcante do enunciado (eco verbal) que
  os distratores não tenham.

## 6. Sem pistas de "hedge" e de absolutos
- Não concentre qualificadores absolutos ("sempre", "nunca", "exclusivamente",
  "todos") só nos distratores — vira sinal de que são falsos.
- Não concentre atenuadores ("geralmente", "pode", "em alguns casos") só na
  correta — vira sinal de que é a verdadeira.
- Distribua esse vocabulário de forma neutra entre as 4.

## 7. Enunciado limpo
- Uma só ideia central por questão. Evite dupla negação.
- Quando perguntar pela exceção/incorreta, destaque (CAIXA ALTA: "EXCETO",
  "INCORRETA", "NÃO") para não induzir erro de leitura.

## Checklist por questão (responda mentalmente antes de fixar)
1. Tirando o conhecimento, dá pra adivinhar a correta pelo tamanho? → se sim, ajuste.
2. A correta é a mais longa/detalhada? → se sim, equalize.
3. Os 3 distratores são erros plausíveis de quem estudou pouco? → se não, troque.
4. O enunciado casa gramaticalmente com as 4? → se não, reescreva.
5. Há alguma 2ª alternativa também defensável? → se sim, conserte a ambiguidade.
6. Usei "todas/nenhuma das anteriores"? → remova.
7. A `explanation` justifica a correta E (idealmente) por que as outras erram.

## Verificação de lote (antes de escrever no arquivo)
- Conte os `correctIndex`: a distribuição entre 0–3 está ~uniforme?
- Para cada questão, qual índice tem a alternativa mais longa? A correta lidera
  em comprimento em no máximo ~1/4 das questões?
- A dificuldade bate com a distribuição-alvo?
Se algum item falhar, reembaralhe posições / reequilibre comprimentos antes de salvar.
