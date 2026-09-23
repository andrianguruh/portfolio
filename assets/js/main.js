/**
 * IT Project Manager & Website Specialist Portfolio - Creative Artsy Theme
 * Handles Real-Time CMS State Sync, Dynamic Name & Content Overrides, Scroll Reveals & Modal
 * 100% Robust Crash-Proof Architecture
 */

const DEFAULT_PORTFOLIO_DATA = {
  navigation: [
    { id: 'nav-home', label: 'Home', url: '#home', target: '_self', visible: true },
    { id: 'nav-about', label: 'About & Skills', url: '#about', target: '_self', visible: true },
    { id: 'nav-workflow', label: 'PM Workflow', url: '#workflow', target: '_self', visible: true },
    { id: 'nav-projects', label: 'Projects', url: '#projects', target: '_self', visible: true },
    { id: 'nav-playground', label: 'Playground', url: '#playground', target: '_self', visible: true },
    { id: 'nav-contact', label: 'Contact', url: '#contact', target: '_self', visible: true }
  ],
  footer: {
    copyright: '© 2026 Alex Rivera · IT Project Manager & Website Specialist. Made with ✦'
  },
  profile: {
    name: 'Alex Rivera',
    titleTag: 'IT PM & Web Specialist'
  },
  hero: {
    statusBadge: 'Available for Strategic IT Initiatives & Web Advisory',
    headline: 'Translating Business Goals into High-Performing Web Solutions.',
    markerHighlight: 'High-Performing Web Solutions.',
    subheadline: 'Experienced IT Project Manager & Website Specialist bridging technical execution and strategic business needs. I lead cross-functional teams to deliver complex web platforms on time and within scope.',
    stats: [
      { number: '12+', label: 'Enterprise Projects Delivered' },
      { number: '99.4%', label: 'On-Time Sprint Velocity' },
      { number: '10M+', label: 'End Users Reached' },
      { number: 'Scrum', label: 'Certified Agile IT Lead' }
    ]
  },
  about: {
    title: 'Managing the Process. Mastering the Platform.',
    paragraph1: 'A successful digital product requires more than good code—it requires clear communication, risk mitigation, and strategic oversight. With a dual focus on IT Project Management and Web Architecture, I lead cross-functional teams to build intuitive, scalable, and secure digital platforms.',
    paragraph2: "Whether it's a high-traffic enterprise landing page, a big data portal, or a complex hyperlocal dealer system, I ensure every sprint delivers measurable business value.",
    skills: [
      { name: 'Agile & Scrum', category: 'Agile Lead', color: 'sticky-yellow' },
      { name: 'Sprint Velocity', category: 'Governance', color: 'sticky-mint' },
      { name: 'API Architecture', category: 'Integrations', color: 'sticky-lavender' },
      { name: 'CMS Config', category: 'CMS Platforms', color: 'sticky-peach' },
      { name: 'QA & UAT Testing', category: 'Quality Assurance', color: 'sticky-cyan' },
      { name: 'Risk Mitigation', category: 'Risk Control', color: 'sticky-pink' },
      { name: 'Jira & Confluence', category: 'Tooling', color: 'sticky-mint' },
      { name: 'Resource Alloc.', category: 'Management', color: 'sticky-yellow' },
      { name: 'Security Audit', category: 'Compliance', color: 'sticky-lavender' }
    ]
  },
  workflow: [
    { num: '01', title: 'Discovery & Scope', desc: 'Stakeholder alignment, backlog story grooming, and success metric definition.' },
    { num: '02', title: 'Architecture', desc: 'Selecting web frameworks, database schemas, and API integration contracts.' },
    { num: '03', title: 'Agile Sprints', desc: '2-week iterative sprints, daily standups, and continuous code integration.' },
    { num: '04', title: 'QA & UAT', desc: 'Security audit hardening, automated regression, and User Acceptance sign-off.' },
    { num: '05', title: 'Launch & Value', desc: 'Production release, analytics tracking, and continuous post-launch optimization.' }
  ],
  contact: {
    headline: "Ready to build your next digital product?",
    subheadline: "Got a project, a hard technical problem, or need strategic IT project management oversight? Drop a line. I read every single message.",
    email: "alex.rivera.itpm@example.com",
    responseTime: "Response Time: < 24 Hours"
  },
  projects: [
    {
      id: 'wondr-bni',
      title: 'Landing Page Wondr by BNI',
      category: 'enterprise',
      categoryLabel: 'Enterprise & Banking',
      badgeColor: 'bg-yellow-300 text-slate-950 font-bold',
      subtitle: 'High-Conversion Banking & Wealth Management Digital Platform',
      icon: 'landmark',
      gradient: 'from-amber-400/20 via-slate-800 to-slate-900',
      impact: '140% Increase in App Download Conversions',
      role: 'Lead IT Project Manager & Web Strategist',
      sprintDuration: '12 Sprints (6 Months)',
      description: 'Directed the end-to-end web strategy, UX architecture, and technical execution for Bank BNI’s flagship Wondr banking landing platform. Managed cross-functional teams of 14+ software engineers, UI/UX designers, security auditors, and banking compliance officers.',
      deliverables: [
        'High-performance responsive landing pages optimized for CWV (Largest Contentful Paint < 1.2s)',
        'Bank-grade security audit compliance & OWASP Top 10 hardening',
        'Integration with core banking analytics and real-time app store conversion tracking',
        'CMS workflow setup enabling non-technical marketing teams to publish dynamic campaigns'
      ],
      techStack: ['Agile / Scrum', 'Next.js / SSR', 'Tailwind CSS', 'Framer Motion', 'API Security', 'Jira / Confluence'],
      metrics: [
        { label: 'Conversion Rate', value: '+140%' },
        { label: 'Page Load Speed', value: '0.9s' },
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Active Visitors', value: '2.5M+/mo' }
      ]
    },
    {
      id: 'portal-bigdata',
      title: 'Portal Big Data & Sistem Informasi Konservasi',
      category: 'enterprise',
      categoryLabel: 'Government & Big Data',
      badgeColor: 'bg-emerald-300 text-slate-950 font-bold',
      subtitle: 'National Conservation Data Warehouse & GIS Spatial Analytics Portal',
      icon: 'database',
      gradient: 'from-emerald-400/20 via-slate-800 to-slate-900',
      impact: 'Integrated 50+ Regional Conservation Databases',
      role: 'Senior Technical PM & Systems Architect',
      sprintDuration: '16 Sprints (8 Months)',
      description: 'Led the development of a unified Big Data portal and Conservation Information System for nationwide environmental monitoring. Orchestrated real-time data ingestion pipelines, GIS map overlays, and executive dashboard analytics for government leadership.',
      deliverables: [
        'Centralized Big Data portal architecture connecting multi-region sensor networks & databases',
        'Interactive GIS spatial mapping engine for real-time forest cover & species tracking',
        'Role-Based Access Control (RBAC) security for multi-agency government users',
        'Automated reporting tool reducing quarterly compliance report preparation from 3 weeks to 1 hour'
      ],
      techStack: ['Big Data Architecture', 'PostGIS / GeoServer', 'REST APIs', 'Vue.js', 'Python / ETL', 'Scrum Governance'],
      metrics: [
        { label: 'Data Sources Connected', value: '50+' },
        { label: 'Query Performance', value: '< 250ms' },
        { label: 'User Agencies', value: '18 Min.' },
        { label: 'Spatial Layers', value: '120+' }
      ]
    },
    {
      id: 'automotive-showroom',
      title: 'Automotive Brand Website & Digital Showroom',
      category: 'ecommerce',
      categoryLabel: 'Automotive & E-Commerce',
      badgeColor: 'bg-sky-300 text-slate-950 font-bold',
      subtitle: '3D Interactive Vehicle Configurator & Nationwide Dealer Booking Engine',
      icon: 'car',
      gradient: 'from-sky-400/20 via-slate-800 to-slate-900',
      impact: '+215% Digital Test-Drive Booking Volume',
      role: 'IT Project Manager & E-Commerce Consultant',
      sprintDuration: '10 Sprints (5 Months)',
      description: 'Spearheaded the digital transformation for a premier automotive brand, building an immersive web showroom with 360-degree vehicle customization, instant loan calculators, and automated test-drive scheduling integrated into dealer CRMs.',
      deliverables: [
        'Interactive 360° WebGL vehicle visualizer & custom accessory builder',
        'Real-time inventory lookup connected to 85+ nationwide dealership databases',
        'Financing calculator API integration with leading automotive lender APIs',
        'Automated lead routing system redirecting customer inquiries within 30 seconds'
      ],
      techStack: ['WebGL / Three.js', 'React', 'Node.js API', 'Salesforce CRM API', 'Tailwind CSS', 'Agile Sprints'],
      metrics: [
        { label: 'Test-Drive Leads', value: '+215%' },
        { label: 'Showroom Dwell Time', value: '4m 12s' },
        { label: 'Dealer Network', value: '85 Outlets' },
        { label: 'Mobile Traffic', value: '78%' }
      ]
    },
    {
      id: 'ovp-kemendesa',
      title: 'OVP Kemendesa (One Village One Product)',
      category: 'enterprise',
      categoryLabel: 'Public Sector Platform',
      badgeColor: 'bg-purple-300 text-slate-950 font-bold',
      subtitle: 'National Rural Economy Ecosystem & Product Catalog Portal',
      icon: 'building-2',
      gradient: 'from-purple-400/20 via-slate-800 to-slate-900',
      impact: 'Digitized Products Across 70,000+ Villages',
      role: 'Project Manager & Stakeholder Manager',
      sprintDuration: '14 Sprints (7 Months)',
      description: 'Managed the delivery of the OVP Kemendesa platform designed to empower village enterprises (BUMDes) to catalog, market, and distribute local products nationally. Coordinated government ministry guidelines with technical vendor execution.',
      deliverables: [
        'Multi-tenant rural economy platform supporting tens of thousands of local enterprise profiles',
        'Simplified mobile-friendly onboarding wizard for non-tech village admins',
        'National supply chain directory & logistics integration endpoints',
        'Public transparency dashboard tracking village product revenue growth'
      ],
      techStack: ['Laravel / PHP', 'MySQL Cluster', 'Elasticsearch', 'Tailwind CSS', 'Agile Delivery'],
      metrics: [
        { label: 'Villages Onboarded', value: '70,000+' },
        { label: 'Cataloged Products', value: '180,000+' },
        { label: 'Platform Uptime', value: '99.9%' },
        { label: 'Mobile Readiness', value: '100%' }
      ]
    },
    {
      id: 'simuh-systems',
      title: 'SIMUH Hibah & SIMUH Penghapusan',
      category: 'apps',
      categoryLabel: 'Asset & Grant Systems',
      badgeColor: 'bg-pink-300 text-slate-950 font-bold',
      subtitle: 'Enterprise Grant Allocation & Asset Lifecycle Disposal Information System',
      icon: 'file-text',
      gradient: 'from-pink-400/20 via-slate-800 to-slate-900',
      impact: '100% Paperless Grant & Asset Decommissioning Audits',
      role: 'IT PM & Business Process Analyst',
      sprintDuration: '12 Sprints (6 Months)',
      description: 'Designed and implemented dual enterprise workflow systems for government grant distribution (SIMUH Hibah) and official state asset disposal/decommissioning (SIMUH Penghapusan) adhering to strict audit trails.',
      deliverables: [
        'Multi-stage approval workflow engine with cryptographic digital signature support',
        'Automated financial grant reconciliation matrix and risk scoring algorithms',
        'Asset depreciation calculator and automated write-off compliance generator',
        'Complete audit trail logging for state auditor verification (BPK compliance)'
      ],
      techStack: ['Enterprise Java / Spring', 'PostgreSQL', 'Digital Signatures (BSRE)', 'Vue.js', 'Audit Logging'],
      metrics: [
        { label: 'Grant Volume Processed', value: '$45M+' },
        { label: 'Processing Time', value: '-65%' },
        { label: 'Audit Accuracy', value: '100%' },
        { label: 'Digital Signatures', value: '15,000+' }
      ]
    },
    {
      id: 'hyperlocal-dealer',
      title: 'Hyperlocal Dealer System Website',
      category: 'ecommerce',
      categoryLabel: 'Retail & Dealer Tech',
      badgeColor: 'bg-orange-300 text-slate-950 font-bold',
      subtitle: 'Multi-Location Geo-Targeted Dealer Portal & Stock Distribution Web Engine',
      icon: 'store',
      gradient: 'from-orange-400/20 via-slate-800 to-slate-900',
      impact: 'Automated 120+ Dealer Web Portals into One Platform',
      role: 'Project Manager & Product Owner',
      sprintDuration: '8 Sprints (4 Months)',
      description: 'Directed the engineering of a hyperlocal franchise platform that dynamically generates location-specific web experiences, stock availability, and promotional landing pages for over 120 regional retail partners.',
      deliverables: [
        'Dynamic sub-domain routing & automatic geo-IP visitor redirection',
        'Centralized admin panel allowing master brand to sync product updates to 120+ micro-sites',
        'Local store inventory lookup & click-and-collect reservation module',
        'Localized WhatsApp business API integration for instant sales agent messaging'
      ],
      techStack: ['Node.js Multi-Tenant', 'React', 'MongoDB', 'Geo-IP API', 'WhatsApp API', 'Sprint Planning'],
      metrics: [
        { label: 'Dealer Outlets', value: '120+' },
        { label: 'Local Leads', value: '+310%' },
        { label: 'Sync Time', value: 'Instant' },
        { label: 'Setup Time / Outlet', value: '5 Mins' }
      ]
    },
    {
      id: 'ecommerce-company-profiles',
      title: 'E-Commerce & Custom Company Profiles',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce & Corporate',
      badgeColor: 'bg-lime-300 text-slate-950 font-bold',
      subtitle: 'High-Impact Brand Identities, Modern Storefronts & Headless E-Commerce',
      icon: 'shopping-bag',
      gradient: 'from-lime-400/20 via-slate-800 to-slate-900',
      impact: 'Delivered 25+ Bespoke Corporate & E-Commerce Web Platforms',
      role: 'Website Specialist & Project Director',
      sprintDuration: 'Continuous Sprints',
      description: 'Supervised the strategy, wireframing, frontend engineering, and payment gateway deployment for a suite of custom corporate websites and high-converting e-commerce web stores across retail, FMCG, and tech sectors.',
      deliverables: [
        'Tailor-made headless e-commerce architectures integrated with payment gateways (Midtrans, Xendit)',
        'Apple-style minimalist aesthetic designs with high-converting mobile checkouts',
        'SEO strategy execution achieving 1st-page Google rankings for core client keywords',
        'Automated inventory synchronization across web storefronts and warehouse POS systems'
      ],
      techStack: ['Shopify Headless', 'WooCommerce', 'React / Next.js', 'Payment APIs', 'Tailwind CSS', 'SEO Optimization'],
      metrics: [
        { label: 'Sites Delivered', value: '25+' },
        { label: 'Avg Mobile Speed', value: '95/100' },
        { label: 'Checkout Abandonment', value: '-28%' },
        { label: 'Client Retention', value: '98%' }
      ]
    },
    {
      id: 'event-registration-system',
      title: 'Event Registration Systems & Microsites',
      category: 'microsites',
      categoryLabel: 'High-Traffic Event Tech',
      badgeColor: 'bg-rose-300 text-slate-950 font-bold',
      subtitle: 'High-Concurrency Registration Portals, QR Check-in & Dynamic Badging',
      icon: 'ticket',
      gradient: 'from-rose-400/20 via-slate-800 to-slate-900',
      impact: 'Zero Downtime During 50,000+ Concurrent Ticket Drops',
      role: 'IT PM & Infrastructure Lead',
      sprintDuration: '6 Sprints (3 Months)',
      description: 'Engineered high-concurrency event registration landing pages and microsites for major international summits, concerts, and corporate expos. Implemented virtual waiting rooms and instant QR badge generation.',
      deliverables: [
        'Autoscaling cloud infrastructure capable of handling 50k+ simultaneous concurrent visitors',
        'Instant QR-code ticket delivery via Email & WhatsApp with secure validation hashes',
        'On-site fast-track check-in web application scanner integration',
        'Dynamic ticket tiering, promo code validation, and VIP seat reservation matrix'
      ],
      techStack: ['AWS Autoscaling', 'Redis Queue', 'Node.js', 'QR Code Generator API', 'Stress Testing'],
      metrics: [
        { label: 'Concurrent Capacity', value: '50k Visitors' },
        { label: 'Check-In Speed', value: '1.8s / Guest' },
        { label: 'Platform Uptime', value: '100%' },
        { label: 'Tickets Issued', value: '350,000+' }
      ]
    },
    {
      id: 'service-car-apps',
      title: 'Service Car Apps & Fleet Management',
      category: 'apps',
      categoryLabel: 'Mobility & Web App',
      badgeColor: 'bg-indigo-300 text-slate-950 font-bold',
      subtitle: 'On-Demand Automotive Mobile Maintenance & Dispatch System',
      icon: 'wrench',
      gradient: 'from-indigo-400/20 via-slate-800 to-slate-900',
      impact: 'Reduced Service Mechanics Dispatch Lead Time by 50%',
      role: 'Technical PM & Product Owner',
      sprintDuration: '10 Sprints (5 Months)',
      description: 'Directed the product development for an on-demand mobile service application enabling car owners to request emergency roadside assistance and schedule home car maintenance with real-time GPS mechanic tracking.',
      deliverables: [
        'Customer mobile web app, mechanic dispatch app, and central admin control tower',
        'Real-time GPS tracking map overlay showing mechanic ETA and route optimization',
        'Automated service invoice generation & mobile payment gateway integration',
        'Customer rating, photo proof-of-work upload, and digital warranty passport'
      ],
      techStack: ['PWA / React Native', 'Google Maps API', 'Firebase Realtime DB', 'Node.js', 'Scrum / Kanban'],
      metrics: [
        { label: 'Dispatch Lead Time', value: '-50%' },
        { label: 'Customer CSAT', value: '4.9 / 5.0' },
        { label: 'Completed Jobs', value: '40,000+' },
        { label: 'Mechanics Active', value: '250+' }
      ]
    },
    {
      id: 'document-digitization',
      title: 'Document Digitization System & OCR Portal',
      category: 'apps',
      categoryLabel: 'Enterprise System & OCR',
      badgeColor: 'bg-teal-300 text-slate-950 font-bold',
      subtitle: 'AI-Powered OCR Archiving, Automated Categorization & Metadata Search',
      icon: 'file-search',
      gradient: 'from-teal-400/20 via-slate-800 to-slate-900',
      impact: 'Digitized & Indexed 2.5 Million Historical Records',
      role: 'IT PM & AI Solutions Lead',
      sprintDuration: '12 Sprints (6 Months)',
      description: 'Managed the implementation of an enterprise document digitization platform equipped with Optical Character Recognition (OCR), automated metadata extraction, and sub-second full-text document search.',
      deliverables: [
        'High-throughput batch document ingestion pipeline processing 20,000 documents/day',
        'Custom Tesseract OCR neural network trained on specialized legal & administrative typography',
        'Elasticsearch full-text search engine indexing PDF text, handwritten signatures & stamps',
        'Watermarking, redaction engine, and Granular Permission Matrix for Sensitive Records'
      ],
      techStack: ['OCR / Python Neural Net', 'Elasticsearch', 'React Enterprise UI', 'Spring Boot', 'Docker'],
      metrics: [
        { label: 'Documents Processed', value: '2.5M+' },
        { label: 'OCR Accuracy', value: '98.4%' },
        { label: 'Search Latency', value: '< 150ms' },
        { label: 'Storage Saved', value: '60%' }
      ]
    },
    {
      id: 'random-number-generator',
      title: 'Random Number Generator Utility',
      category: 'apps',
      categoryLabel: 'Web Utility & Algorithmic Tool',
      badgeColor: 'bg-amber-300 text-slate-950 font-bold',
      subtitle: 'Cryptographically Secure Randomization & Draw Audit System',
      icon: 'hash',
      gradient: 'from-amber-400/20 via-slate-800 to-slate-900',
      impact: '100% Auditable Random Selection for High-Stakes Giveaways',
      role: 'Web Specialist & Developer Lead',
      sprintDuration: '4 Sprints (2 Months)',
      description: 'Built a web-based cryptographically secure Random Number Generator (RNG) and live drawing utility used for official lottery draws, corporate raffles, and transparent random distribution algorithms.',
      deliverables: [
        'Web Crypto API implementation delivering un-biased, provably fair pseudorandom distribution',
        'Live presentation mode with customizable particle animations and full-screen visualizer',
        'SHA-256 seed hashing & downloadable audit logs verifying draw integrity',
        'Zero external dependencies lightweight architecture for instant web load (< 50ms)'
      ],
      techStack: ['Web Crypto API', 'Vanilla JS ES6+', 'HTML5 Canvas', 'CSS Animations', 'Audit Hash Verification'],
      metrics: [
        { label: 'Crypto Entropy', value: '256-Bit' },
        { label: 'Draw Speed', value: '60 FPS' },
        { label: 'Audit Integrity', value: '100%' },
        { label: 'Asset Size', value: '< 45 KB' }
      ]
    },
    {
      id: 'videotron-microsite',
      title: 'Microsite Company Profile for Videotron',
      category: 'microsites',
      categoryLabel: 'Digital Out-of-Home & Media',
      badgeColor: 'bg-violet-300 text-slate-950 font-bold',
      subtitle: 'Interactive Screen Showcase, Media Rate Calculator & Digital Map',
      icon: 'tv',
      gradient: 'from-violet-400/20 via-slate-800 to-slate-900',
      impact: '+180% Inquiries for Digital Billboard Space',
      role: 'Web Specialist & Project Manager',
      sprintDuration: '6 Sprints (3 Months)',
      description: 'Designed and deployed a high-impact corporate microsite showcasing prime outdoor digital billboard (videotron) locations, real-time LED specs, foot-traffic analytics, and instant media rate estimation.',
      deliverables: [
        'Interactive GIS location map showing real-time videotron availability & daily traffic impressions',
        'Dynamic rate calculator letting advertisers build custom campaign packages and download quotes',
        'High-definition video preview gallery illustrating day/night billboard ad rendering',
        'Instant sales rep dispatch connection via automated lead notification pipeline'
      ],
      techStack: ['Mapbox GL JS', 'Next.js', 'Tailwind CSS', 'Video Stream Optimization', 'Agile Governance'],
      metrics: [
        { label: 'Billboard Inquiries', value: '+180%' },
        { label: 'Map Locations', value: '45 Points' },
        { label: 'Instant Quotes', value: '3,200+' },
        { label: 'Page Speed', value: '98/100' }
      ]
  ]
};

// --- SUPABASE CONFIGURATION ---
const SUPABASE_URL = 'https://noolviiyooqtehvpygqm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vb2x2aWl5b29xdGVodnB5Z3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNTAwNDQsImV4cCI6MjEwNTcyNjA0NH0.ydJggUjGQu3PgMnLAheRqDWl2_8tpN2HXUWOHghl1LY';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Deep Merge Helper to guarantee no null/undefined properties
async function getActivePortfolioData() {
  let merged = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));

  try {
    // 1. Fetch from Supabase directly
    const { data, error } = await supabase.from('cms_state').select('data').eq('id', 1).single();
    if (error && error.code !== 'PGRST116') {
      console.error('Supabase fetch error:', error);
    }
    
    // 2. If data exists, merge it over the default
    if (data && data.data && typeof data.data === 'object') {
      const p = data.data;
      if (p.profile)    merged.profile    = Object.assign({}, merged.profile,  p.profile);
      if (p.hero)       merged.hero       = Object.assign({}, merged.hero,      p.hero);
      if (p.about)      merged.about      = Object.assign({}, merged.about,     p.about);
      if (p.workflow    && Array.isArray(p.workflow)    && p.workflow.length    > 0) merged.workflow    = p.workflow;
      if (p.navigation  && Array.isArray(p.navigation)  && p.navigation.length  > 0) merged.navigation  = p.navigation;
      if (p.footer)     merged.footer     = Object.assign({}, merged.footer,    p.footer);
      if (p.contact)    merged.contact    = Object.assign({}, merged.contact,   p.contact);
      if (p.projects    && Array.isArray(p.projects)    && p.projects.length    > 0) merged.projects    = p.projects;
      
      // Cache it
      localStorage.setItem('portfolio_cms_content', JSON.stringify(merged));
      return merged;
    }
  } catch (e) {
    console.error('Failed to load from Supabase, trying localStorage', e);
  }

  // Fallback: localStorage
  const saved = localStorage.getItem('portfolio_cms_content');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        if (parsed.profile) merged.profile = Object.assign({}, merged.profile, parsed.profile);
        if (parsed.hero) merged.hero = Object.assign({}, merged.hero, parsed.hero);
        if (parsed.about) merged.about = Object.assign({}, merged.about, parsed.about);
        if (parsed.workflow && Array.isArray(parsed.workflow) && parsed.workflow.length > 0) merged.workflow = parsed.workflow;
        if (parsed.navigation && Array.isArray(parsed.navigation) && parsed.navigation.length > 0) merged.navigation = parsed.navigation;
        if (parsed.footer) merged.footer = Object.assign({}, merged.footer, parsed.footer);
        if (parsed.contact) merged.contact = Object.assign({}, merged.contact, parsed.contact);
        if (parsed.projects && Array.isArray(parsed.projects) && parsed.projects.length > 0) merged.projects = parsed.projects;
      }
    } catch (e) { console.error(e); }
  }
  return merged;
}

