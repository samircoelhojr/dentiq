# Verificação de originalidade e conflito

Protocolo da Fase 3 da skill. Objetivo: estimar, com buscas reais, se o nome já
pertence a outra marca/empresa e se está disponível digitalmente — para não
recomendar um nome que o usuário não poderá usar. Ferramentas: **WebSearch** e
**WebFetch**.

> **Disclaimer obrigatório no resultado:** isto é uma triagem, não um parecer
> jurídico. Antes de investir, o usuário deve confirmar com busca oficial no INPI
> e, idealmente, com um advogado de marcas. Nunca diga que um nome está
> "garantidamente livre".

## Passo a passo (faça para CADA candidato)

### 1. Marca/empresa existente (web)
Busque o nome de forma ampla e depois cruzando com o setor e o mercado:
- `"<nome>"` — quem aparece dominando o resultado?
- `"<nome>" <setor/categoria>` (ex.: `"Vinci" odontologia`)
- `"<nome>" marca` / `"<nome>" empresa` / `"<nome>" startup`
- Se mercado global: repita pensando em resultados em inglês.

Avalie: existe uma marca **forte e relevante** com esse nome, ainda mais no mesmo
setor ou adjacente? Coincidência com algo pequeno e de outro ramo costuma ser
risco baixo; colisão com marca conhecida ou do mesmo setor é alto.

### 2. Registro de marca (trademark)
- **Brasil — INPI:** a base de busca é a [Busca de Marcas do INPI](https://busca.inpi.gov.br/pePI/jsp/marcas/Pesquisa_classe_basica.jsp).
  Pode exigir login/captcha e nem sempre é raspável; se não conseguir consultar
  direto, **diga que a checagem no INPI é manual** e oriente o usuário a fazê-la,
  considerando a **classe de Nice** do ramo dele.
- **Internacional — USPTO (EUA):** busca via TESS/“USPTO trademark search
  <nome>”. Útil se a ambição for global.
- Lembre o usuário que marca é registrada **por classe/ramo**: o mesmo nome pode
  coexistir em setores distintos.

### 3. Domínio
- Verifique `<nome>.com` e, para Brasil, `<nome>.com.br`.
- Tente `WebFetch` no domínio e/ou busque "is <nome>.com available" / use o que a
  busca revelar (site ativo = ocupado). Se não der pra confirmar com certeza,
  reporte como "verificar no registrador" (registro.br para .br; qualquer
  registrar para .com) em vez de afirmar disponibilidade.
- Considere alternativas modernas e aceitáveis: `get<nome>.com`, `<nome>app.com`,
  `<nome>.io`, `<nome>.co` — mas registre que o `.com` exato é o ideal.

### 4. Handle social
- Cheque a existência de `@<nome>` no Instagram (e onde o público do usuário
  estiver). Handle do nome exato livre é um bônus forte; ocupado por conta
  inativa/de outro ramo é risco menor.

## Classificação de risco (decisão)

Atribua um dos três a cada nome:

- **🟢 Livre** — nenhuma marca relevante encontrada, sem registro óbvio no setor,
  domínio/handle plausíveis de obter. Recomendável.
- **🟡 Atenção** — coincidências existem, mas em outro ramo/região, marcas
  pequenas, ou domínio `.com` exato ocupado embora variações estejam livres.
  Usável com ressalva — explique a ressalva.
- **🔴 Conflito** — marca registrada e/ou empresa forte no **mesmo setor ou
  adjacente**, ou nome praticamente sinônimo de um player conhecido. **Descartar**
  (dispara a Fase 4: gerar alternativa e re-verificar).

## Como reportar cada nome
Seja específico e honesto sobre o que a busca mostrou:
- o que apareceu (quem, qual setor, qual país);
- status de domínio e handle (confirmado vs. "a verificar");
- a classificação 🟢/🟡/🔴 e a justificativa em uma linha.

Não infle nem omita achados — a credibilidade da recomendação depende disso.
