-- Early-access sign-ups from the website (one row per email and role).
-- The website inserts with the PUBLIC (publishable/anon) key, so no secret is needed.
-- Row Level Security: the public key may INSERT only. Nobody can read, change or delete
-- rows with it; read the table in the Supabase dashboard (or with the service role).
create table if not exists public.waitlist (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  email       text not null check (char_length(email) between 3 and 254),
  role        text not null check (role in ('learner', 'employer', 'vendor')),
  name        text check (char_length(name) <= 120),
  company     text check (char_length(company) <= 160),
  locale      text not null default 'en' check (char_length(locale) <= 5),
  source      text not null default 'home' check (char_length(source) <= 40),
  unique (email, role)
);

alter table public.waitlist enable row level security;

revoke all on public.waitlist from anon, authenticated;
grant insert (email, role, name, company, locale, source) on public.waitlist to anon;

create policy "website can add sign-ups"
  on public.waitlist for insert to anon
  with check (true);
