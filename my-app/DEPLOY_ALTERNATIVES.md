# Alternative Deployment Methods

## Option 1: Git-Based Deployment (Recommended)

The most reliable way to deploy to Vercel:

### Step 1: Push to GitHub
```bash
cd my-app
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/katiba-na-mia.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js settings
4. Add environment variables in the UI:
   - `DATABASE_URL`
   - `DATABASE_URL_UNPOOLED`
   - `POSTGRES_URL`
   - `NEXT_PUBLIC_STRAPI_URL`
   - `STRAPI_API_TOKEN`
5. Click **Deploy**

## Option 2: Vercel Dashboard Upload

If CLI keeps failing:

1. Build locally:
   ```bash
   cd my-app
   npm run build
   ```

2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click **Add New Project**
4. Choose **Import Git Repository** or **Upload Directory**
5. Upload the `my-app` folder
6. Configure environment variables
7. Deploy

## Option 3: Fix CLI Network Issues

### Check Network Connection
```bash
# Test Vercel API connectivity
curl -I https://api.vercel.com/v2/user

# If this fails, check proxy/VPN settings
```

### Common Fixes

1. **Disable VPN/Proxy** if you're behind one
2. **Try different network** (mobile hotspot)
3. **Update Vercel CLI**:
   ```bash
   npm install -g vercel@latest
   ```
4. **Clear Vercel cache**:
   ```bash
   rm -rf ~/.local/share/com.vercel.cli
   vercel login
   ```
5. **Use force flag**:
   ```bash
   vercel --force
   ```

### Debug Mode
```bash
vercel --debug 2>&1 | tee vercel-debug.log
```

## Option 4: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Then deploy to:
- Railway.app
- Render.com
- DigitalOcean App Platform

## Option 5: Netlify (Alternative Platform)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   cd my-app
   netlify deploy --prod --dir=.next
   ```

## Environment Variables Required

Whichever method you choose, set these in your platform:

```env
# Neon PostgreSQL
DATABASE_URL=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_PRISMA_URL=postgresql://neondb_owner:npg_3D9lxIfLkUbR@ep-raspy-band-a1etoxe0-pooler.ap-southeast-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require

# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=https://katibapage-53cc23b3f3c2.strapiapp.com
STRAPI_API_TOKEN=840ac48f5b95560ce5e6e2ef0c4ff5d04096e3e98728bc23b035591e67782e93139fed6359e4893de0114f610c7ae745002b7aa5b83adc232aa1be457a53d680d2750d975c958b1bb529c7e8da6e3715802dcf033a016ac7194c44edaaa56aa0dc166aa0f616c4536878adb52d3d80468ee0e72b0de0f2d0013fc1351f982361

# AI Gateway (optional)
VERCEL_AI_GATEWAY_URL=your_gateway_url
VERCEL_AI_GATEWAY_KEY=your_gateway_key
```

## Troubleshooting Upload Errors

The error you're seeing (`Upload aborted`) typically indicates:
1. **Large file sizes** - Check `my-app/.next` folder size
2. **Slow/unstable internet** - Try wired connection
3. **Firewall blocking** - Check corporate firewall rules
4. **Vercel rate limiting** - Wait a few minutes and retry

### Reduce Upload Size
```bash
cd my-app
rm -rf .next node_modules
npm install
npm run build
# Only upload the .next folder + config files
```

## Recommended Next Steps

1. **Try GitHub + Vercel integration first** (most reliable)
2. If that fails, try **Netlify** which often has better connectivity
3. Ensure your **environment variables** are correctly set in the platform dashboard
4. After deployment, visit `/api/db` to initialize the database
