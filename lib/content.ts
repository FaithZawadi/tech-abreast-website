// Single source of truth for site content.
// Everything here is drawn from the Technology Abreast Company Profile,
// with the Enterprise Architecture / Digital Government practice framed
// against the requirements of public-sector EA consultancy tenders.

export const company = {
  name: 'Technology Abreast Limited',
  short: 'Technology Abreast',
  tagline: 'Passion and Expertise Combined',
  vision: 'Digital Business Enablers',
  email: 'info@tech-abreast.com',
  phone: '0722 586 313',
  phoneIntl: '+254722586313',
  // WhatsApp number in international format, digits only
  whatsapp: '254722586313',
  postal: 'P.O. Box 55496 – 00200, Nairobi, Kenya',
  physical: 'Birdi Complex, 1st Floor, Mombasa Road, Nairobi',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Digital Government', href: '/digital-government' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: 6, suffix: '', label: 'Core service lines' },
  { value: 12, suffix: '', label: 'Services & solutions' },
  { value: 10, suffix: '+', label: 'Years senior expertise' },
  { value: 24, suffix: '/7', label: 'Support, 365 days a year' },
]

export const values = [
  { title: 'Expertise', text: 'Professionalism and a skilled approach in everything we deliver.' },
  { title: 'Integrity', text: 'Our word is our bond.' },
  { title: 'Value', text: 'Always adding value through innovation.' },
  { title: 'Passion', text: 'We breathe ICT — we love technology.' },
  { title: 'Relationships', text: 'Professional, trusted relationships built by growing personnel capacity and serving the customer.' },
]

export const whyUs = [
  'ISO- and ITIL-based frameworks underpinning our service delivery',
  'Global experience delivered with local, on-the-ground understanding',
  'A human-centred approach that puts people before technology',
  'A proven track record of success across multiple industries',
]

export const certifications = [
  'ITIL®',
  'PMP®',
  'Cisco CCNA',
  'Security certifications',
  'Microsoft Certified',
  'Google',
  'Open-source technologies',
]

export const approach = [
  { title: 'Continual Consultancy', text: 'Direct lines into our consulting teams and regular consulting reviews.' },
  { title: 'No Risk', text: 'Zero-downtime transitions and a total satisfaction record on every service take-on.' },
  { title: 'No Sales', text: 'No salespeople managing your account — only clear, justified recommendations.' },
  { title: 'Results Focused', text: 'Continual investment and regular reporting that demonstrate value delivered.' },
  { title: 'Frameworks', text: 'ISO 27001 and ITIL/ISO 20000 best practice — used as tools, not badges.' },
  { title: 'Availability', text: 'Support whenever and wherever our clients need us, 24x7x365.' },
  { title: 'Development', text: 'A top-heavy team of senior engineers and consultants, not inexperienced staff.' },
  { title: 'Resources', text: 'Overlapping teams with the right skills, delivered nationally and internationally.' },
  { title: 'Communication', text: 'Clear, regular communication that manages expectations at every level.' },
  { title: 'Experience', text: 'A diverse national and international customer base backed by recognised qualifications.' },
  { title: 'People', text: 'Rigorous recruitment for the best-educated minds with the right attitude.' },
  { title: 'Governance', text: 'We lead the demand side of ICT governance on our clients’ behalf.' },
]

export type ServiceIcon =
  | 'server' | 'compass' | 'layers' | 'shield' | 'wrench' | 'code'
  | 'chart' | 'box' | 'truck' | 'globe' | 'phone' | 'share'

