// Insights: in-depth articles written for the questions clients search for.
// Each article links to the service it relates to.

export type Section = { heading: string; body?: string[]; bullets?: string[] }

export type Article = {
  slug: string
  title: string
  description: string
  date: string // ISO date
  readMins: number
  category: string
  service: string // related service slug
  keywords: string[]
  image: string
  sections: Section[]
}

export const articles: Article[] = [
  {
    slug: 'managed-it-services-kenya-guide',
    title: 'Managed IT Services in Kenya: A Practical Guide for Growing Organisations',
    description:
      'What managed IT services are, how the main models differ, what a good service-level agreement looks like, and the questions to ask before you choose a provider in Kenya.',
    date: '2026-09-28',
    readMins: 7,
    category: 'Managed Services',
    service: 'managed-ict-services',
    keywords: ['managed IT services Kenya', 'IT support Nairobi', 'IT outsourcing Kenya', 'managed service provider Nairobi'],
    image: '/images/hero.jpg',
    sections: [
      {
        heading: 'What “managed IT services” actually means',
        body: [
          'A managed IT service is an ongoing arrangement in which a specialist provider takes responsibility for running part or all of your technology — support desk, networks, servers, security, backups — against agreed service levels, usually for a predictable monthly fee.',
          'The difference from calling a technician when something breaks is accountability. A managed service provider (MSP) monitors, maintains and improves your systems proactively, and is measured on keeping them running rather than on fixing faults after the fact.',
        ],
      },
      {
        heading: 'The main models — and when each makes sense',
        bullets: [
          'Fully managed: the provider runs your entire IT function, from front-line support to strategy. Suits organisations without an internal IT team.',
          'Co-managed: the provider works alongside your IT staff, covering specialist areas (security, networks, out-of-hours support) or adding capacity.',
          'Interim or project-based: short-term expertise through a merger, expansion, office move or major system roll-out.',
          'Regional outsourcing: support for branch or remote offices, nationally or across borders, without hiring locally in each location.',
        ],
      },
      {
        heading: 'What a good service-level agreement (SLA) should include',
        bullets: [
          'Clear priority levels, with response and resolution targets for each (for example, a system-down incident versus a single-user request).',
          'Support hours that match how you operate — business hours, extended hours or 24x7x365.',
          'A defined scope: which users, sites, devices, applications and third-party vendors are covered.',
          'Monthly reporting on tickets, uptime, security events and trends, with regular service reviews.',
          'Security and data-protection obligations, including how the provider handles your data under Kenya’s Data Protection Act, 2019.',
          'An exit plan: documentation and handover so you are never locked in.',
        ],
      },
      {
        heading: 'Frameworks that separate professional providers from the rest',
        body: [
          'Look for delivery built on recognised frameworks: ITIL® or ISO/IEC 20000 for service management (how incidents, problems and changes are handled) and ISO/IEC 27001 for information security. These give you consistent processes and a common language for measuring performance — used as working tools, not just badges.',
        ],
      },
      {
        heading: 'Ten questions to ask before you sign',
        bullets: [
          'Who will actually support us day to day, and how senior are they?',
          'What are your response and resolution times for each priority?',
          'How do you monitor our systems, and what happens out of hours?',
          'How do you handle backups, and how often do you test restores?',
          'How do you protect our data and comply with the Data Protection Act?',
          'Which vendors do you manage on our behalf?',
          'What does onboarding look like, and how do you avoid downtime during the transition?',
          'What reports will we receive, and how often will we review the service?',
          'How are costs structured, and what is excluded?',
          'If we part ways, what do we receive at handover?',
        ],
      },
      {
        heading: 'How Technology Abreast approaches managed services',
        body: [
          'Our managed services are humanised and flexible: no account salespeople, no contractual knots, and a top-heavy team of senior engineers and consultants. We deliver to ITIL/ISO 20000 and ISO 27001 practice, with zero-downtime transitions, continual consultancy and regular reporting that shows the value delivered.',
        ],
      },
    ],
  },
  {
    slug: 'kenya-data-protection-act-ict-checklist',
    title: 'Kenya’s Data Protection Act, 2019: An ICT Compliance Checklist',
    description:
      'A practical checklist for Kenyan organisations: registration with the ODPC, data-subject rights, impact assessments, 72-hour breach notification, cross-border transfers and the technical controls that support compliance.',
    date: '2026-09-28',
    readMins: 8,
    category: 'Cybersecurity & Compliance',
    service: 'cybersecurity-risk',
    keywords: ['Kenya Data Protection Act 2019', 'data protection compliance Kenya', 'ODPC registration', 'data breach notification Kenya'],
    image: '/images/industries/banking.jpg',
    sections: [
      {
        heading: 'Why this matters for your IT systems',
        body: [
          'Kenya’s Data Protection Act, 2019 governs how organisations collect, store, use and share personal data. It created the Office of the Data Protection Commissioner (ODPC), which registers data controllers and processors, handles complaints and can impose penalties. Most obligations in the Act are met — or missed — in your IT systems and processes.',
          'This checklist is a practical starting point, not legal advice. Confirm your specific obligations with a qualified advisor and the ODPC’s current guidance.',
        ],
      },
      {
        heading: '1. Know your data and register',
        bullets: [
          'Map what personal data you hold, where it lives (servers, cloud, laptops, phones, paper), who can access it and why.',
          'Check whether you must register with the ODPC as a data controller or processor under the registration regulations, and renew on time.',
          'Record the lawful basis for each processing activity — consent, contract, legal obligation or another basis permitted by the Act.',
        ],
      },
      {
        heading: '2. Build the principles into your systems',
        bullets: [
          'Purpose limitation and minimisation: collect only what you need for a stated purpose.',
          'Accuracy: make it easy to correct records.',
          'Storage limitation: set retention periods and delete or anonymise data when they expire.',
          'Security: apply appropriate technical and organisational measures — access control, encryption, logging and backups.',
        ],
      },
      {
        heading: '3. Support data-subject rights',
        body: [
          'Individuals have rights to be informed, to access their data, to object to processing, and to have inaccurate data corrected or deleted. Your systems should let you find, export, correct and erase a person’s data within a reasonable time — which is only possible if your data is well organised.',
        ],
      },
      {
        heading: '4. Assess high-risk processing',
        body: [
          'Where processing is likely to result in high risk to individuals — for example large-scale processing of sensitive data or new technologies — carry out a Data Protection Impact Assessment (DPIA) before you start, and keep it on file.',
        ],
      },
      {
        heading: '5. Be ready for a breach',
        bullets: [
          'The Act requires you to notify the Data Commissioner within 72 hours of becoming aware of a breach that poses a real risk of harm, and to inform affected people where appropriate.',
          'Have an incident-response plan, named responsibilities and pre-drafted notices.',
          'Keep logs that let you establish what happened, which data was affected and when.',
        ],
      },
      {
        heading: '6. Control cross-border transfers and third parties',
        bullets: [
          'Personal data may only leave Kenya with appropriate safeguards; check where your cloud and SaaS providers store and back up data.',
          'Put data-processing terms in contracts with every vendor that handles personal data on your behalf.',
        ],
      },
      {
        heading: '7. The technical controls that make compliance real',
        bullets: [
          'Identity and access management with multi-factor authentication and least-privilege access.',
          'Encryption of data at rest and in transit; managed, encrypted devices.',
          'Centralised logging and monitoring, with alerts for suspicious activity.',
          'Tested backups and disaster recovery.',
          'Regular security audits and vulnerability assessments aligned to ISO/IEC 27001.',
        ],
      },
      {
        heading: 'Getting help',
        body: [
          'Technology Abreast carries out independent security and risk audits, designs privacy-by-design controls and provides ISO 27001-based security management — helping you close the gap between what the law requires and what your systems actually do.',
        ],
      },
    ],
  },
  {
    slug: 'government-enterprise-architecture-framework-guide',
    title: 'Government Enterprise Architecture Frameworks: What They Are and Why So Many Fail',
    description:
      'How a government enterprise architecture framework (GEAF) works, the four layers of interoperability, how TOGAF ADM structures the work, and the design choices that keep a framework in use after it is approved.',
    date: '2026-09-28',
    readMins: 9,
    category: 'Digital Government',
    service: 'enterprise-architecture',
    keywords: ['government enterprise architecture framework', 'GEAF', 'digital government Africa', 'TOGAF government', 'interoperability framework'],
    image: '/images/industries/public-sector.jpg',
    sections: [
      {
        heading: 'The problem enterprise architecture solves',
        body: [
          'Most governments digitise one institution at a time. Each ministry buys its own systems, builds its own registries and asks citizens for the same information again and again. The result is duplication, high cost and services that cannot talk to each other.',
          'A Government Enterprise Architecture Framework (GEAF) sets the shared principles, standards and reference models that every institution follows, so new systems fit together — and so ICT investment can be reviewed against a common blueprint.',
        ],
      },
      {
        heading: 'What a framework contains',
        bullets: [
          'Architecture principles — for example “reuse before buy, buy before build”, “once-only data collection” and “secure by design”.',
          'Reference models for the business, data, application and technology architectures.',
          'Standards: interoperability and API standards, data standards, security and privacy controls, and UI/UX and accessibility guidelines.',
          'Governance: an architecture board, compliance reviews for new projects and a process for keeping the framework current.',
          'A roadmap: prioritised initiatives with cost, skills and sequencing.',
        ],
      },
      {
        heading: 'Interoperability has four layers, not one',
        body: [
          'A common mistake is treating interoperability as a technical exercise. The European Interoperability Framework — widely used as a reference well beyond Europe — distinguishes four layers that must all work:',
        ],
        bullets: [
          'Legal: laws and data-sharing agreements that allow and govern the exchange.',
          'Organisational: aligned processes, responsibilities and service levels between institutions.',
          'Semantic: shared data models and registries so data means the same thing everywhere.',
          'Technical: secure APIs, messaging, identity and trust services.',
        ],
      },
      {
        heading: 'How TOGAF ADM structures the work',
        body: [
          'The TOGAF® Architecture Development Method (ADM) provides a proven sequence: establish the vision and scope, describe the current (baseline) business, data, application and technology architectures, design the target state, analyse the gaps, and plan the migration — with governance throughout. In practice we adapt it to the client’s terms of reference: inception, current-state assessment, target architecture, stakeholder validation, roadmap and specifications, and capacity building.',
        ],
      },
      {
        heading: 'Why frameworks fail — and what prevents it',
        bullets: [
          'Shelf-ware: the framework is approved but never used. Prevent it with governance that gates new ICT investment against the framework.',
          'Duplicated registries: prevent it with authoritative base registries and a common data-exchange layer.',
          'Vendor lock-in: prevent it with open standards and technology-neutral specifications.',
          'Designs that ignore local realities: plan for low bandwidth, mobile-first access and offline capability.',
          'Skills that leave with the consultants: build capacity throughout the assignment, not just at the end.',
        ],
      },
      {
        heading: 'Benchmarks worth tracking',
        body: [
          'Progress is easier to demonstrate when it is measured the way international partners measure it — for example the dimensions of the UN E-Government Development Index (EGDI) and the World Bank GovTech Maturity Index (GTMI). Aligning with continental policy such as the AU Digital Transformation Strategy for Africa (2020–2030) and national data-protection law keeps the framework defensible.',
        ],
      },
      {
        heading: 'Working with Technology Abreast',
        body: [
          'We develop enterprise architecture and interoperability frameworks, digitisation roadmaps and technical specifications for public institutions, and build the capacity to sustain them. See our Digital Government practice for our method, team and how we meet typical terms of reference.',
        ],
      },
    ],
  },
  {
    slug: 'disaster-recovery-planning-kenya-rto-rpo',
    title: 'Disaster Recovery for Kenyan Businesses: RTO, RPO and the 3-2-1 Rule',
    description:
      'A plain-language guide to disaster recovery: recovery time and recovery point objectives, the 3-2-1 backup rule, local risks like power outages and ransomware, and how to test that your recovery actually works.',
    date: '2026-09-28',
    readMins: 6,
    category: 'Technical Consultancy',
    service: 'technical-consultancy',
    keywords: ['disaster recovery Kenya', 'data backup Nairobi', 'business continuity Kenya', 'ransomware recovery'],
    image: '/images/industries/engineering.jpg',
    sections: [
      {
        heading: 'Start with two numbers: RTO and RPO',
        bullets: [
          'Recovery Time Objective (RTO): how long a system can be down before the impact becomes unacceptable.',
          'Recovery Point Objective (RPO): how much data, measured in time, you can afford to lose — the gap between the last good backup and the failure.',
        ],
        body: [
          'Set RTO and RPO per system, not for the whole business. A payments platform may need minutes; an archive may tolerate days. These two numbers drive every technical and cost decision that follows.',
        ],
      },
      {
        heading: 'The 3-2-1 backup rule',
        bullets: [
          '3 copies of your data (the original plus two backups).',
          '2 different types of storage media.',
          '1 copy kept off-site — ideally encrypted and isolated so ransomware cannot reach it.',
        ],
      },
      {
        heading: 'Risks to plan for in Kenya',
        bullets: [
          'Power outages and surges: UPS, generators and proper shutdown procedures protect hardware and data.',
          'Connectivity failures: redundant links from different providers for critical sites.',
          'Ransomware and cyber attacks: offline or immutable backups and a practised recovery plan.',
          'Hardware failure, theft, fire and flooding: off-site replicas and documented rebuild procedures.',
          'Human error: versioned backups that let you roll back accidental deletions.',
        ],
      },
      {
        heading: 'Test it — or assume it does not work',
        body: [
          'A backup that has never been restored is a hope, not a plan. Schedule regular restore tests, run at least an annual failover exercise for critical systems, and record how long recovery actually took against your RTO.',
        ],
      },
      {
        heading: 'A simple roadmap',
        bullets: [
          'Carry out a risk assessment and business-impact analysis.',
          'Set RTO and RPO for each critical system.',
          'Design backup, replication and failover to meet them.',
          'Document the recovery runbook and assign responsibilities.',
          'Test, measure and improve every quarter.',
        ],
      },
      {
        heading: 'How we help',
        body: [
          'Technology Abreast provides managed failover across servers and networks, real-time data replication, automated encrypted off-site backup, and a free infrastructure audit when implementing a disaster-recovery plan.',
        ],
      },
    ],
  },
]
