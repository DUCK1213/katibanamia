# Katiba Na Mia Mia - Frontend

A modern Next.js frontend for the Katiba Na Mia Mia constitutional education movement website, integrated with Strapi CMS.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Kenya Flag Colors**: Using Kenyan national colors (Black, Red, Green) throughout
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Strapi Integration**: Ready to fetch content from Strapi CMS
- **Static Export**: Builds to static HTML for easy deployment

## Sections

1. **Hero**: Full-screen hero with call-to-action buttons
2. **Stats**: Key statistics display (47 weeks, 6 action areas, etc.)
3. **About**: Six-card grid explaining the movement
4. **Action Areas**: Six locations where engagement happens
5. **KAMAU Agenda**: Five pillars of constitutional reform
6. **CTA**: Three call-to-action cards (Petition, Book, Donate)
7. **Programs**: Grid of 14 different programs offered
8. **Revenue**: Ways to support (Book, Movies, Merch, Donation)
9. **Team**: Team members display
10. **Footer**: Contact information and quote

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Crimson Pro (headings) & DM Sans (body)
- **CMS**: Strapi (integration ready)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Strapi backend running (see ../KatibaNaMia)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your Strapi URL:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

This creates a static export in the `dist` folder.

## Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   └── sections/        # All page sections
│   │       ├── Hero.tsx
│   │       ├── Stats.tsx
│   │       ├── About.tsx
│   │       ├── ActionAreas.tsx
│   │       ├── KamauAgenda.tsx
│   │       ├── CTA.tsx
│   │       ├── Programs.tsx
│   │       ├── Revenue.tsx
│   │       ├── Team.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── strapi.ts        # Strapi API utilities
├── dist/                    # Build output
└── next.config.ts           # Next.js configuration
```

## Strapi Integration

The frontend is set up to fetch content from Strapi. The following content types are available:

- **Articles**: Blog posts with rich content blocks
- **Categories**: Organize articles by topic
- **Authors**: Team members who write articles
- **Global**: Site-wide settings (site name, SEO, etc.)
- **About**: About page content

### API Functions

Located in `src/lib/strapi.ts`:

- `getArticles()` - Fetch all articles
- `getCategories()` - Fetch all categories
- `getGlobal()` - Fetch global settings
- `getAbout()` - Fetch about page content
- `getStrapiMedia()` - Get full media URLs

## Customization

### Colors

Edit CSS variables in `globals.css`:

```css
:root {
  --kenya-black: #000000;
  --kenya-red: #C8102E;
  --kenya-green: #006B3F;
  --warm-white: #FAF9F7;
  --deep-charcoal: #1A1A1A;
  --accent-gold: #D4AF37;
}
```

### Content

Static content is in each section component. To make it dynamic:

1. Add corresponding fields in Strapi
2. Fetch data in the page component
3. Pass as props to section components

## Deployment

The site is configured for static export. Deploy the `dist` folder to any static hosting:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## Contact

For questions about this project:
- Email: katibanamiamia@gmail.com
- Phone: 0759 318 855

## License

This project is proprietary to Katiba Na Mia Mia.
