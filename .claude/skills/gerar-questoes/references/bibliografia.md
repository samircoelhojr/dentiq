# Bibliografia de referência e prefixos de ID

Toda questão deve ancorar no conteúdo consolidado destas obras (as mais usadas
nos cursos de odontologia no Brasil e internacionalmente). Ao citar na
`explanation`, use autor/obra — **nunca invente número de página**. Se um dado
específico (valor, classificação, dose, data) gerar dúvida, confirme com
WebSearch antes de fixar a alternativa.

Os prefixos abaixo são os já usados no projeto (verificados em `data/questions.ts`).
Disciplinas sem prefixo definido ainda: escolha um curto e mnemônico, confirme
que não colide com os existentes e registre aqui.

## Clínica

| Disciplina | Subject | Prefixo | Obras de referência |
|---|---|---|---|
| Implantodontia | `Implantodontia` | `imp` | Misch, *Implantes Dentários Contemporâneos*; Brånemark; critérios de Albrektsson |
| Prótese Total | `Prótese Total` | `pt` | Zarb/Bolender, *Boucher — Tratamento Protético para Pacientes Edêntulos*; Telles, *Prótese Total* |
| Prótese Parcial Removível | `Prótese Parcial Removível` | `ppr` | Carr/Brown, *McCracken — Prótese Parcial Removível*; Todescan |
| Prótese Parcial Fixa | `Prótese Parcial Fixa` | `ppf` | Shillingburg, *Fundamentos de Prótese Fixa*; Rosenstiel, *Prótese Fixa Contemporânea* |
| Dentística | `Dentística` | `den` | Baratieri, *Odontologia Restauradora*; Sturdevant (Roberson/Heymann/Swift), *Arte e Ciência da Dentística Operatória* |
| Cirurgia Bucomaxilofacial | `Cirurgia Bucomaxilofacial` | `cbmf` | Hupp/Ellis/Tucker, *Cirurgia Oral e Maxilofacial Contemporânea*; Miloro, *Peterson — Princípios de CBMF* |
| Endodontia | *(nova)* | `endo` | Hargreaves/Berman, *Cohen — Caminhos da Polpa*; Lopes & Siqueira, *Endodontia: Biologia e Técnica* |
| Periodontia | *(nova)* | `perio` | Newman/Takei/Klokkevold, *Carranza — Periodontia Clínica*; Lindhe, *Tratado de Periodontia Clínica e Implantologia Oral* |
| Ortodontia | *(nova)* | `orto` | Proffit, *Ortodontia Contemporânea*; Graber |
| Odontopediatria | *(nova)* | `odp` | Dean, *McDonald & Avery — Odontopediatria*; Guedes-Pinto |
| Estomatologia | *(nova)* | `esto` | Neville, *Patologia Oral e Maxilofacial*; Regezi, *Patologia Oral* |

## Pré-clínicas

| Disciplina | Subject | Prefixo | Obras de referência |
|---|---|---|---|
| Anatomia Dental e Escultura Dental | *(nova)* | `anad` | Nelson, *Wheeler — Anatomia, Fisiologia e Oclusão Dental*; Figún & Garino |
| Radiologia e Imaginologia | *(nova)* | `rad` | White & Pharoah, *Radiologia Oral*; Freitas, *Radiologia Odontológica* |
| Farmacologia e Anestesiologia | *(nova)* | `farm` | Wannmacher & Ferreira, *Farmacologia Clínica para Dentistas*; Malamed, *Manual de Anestesia Local* |
| Materiais Dentários | *(nova)* | `mat` | Anusavice, *Phillips — Materiais Dentários*; Craig |
| Cariologia e Oclusão | *(nova)* | `cario` | Fejerskov & Kidd, *Cárie Dentária*; Okeson, *Tratamento das DTM e Oclusão* |

## Ciclo Básico

| Disciplina | Subject | Prefixo | Obras de referência |
|---|---|---|---|
| Anatomia Humana | *(nova)* | `ana` | Moore, *Anatomia Orientada para a Clínica*; Sobotta; Madeira, *Anatomia da Face* |
| Histologia e Embriologia | *(nova)* | `hist` | Nanci, *Ten Cate — Histologia Oral*; Katchburian & Arana; Junqueira & Carneiro |
| Bioquímica | *(nova)* | `bioq` | Nelson & Cox, *Lehninger — Princípios de Bioquímica*; Marzzoco & Torres |
| Fisiologia | *(nova)* | `fisio` | Guyton & Hall, *Tratado de Fisiologia Médica*; Berne & Levy |
| Microbiologia e Imunologia | *(nova)* | `micro` | Murray, *Microbiologia Médica*; Marsh & Martin, *Microbiologia Oral*; Abbas, *Imunologia* |
| Patologia Geral e Bucal | *(nova)* | `pat` | Kumar, *Robbins & Cotran — Bases Patológicas das Doenças*; Neville (patologia bucal) |

## Saúde Coletiva e Ética

| Disciplina | Subject | Prefixo | Obras de referência |
|---|---|---|---|
| Saúde Coletiva e Políticas Públicas | *(nova)* | `sc` | Pinto, *Saúde Bucal Coletiva*; Antunes & Peres, *Epidemiologia da Saúde Bucal* |
| Ética e Legislação Odontológica | *(nova)* | `etica` | Código de Ética Odontológica (CFO); França, *Odontologia Legal e Bioética* |
| Biossegurança e Ergonomia | *(nova)* | `bios` | Guandalini, *Biossegurança em Odontologia*; diretrizes ANVISA/CDC de controle de infecção |
| Gestão e Administração de Consultório | *(nova)* | `gest` | Literatura de gestão e marketing odontológico; legislação trabalhista/sanitária aplicável |

> Ao criar questões de uma disciplina marcada *(nova)*, lembre-se da Fase 0 do
> SKILL.md: adicionar o `Subject` ao tipo e ao `subjects[]` em `data/questions.ts`
> e preencher o campo `subject` da disciplina em `data/areas.ts`.
