# HireSpark

A responsive career workspace built with Next.js 15, TypeScript, Tailwind CSS, shadcn-style Radix components, TanStack Query, Recharts, Lucide, React Hook Form, and Zod.

## Run

```sh
npm install
npm run dev
```

The root opens the demo dashboard. Visit `/landing` for the public homepage, `/login` for login, and `/signup` for onboarding.

Demo login: `demo@hirespark.in` / `HireSpark@123`.
Admin demo login: `admin@hirespark.in` / `Admin@123`.

The demo uses browser local storage for job bookmarks, tracked applications, referral requests, messages, communities, resume versions, and appearance. Job data and ATS results are illustrative. Resume downloads are text starter templates. Social sign-in, real resume parsing, external job submissions, message delivery, premium payments, and employee authorization are not connected. The demo workspace is intentionally public; static credentials are not production authentication.

A Supabase client is ready in `src/services/supabase.ts`. Copy `.env.example` to `.env.local` and provide project credentials before implementing authenticated persistence with row-level security.

## Checks

```sh
npm run typecheck
npm run build
```
