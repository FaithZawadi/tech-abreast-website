# Technology Abreast — SEO Action Plan

Goal: when someone searches "Technology Abreast", "tech abreast" or services such as
"managed IT services Nairobi", Google shows **tech-abreast.com** first, with a Business
Profile panel beside it.

## Why the site was not showing

1. Google last crawled the domain when it showed HostAfrica's "Website coming soon" page.
   It has not seen the new site yet.
2. "Technology abreast" is also an ordinary English phrase, so Google needs clear signals
   that it is a company in Nairobi.
3. A third-party directory (Tracxn) lists the company as "deadpooled" (closed).

## Already built into the site

- Unique title, description and canonical URL on every page; one official address
  (www and techabreast.com redirect permanently to https://tech-abreast.com)
- Home-page H1: "Technology Abreast · ICT Consultancy & Managed IT Services in Nairobi, Kenya"
- Structured data: Organization/ProfessionalService (name variants, address, phone, email,
  services), WebSite, Service, BreadcrumbList, FAQPage and Article
- sitemap.xml (all pages and articles), robots.txt, share image, icons, fast self-hosted fonts
- Insights articles targeting real searches (add more over time — see below)

## Target keywords

| Priority | Keyword | Page |
|---|---|---|
| Brand | Technology Abreast, Tech Abreast, Technology Abreast Limited | Home |
| High | ICT company in Nairobi / ICT consultancy Kenya | Home, About |
| High | managed IT services Nairobi / Kenya, IT support Nairobi, IT outsourcing Kenya | /services/managed-ict-services |
| High | government enterprise architecture framework, digital government consultancy Africa | /digital-government |
| Medium | cybersecurity audit Kenya, data protection compliance Kenya, ISO 27001 consultants Kenya | /services/cybersecurity-risk, Insights |
| Medium | disaster recovery Kenya, data backup Nairobi | /services/technical-consultancy, Insights |
| Medium | business intelligence Kenya, VoIP phone systems Nairobi, IT office relocation Nairobi | matching service pages |

## Do this week (in this order)

1. **Deploy the latest code** to the VPS (`git pull && docker compose up -d --build`).
2. **Google Search Console** — https://search.google.com/search-console
   - Add a **Domain** property for `tech-abreast.com`; verify with the TXT record Google
     gives you, added in HostAfrica cPanel → Zone Editor (leave the Zoho MX/TXT records alone).
   - Sitemaps → submit `https://tech-abreast.com/sitemap.xml`.
   - URL Inspection → enter `https://tech-abreast.com/` → **Request indexing**. Repeat for
     /services, /digital-government, /about and /insights.
3. **Google Business Profile** — https://business.google.com
   - Name exactly "Technology Abreast Limited"; category "Computer consultant" or
     "IT services"; address Birdi Complex, 1st Floor, Mombasa Road, Nairobi; phone
     0722 586 313; website https://tech-abreast.com.
   - Verify (postcard, phone or video), add photos of the office and team, list services.
   - Ask satisfied clients for Google reviews.
4. **Bing Webmaster Tools** — https://www.bing.com/webmasters → import from Search Console.
5. **Correct the Tracxn listing** — use Tracxn's "claim/update company profile" option to
   mark the company as active, with the new website.

## Do this month

- **Consistent company details everywhere** (name, address, phone, website must match exactly):
  LinkedIn company page, Facebook page, X/Twitter, Zoho email signatures, company profile PDF.
  Send the profile URLs to add them to the site's structured data (`sameAs`).
- **Directory listings** on reputable Kenyan and international business directories and
  IT-provider platforms (for example Clutch or GoodFirms), each linking to tech-abreast.com.
- **Links from partners and clients** — ask vendors, partners and clients to link to the site.
- **Share each Insights article** on LinkedIn with a link back to the site.

## Ongoing

- Publish one or two new Insights articles a month, each targeting a keyword above
  (articles live in `lib/insights.ts`). Ideas: choosing a VoIP phone system for a Nairobi
  office; IT office relocation checklist; ISO 27001 explained for Kenyan SMEs; business
  intelligence dashboards for decision-makers; interoperability for county governments.
- Check Search Console monthly: queries, clicks, pages not indexed, mobile usability.
- Keep services, contact details and experience up to date; add real client assignments
  (with permission) to `assignments` in `lib/content.ts`.

## What to expect

After requesting indexing, the new pages usually appear within days. Ranking for
competitive service keywords builds over weeks to months as Google sees consistent
company details, reviews and links from other sites.
