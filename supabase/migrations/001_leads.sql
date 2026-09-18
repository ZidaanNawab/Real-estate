-- Supabase migration for leads table
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Create leads table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text,
  project_slug text,
  source_page text,
  created_at timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Policy: Allow inserts from anyone (public API)
create policy "Allow public inserts" on public.leads
  for insert to anon
  with check (true);

-- Policy: Only authenticated users can read leads
create policy "Only authenticated users can read leads" on public.leads
  for select to authenticated
  using (true);

-- Index for common queries
create index on public.leads (created_at desc);
create index on public.leads (project_slug);

-- Optional: Set up email notifications via webhooks in Supabase Dashboard
-- Dashboard > Database > Webhooks > Create webhook
-- Trigger: leads table INSERT
-- Endpoint: your notification service URL (or use Supabase Edge Functions)
