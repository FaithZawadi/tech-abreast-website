# Technology Abreast Limited — Website

Multi-page Next.js 14 site for Technology Abreast, laid out like an IT-services company template: a bold hero, services, a featured practice, approach, industries and a call to action. The colours come from the two wings of the logo (orange `#F26522` → olive `#8B9B2A`) on a warm charcoal base.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Content |
|---|---|
| `/` | Hero with rotating capabilities, animated stats, services, Digital Government feature, interactive approach grid, industries, frameworks marquee |
| `/about` | Story, vision & mission, core values, why choose us, certifications |
| `/services` | Filterable services and solutions |
| `/services/[slug]` | A generated detail page for each service |
| `/digital-government` | The Enterprise Architecture / GEA practice: objectives, a six-phase interactive methodology, interoperability, deliverables, key experts, experience, safeguards |
| `/industries` | Eight sectors, with images |
| `/contact` | Contact details, a form (`?topic=` preselects the subject) and a map |

## Editing content

All text lives in **`lib/content.ts`**: services, industries, stats, values, the enterprise-architecture phases, the team and so on. Pages render from that file.

### Past assignments (for tender submissions)

`assignments` in `lib/content.ts` is empty. Add real, verifiable engagements there, with client, location, scope, value and period, and they appear as cards in the **Relevant experience** section on `/digital-government`. While the list is empty, the section shows capability areas instead.

## Contact form

`POST /api/contact` validates each submission. If `CONTACT_WEBHOOK_URL` is set (for example a Zapier, Make, Formspree or Slack webhook), the enquiry is forwarded there. Otherwise it is only written to the server log.

## Images

Photos live in `public/images/` (hero, team/about, and one per industry in `industries/`).
To replace them with high-quality stock photos from Pexels (free for commercial use):

```bash
# 1. Free API key: https://www.pexels.com/api/
PEXELS_API_KEY=your_key node scripts/stock-photos.mjs search      # all slots, or name some: search hero banking
open stock-candidates/index.html                                    # preview and note the numbers you like
node scripts/stock-photos.mjs pick hero 3 team 2 banking 5          # installs them into the site
```

Photographer credits are recorded in `public/images/credits.json`. The architecture
diagrams (`components/illustrations/`) are animated SVGs in the brand colours.

## Hosting with Docker (shared VPS)

`Dockerfile` builds a small, self-contained image. `docker-compose.yml` runs it as
`tech-abreast-website` on the existing external `proxy` network without publishing
any ports, so it can sit behind a gateway that already owns ports 80/443. Point the
gateway at `http://tech-abreast-website:3000`.

```bash
docker compose up -d --build     # first deploy and every update
docker compose logs -f           # view logs
```

## Hosting on a plain VPS (no existing proxy)

Needed files: `ecosystem.config.js` (PM2), `deploy/nginx.conf` and `deploy/deploy.sh`.

```bash
# 1. Server packages
sudo apt update && sudo apt install -y git nginx certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

# 2. Code
sudo mkdir -p /var/www && sudo chown $USER /var/www && cd /var/www
git clone https://github.com/FaithZawadi/tech-abreast-website.git
cd tech-abreast-website
./deploy/deploy.sh            # installs, builds and starts on port 3000
pm2 startup                   # run the command it prints, so the site restarts on reboot

# 3. Nginx + HTTPS (point the domain's A records at the VPS first)
sudo cp deploy/nginx.conf /etc/nginx/sites-available/tech-abreast
sudo ln -s /etc/nginx/sites-available/tech-abreast /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d tech-abreast.com -d www.tech-abreast.com
```

To publish later changes, push to `main` and run `./deploy/deploy.sh` on the server.
