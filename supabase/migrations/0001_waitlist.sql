-- Early-access sign-ups from the website (one row per email and role).
-- Written only by the website's server with the service-role key.
-- Row Level Security is on with no policies, so the public (anon) key can neither read nor write.
create table if not exists public.waitlist (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  email       text not null check (char_length(email) <= 254),
  role        text not null check (role in ('learner', 'employer', 'vendor')),
  name        text check (char_length(name) <= 120),
  company     text check (char_length(company) <= 160),
  locale      text not null default 'en',
  source      text not null default 'home',
  unique (email, role)
);

alter table public.waitlist enable row level security;
