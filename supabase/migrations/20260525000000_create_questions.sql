-- Tabela de questões do DentIQ
create table if not exists questions (
  id               text    primary key,
  materia          text    not null,
  assunto          text    not null,
  dificuldade      text    not null,
  pergunta         text    not null,
  opcoes           text[]  not null,
  resposta_correta integer not null,
  explicacao       text    not null
);

-- Índices para as queries mais comuns (filtro por matéria + dificuldade)
create index if not exists questions_materia_idx    on questions (materia);
create index if not exists questions_dificuldade_idx on questions (dificuldade);
create index if not exists questions_assunto_idx    on questions (materia, assunto);

-- RLS: leitura pública, escrita apenas via service role (seed)
alter table questions enable row level security;

drop policy if exists "Questões são públicas para leitura" on questions;
create policy "Questões são públicas para leitura"
  on questions for select
  using (true);