export type Service = {
  slug: string
  title: string
  kind: 'Service' | 'Solution'
  icon: ServiceIcon
  summary: string
  intro: string
  items: { title: string; text: string }[]
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'managed-ict-services',
    title: 'Managed ICT Services',
    kind: 'Service',
    icon: 'server',
    featured: true,
    summary: 'Outsourced IT functions for business leaders — fully managed, interim, regional or tailored.',
    intro:
      'Managed Services are designed to give our clients a better service than their own internal resources can deliver. Outsourcing is the foundation of our business — humanised, flexible, and never tying clients into contractual knots.',
    items: [
      { title: 'Fully Managed Services', text: 'A complete IT function designed for your organisation — from front-line support to board-level CIO input.' },
      { title: 'Interim Managed Services', text: 'Short-term resource and expertise through an acquisition, merger, expansion or ICT-demanding project.' },
      { title: 'Management Outsourcing', text: 'Hand all or part of IT management to our consultants, aligning business strategy to an IT roadmap.' },
      { title: 'Regional Outsourcing', text: 'Resourcing IT service delivery for remote offices, nationally or internationally.' },
      { title: 'Service Desk', text: 'ITIL/ISO 20000 service desk teams — from user application support to network and server administration.' },
      { title: 'Network, Server & Data Centre Management', text: 'Managed LAN/WAN from our Network Operations Centre, server estates run to ITIL standards, and data centre operations.' },
      { title: 'Vendor Management', text: 'Independent management of the vendors delivering IT into your business — the right service at the right price.' },
    ],
  },
  {
    slug: 'strategic-consultancy',
    title: 'Strategic Consultancy',
    kind: 'Service',
    icon: 'compass',
    featured: true,
    summary: 'ICT strategy, governance, interim management, project support and mentoring for IT leaders.',
    intro:
      'When you need people who can see the big picture, our combined experience with the public sector, multinational corporates and small businesses lets us tailor the ideal strategy for your objectives.',
    items: [
      { title: 'ICT Strategy & Governance', text: 'Formulating and leading ICT strategy in line with policies, processes and procedures, with measurable benefits realisation.' },
      { title: 'Interim Management', text: 'The right individual on demand — one-off, full-time for a set term, or part-time on retainer.' },
      { title: 'Project Support', text: 'End-to-end project management using recognised methodologies — ERP/CRM, WAN revision, ITIL/ISO rollout, cloud migration.' },
      { title: 'Cost Analysis & Value Creation', text: 'Independent analysis of IT costs and systems, representing your interests alone.' },
      { title: 'Mergers, Acquisitions & Expansion', text: 'Rationalisation of systems, processes and teams, with efficient change management.' },
      { title: 'Mentoring', text: 'Coaching for IT leaders and teams, delivered only by consultants with 10+ years of proven experience.' },
    ],
  },
  {
    slug: 'enterprise-architecture',
    title: 'Enterprise Architecture & Digital Government',
    kind: 'Service',
    icon: 'layers',
    featured: true,
    summary: 'TOGAF / Zachman-aligned enterprise architecture, interoperability frameworks and e-government roadmaps.',
    intro:
      'We help governments and large institutions build a common language for digital services: an enterprise architecture framework, interoperability standards, and a costed, phased roadmap that turns strategy into citizen-facing e-services.',
    items: [
      { title: 'Current-State Assessment & Gap Analysis', text: 'Structured analysis of business, data, application and technology architectures, with high-level IT systems audits.' },
      { title: 'Target Architecture & Standards', text: 'TOGAF ADM / Zachman-aligned target architecture, principles, reference models and UI/UX standards.' },
      { title: 'Interoperability & Integration', text: 'SOA, event-driven architecture, API management and G2G / G2B data-exchange standards.' },
      { title: 'Technical Specifications & Costing', text: 'Data centre, network, cloud, enterprise software and cybersecurity requirements with CAPEX/OPEX estimates.' },
      { title: 'Digitalisation Methodology', text: 'Business process re-engineering, one-stop-shop service models, digitisation procedures and implementation calendars.' },
      { title: 'Capacity Building', text: 'Training manuals, helpdesk/mentorship mechanisms, quarterly technical training and advisory briefing notes.' },
    ],
  },
  {
    slug: 'cybersecurity-risk',
    title: 'Cybersecurity, Risk & Audit',
    kind: 'Service',
    icon: 'shield',
    featured: true,
    summary: 'ISO 27001-based security management, risk & security audits and ICT governance reviews.',
    intro:
      'Security is embedded, not bolted on. We build security controls, governance mechanisms and compliance with national and international best practice into every platform we touch.',
    items: [
      { title: 'Security Management', text: 'IT security outsourcing built on ISO 27001 frameworks, technical expertise and experience.' },
      { title: 'Risk & Security Audits', text: 'Independent audits of configurations, security risk, continuity plans and data networks.' },
      { title: 'Risk Assessment & Business Impact Analysis', text: 'Natural, technical and human threat analysis — with a free infrastructure audit when implementing DR.' },
      { title: 'Data Protection & Privacy', text: 'Privacy-by-design controls, data classification and governance across platforms.' },
    ],
  },
  {
    slug: 'technical-consultancy',
    title: 'Technical Consultancy',
    kind: 'Solution',
    icon: 'wrench',
    featured: true,
    summary: 'ICT technical audits, disaster recovery, real-time backup and server/IT upgrades & migration.',
    intro:
      'Independent technical expertise carried out by consultants with at least ten years’ experience — from audit to recovery to migration.',
    items: [
      { title: 'ICT Technical Audits', text: 'System configurations, security risk, BC/DR plans, communications and data networks.' },
      { title: 'Disaster Recovery', text: 'Managed failover across servers and networks, daily backups, live email recovery and secure off-site backup.' },
      { title: 'Real-Time Data Backup', text: 'Replication as data is created — no data loss, 100% consistency, encrypted off-site storage.' },
      { title: 'Upgrades, Migration & Decommissioning', text: 'Pre-site assessment, lab compatibility testing, managed migration and secure hardware disposal.' },
    ],
  },
  {
    slug: 'software-ai',
    title: 'Software Development & AI',
    kind: 'Solution',
    icon: 'code',
    featured: true,
    summary: 'Custom software, systems integration, process automation and applied AI.',
    intro:
      'We transform organisations with smart, seamlessly integrated technology — from cloud-native applications to predictive analytics and machine-learning models.',
    items: [
      { title: 'Custom Software & Automation', text: 'Business software and workflow automation designed around your processes.' },
      { title: 'Systems Integration', text: 'Middleware, APIs and microservices that let heterogeneous systems exchange data seamlessly.' },
      { title: 'Cloud-Native Applications', text: 'Scalable, secure applications built for public, private or hybrid cloud.' },
      { title: 'Applied AI', text: 'Predictive analytics, machine learning and intelligent automation.' },
    ],
  },
  {
    slug: 'bi-data-analytics',
    title: 'BI & Data Analytics',
    kind: 'Solution',
    icon: 'chart',
    summary: 'Dashboards, data reservoirs and data lakes that turn data into insight.',
    intro: 'We turn raw business data into actionable insight — giving decision-makers a clear, consolidated view of performance.',
    items: [
      { title: 'Dashboards & Reporting', text: 'Executive and operational dashboards with the metrics that matter.' },
      { title: 'Data Lakes & Reservoirs', text: 'Consolidated, governed data platforms ready for analytics.' },
      { title: 'Performance Metrics', text: 'Defining ICT performance metrics and tracking benefits realisation.' },
    ],
  },
  {
    slug: 'ict-asset-management',
    title: 'ICT Asset Management',
    kind: 'Solution',
    icon: 'box',
    summary: 'Hardware and software asset tracking for compliance and cost control.',
    intro: 'Know where every asset is, how it is configured and when it changes — supporting licence and regulatory compliance and avoiding the costs of poor inventory data.',
    items: [
      { title: 'Hardware & Software Management', text: 'Location, configuration and change tracking across your estate.' },
      { title: 'Licence & Regulatory Compliance', text: 'Stay compliant and avoid over- or under-licensing.' },
    ],
  },
  {
    slug: 'it-office-moves',
    title: 'IT Office Moves & Relocations',
    kind: 'Solution',
    icon: 'truck',
    summary: 'End-to-end IT relocations with minimum downtime.',
    intro: 'IT is the backbone of every business. Our engineers decommission, move and reconnect everything so you are running at your new location with minimum downtime.',
    items: [
      { title: 'Planning & Auditing', text: 'Requirement gathering, IT system auditing and project planning.' },
      { title: 'Infrastructure & Connectivity', text: 'Infrastructure design, cable management, connectivity and VPN setup.' },
      { title: 'Relocation', text: 'Server and desktop relocation, fully project-managed.' },
    ],
  },
  {
    slug: 'domain-services',
    title: 'Domain Services',
    kind: 'Service',
    icon: 'globe',
    summary: 'Name It, Build It, Launch It — domains, secure hosting and SSL.',
    intro: 'Everything begins with the perfect domain name. We register it, host it securely and launch your site with a matching email address.',
    items: [
      { title: 'Name It', text: 'Domain registration that presents your brand in the best light.' },
      { title: 'Build It', text: 'Reliable, secure hosting with free SSL.' },
      { title: 'Launch It', text: 'Your website and matching email, live under your own domain.' },
    ],
  },
  {
    slug: 'voip-phone-systems',
    title: 'IP (VoIP) Phone Systems',
    kind: 'Solution',
    icon: 'phone',
    summary: 'Open-platform VoIP, on-premise or in your private cloud.',
    intro: 'Affordable, easy to manage phone systems that work with popular IP phones and SIP trunks — unlimited extensions and no per-extension licensing.',
    items: [
      { title: 'Cloud or On-Premise PBX', text: 'Set up in minutes, move between cloud providers easily, with built-in backup and restore.' },
      { title: 'Scales With You', text: 'Unlimited extensions without per-extension licensing.' },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    kind: 'Solution',
    icon: 'share',
    summary: 'Consistent, well-managed presence across every major platform.',
    intro: 'Brand awareness, inbound traffic, conversions and thought leadership — backed by a consistent content strategy across X, Facebook, LinkedIn and Instagram.',
    items: [
      { title: 'Content Strategy', text: 'A consistent, well-managed content calendar.' },
      { title: 'Channel Management', text: 'Day-to-day management and reporting across platforms.' },
    ],
  },
]