/* ── Accent Color Info Extractor for Light & Dark Modes ──────────────────── */
const ACCENT_COLOR_MAP = {
  'amber':   { bright: '#fbbf24', dark: '#92400e', lightBg: '#fef3c7' },
  'emerald': { bright: '#34d399', dark: '#047857', lightBg: '#d1fae5' },
  'sky':     { bright: '#38bdf8', dark: '#0369a1', lightBg: '#e0f2fe' },
  'purple':  { bright: '#c084fc', dark: '#6b21a8', lightBg: '#f3e8ff' },
  'pink':    { bright: '#f472b6', dark: '#9d174d', lightBg: '#fce7f3' },
  'orange':  { bright: '#fb923c', dark: '#c2410c', lightBg: '#ffedd5' },
  'lime':    { bright: '#a3e635', dark: '#3f6212', lightBg: '#ecfccb' },
  'rose':    { bright: '#fb7185', dark: '#be123c', lightBg: '#ffe4e6' },
  'indigo':  { bright: '#818cf8', dark: '#3730a3', lightBg: '#e0e7ff' },
  'teal':    { bright: '#2dd4bf', dark: '#0f766e', lightBg: '#ccfbf1' },
  'violet':  { bright: '#a78bfa', dark: '#5b21b6', lightBg: '#ede9fe' },
  'cyan':    { bright: '#22d3ee', dark: '#0e7490', lightBg: '#cffaff' },
  'red':     { bright: '#f87171', dark: '#b91c1c', lightBg: '#fee2e2' },
  'yellow':  { bright: '#facc15', dark: '#854d0e', lightBg: '#fef9c3' },
  'fuchsia': { bright: '#e879f9', dark: '#86198f', lightBg: '#fae8ff' },
};

