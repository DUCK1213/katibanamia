# Vercel Deployment Guide with Neon PostgreSQL

## Overview

This project is configured for deployment on Vercel with:
- **Neon PostgreSQL** - Serverless database
- **Vercel AI Gateway** - AI model integration
- **Strapi Cloud** - Headless CMS

## Neon PostgreSQL Setup

### Database Configuration

The following environment variables are configured in `.env.production`:

```env
# Main connection (with PgBouncer pooling)
DATABASE_URL=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# Direct connection (without pooling)
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# Vercel Postgres compatible variables
POSTGRES_URL=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_PRISMA_URL=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0-pooler.ap-southeast-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require
```

### Database Schema

The database includes the following tables:

1. **contacts** - Contact form submissions
2. **newsletter_subscribers** - Newsletter signups
3. **orders** - Shop orders
4. **site_settings** - Application configuration

### Initialize Database

After deployment, initialize the database:

```bash
# Via API endpoint
curl -X POST https://your-app.vercel.app/api/db \
  -H "Content-Type: application/json" \
  -d '{"action":"init"}'
```

Or run the SQL script directly:

```bash
psql $DATABASE_URL -f scripts/init-db.sql
```

## Deployment Steps

### 1. Install Vercel CLI

```bash
npm i -g vercel
vercel login
```

### 2. Set Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `DATABASE_URL` | Neon pooled connection | Production |
| `DATABASE_URL_UNPOOLED` | Neon direct connection | Production |
| `POSTGRES_URL` | Same as DATABASE_URL | Production |
| `NEXT_PUBLIC_STRAPI_URL` | `https://katibapage-53cc23b3f3c2.strapiapp.com` | Production |
| `STRAPI_API_TOKEN` | Your Strapi API token | Production |
| `VERCEL_AI_GATEWAY_URL` | From Vercel AI tab | Production |
| `VERCEL_AI_GATEWAY_KEY` | From Vercel AI tab | Production |

### 3. Deploy

```bash
cd my-app
vercel --prod
```

## API Endpoints

### Database API

**GET** `/api/db` - Check database connection

**POST** `/api/db` - Initialize database tables
```json
{
  "action": "init"
}
```

### AI Gateway API

**GET** `/api/ai` - Get AI API info

**POST** `/api/ai` - Send prompt to AI
```json
{
  "prompt": "What is the Kenyan Constitution?",
  "model": "openai/gpt-4o"
}
```

## Features

- ✅ Neon PostgreSQL database integration
- ✅ Contact form submissions stored in database
- ✅ Newsletter subscription management
- ✅ Shop order tracking
- ✅ AI Gateway integration
- ✅ Strapi CMS integration
- ✅ Responsive design with Kenya flag colors

## Troubleshooting

### Database Connection Issues

1. Verify `DATABASE_URL` is set in Vercel dashboard
2. Check Neon database is active (not paused due to inactivity)
3. Ensure SSL is configured: `?sslmode=require`

### API Route Errors

Make sure `output: 'export'` is removed from `next.config.ts` for serverless functions to work.

### Environment Variables

If content doesn't load, verify all environment variables are set in Vercel dashboard under Project Settings → Environment Variables.

## Useful Commands

```bash
# Test database connection locally
npm run dev
curl http://localhost:3000/api/db

# Initialize database
curl -X POST http://localhost:3000/api/db \
  -H "Content-Type: application/json" \
  -d '{"action":"init"}'

# Deploy to production
vercel --prod
```

## Resources

- [Neon Documentation](https://neon.tech/docs)
- [Vercel Postgres Templates](https://vercel.com/templates/postgres)
- [Neon Vercel Integration](https://neon.tech/docs/guides/vercel)
