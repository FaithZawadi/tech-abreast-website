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

export const eaObjectives = [
  { title: 'UI / UX Standards', text: 'Guidelines for consistent, usable and accessible (WCAG 2.1) government digital services.' },
  { title: 'Stakeholder Consultation', text: 'Structured, inclusive consultation with institutions and beneficiaries aligned to national priorities.' },
  { title: 'Technical Requirements', text: 'System specifications and operational standards for design, deployment and sustainability.' },
  { title: 'Interoperability', text: 'Common standards, protocols and frameworks for seamless G2G, G2B and G2C data exchange.' },
  { title: 'Security & Privacy', text: 'Security controls, governance mechanisms and compliance with national and international best practice.' },
]

export const eaPhases = [
  {
    id: '01',
    title: 'Mobilisation & Inception',
    weeks: 'Weeks 1–2',
    output: 'Inception Report',
    points: [
      'Deploy the core team to the client duty station and agree governance with the PIU',
      'Confirm scope, stakeholder map, risk register and detailed work plan',
      'Collect existing policies, systems inventories and architecture artefacts',
    ],
  },
  {
    id: '02',
    title: 'Current State & Gap Analysis',
    weeks: 'Weeks 3–6',
    output: 'Current State Assessment · Gap Analysis Report',
    points: [
      'Baseline business, data, application and technology architectures (TOGAF ADM Phases B–D)',
      'High-level IT systems audits and validation of proposed technical specifications',
      'Maturity assessment of e-services, shared infrastructure and cybersecurity posture',
    ],
  },
  {
    id: '03',
    title: 'Target Architecture & Draft Framework',
    weeks: 'Weeks 7–9',
    output: 'Draft GEA Framework',
    points: [
      'Architecture principles, reference models and a common vocabulary for all agencies',
      'Interoperability framework: SOA, event-driven integration, API and data-exchange standards',
      'UI/UX, security, privacy and non-functional requirement standards',
    ],
  },
  {
    id: '04',
    title: 'Consultation & Validation',
    weeks: 'Weeks 10–14',
    output: 'Validated Framework · Workshop Reports',
    points: [
      'Stakeholder consultations with ministries, agencies and beneficiaries, including field visits',
      'Validation workshops and structured feedback incorporation',
      'Inclusive engagement consistent with World Bank ESF and GBV/SEA/SH safeguards',
    ],
  },
  {
    id: '05',
    title: 'Roadmap, Specifications & RFP',
    weeks: 'Weeks 15–20',
    output: 'Implementation Plan · Technical Specs · Draft RFP',
    points: [
      'Digitalisation methodology, procedure and implementation calendar',
      'Infrastructure requirements (data centre, network, cloud, software, security) with CAPEX/OPEX',
      'Human-resource and skills plan, and draft TOR/RFP for GEA and interoperability rollout',
    ],
  },
  {
    id: '06',
    title: 'Capacity Building & Handover',
    weeks: 'Weeks 21–24+',
    output: 'Final GEA Framework · Training Materials',
    points: [
      'Training manuals and user guides on platform-level services',
      'Helpdesk / mentorship mechanism with periodic reports on issues resolved and skills transferred',
      'Quarterly technical training for public-sector developers and advisory briefing notes to management',
    ],
  },
]

export const eaDeliverables = [
  'Inception Report and monthly progress reports',
  'Current State Assessment & Gap Analysis Reports',
  'Approved Government Enterprise Architecture Framework with technical specifications',
  'Digitalisation Approach & Implementation Plan (functional and non-functional minimum standards)',
  'Interoperability roadmap with capital, operational and human-resource estimates',
  'Draft RFP / TOR for GEA and Interoperability Framework implementation',
  'Technical training materials, user manuals and helpdesk mechanism',
]

export const eaToolkit = [
  { group: 'Frameworks', items: ['TOGAF® ADM', 'Zachman Framework', 'ITIL® / ISO 20000', 'ISO/IEC 27001', 'COBIT governance'] },
  { group: 'Integration', items: ['Service-Oriented Architecture', 'Event-Driven Architecture', 'API management & gateways', 'Microservices', 'Enterprise Service Bus / EAI'] },
  { group: 'Modelling', items: ['ArchiMate®', 'UML', 'BPMN 2.0', 'Systems Analysis & Design', 'CASE tools (Sparx EA, Archi)'] },
  { group: 'Standards', items: ['WCAG 2.1 accessibility', 'OpenAPI / REST', 'Data-protection by design', 'World Bank ESF', 'GBV/SEA/SH safeguards'] },
]

export const eaTeam = [
  {
    role: 'Team Leader',
    months: 8,
    focus: 'Project execution, stakeholder coordination and deliverable review.',
    profile: ['Master’s in IT, Computer Science or Project Management', 'PMP®-certified', '5+ years in enterprise architecture', 'Large-scale public-sector IT project leadership'],
  },
  {
    role: 'Enterprise Architect',
    months: 10,
    focus: 'Framework development, gap analysis and technical documentation.',
    profile: ['TOGAF® / Zachman-certified', '5+ years EA development', 'Government EA design & implementation', 'EA modelling and simulation tools'],
  },
  {
    role: 'Application Integration Specialist',
    months: 8,
    focus: 'Integration solutions, API standards and interoperability protocols.',
    profile: ['SOA, API management & microservices', 'Middleware for seamless data exchange', 'G2G / B2B integration experience', 'EAI patterns for heterogeneous systems'],
  },
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