function getAccentInfo(gradientClass) {
  const fallback = { bright: '#fbbf24', dark: '#92400e', lightBg: '#fef3c7' };
  if (!gradientClass) return fallback;
  for (const [name, info] of Object.entries(ACCENT_COLOR_MAP)) {
    if (gradientClass.includes(`from-${name}`)) return info;
  }
  return fallback;
}

let activeData = null;
let PROJECTS_DATA = null;

async function initPortfolioApp() {
  activeData = await getActivePortfolioData();
  PROJECTS_DATA = activeData.projects || DEFAULT_PORTFOLIO_DATA.projects;

  try {
    applyCmsOverrides(activeData);
  } catch (err) {
    console.warn("CMS overrides applied with fallback:", err);
  }

  try {
    initScrollReveals();
    initScrollSpy();
    renderCanvasProjectCards(PROJECTS_DATA);
    initProjectFilters();
    initThemeToggle();
    initMobileMenu();
    initCopyEmail();
    initSprintEstimatorWidget();
  } catch (err) {
    console.error("Initialization error:", err);
  }

  // Isolated — always runs so leads are always captured
  try {
    initContactForm();
  } catch (err) {
    console.error("Contact form init error:", err);
  }
}

/* Crash-Proof CMS State Overrides */
function applyCmsOverrides(data) {
  if (!data) return;

  // 0. Profile Name & Logo Overrides
  if (data.profile && data.profile.name) {
    const ownerName = data.profile.name;
    const titleTag = data.profile.titleTag || 'IT PM & Web Specialist';

    document.title = `${ownerName} | IT Project Manager & Website Specialist`;

    const logoNameEl = document.getElementById('header-logo-name');
    if (logoNameEl) logoNameEl.textContent = ownerName;

    const logoTagEl = document.getElementById('header-logo-tagline');
    if (logoTagEl) logoTagEl.textContent = `✦ ${titleTag}`;

    const initialsBadgeEl = document.getElementById('header-logo-initials');
    if (initialsBadgeEl) {
      const initials = ownerName.trim().split(/\s+/).map(n => n[0]).join('').substring(0, 2).toUpperCase();
      initialsBadgeEl.textContent = initials || 'AR';
    }

    const heroHandwrittenEl = document.getElementById('hero-handwritten-intro');
    if (heroHandwrittenEl) {
      heroHandwrittenEl.textContent = `✦ my name is ${ownerName} ✏️`;
    }

    const footerEl = document.getElementById('footer-copyright');
    if (footerEl) {
      if (data.footer && data.footer.copyright) {
        footerEl.textContent = data.footer.copyright;
      } else {
        footerEl.textContent = `© 2026 ${ownerName} · IT Project Manager & Website Specialist. Made with ✦`;
      }
    }
  }

  // 0.5 Navigation Menu Overrides (CRUD Support)
  const navItems = (data.navigation && Array.isArray(data.navigation) && data.navigation.length > 0)
    ? data.navigation
    : DEFAULT_PORTFOLIO_DATA.navigation;

  if (navItems) {
    const desktopNav = document.getElementById('desktop-nav');
    if (desktopNav) {
      desktopNav.innerHTML = navItems
        .filter(item => item.visible !== false)
        .map(item => `
          <a href="${item.url}" target="${item.target || '_self'}" class="nav-link">
            ${item.label}
          </a>
        `).join('');
    }

    const mobileDrawer = document.getElementById('mobile-menu-drawer');
    if (mobileDrawer) {
      mobileDrawer.innerHTML = navItems
        .filter(item => item.visible !== false)
        .map(item => {
          const isContact = item.url === '#contact' || (item.label && item.label.toLowerCase().includes('contact'));
          return `
            <a href="${item.url}" target="${item.target || '_self'}" class="block ${isContact ? 'text-amber-300' : 'text-slate-200 hover:text-amber-300'}">
              ${item.label}
            </a>
          `;
        }).join('');
    }
  }

  // 1. Hero Overrides
  if (data.hero) {
    const badgeEl = document.querySelector('#home .text-[11px]');
    if (badgeEl && data.hero.statusBadge) {
      badgeEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> ${data.hero.statusBadge}`;
    }

    const headlineEl = document.querySelector('#home h1');
    if (headlineEl && data.hero.headline) {
      const textToHighlight = data.hero.markerHighlight || 'High-Performing Web Solutions.';
      if (data.hero.headline.includes(textToHighlight)) {
        const parts = data.hero.headline.split(textToHighlight);
        headlineEl.innerHTML = `${parts[0]} <span class="marker-highlight text-amber-300">${textToHighlight}</span> ${parts[1] || ''}`;
      } else {
        headlineEl.innerHTML = `<span class="marker-highlight text-amber-300">${data.hero.headline}</span>`;
      }
    }

    const subheadEl = document.querySelector('#home p');
    if (subheadEl && data.hero.subheadline) {
      subheadEl.textContent = data.hero.subheadline;
    }
  }

  // 2. About & Skills Overrides
  if (data.about) {
    const aboutTitleEl = document.querySelector('#about h2');
    if (aboutTitleEl && data.about.title) aboutTitleEl.textContent = data.about.title;

    const paragraphs = document.querySelectorAll('#about p');
    if (paragraphs.length >= 1 && data.about.paragraph1) paragraphs[0].textContent = data.about.paragraph1;
    if (paragraphs.length >= 2 && data.about.paragraph2) paragraphs[1].textContent = data.about.paragraph2;

    const skillsGrid = document.querySelector('#about .grid');
    if (skillsGrid && data.about.skills && data.about.skills.length > 0) {
      skillsGrid.innerHTML = data.about.skills.map(s => `
        <div class="sticky-note ${s.color || 'sticky-yellow'} p-4 rounded-2xl transform -rotate-1">
          <div class="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">${s.category || 'Skill'}</div>
          <div class="text-sm font-extrabold font-heading">${s.name}</div>
        </div>
      `).join('');
    }
  }

  // 3. Workflow Overrides
  if (data.workflow && data.workflow.length >= 5) {
    const wfCards = document.querySelectorAll('#workflow .canvas-card');
    wfCards.forEach((card, idx) => {
      if (data.workflow[idx]) {
        const titleEl = card.querySelector('h4');
        const descEl = card.querySelector('p');
        if (titleEl) titleEl.textContent = data.workflow[idx].title;
        if (descEl) descEl.textContent = data.workflow[idx].desc;
      }
    });
  }

  // 4. Contact Overrides
  if (data.contact) {
    const cHead = document.querySelector('#contact h2');
    if (cHead && data.contact.headline) cHead.textContent = data.contact.headline;

    const cSub = document.querySelector('#contact p');
    if (cSub && data.contact.subheadline) cSub.textContent = data.contact.subheadline;

    const cMail = document.querySelector('#contact a[href^="mailto:"]');
    if (cMail && data.contact.email) {
      cMail.setAttribute('href', `mailto:${data.contact.email}`);
    }
  }
}

/* Scroll Reveals */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.fade-up-element');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

/* Scroll Spy for Navigation */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.1, rootMargin: "-20% 0px -40% 0px" });

  sections.forEach(section => observer.observe(section));
}

/* Render Scrapbook Canvas Cards */
function renderCanvasProjectCards(projects) {
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  if (!projects || projects.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 font-handwritten text-2xl">
        No projects match the selected filter category ✏️
      </div>
    `;
    return;
  }

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';

  projects.forEach((proj, idx) => {
    const card = document.createElement('div');
    card.className = `canvas-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer fade-up-element is-visible relative`;

    const iconSvg = getIconSvg(proj.icon);
    const accentInfo = getAccentInfo(proj.gradient);

    // Color definitions based on active theme
    const headerBg = `linear-gradient(135deg, ${accentInfo.bright}35 0%, #1e293b 55%, #0f172a 100%)`;
    const headerBorder = isLight ? '#cbd5e1' : '#334155';
    const impactColor = isLight ? 'rgb(255 255 255 / var(--tw-text-opacity, 1))' : accentInfo.bright;
    const impactShadow = '0 1px 3px rgba(0,0,0,0.5)';
    const titleColor = isLight ? 'rgb(252 211 77 / var(--tw-text-opacity, 1))' : '#f8fafc';
    
    const iconBg = isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.85)';
    const iconBorder = isLight ? '#0f172a' : '#334155';
    const iconColor = isLight ? '#0f172a' : '#f8fafc';

    card.innerHTML = `
      <!-- Corner Tape Strip Effect -->
      <div class="tape-strip"></div>

      <!-- Card Header Frame Visual (adaptive gradient) -->
      <div class="relative h-44 w-full p-6 flex flex-col justify-between border-b-2"
           style="background: ${headerBg}; border-color: ${headerBorder};">
        <div class="flex items-center justify-between z-10">
          <span class="px-3 py-1 text-xs font-bold rounded-lg ${proj.badgeColor || 'bg-amber-300 text-slate-950 font-bold'} shadow-sm">
            ${proj.categoryLabel || 'Technical Deliverable'}
          </span>
          <div class="w-9 h-9 rounded-xl border-2 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-slate-950 transition-all duration-300"
               style="background: ${iconBg}; border-color: ${iconBorder}; color: ${iconColor};">
            ${iconSvg}
          </div>
        </div>

        <div class="z-10 mt-auto">
          <span class="text-xs font-bold font-handwritten text-lg block card-impact-text"
                style="color: ${impactColor}; text-shadow: ${impactShadow};">
            ✦ ${proj.impact || 'High Value Deliverable'}
          </span>
          <h3 class="text-lg font-extrabold line-clamp-1 font-heading group-hover:text-white transition-colors"
              style="color: ${titleColor};">
            ${proj.title}
          </h3>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <p class="text-sm line-clamp-2 leading-relaxed" style="color: var(--text-muted);">
          ${proj.subtitle || ''}
        </p>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${(proj.techStack || []).slice(0, 4).map(tech => `
            <span class="px-2.5 py-1 text-xs font-semibold rounded-md border"
                  style="background: var(--bg-card-hover); color: var(--text-muted); border-color: var(--border-color);">
              ${tech}
            </span>
          `).join('')}
          ${(proj.techStack || []).length > 4 ? `
            <span class="px-2 py-1 text-xs font-medium rounded-md" style="color: var(--text-muted);">
              +${proj.techStack.length - 4}
            </span>
          ` : ''}
        </div>

        <!-- Action Bar -->
        <div class="pt-4 border-t-2 flex items-center justify-between text-xs font-bold group-hover:opacity-85 transition-opacity"
             style="border-color: var(--border-color); color: ${impactColor};">
          <span class="font-handwritten text-base">inspect case study ➔</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openProjectModal(proj));
    gridContainer.appendChild(card);
  });
}

/* Category Filter Tabs */
function initProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');
      if (filterValue === 'all') {
        renderCanvasProjectCards(PROJECTS_DATA);
      } else {
        const filtered = (PROJECTS_DATA || []).filter(p => p.category === filterValue);
        renderCanvasProjectCards(filtered);
      }
    });
  });
}

/* Modal Controller */
function openProjectModal(project) {
  const modalBackdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modalBackdrop || !modalBody) return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const iconSvg = getIconSvg(project.icon);
  const accentInfo = getAccentInfo(project.gradient);

  const headerBg = isLight
    ? `linear-gradient(135deg, ${accentInfo.lightBg} 0%, #f1f5f9 60%, #e2e8f0 100%)`
    : `linear-gradient(135deg, ${accentInfo.bright}35 0%, #1e293b 55%, #0f172a 100%)`;
  
  const headerBorder = isLight ? '#cbd5e1' : '#334155';
  const titleColor = isLight ? '#0f172a' : '#f8fafc';
  const subtitleColor = isLight ? '#475569' : '#94a3b8';
  
  const iconBg = isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.85)';
  const iconBorder = isLight ? '#0f172a' : '#334155';
  const iconColor = isLight ? '#0f172a' : '#f8fafc';

  modalBody.innerHTML = `
    <!-- Modal Header Banner (adaptive gradient) -->
    <div class="relative p-8 border-b-2"
         style="background: ${headerBg}; border-color: ${headerBorder};">
      <button id="close-modal-btn" class="absolute top-4 right-4 w-9 h-9 rounded-xl border-2 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors"
              style="background: ${iconBg}; border-color: ${iconBorder}; color: ${iconColor};">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="flex items-center gap-3 mb-3">
        <span class="px-3 py-1 text-xs font-bold rounded-lg ${project.badgeColor || 'bg-amber-300 text-slate-950'}">
          ${project.categoryLabel || 'Project'}
        </span>
        <span class="text-xs font-handwritten text-base" style="color: ${subtitleColor};">✦ Sprint: ${project.sprintDuration || 'Agile'}</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-extrabold mb-2 font-heading" style="color: ${titleColor};">
        ${project.title}
      </h2>
      <p class="text-sm max-w-2xl" style="color: ${subtitleColor};">
        ${project.subtitle || ''}
      </p>
    </div>

    <!-- Modal Content Body -->
    <div class="p-8 space-y-8" style="background: var(--bg-card); color: var(--text-main);">
      <!-- Role & Overview Card -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl border-2 shadow-offset" style="background: var(--bg-card-hover); border-color: var(--border-color);">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider block mb-1" style="color: var(--text-muted);">PM Role</span>
          <span class="text-sm font-bold text-amber-300">${project.role || 'Lead PM'}</span>
        </div>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider block mb-1" style="color: var(--text-muted);">Primary Impact</span>
          <span class="text-sm font-bold text-sky-300">${project.impact || 'High Impact'}</span>
        </div>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider block mb-1" style="color: var(--text-muted);">Methodology</span>
          <span class="text-sm font-bold text-emerald-300">Agile Scrum Governance</span>
        </div>
      </div>

      <!-- Executive Scope -->
      <div>
        <h4 class="text-base font-bold mb-2 font-heading flex items-center gap-2" style="color: var(--text-main);">
          <span class="text-amber-400 font-handwritten text-xl">✦</span>
          Executive Scope & Strategy
        </h4>
        <p class="text-sm leading-relaxed" style="color: var(--text-muted);">
          ${project.description || ''}
        </p>
      </div>

      <!-- Measurable Outcomes -->
      <div>
        <h4 class="text-base font-bold mb-3 font-heading" style="color: var(--text-main);">Key Outcome Metrics</h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${(project.metrics || []).map(m => `
            <div class="p-3.5 rounded-xl border-2 text-center shadow-offset" style="background: var(--bg-card-hover); border-color: var(--border-color);">
              <div class="text-xl font-extrabold text-amber-300 font-heading">${m.value}</div>
              <div class="text-xs mt-1" style="color: var(--text-muted);">${m.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Deliverables List -->
      <div>
        <h4 class="text-base font-bold mb-3 font-heading" style="color: var(--text-main);">Key Technical &amp; Governance Deliverables</h4>
        <ul class="space-y-2.5 text-sm" style="color: var(--text-muted);">
          ${(project.deliverables || []).map(item => `
            <li class="flex items-start gap-2.5">
              <span class="text-emerald-400 font-bold text-base mt-0.5">✔</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tech Badges -->
      <div>
        <h4 class="text-base font-bold mb-3 font-heading" style="color: var(--text-main);">Governance &amp; Tech Stack</h4>
        <div class="flex flex-wrap gap-2">
          ${(project.techStack || []).map(t => `
            <span class="px-3 py-1.5 text-xs font-bold rounded-lg border-2" style="background: var(--bg-card-hover); color: var(--text-main); border-color: var(--border-color);">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('close-modal-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalBackdrop.onclick = (e) => {
    if (e.target === modalBackdrop) closeModal();
  };
}

function closeModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* Theme Toggle */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);

    const activeFilterBtn = document.querySelector('.filter-tab.active');
    const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    if (activeFilter === 'all') {
      renderCanvasProjectCards(PROJECTS_DATA);
    } else {
      const filtered = (PROJECTS_DATA || []).filter(p => p.category === activeFilter);
      renderCanvasProjectCards(filtered);
    }
  });
}

function updateThemeIcon(theme) {
  const iconContainer = document.getElementById('theme-toggle-icon');
  if (!iconContainer) return;

  if (theme === 'light') {
    iconContainer.innerHTML = `
      <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    `;
  } else {
    iconContainer.innerHTML = `
      <svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
    `;
  }
}

/* Mobile Nav Drawer */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  if (!menuBtn || !menuDrawer) return;

  menuBtn.addEventListener('click', () => {
    menuDrawer.classList.toggle('hidden');
  });

  menuDrawer.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menuDrawer.classList.add('hidden');
    }
  });
}