export type Industry = {
  slug: string
  title: string
  image: string
  text: string
  challenges: string[]
  solutions: string[]
  services: string[]
}

export const industries: Industry[] = [
  {
    slug: 'public-sector',
    title: 'Public Sector & NGOs',
    image: '/images/industries/public-sector.jpg',
    text: 'Enterprise architecture, e-government, ICT governance and managed services for ministries, agencies and development partners.',
    challenges: [
      'Siloed systems that cannot share data across ministries and agencies',
      'Donor-funded programmes with strict reporting, fiduciary and safeguard requirements',
      'Limited in-house capacity to sustain new digital platforms after handover',
    ],
    solutions: [
      'Government Enterprise Architecture Frameworks and interoperability standards',
      'E-service digitisation roadmaps, business process re-engineering and one-stop-shop models',
      'ICT strategy, governance and policy aligned to national priorities',
      'Technical specifications, costed infrastructure plans and draft RFPs for implementation',
      'Training, mentorship and helpdesk support that build lasting institutional capacity',
    ],
    services: ['enterprise-architecture', 'strategic-consultancy', 'cybersecurity-risk', 'managed-ict-services'],
  },
  {
    slug: 'banking',
    title: 'Banking & Finance',
    image: '/images/industries/banking.jpg',
    text: 'Secure, always-on infrastructure, security audits and BI for regulated financial institutions.',
    challenges: [
      'Zero tolerance for downtime in core banking and payment systems',
      'Growing cyber threats and regulatory scrutiny of data protection',
      'Data spread across branches and systems, slowing decisions',
    ],
    solutions: [
      'ISO 27001-based security management, risk assessments and independent security audits',
      'Disaster recovery, real-time data backup and managed failover',
      'Business intelligence dashboards and data lakes for consolidated performance views',
      'Managed network, server and service desk operations to ITIL/ISO 20000 standards',
    ],
    services: ['cybersecurity-risk', 'technical-consultancy', 'bi-data-analytics', 'managed-ict-services'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    image: '/images/industries/healthcare.jpg',
    text: 'Reliable systems, data protection and integration for patient-centred care.',
    challenges: [
      'Clinical and administrative systems that do not talk to each other',
      'Sensitive patient data that must be protected and always available',
      'Round-the-clock operations with little room for IT disruption',
    ],
    solutions: [
      'Systems integration and APIs connecting records, labs, pharmacy and billing',
      'Data protection, privacy-by-design controls and security audits',
      '24x7x365 managed support and service desk for clinical environments',
      'Backup and disaster recovery that keep critical systems running',
    ],
    services: ['software-ai', 'cybersecurity-risk', 'managed-ict-services', 'technical-consultancy'],
  },
  {
    slug: 'education',
    title: 'Education',
    image: '/images/industries/education.jpg',
    text: 'Campus networks, digital learning platforms and managed support.',
    challenges: [
      'Campus networks under pressure from thousands of connected devices',
      'Moving teaching, administration and records onto digital platforms',
      'Tight budgets that demand clear value from every ICT investment',
    ],
    solutions: [
      'Campus LAN/WAN design, management and connectivity',
      'Learning and administration platforms, integrated with student records',
      'ICT asset management and licence compliance across departments',
      'Cost analysis and ICT strategy that get more value from existing spend',
    ],
    services: ['managed-ict-services', 'software-ai', 'ict-asset-management', 'strategic-consultancy'],
  },
  {
    slug: 'travel',
    title: 'Travel & Hospitality',
    image: '/images/industries/travel.jpg',
    text: 'Guest-facing systems, VoIP and multi-site connectivity that never sleep.',
    challenges: [
      'Guest-facing systems that must work every hour of every day',
      'Multiple properties and branches to connect and support',
      'Competing for bookings and loyalty online',
    ],
    solutions: [
      'Regional outsourcing and remote support for multi-site operations',
      'Open-platform VoIP phone systems with unlimited extensions',
      'Domains, secure hosting and websites that turn visitors into guests',
      'Social media management that builds brand awareness and loyalty',
    ],
    services: ['managed-ict-services', 'voip-phone-systems', 'domain-services', 'social-media-management'],
  },
  {
    slug: 'retail',
    title: 'Retail & Manufacturing',
    image: '/images/industries/retail.jpg',
    text: 'POS, asset management, analytics and automation from shop floor to head office.',
    challenges: [
      'Point-of-sale, stock and production data held in separate systems',
      'Large estates of hardware and software that are hard to track',
      'Pressure to automate processes and cut operating costs',
    ],
    solutions: [
      'Business intelligence dashboards linking sales, stock and production',
      'ICT asset management for hardware, software and licence compliance',
      'Process automation and custom business software',
      'Managed infrastructure and support from shop floor to head office',
    ],
    services: ['bi-data-analytics', 'ict-asset-management', 'software-ai', 'managed-ict-services'],
  },
  {
    slug: 'engineering',
    title: 'Engineering',
    image: '/images/industries/engineering.jpg',
    text: 'Industrial-grade infrastructure, data platforms and systems integration.',
    challenges: [
      'Design, project and operational systems that need to share data',
      'Large technical files that demand reliable storage and backup',
      'Ageing servers and applications due for upgrade or migration',
    ],
    solutions: [
      'Systems integration across engineering, project and finance applications',
      'Server and IT upgrades, migration and secure decommissioning',
      'Real-time data backup and disaster recovery for critical files',
      'Data platforms and analytics for operational insight',
    ],
    services: ['software-ai', 'technical-consultancy', 'bi-data-analytics', 'managed-ict-services'],
  },
  {
    slug: 'construction',
    title: 'Construction',
    image: '/images/industries/construction.jpg',
    text: 'Site connectivity, project systems and IT relocations as projects move.',
    challenges: [
      'Temporary sites that need connectivity fast, then need to move',
      'Equipment and assets spread across many locations',
      'Project teams that need secure access to head-office systems',
    ],
    solutions: [
      'IT office moves and site relocations with minimum downtime',
      'Connectivity and VPN setup linking sites to head office',
      'ICT asset tracking across sites and projects',
      'Regional outsourcing and remote support for site teams',
    ],
    services: ['it-office-moves', 'ict-asset-management', 'managed-ict-services', 'technical-consultancy'],
  },
]

// ─── Digital Government / Enterprise Architecture practice ───────────────
// Written as a general capability, not tied to any single project or tender.

export const eaClients = [
  'Ministries, departments & agencies',
  'County, municipal & local governments',
  'Regulators & state corporations',
  'Development-partner-funded programmes',
  'Regional & intergovernmental bodies',
]

export const eaOfferings = [
  { icon: 'layers', title: 'Enterprise Architecture Frameworks', text: 'National and institutional EA frameworks (GEAF/NEA): principles, reference models, standards and governance across business, data, application, technology and security.' },
  { icon: 'share', title: 'Interoperability & Data Exchange', text: 'Interoperability frameworks across legal, organisational, semantic and technical layers, with API standards, data-sharing agreements and secure exchange platforms.' },
  { icon: 'globe', title: 'Digital Public Infrastructure', text: 'Architecture and roadmaps for the shared rails of digital government: digital identity, payments, data exchange and consent — designed on open standards.' },
  { icon: 'compass', title: 'Digital Government Strategy & Roadmaps', text: 'E-government and digital transformation strategies, prioritised investment roadmaps and implementation calendars aligned to national priorities.' },
  { icon: 'chart', title: 'Maturity Assessments & ICT Audits', text: 'Current-state and EA maturity assessments, high-level IT systems audits and gap analyses that give decision-makers an objective baseline.' },
  { icon: 'server', title: 'Service Digitisation & Process Re-engineering', text: 'Business process re-engineering, one-stop-shop service models and digitisation methodologies for G2C, G2B and G2G services.' },
  { icon: 'box', title: 'Technical Specifications & Procurement Support', text: 'Functional and non-functional specifications, infrastructure sizing, CAPEX/OPEX estimates, and TOR/RFP preparation for implementation phases.' },
  { icon: 'shield', title: 'Cybersecurity & Data Protection Architecture', text: 'Security architecture, data classification and privacy-by-design controls aligned to ISO/IEC 27001 and national data-protection law.' },
  { icon: 'wrench', title: 'Capacity Building & Programme Assurance', text: 'Training, mentorship and helpdesk support for public-sector teams, plus PMO and quality assurance for digital programmes.' },
] as const

export const eaObjectives = [
  { title: 'Interoperable', text: 'Common standards, protocols and APIs so G2G, G2B and G2C services exchange data seamlessly.' },
  { title: 'Secure & Private', text: 'Security controls, governance and data-protection compliance embedded from the start.' },
  { title: 'Citizen-Centred', text: 'Consistent, usable and accessible (WCAG 2.2) services, built on the “once-only” principle so citizens never re-submit the same data.' },
  { title: 'Value for Money', text: 'An objective basis for reviewing ICT investment, reusing shared platforms and avoiding duplication.' },
  { title: 'Sustainable', text: 'Owned by the institution, with the skills, documentation and governance to maintain it.' },
]

export const eaPhases = [
  {
    id: '01',
    title: 'Mobilisation & Inception',
    weeks: 'Foundation',
    output: 'Inception Report · Work Plan',
    points: [
      'Agree governance, reporting lines and communication with the client’s project team',
      'Confirm scope, stakeholder map, risk register and a detailed, milestone-based work plan',
      'Gather existing policies, strategies, systems inventories and architecture artefacts',
    ],
  },
  {
    id: '02',
    title: 'Discovery & Current-State Assessment',
    weeks: 'Baseline',
    output: 'Current-State & Maturity Assessment',
    points: [
      'Baseline business, data, application and technology architectures (TOGAF® ADM Phases B–D)',
      'High-level IT systems audits and validation of existing or proposed technical specifications',
      'Maturity assessment of e-services, shared infrastructure, skills and cybersecurity posture',
    ],
  },
  {
    id: '03',
    title: 'Gap Analysis & Target Architecture',
    weeks: 'Design',
    output: 'Gap Analysis · Draft Framework',
    points: [
      'Architecture principles, reference models and a common vocabulary for every institution',
      'Interoperability design: service-oriented and event-driven integration, API and data-exchange standards',
      'UI/UX, security, privacy and non-functional standards that all new systems must meet',
    ],
  },
  {
    id: '04',
    title: 'Stakeholder Consultation & Validation',
    weeks: 'Consensus',
    output: 'Validated Framework · Workshop Reports',
    points: [
      'Structured, inclusive consultations with institutions, users and beneficiaries, including field visits',
      'Validation workshops, with every comment logged, answered and reflected in the next draft',
      'Engagement that follows the client’s and funders’ environmental, social and safeguarding standards',
    ],
  },
  {
    id: '05',
    title: 'Roadmap, Specifications & Procurement',
    weeks: 'Plan',
    output: 'Implementation Plan · Specifications · TOR/RFP',
    points: [
      'Digitisation methodology, prioritised roadmap and implementation calendar',
      'Infrastructure requirements (data centre, network, cloud, software, security) with CAPEX/OPEX',
      'Human-resource and skills plan, and draft TOR/RFP documents for the implementation phase',
    ],
  },
  {
    id: '06',
    title: 'Capacity Building & Transition',
    weeks: 'Sustain',
    output: 'Final Framework · Training Materials',
    points: [
      'Training manuals, user guides and hands-on training for technical teams and developers',
      'Helpdesk and mentorship support, with periodic reports on issues resolved and skills transferred',
      'Advisory briefings to management on standards, governance and emerging technology',
    ],
  },
]

export const eaDeliverables = [
  'Inception report, work plan and regular progress reports',
  'Current-state, maturity and gap-analysis reports',
  'Enterprise architecture framework with principles, reference models and standards',
  'Interoperability framework with API, data-exchange and security standards',
  'Digitisation approach, roadmap and implementation plan',
  'Technical specifications with capital, operating and human-resource estimates',
  'Draft TOR/RFP documents for implementation',
  'Training materials, user manuals and a helpdesk/mentorship mechanism',
]

export const eaToolkit = [
  { group: 'Architecture', items: ['TOGAF® Standard, 10th Edition', 'Zachman Framework', 'ISO/IEC/IEEE 42010', 'COBIT® 2019 governance', 'ITIL® 4 / ISO/IEC 20000'] },
  { group: 'Integration', items: ['Service-oriented & event-driven architecture', 'API management & gateways', 'Microservices', 'X-Road-style secure data exchange', 'GovStack building blocks'] },
  { group: 'Modelling', items: ['ArchiMate® 3.2', 'UML', 'BPMN 2.0', 'Systems Analysis & Design', 'CASE tools (Sparx EA, Archi)'] },
  { group: 'Standards', items: ['OpenAPI 3 / REST', 'OAuth 2.0 & OpenID Connect', 'ISO/IEC 27001 & NIST CSF 2.0', 'WCAG 2.2 accessibility', 'Data protection by design'] },
]

// Key-expert profiles we field; the team is scaled to each assignment's scope.
export const eaTeam = [
  {
    role: 'Team Leader',
    tag: 'Leadership',
    focus: 'Overall delivery, client and stakeholder relationships, quality of every deliverable.',
    profile: ['Master’s in IT, Computer Science or Project Management', 'PMP® or equivalent certification', 'Enterprise architecture and large public-sector IT programmes'],
  },
  {
    role: 'Enterprise Architect',
    tag: 'Architecture',
    focus: 'Framework design, current-state and gap analysis, architecture documentation.',
    profile: ['TOGAF® / Zachman-certified', 'Government and institutional EA design', 'EA modelling and simulation tools'],
  },
  {
    role: 'Integration & Interoperability Specialist',
    tag: 'Integration',
    focus: 'Integration patterns, API standards and data-exchange protocols.',
    profile: ['SOA, API management and microservices', 'Middleware and enterprise application integration', 'G2G and B2B integration'],
  },
  {
    role: 'Business Process & Service Design Analyst',
    tag: 'Services',
    focus: 'Process re-engineering, service design and user-centred digitisation.',
    profile: ['BPMN process modelling', 'Service design and UX standards', 'Requirements analysis (functional and non-functional)'],
  },
  {
    role: 'Cybersecurity & Data Protection Specialist',
    tag: 'Security',
    focus: 'Security architecture, risk assessment and data-protection compliance.',
    profile: ['ISO/IEC 27001 practice', 'Security audits and risk assessment', 'Data-protection and privacy controls'],
  },
  {
    role: 'Capacity Building Lead',
    tag: 'Skills transfer',
    focus: 'Training programmes, manuals, mentorship and knowledge transfer.',
    profile: ['Adult-learning and training design', 'Technical training for developers', 'Helpdesk and mentorship mechanisms'],
  },
]

// The global and African reference points our work is benchmarked against
export const eaReferences = [
  {
    title: 'Benchmarked internationally',
    text: 'We baseline maturity using the dimensions of the UN E-Government Development Index (EGDI) and the World Bank GovTech Maturity Index (GTMI), so progress is measured the way funders and international rankings measure it.',
    tags: ['UN EGDI', 'World Bank GTMI'],
  },
  {
    title: 'Interoperability by design',
    text: 'Our interoperability frameworks cover the legal, organisational, semantic and technical layers defined by the European Interoperability Framework, and draw on proven patterns such as Estonia’s X-Road and the GovStack building-block specifications.',
    tags: ['EIF layers', 'X-Road', 'GovStack'],
  },
  {
    title: 'Digital public infrastructure',
    text: 'We architect the shared “rails” of digital government — identity, payments and data exchange — favouring open standards and open-source options such as MOSIP for identity and Mojaloop for interoperable payments to avoid vendor lock-in.',
    tags: ['Identity', 'Payments', 'Data exchange'],
  },
  {
    title: 'Aligned with African policy',
    text: 'Frameworks align with the AU Digital Transformation Strategy for Africa (2020–2030), the AU Data Policy Framework and the Malabo Convention on cyber security and personal data protection, as well as national law and plans — for example Kenya’s Data Protection Act 2019 and Digital Master Plan 2022–2032.',
    tags: ['AU DTS 2020–2030', 'Malabo Convention', 'National data protection'],
  },
]

// Why government architecture programmes fail — and what our method does about it
export const eaPitfalls = [
  { risk: 'Frameworks that stay on the shelf', fix: 'A governance model (architecture board, compliance reviews, investment gating) and trained owners, so the framework is used in every new ICT decision.' },
  { risk: 'Duplicated registries and siloed systems', fix: 'Authoritative base registries and the once-only principle: data is captured once and shared securely through a common exchange layer.' },
  { risk: 'Vendor lock-in', fix: 'Open standards, open APIs and technology-neutral specifications, so future procurements stay competitive.' },
  { risk: 'Designs that ignore local realities', fix: 'Low-bandwidth, mobile-first and offline-capable patterns for regions with limited connectivity, and USSD/SMS channels where smartphones are scarce.' },
  { risk: 'Weak data protection', fix: 'Privacy by design, data classification, consent and audit trails aligned to national data-protection law from day one.' },
  { risk: 'Skills leave with the consultants', fix: 'Capacity building runs through every phase — co-working, training, manuals and mentorship — not just at the end.' },
]

// How we reduce delivery risk on every assignment
export const eaAssurance = [
  { title: 'Milestone-linked delivery', text: 'Every payment milestone is tied to a clear, reviewable deliverable.' },
  { title: 'Independent quality review', text: 'Each deliverable is peer-reviewed by a senior consultant before submission.' },
  { title: 'Risk & issue management', text: 'A live risk register, reviewed with the client at every progress meeting.' },
  { title: 'Transparent reporting', text: 'Regular progress reports: work done, challenges and mitigations, next steps.' },
  { title: 'Client ownership', text: 'All reports, frameworks and data belong to the client and are handed over in full, in editable formats.' },
  { title: 'Confidentiality & ethics', text: 'Strict confidentiality, conflict-of-interest management and zero tolerance for misconduct.' },
]

// How we meet the requirements that EA and digital-government tenders typically set
export const eaTenderFit = [
  { req: 'Registered consulting firm with core business in ICT', how: 'Technology Abreast is a registered Kenyan ICT consultancy whose core business is ICT strategy, governance, architecture and managed services.' },
  { req: 'Experience with EA frameworks such as TOGAF or Zachman', how: 'Our methodology is built on TOGAF® ADM and Zachman, modelled in ArchiMate®, UML and BPMN.' },
  { req: 'SOA, event-driven architecture and integration expertise', how: 'Interoperability and integration design is a core service: SOA, EDA, API management, microservices and EAI.' },
  { req: 'Qualified key experts (Team Leader, Architect, Integration)', how: 'We field PMP®-, TOGAF®-, ITIL®- and security-certified experts, scaled to the scope of each assignment.' },
  { req: 'Structured stakeholder consultation and validation', how: 'Consultation and validation are a dedicated phase of our method, with every comment tracked to resolution.' },
  { req: 'Technical specifications, costing and procurement documents', how: 'We produce specifications with CAPEX/OPEX and human-resource estimates, plus draft TOR/RFPs for implementation.' },
  { req: 'Capacity building and knowledge transfer', how: 'Training materials, helpdesk/mentorship and regular technical training are built into every engagement.' },
  { req: 'On-site delivery and safeguards compliance', how: 'Teams based on-site for the assignment, following national law and funders’ environmental, social and safeguarding standards.' },
]

// Verified past assignments for tender submissions.
// Add only real, verifiable engagements (client name & address, scope,
// value and period) — these render on the Digital Government page.
export type Assignment = {
  client: string
  location: string
  scope: string
  value: string
  period: string
}
export const assignments: Assignment[] = []

export const eaFaqs = [
  {
    q: 'What is a Government Enterprise Architecture Framework (GEAF)?',
    a: 'A GEAF is a shared blueprint for how government delivers digital services. It sets common principles, standards and reference models for business processes, data, applications, technology and security, so institutions can build services that work together instead of in silos.',
  },
  {
    q: 'Which frameworks and methods do you use?',
    a: 'We align our work to TOGAF® ADM and the Zachman Framework, model with ArchiMate®, UML and BPMN, and design integration using service-oriented and event-driven architecture, API management and microservices. Service management and security follow ITIL®/ISO 20000 and ISO/IEC 27001 practice.',
  },
  {
    q: 'How long does an enterprise architecture assignment take?',
    a: 'It depends on scope. Focused assessments can take a few weeks; a full national or institutional framework with stakeholder validation and capacity building typically takes four to nine months. We adapt our six-phase method to the client’s timeline and milestones.',
  },
  {
    q: 'Can you adapt to our terms of reference and funder requirements?',
    a: 'Yes. We map our work plan, deliverables, reporting and team directly to your terms of reference, and follow the procurement, reporting and safeguard requirements of your government and development partners.',
  },
  {
    q: 'What will our institution receive at the end?',
    a: 'An enterprise architecture framework with technical specifications, an interoperability framework, a digitisation roadmap and implementation plan with cost and resource estimates, draft procurement documents for implementation, and training materials — all owned by the client.',
  },
  {
    q: 'Do you support institutions after the framework is adopted?',
    a: 'Yes. We provide structured capacity support — training, a helpdesk and mentorship mechanism, and advisory briefings for management — and can support implementation through PMO and quality-assurance services.',
  },
  {
    q: 'Can your team work on-site, including outside Kenya?',
    a: 'Yes. Our core team can be based on-site for the duration of an assignment, with field visits for consultations and assessments, following the client’s travel and security protocols.',
  },
]
