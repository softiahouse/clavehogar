-- Executar no Supabase SQL Editor
-- https://supabase.com → SQL Editor

-- Leads do formulário do site
create table if not exists crm_leads (
  id          uuid default gen_random_uuid() primary key,
  nome        text not null,
  email       text not null,
  telefone    text not null,
  servico     text,
  mensagem    text,
  created_at  timestamptz default now()
);

-- Agências em prospecção B2B
create table if not exists crm_prospects (
  id          uuid default gen_random_uuid() primary key,
  nome        text not null,
  telefone    text,
  tipo        text,
  stage       text not null default 'new',
  notas       text,
  created_at  timestamptz default now()
);

-- Desabilitar RLS para acesso directo (painel privado)
alter table crm_leads     disable row level security;
alter table crm_prospects disable row level security;