/* Copy Email Toast */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = activeData.contact ? activeData.contact.email : 'alex.rivera.itpm@example.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email address copied to clipboard! ✦');
    }).catch(err => {
      showToast(`Copied: ${email}`);
    });
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-50 bg-amber-400 text-slate-950 font-extrabold px-5 py-3 rounded-2xl shadow-offset border-2 border-slate-950 font-heading text-sm';
  toast.innerHTML = `✨ ${message}`;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* Contact Form — Save as Lead to localStorage */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    const lead = {
      id: 'lead-' + Date.now(),
      name: (nameInput && nameInput.value) || 'Anonymous',
      email: (emailInput && emailInput.value) || '',
      message: (messageInput && messageInput.value) || '',
      status: 'new',
      submittedAt: new Date().toISOString()
    };

    // Load existing leads, append, and save
    let leads = [];
    try {
      const saved = localStorage.getItem('portfolio_leads');
      if (saved) leads = JSON.parse(saved);
      if (!Array.isArray(leads)) leads = [];
    } catch (err) { leads = []; }

    leads.unshift(lead); // newest first
    localStorage.setItem('portfolio_leads', JSON.stringify(leads));

    showToast('Message sent! I read every single message ✦');
    form.reset();
  });
}

// Ensure the app initializes even if loaded dynamically after DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}

