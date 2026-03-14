-- Run this in Supabase SQL editor to create the demo_requests table

create table if not exists demo_requests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text,
  email text not null,
  organization text,
  created_at timestamptz default now()
);

-- Index for quick email lookup
create index if not exists demo_requests_email_idx on demo_requests(email);

-- Row Level Security — service role only for reads/writes from API
alter table demo_requests enable row level security;
create policy "Service role only" on demo_requests
  using (false)
  with check (false);
