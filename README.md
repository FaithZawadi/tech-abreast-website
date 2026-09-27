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

- `public/images/hero.jpg` and `public/images/team.jpg` are the original photos, converted to JPEG.
- `public/images/industries/*.jpg` are cropped from the original industries collage.
- `public/logo-mark.png` is the logo's wing mark.
- The architecture diagrams (`components/illustrations/`) are animated SVGs in the brand colours.