/* PM Sprint Risk Calculator Playground Widget */
function initSprintEstimatorWidget() {
  const teamSizeInput = document.getElementById('team-size-input');
  const scopeComplexityInput = document.getElementById('scope-complexity-input');
  const calcResultDisplay = document.getElementById('calc-result-display');
  if (!teamSizeInput || !scopeComplexityInput || !calcResultDisplay) return;

  function recalculate() {
    const teamSize = parseInt(teamSizeInput.value) || 6;
    const complexity = parseInt(scopeComplexityInput.value) || 3;
    
    const estimatedWeeks = Math.max(2, Math.ceil((complexity * 4) / (teamSize * 0.8)));
    const riskFactor = complexity > 4 ? 'High (Requires UAT Hardening)' : complexity > 2 ? 'Medium' : 'Low';
    const riskColor = complexity > 4 ? 'text-rose-400' : complexity > 2 ? 'text-amber-300' : 'text-emerald-400';

    calcResultDisplay.innerHTML = `
      <div class="space-y-2">
        <div class="text-3xl font-extrabold text-white font-heading">${estimatedWeeks} Weeks (${estimatedWeeks / 2} Sprints)</div>
        <div class="text-xs font-bold ${riskColor}">Risk Grade: ${riskFactor}</div>
      </div>
    `;
  }

  teamSizeInput.addEventListener('input', recalculate);
  scopeComplexityInput.addEventListener('change', recalculate);
}

/* Icon Helper */
function getIconSvg(iconName) {
  const icons = {
    'landmark': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"></path></svg>`,
    'database': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>`,
    'car': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1v2m4-2a1 1 0 011 1h1a1 1 0 001-1V9a1 1 0 00-1-1h-2.5a1 1 0 00-.8.4l-1.9 2.6H13"></path></svg>`,
    'building-2': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V7m0 0h4m-4 0H9"></path></svg>`,
    'file-text': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
    'store': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
    'shopping-bag': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>`,
    'ticket': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>`,
    'wrench': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"></path></svg>`,
    'file-search': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
    'hash': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>`,
    'tv': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
  };
  return icons[iconName] || icons['landmark'];
}

