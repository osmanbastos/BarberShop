Primeiro criamos o projeto com "npx create-next-app@latest ." já dentro da pasta destino (por isso o .)
Foram escolhidos o typescript, eslint, tailwindcss e app router nas opções.

Depois iniciamos a construção do diagrama em app.diagrams.net

Instalamos o prisma como dependencia de desenvolvimento:
npm install prisma --save-dev

iniciamos o prisma passando a instrução usando um postgresql como banco de dados:
npx prisma init --datasource-provider postgresql
foram criados os arquivos schema.prisma e arquivo .env para colocar a conection string. (vamos usar o supabase.com)

No supabase, com a conta criada, vamos em dashboard > new project

Colocamos o nome do projeto como BarberFS
Geramos uma senha (WfYZ2C4usBHK29Pq) e deixamos a região como South America (São Paulo)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
