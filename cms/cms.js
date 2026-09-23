/**
 * Portfolio CMS Admin JavaScript
 * Includes Owner Name Manager, Crash-Proof State Controls, Deep-Merge & LocalStorage Sync
 */

const DEFAULT_PORTFOLIO_DATA = {
  adminUsers: [
    { id: 'usr-admin', username: 'admin', password: 'password', role: 'Super Admin' }
  ],
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
    }
  ]
};

let currentCmsData = loadCmsData();

function loadCmsData() {
  let merged = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  
  // 1. Try to load from window.__PORTFOLIO_DATA__ (which comes from portfolio-data.js)
  if (window.__PORTFOLIO_DATA__ && typeof window.__PORTFOLIO_DATA__ === 'object') {
    const published = window.__PORTFOLIO_DATA__;
    if (published.profile) merged.profile = Object.assign({}, merged.profile, published.profile);
    if (published.hero) merged.hero = Object.assign({}, merged.hero, published.hero);
    if (published.about) merged.about = Object.assign({}, merged.about, published.about);
    if (published.workflow && Array.isArray(published.workflow)) merged.workflow = published.workflow;
    if (published.navigation && Array.isArray(published.navigation) && published.navigation.length > 0) merged.navigation = published.navigation;
    if (published.footer) merged.footer = Object.assign({}, merged.footer, published.footer);
    if (published.contact) merged.contact = Object.assign({}, merged.contact, published.contact);
    if (published.projects && Array.isArray(published.projects) && published.projects.length > 0) merged.projects = published.projects;
    if (published.adminUsers && Array.isArray(published.adminUsers)) merged.adminUsers = published.adminUsers;
  }

  // 2. Override with localStorage if anything is newer locally (for live editing)
  const saved = localStorage.getItem('portfolio_cms_content');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        if (parsed.profile) merged.profile = Object.assign({}, merged.profile, parsed.profile);
        if (parsed.hero) merged.hero = Object.assign({}, merged.hero, parsed.hero);
        if (parsed.about) merged.about = Object.assign({}, merged.about, parsed.about);
        if (parsed.workflow && Array.isArray(parsed.workflow)) merged.workflow = parsed.workflow;
        if (parsed.navigation && Array.isArray(parsed.navigation) && parsed.navigation.length > 0) {
          merged.navigation = parsed.navigation;
        }
        if (parsed.footer) merged.footer = Object.assign({}, merged.footer, parsed.footer);
        if (parsed.contact) merged.contact = Object.assign({}, merged.contact, parsed.contact);
        if (parsed.projects && Array.isArray(parsed.projects) && parsed.projects.length > 0) {
          merged.projects = parsed.projects;
        }
        if (parsed.customCategories && Array.isArray(parsed.customCategories)) {
          merged.customCategories = parsed.customCategories;
        }
        if (parsed.adminUsers && Array.isArray(parsed.adminUsers)) {
          merged.adminUsers = parsed.adminUsers;
        }
      }
    } catch (e) { console.error(e); }
  }
  return merged;
}

function saveCmsData(data) {
  currentCmsData = data;
  // 1. Always save to localStorage for fast local reads
  localStorage.setItem('portfolio_cms_content', JSON.stringify(data));
  applyCmsHeaderBranding();

  // 2. Also persist to disk via the local server API so ALL browsers see the same data
  fetch('/api/save-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(res => {
    if (res.ok) {
      showCmsToast('✅ Published to all browsers! Changes saved to disk. ✦');
    } else {
      showCmsToast('⚠ Saved locally only. Restart server.py for cross-browser sync.');
    }
  })
  .catch(() => {
    showCmsToast('⚠ Saved locally only. Run server.py for cross-browser sync.');
  });
}

function applyCmsHeaderBranding() {
  const p = currentCmsData.profile || {};
  const badgeEl = document.getElementById('cms-header-badge');
  const titleEl = document.getElementById('cms-header-title');
  const subtitleEl = document.getElementById('cms-header-subtitle');

  const title = p.cmsTitle || 'Portfolio CMS Admin Portal';
  const subtitle = p.cmsSubtitle || `Real-Time Content Synchronizer · ${p.name || 'Alex Rivera'} Portfolio`;
  const badge = p.cmsBadge || 'CMS';

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = subtitle;
  if (badgeEl) badgeEl.textContent = badge;
}

let cmsInitialized = false;
function initCms() {
  if (cmsInitialized) return;
  cmsInitialized = true;
  
  applyCmsHeaderBranding();
  initCmsTabs();
  renderHeroForm();
  renderNavigationManager();
  initNavigationEvents();
  initFooterCopyrightManager();
  renderAboutForm();
  renderWorkflowForm();
  renderProjectsList();
  renderContactForm();
  renderLeadsPanel();
  initGlobalActions();
  updateLeadsNavBadge();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkAuthSession);
} else {
  checkAuthSession();
}

/* Tab Controller */
function initCmsTabs() {
  const tabs = document.querySelectorAll('.cms-tab');
  const sections = document.querySelectorAll('.cms-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active', 'bg-amber-400', 'text-slate-950'));
      tabs.forEach(t => t.classList.add('bg-slate-800', 'text-slate-300'));
      
      tab.classList.add('active', 'bg-amber-400', 'text-slate-950');
      tab.classList.remove('bg-slate-800', 'text-slate-300');

      const targetId = tab.getAttribute('data-tab');
      sections.forEach(s => {
        if (s.id === targetId) s.classList.remove('hidden');
        else s.classList.add('hidden');
      });

      if (targetId === 'cms-nav') {
        renderNavPreview();
        renderFooterCopyrightManager();
      }
      if (targetId === 'cms-users') {
        renderUsersList();
      }
    });
  });
}

/* 1. Hero & Owner Profile Form */
function renderHeroForm() {
  const form = document.getElementById('hero-cms-form');
  if (!form) return;

  if (!currentCmsData.profile) {
    currentCmsData.profile = { name: 'Alex Rivera', titleTag: 'IT PM & Web Specialist' };
  }

  const p = currentCmsData.profile;
  const h = currentCmsData.hero;

  form.innerHTML = `
    <div class="space-y-4">
      
      <!-- Owner Identity & CMS Header Branding Section -->
      <div class="p-4 rounded-2xl bg-amber-400/10 border-2 border-amber-400/40 space-y-4 mb-6">
        <h4 class="text-sm font-extrabold text-amber-300 font-heading flex items-center gap-2">
          <span>👤 Portfolio Owner Identity & CMS Branding</span>
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-slate-300 uppercase mb-1">Owner Full Name</label>
            <input type="text" id="profile-name" value="${escapeHtml(p.name)}" required class="w-full px-3 py-2 rounded-lg bg-slate-900 border-2 border-slate-700 text-amber-300 font-extrabold text-sm focus:border-amber-400">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-slate-300 uppercase mb-1">Professional Tagline</label>
            <input type="text" id="profile-tagline" value="${escapeHtml(p.titleTag)}" required class="w-full px-3 py-2 rounded-lg bg-slate-900 border-2 border-slate-700 text-white text-xs">
          </div>
        </div>

        <!-- CMS Portal Header Customization -->
        <div class="pt-3 border-t border-amber-400/20">
          <span class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">CMS Header Bar Branding</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Logo Badge Text</label>
              <input type="text" id="cms-badge-input" value="${escapeHtml(p.cmsBadge || 'CMS')}" class="w-full px-3 py-2 rounded-lg bg-slate-900 border-2 border-slate-700 text-amber-300 font-extrabold text-xs focus:border-amber-400" placeholder="CMS">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">CMS Portal Title</label>
              <input type="text" id="cms-title-input" value="${escapeHtml(p.cmsTitle || 'Portfolio CMS Admin Portal')}" class="w-full px-3 py-2 rounded-lg bg-slate-900 border-2 border-slate-700 text-white text-xs focus:border-amber-400" placeholder="Portfolio CMS Admin Portal">
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">CMS Subtitle</label>
              <input type="text" id="cms-subtitle-input" value="${escapeHtml(p.cmsSubtitle || 'Real-Time Content Synchronizer · ' + p.name + ' Portfolio')}" class="w-full px-3 py-2 rounded-lg bg-slate-900 border-2 border-slate-700 text-white text-xs focus:border-amber-400" placeholder="Real-Time Content Synchronizer">
            </div>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Status Badge Text</label>
        <input type="text" id="hero-badge" value="${escapeHtml(h.statusBadge)}" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Main Headline</label>
        <input type="text" id="hero-headline" value="${escapeHtml(h.headline)}" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Subheadline</label>
        <textarea id="hero-subheadline" rows="3" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">${escapeHtml(h.subheadline)}</textarea>
      </div>

      <div class="pt-4 border-t-2 border-slate-800">
        <h4 class="text-sm font-bold text-amber-300 font-heading mb-3">Key Metrics Counters (4 Badges)</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${h.stats.map((s, idx) => `
            <div class="p-4 rounded-xl bg-slate-900 border-2 border-slate-700 space-y-2">
              <label class="block text-[11px] font-bold text-slate-400 uppercase">Stat #${idx + 1} Number</label>
              <input type="text" id="hero-stat-num-${idx}" value="${escapeHtml(s.number)}" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-amber-300 font-bold text-sm">
              <label class="block text-[11px] font-bold text-slate-400 uppercase">Stat #${idx + 1} Label</label>
              <input type="text" id="hero-stat-label-${idx}" value="${escapeHtml(s.label)}" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs">
            </div>
          `).join('')}
        </div>
      </div>

      <button type="submit" class="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 border-2 border-slate-950 shadow-offset font-heading transition-all">
        Publish Profile & Hero Changes ✦
      </button>
    </div>
  `;

  form.onsubmit = (e) => {
    e.preventDefault();
    currentCmsData.profile.name = document.getElementById('profile-name').value;
    currentCmsData.profile.titleTag = document.getElementById('profile-tagline').value;
    currentCmsData.profile.cmsBadge = document.getElementById('cms-badge-input').value;
    currentCmsData.profile.cmsTitle = document.getElementById('cms-title-input').value;
    currentCmsData.profile.cmsSubtitle = document.getElementById('cms-subtitle-input').value;

    currentCmsData.hero.statusBadge = document.getElementById('hero-badge').value;
    currentCmsData.hero.headline = document.getElementById('hero-headline').value;
    currentCmsData.hero.subheadline = document.getElementById('hero-subheadline').value;

    currentCmsData.hero.stats.forEach((s, idx) => {
      s.number = document.getElementById(`hero-stat-num-${idx}`).value;
      s.label = document.getElementById(`hero-stat-label-${idx}`).value;
    });

    saveCmsData(currentCmsData);
  };

  // Real-time live header branding update while typing
  const badgeInput = document.getElementById('cms-badge-input');
  const titleInput = document.getElementById('cms-title-input');
  const subtitleInput = document.getElementById('cms-subtitle-input');
  const nameInput = document.getElementById('profile-name');

  if (badgeInput) {
    badgeInput.addEventListener('input', () => {
      const el = document.getElementById('cms-header-badge');
      if (el) el.textContent = badgeInput.value || 'CMS';
    });
  }

  if (titleInput) {
    titleInput.addEventListener('input', () => {
      const el = document.getElementById('cms-header-title');
      if (el) el.textContent = titleInput.value || 'Portfolio CMS Admin Portal';
    });
  }

  if (subtitleInput) {
    subtitleInput.addEventListener('input', () => {
      subtitleInput.dataset.customized = '1';
      const el = document.getElementById('cms-header-subtitle');
      if (el) el.textContent = subtitleInput.value || `Real-Time Content Synchronizer · ${nameInput ? nameInput.value : 'Alex Rivera'} Portfolio`;
    });
  }

  const taglineInput = document.getElementById('profile-tagline');
  const badgeTextEl = document.getElementById('hero-badge');

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (subtitleInput && !subtitleInput.dataset.customized) {
        const autoSub = `Real-Time Content Synchronizer · ${nameInput.value || 'Alex Rivera'} Portfolio`;
        subtitleInput.value = autoSub;
        const el = document.getElementById('cms-header-subtitle');
        if (el) el.textContent = autoSub;
      }
      currentCmsData.profile.name = nameInput.value;
      renderNavPreview();
    });
  }

  if (taglineInput) {
    taglineInput.addEventListener('input', () => {
      currentCmsData.profile.titleTag = taglineInput.value;
      renderNavPreview();
    });
  }

  if (badgeTextEl) {
    badgeTextEl.addEventListener('input', () => {
      currentCmsData.hero.statusBadge = badgeTextEl.value;
      renderNavPreview();
    });
  }
}

/* ====================================================
   NAVBAR MENU MANAGER (CRUD)
   Manages currentCmsData.navigation
   ==================================================== */

function renderNavPreview(customList) {
  const preview = document.getElementById('nav-preview-links');
  const previewName = document.getElementById('nav-preview-name');
  const previewInitials = document.getElementById('nav-preview-initials');
  const previewTagline = document.getElementById('nav-preview-tagline');
  const previewStatus = document.getElementById('nav-preview-status');

  const p = currentCmsData.profile || {};
  const h = currentCmsData.hero || {};

  const name = p.name || 'Alex Rivera';
  const initials = name.trim().split(/\s+/).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'AR';
  const tagline = p.titleTag ? `✦ ${p.titleTag}` : '✦ IT PM';
  const statusText = h.statusBadge || 'Open to Strategic Work';

  if (previewName) previewName.textContent = name;
  if (previewInitials) previewInitials.textContent = initials;
  if (previewTagline) previewTagline.textContent = tagline;
  if (previewStatus) previewStatus.textContent = statusText;

  if (!preview) return;
  const items = customList || (currentCmsData.navigation || []);
  preview.innerHTML = items
    .filter(item => item.visible !== false)
    .map(item => `
      <span class="hover:text-amber-300 transition-colors py-0.5 cursor-default">
        ${escapeHtml(item.label)}
      </span>
    `).join('');
  if (preview.innerHTML.trim() === '') {
    preview.innerHTML = '<span class="text-xs text-slate-500 italic">No visible links in navbar</span>';
  }
}

function renderNavigationManager() {
  const container = document.getElementById('nav-items-container');
  if (!container) return;

  if (!currentCmsData.navigation || !Array.isArray(currentCmsData.navigation) || currentCmsData.navigation.length === 0) {
    currentCmsData.navigation = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA.navigation));
  }

  const items = currentCmsData.navigation;

  // Render live preview
  renderNavPreview();

  // Render items list
  if (items.length === 0) {
    container.innerHTML = `
      <div class="p-8 rounded-2xl bg-slate-800/60 border-2 border-dashed border-slate-700 text-center">
        <p class="text-sm font-bold text-slate-400">No navigation items found.</p>
        <p class="text-xs text-slate-500 mt-1">Click "+ Add Menu Item" or "Reset Default" to add links.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map((item, index) => {
    const isVisible = item.visible !== false;
    const isFirst = index === 0;
    const isLast = index === items.length - 1;

    return `
      <div class="p-4 rounded-2xl bg-slate-800 border-2 border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-slate-600 shadow-sm" data-nav-id="${escapeHtml(item.id)}">
        
        <!-- Left: Index + Reorder + Info -->
        <div class="flex items-center gap-3.5 flex-1 min-w-0">
          <div class="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 font-extrabold flex items-center justify-center text-xs font-mono shrink-0">
            #${index + 1}
          </div>

          <!-- Reorder Buttons -->
          <div class="flex flex-col gap-0.5 shrink-0">
            <button type="button" class="nav-reorder-up p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs" ${isFirst ? 'disabled' : ''} data-index="${index}" title="Move Up">
              ▲
            </button>
            <button type="button" class="nav-reorder-down p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs" ${isLast ? 'disabled' : ''} data-index="${index}" title="Move Down">
              ▼
            </button>
          </div>

          <!-- Label & Link Details -->
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-bold text-sm text-white font-heading truncate">${escapeHtml(item.label)}</span>
              ${item.target === '_blank' ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800/60 shrink-0">↗ New Tab</span>' : ''}
              ${isVisible 
                ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/60 shrink-0">● Active</span>' 
                : '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-slate-500 border border-slate-700 shrink-0">○ Hidden</span>'
              }
            </div>
            <div class="text-xs text-slate-400 font-mono mt-0.5 truncate flex items-center gap-1.5">
              <span class="text-slate-500">URL:</span>
              <span class="text-amber-300/90 font-medium">${escapeHtml(item.url)}</span>
            </div>
          </div>
        </div>

        <!-- Right Actions: Toggle Visibility, Edit, Delete -->
        <div class="flex items-center gap-2 self-end md:self-center shrink-0">
          <button type="button" class="nav-toggle-vis-btn px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1 ${
            isVisible 
              ? 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-700' 
              : 'bg-emerald-950/60 border-emerald-700/60 text-emerald-300 hover:bg-emerald-900'
          }" data-index="${index}" title="${isVisible ? 'Hide from navbar' : 'Show in navbar'}">
            ${isVisible ? '👁️ Hide' : '👁️ Show'}
          </button>

          <button type="button" class="nav-edit-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-700 border border-slate-600 text-white hover:bg-slate-600 transition-all" data-index="${index}">
            ✏️ Edit
          </button>

          <button type="button" class="nav-delete-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-950/50 border border-rose-800/60 text-rose-300 hover:bg-rose-900 transition-all" data-index="${index}">
            🗑️
          </button>
        </div>

      </div>
    `;
  }).join('');

  // Bind item actions
  container.querySelectorAll('.nav-reorder-up').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.index, 10);
      if (idx > 0) {
        const temp = items[idx];
        items[idx] = items[idx - 1];
        items[idx - 1] = temp;
        saveNavigationChanges('Item moved up');
      }
    };
  });

  container.querySelectorAll('.nav-reorder-down').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.index, 10);
      if (idx < items.length - 1) {
        const temp = items[idx];
        items[idx] = items[idx + 1];
        items[idx + 1] = temp;
        saveNavigationChanges('Item moved down');
      }
    };
  });

  container.querySelectorAll('.nav-toggle-vis-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.index, 10);
      items[idx].visible = items[idx].visible === false ? true : false;
      saveNavigationChanges(`"${items[idx].label}" is now ${items[idx].visible ? 'Active' : 'Hidden'}`);
    };
  });

  container.querySelectorAll('.nav-edit-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.index, 10);
      openNavEditForm(items[idx]);
    };
  });

  container.querySelectorAll('.nav-delete-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.index, 10);
      const item = items[idx];
      if (confirm(`Delete menu item "${item.label}"?`)) {
        items.splice(idx, 1);
        saveNavigationChanges(`Deleted "${item.label}"`);
      }
    };
  });
}

function saveNavigationChanges(toastMsg) {
  saveCmsData(currentCmsData);
  const newVer = Date.now();
  localStorage.setItem('portfolio_cache_version', newVer);
  const viewLiveBtn = document.getElementById('view-live-btn');
  if (viewLiveBtn) {
    viewLiveBtn.href = `http://localhost:8765/index.html?v=${newVer}`;
  }
  renderNavigationManager();
  if (toastMsg) showCmsToast(toastMsg + ' ✦');
}

function openNavEditForm(item) {
  const panel = document.getElementById('nav-item-form-panel');
  const title = document.getElementById('nav-form-title');
  const editIdInput = document.getElementById('nav-edit-id');
  const labelInput = document.getElementById('nav-input-label');
  const urlInput = document.getElementById('nav-input-url');
  const targetInput = document.getElementById('nav-input-target');
  const visibleInput = document.getElementById('nav-input-visible');
  const submitBtn = document.getElementById('nav-submit-btn');

  if (!panel) return;
  panel.classList.remove('hidden');

  if (item) {
    title.textContent = `Edit Menu Item: "${item.label}"`;
    editIdInput.value = item.id;
    labelInput.value = item.label || '';
    urlInput.value = item.url || '';
    targetInput.value = item.target || '_self';
    visibleInput.checked = item.visible !== false;
    submitBtn.textContent = 'Update Item ✦';
  } else {
    title.textContent = 'Add New Menu Item';
    editIdInput.value = '';
    labelInput.value = '';
    urlInput.value = '';
    targetInput.value = '_self';
    visibleInput.checked = true;
    submitBtn.textContent = 'Add Item ✦';
  }

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  labelInput.focus();
}

function initNavigationEvents() {
  const addBtn = document.getElementById('nav-add-btn');
  const closeBtn = document.getElementById('nav-form-close-btn');
  const formPanel = document.getElementById('nav-item-form-panel');
  const form = document.getElementById('nav-item-form');
  const resetBtn = document.getElementById('nav-reset-btn');
  const labelInput = document.getElementById('nav-input-label');
  const visibleInput = document.getElementById('nav-input-visible');

  // Real-time preview while typing in the form
  if (labelInput) {
    labelInput.addEventListener('input', () => {
      const editId = document.getElementById('nav-edit-id').value.trim();
      const val = labelInput.value.trim() || '(Untitled)';
      const isVis = visibleInput ? visibleInput.checked : true;
      if (!currentCmsData.navigation) return;
      let previewList;
      if (editId) {
        previewList = currentCmsData.navigation.map(i => (i.id === editId ? Object.assign({}, i, { label: val, visible: isVis }) : i));
      } else {
        previewList = currentCmsData.navigation.concat([{ id: 'preview-new', label: val, visible: isVis }]);
      }
      renderNavPreview(previewList);
    });
  }

  if (visibleInput) {
    visibleInput.addEventListener('change', () => {
      if (labelInput && labelInput.value.trim()) {
        labelInput.dispatchEvent(new Event('input'));
      }
    });
  }

  if (addBtn) {
    addBtn.onclick = () => {
      openNavEditForm(null);
    };
  }

  if (closeBtn && formPanel) {
    closeBtn.onclick = () => {
      formPanel.classList.add('hidden');
      renderNavigationManager(); // restores preview if cancelled
    };
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const editId = document.getElementById('nav-edit-id').value.trim();
      const label = document.getElementById('nav-input-label').value.trim();
      const url = document.getElementById('nav-input-url').value.trim();
      const target = document.getElementById('nav-input-target').value;
      const visible = document.getElementById('nav-input-visible').checked;

      if (!label || !url) {
        alert('Label and URL are required.');
        return;
      }

      if (!currentCmsData.navigation) {
        currentCmsData.navigation = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA.navigation));
      }

      if (editId) {
        // Update
        const targetItem = currentCmsData.navigation.find(i => i.id === editId);
        if (targetItem) {
          targetItem.label = label;
          targetItem.url = url;
          targetItem.target = target;
          targetItem.visible = visible;
          saveNavigationChanges(`Updated "${label}"`);
        }
      } else {
        // Create
        const newItem = {
          id: 'nav-' + Date.now(),
          label,
          url,
          target,
          visible
        };
        currentCmsData.navigation.push(newItem);
        saveNavigationChanges(`Added "${label}" to navigation`);
      }

      if (formPanel) formPanel.classList.add('hidden');
      form.reset();
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('Reset navigation links back to default (Home, About & Skills, PM Workflow, Projects, Playground, Contact)?')) {
        currentCmsData.navigation = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA.navigation));
        saveNavigationChanges('Navigation reset to default');
      }
    };
  }
}

/* Footer Copyright Manager */
function renderFooterCopyrightManager() {
  const input = document.getElementById('footer-copyright-input');
  const preview = document.getElementById('footer-preview-text');
  if (!input || !preview) return;

  const defaultText = `© 2026 ${currentCmsData.profile?.name || 'Alex Rivera'} · IT Project Manager & Website Specialist. Made with ✦`;
  if (!currentCmsData.footer) {
    currentCmsData.footer = { copyright: defaultText };
  }

  const text = currentCmsData.footer.copyright || defaultText;
  input.value = text;
  preview.textContent = text;
}

function initFooterCopyrightManager() {
  renderFooterCopyrightManager();

  const input = document.getElementById('footer-copyright-input');
  const preview = document.getElementById('footer-preview-text');
  const saveBtn = document.getElementById('save-footer-btn');
  const resetBtn = document.getElementById('footer-template-default');
  const yearBtn = document.getElementById('footer-insert-year');

  if (input && preview) {
    input.addEventListener('input', () => {
      const val = input.value.trim() || `© 2026 ${currentCmsData.profile?.name || 'Alex Rivera'} · IT Project Manager & Website Specialist. Made with ✦`;
      preview.textContent = val;
      if (!currentCmsData.footer) currentCmsData.footer = {};
      currentCmsData.footer.copyright = input.value;
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!currentCmsData.footer) currentCmsData.footer = {};
      currentCmsData.footer.copyright = input ? input.value : preview.textContent;

      const newVer = Date.now().toString();
      localStorage.setItem('portfolio_cache_version', newVer);
      saveCmsData(currentCmsData);
      showCmsToast('Footer copyright published to live portfolio! ✦');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const pName = currentCmsData.profile?.name || 'Alex Rivera';
      const def = `© ${new Date().getFullYear()} ${pName} · IT Project Manager & Website Specialist. Made with ✦`;
      if (input) input.value = def;
      if (preview) preview.textContent = def;
      if (!currentCmsData.footer) currentCmsData.footer = {};
      currentCmsData.footer.copyright = def;
    });
  }

  if (yearBtn) {
    yearBtn.addEventListener('click', () => {
      const yr = new Date().getFullYear().toString();
      if (input) {
        let val = input.value;
        if (/©\s*\d{4}/.test(val)) {
          val = val.replace(/©\s*\d{4}/, `© ${yr}`);
        } else {
          val = `© ${yr} ` + val;
        }
        input.value = val;
        if (preview) preview.textContent = val;
        if (!currentCmsData.footer) currentCmsData.footer = {};
        currentCmsData.footer.copyright = val;
      }
    });
  }
}

/* 2. About & Skills Form */
function renderAboutForm() {
  const form = document.getElementById('about-cms-form');
  if (!form) return;

  const a = currentCmsData.about;

  form.innerHTML = `
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">About Headline</label>
        <input type="text" id="about-title" value="${escapeHtml(a.title)}" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Executive Paragraph 1</label>
        <textarea id="about-p1" rows="3" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">${escapeHtml(a.paragraph1)}</textarea>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Executive Paragraph 2</label>
        <textarea id="about-p2" rows="3" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">${escapeHtml(a.paragraph2)}</textarea>
      </div>

      <div class="pt-4 border-t-2 border-slate-800">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold text-amber-300 font-heading">Sticky Note Skills Matrix (${a.skills.length} Items)</h4>
          <button type="button" id="add-skill-btn" class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 border border-slate-950">
            + Add Skill
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="skills-editor-list">
          ${a.skills.map((s, idx) => `
            <div class="p-3 rounded-xl bg-slate-900 border-2 border-slate-700 space-y-2 relative">
              <button type="button" onclick="deleteSkill(${idx})" class="absolute top-2 right-2 text-rose-400 text-xs font-bold">✕</button>
              <input type="text" id="skill-name-${idx}" value="${escapeHtml(s.name)}" placeholder="Skill Name" class="w-full px-2.5 py-1.5 rounded bg-slate-800 text-white text-xs font-bold border border-slate-700">
              <input type="text" id="skill-cat-${idx}" value="${escapeHtml(s.category)}" placeholder="Category Tag" class="w-full px-2.5 py-1.5 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700">
              <select id="skill-color-${idx}" class="w-full px-2 py-1 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700">
                <option value="sticky-yellow" ${s.color === 'sticky-yellow' ? 'selected' : ''}>Lemon Yellow</option>
                <option value="sticky-mint" ${s.color === 'sticky-mint' ? 'selected' : ''}>Mint Green</option>
                <option value="sticky-lavender" ${s.color === 'sticky-lavender' ? 'selected' : ''}>Lavender</option>
                <option value="sticky-peach" ${s.color === 'sticky-peach' ? 'selected' : ''}>Peach</option>
                <option value="sticky-cyan" ${s.color === 'sticky-cyan' ? 'selected' : ''}>Sky Blue</option>
                <option value="sticky-pink" ${s.color === 'sticky-pink' ? 'selected' : ''}>Pastel Pink</option>
              </select>
            </div>
          `).join('')}
        </div>
      </div>

      <button type="submit" class="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 border-2 border-slate-950 shadow-offset font-heading transition-all">
        Publish About & Skills Changes ✦
      </button>
    </div>
  `;

  document.getElementById('add-skill-btn').onclick = () => {
    currentCmsData.about.skills.push({ name: 'New Skill', category: 'General', color: 'sticky-yellow' });
    renderAboutForm();
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    currentCmsData.about.title = document.getElementById('about-title').value;
    currentCmsData.about.paragraph1 = document.getElementById('about-p1').value;
    currentCmsData.about.paragraph2 = document.getElementById('about-p2').value;

    currentCmsData.about.skills.forEach((s, idx) => {
      s.name = document.getElementById(`skill-name-${idx}`).value;
      s.category = document.getElementById(`skill-cat-${idx}`).value;
      s.color = document.getElementById(`skill-color-${idx}`).value;
    });

    saveCmsData(currentCmsData);
  };
}

window.deleteSkill = function(index) {
  currentCmsData.about.skills.splice(index, 1);
  renderAboutForm();
};

/* 3. Workflow Form */
function renderWorkflowForm() {
  const form = document.getElementById('workflow-cms-form');
  if (!form) return;

  const w = currentCmsData.workflow;

  form.innerHTML = `
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        ${w.map((step, idx) => `
          <div class="p-4 rounded-xl bg-slate-900 border-2 border-slate-700 space-y-2">
            <div class="font-bold text-amber-300 text-xs font-heading">Stage ${step.num}</div>
            <input type="text" id="wf-title-${idx}" value="${escapeHtml(step.title)}" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold text-xs">
            <textarea id="wf-desc-${idx}" rows="3" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs">${escapeHtml(step.desc)}</textarea>
          </div>
        `).join('')}
      </div>

      <button type="submit" class="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 border-2 border-slate-950 shadow-offset font-heading transition-all">
        Publish Delivery Workflow Changes ✦
      </button>
    </div>
  `;

  form.onsubmit = (e) => {
    e.preventDefault();
    currentCmsData.workflow.forEach((step, idx) => {
      step.title = document.getElementById(`wf-title-${idx}`).value;
      step.desc = document.getElementById(`wf-desc-${idx}`).value;
    });
    saveCmsData(currentCmsData);
  };
}

/* 4. Projects List & CRUD */
function renderProjectsList() {
  const container = document.getElementById('projects-cms-list');
  if (!container) return;

  const projects = currentCmsData.projects;

  container.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-white font-heading">Project Inventory (${projects.length} Total)</h3>
      <button type="button" onclick="openProjectModalEditor(null)" class="px-4 py-2 rounded-xl text-xs font-extrabold text-slate-950 bg-amber-400 border-2 border-slate-950 shadow-sm font-heading">
        + Add New Project
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${projects.map((p, idx) => `
        <div class="p-4 rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-between shadow-sm">
          <div>
            <span class="px-2.5 py-0.5 text-[10px] font-bold rounded ${p.badgeColor} mb-1 inline-block">${p.categoryLabel}</span>
            <h4 class="text-sm font-bold text-white font-heading">${escapeHtml(p.title)}</h4>
            <p class="text-xs text-slate-400 line-clamp-1">${escapeHtml(p.subtitle)}</p>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" onclick="openProjectModalEditor(${idx})" class="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-slate-800 border border-slate-700 hover:bg-slate-700">
              Edit
            </button>
            <button type="button" onclick="deleteProject(${idx})" class="px-3 py-1.5 rounded-lg text-xs font-bold text-rose-400 bg-slate-800 border border-slate-700 hover:bg-rose-950">
              Delete
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.deleteProject = function(index) {
  if (confirm(`Are you sure you want to delete "${currentCmsData.projects[index].title}"?`)) {
    currentCmsData.projects.splice(index, 1);
    saveCmsData(currentCmsData);
    renderProjectsList();
  }
};

/* ── Project Category Manager ────────────────────────────── */
const DEFAULT_CATEGORIES = [
  { value: 'enterprise', label: 'Enterprise & Gov' },
  { value: 'ecommerce',  label: 'E-Commerce & Retail' },
  { value: 'apps',       label: 'Apps & Systems' },
  { value: 'microsites', label: 'Microsites & Media' }
];

function getAllCategories() {
  const custom = currentCmsData.customCategories || [];
  // Collect categories from existing projects that aren't in defaults or custom
  const projectCats = [];
  if (currentCmsData.projects && Array.isArray(currentCmsData.projects)) {
    currentCmsData.projects.forEach(proj => {
      if (proj.category && !DEFAULT_CATEGORIES.find(c => c.value === proj.category) && !custom.find(c => c.value === proj.category)) {
        if (!projectCats.find(c => c.value === proj.category)) {
          projectCats.push({ value: proj.category, label: proj.categoryLabel || proj.category });
        }
      }
    });
  }
  return [...DEFAULT_CATEGORIES, ...custom, ...projectCats];
}

function getCategoryOptions(selectedValue) {
  const cats = getAllCategories();
  return cats.map(c =>
    `<option value="${escapeHtml(c.value)}" ${c.value === selectedValue ? 'selected' : ''}>${escapeHtml(c.label)}</option>`
  ).join('');
}

function initCategoryPanel() {
  const addBtn = document.getElementById('btn-add-category');
  const panel = document.getElementById('new-category-panel');
  const saveBtn = document.getElementById('btn-save-category');
  const cancelBtn = document.getElementById('btn-cancel-category');
  const select = document.getElementById('p-category');

  if (addBtn && panel) {
    addBtn.onclick = () => {
      panel.classList.toggle('hidden');
      const valInput = document.getElementById('new-cat-value');
      if (valInput) { valInput.value = ''; valInput.focus(); }
      const lblInput = document.getElementById('new-cat-label');
      if (lblInput) lblInput.value = '';
    };
  }

  if (cancelBtn && panel) {
    cancelBtn.onclick = () => panel.classList.add('hidden');
  }

  if (saveBtn && select && panel) {
    saveBtn.onclick = () => {
      const valInput = document.getElementById('new-cat-value');
      const lblInput = document.getElementById('new-cat-label');
      const value = (valInput ? valInput.value.trim().toLowerCase().replace(/\s+/g, '-') : '');
      const label = (lblInput ? lblInput.value.trim() : '') || value;

      if (!value) {
        alert('Category value is required.');
        return;
      }

      // Check duplicate
      const all = getAllCategories();
      if (all.find(c => c.value === value)) {
        alert(`Category "${value}" already exists.`);
        return;
      }

      // Save to customCategories
      if (!currentCmsData.customCategories) currentCmsData.customCategories = [];
      currentCmsData.customCategories.push({ value, label });
      saveCmsData(currentCmsData);

      // Refresh select & auto-select new category
      select.innerHTML = getCategoryOptions(value);
      select.value = value;

      panel.classList.add('hidden');
      showCmsToast(`Category "${label}" added! ✦`);
    };
  }
}

window.openProjectModalEditor = function(index) {
  const isNew = index === null;
  const p = isNew ? {
    id: 'proj-' + Date.now(),
    title: 'New Technical Project',
    category: 'enterprise',
    categoryLabel: 'Enterprise Platform',
    badgeColor: 'bg-amber-300 text-slate-950 font-bold',
    subtitle: 'High-Impact Digital Solution',
    icon: 'landmark',
    gradient: 'from-amber-400/20 via-slate-800 to-slate-900',
    impact: '+100% Performance Impact',
    role: 'IT Project Manager',
    sprintDuration: '8 Sprints (4 Months)',
    description: 'Executive overview and project scope breakdown.',
    deliverables: ['Responsive Web Portal Architecture', 'API Integration & Security Audit'],
    techStack: ['Agile / Scrum', 'React', 'Tailwind CSS'],
    metrics: [{ label: 'Performance', value: '99%' }]
  } : JSON.parse(JSON.stringify(currentCmsData.projects[index]));

  const modalBackdrop = document.getElementById('cms-modal');
  const modalBody = document.getElementById('cms-modal-body');

  modalBody.innerHTML = `
    <div class="p-6 bg-slate-900 border-2 border-slate-700 rounded-3xl space-y-4 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between pb-3 border-b-2 border-slate-800">
        <h3 class="text-lg font-bold text-white font-heading">${isNew ? 'Create New Project' : 'Edit Project: ' + escapeHtml(p.title)}</h3>
        <button onclick="closeCmsModal()" class="text-slate-400 hover:text-white font-bold">✕</button>
      </div>

      <form id="project-crud-form" class="space-y-4 text-xs">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Project Title</label>
            <input type="text" id="p-title" value="${escapeHtml(p.title)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold">
          </div>
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Category</label>
            <div class="flex items-center gap-2">
              <select id="p-category" class="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">
                ${getCategoryOptions(p.category)}
              </select>
              <button type="button" id="btn-add-category" class="shrink-0 px-2.5 py-2 rounded-lg text-xs font-extrabold bg-amber-400 text-slate-950 border border-slate-950 hover:bg-amber-300 transition-all" title="Add New Category">
                + New
              </button>
            </div>
            <div id="new-category-panel" class="hidden mt-2 p-3 rounded-xl bg-slate-800/80 border border-amber-400/40 space-y-2">
              <label class="block text-[11px] font-bold text-amber-300 uppercase">Add Custom Category</label>
              <div class="grid grid-cols-2 gap-2">
                <input type="text" id="new-cat-value" placeholder="e.g. saas" class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-amber-400 outline-none" />
                <input type="text" id="new-cat-label" placeholder="e.g. SaaS & Cloud" class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-amber-400 outline-none" />
              </div>
              <div class="flex items-center gap-2">
                <button type="button" id="btn-save-category" class="px-3 py-1.5 rounded-lg text-[11px] font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all">Save Category ✦</button>
                <button type="button" id="btn-cancel-category" class="px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-400 bg-slate-700 hover:bg-slate-600 transition-all">Cancel</button>
                <span class="text-[10px] text-slate-500 ml-1">Value = internal key, Label = display name</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Subtitle / Tagline</label>
          <input type="text" id="p-subtitle" value="${escapeHtml(p.subtitle)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Primary Impact Highlight</label>
            <input type="text" id="p-impact" value="${escapeHtml(p.impact)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-amber-300 font-bold">
          </div>
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">PM Role</label>
            <input type="text" id="p-role" value="${escapeHtml(p.role)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">
          </div>
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Sprint Duration</label>
            <input type="text" id="p-sprint" value="${escapeHtml(p.sprintDuration)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Executive Description</label>
          <textarea id="p-desc" rows="3" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">${escapeHtml(p.description)}</textarea>
        </div>

        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Deliverables (One per line)</label>
          <textarea id="p-deliverables" rows="3" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">${p.deliverables.join('\n')}</textarea>
        </div>

        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Tech Stack Badges (Comma-separated)</label>
          <input type="text" id="p-tech" value="${p.techStack.join(', ')}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">
        </div>

        <!-- ===== CARD HEADER FRAME VISUAL ===== -->
        <div class="border-t-2 border-slate-700 pt-4 space-y-4">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-amber-400 font-handwritten text-lg">✦</span>
            <h4 class="text-sm font-extrabold text-amber-300 font-heading uppercase tracking-wider">Card Header Frame Visual</h4>
          </div>

          <!-- Gradient Color Preset Picker -->
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-2 text-xs">Header Gradient Color</label>
            <input type="hidden" id="p-gradient" value="${p.gradient || 'from-amber-400/20 via-slate-800 to-slate-900'}">
            <div class="grid grid-cols-5 gap-2">
              ${[
                { label: 'Amber', value: 'from-amber-400/20 via-slate-800 to-slate-900', color: '#fbbf24' },
                { label: 'Emerald', value: 'from-emerald-400/20 via-slate-800 to-slate-900', color: '#34d399' },
                { label: 'Sky', value: 'from-sky-400/20 via-slate-800 to-slate-900', color: '#38bdf8' },
                { label: 'Purple', value: 'from-purple-400/20 via-slate-800 to-slate-900', color: '#c084fc' },
                { label: 'Pink', value: 'from-pink-400/20 via-slate-800 to-slate-900', color: '#f472b6' },
                { label: 'Orange', value: 'from-orange-400/20 via-slate-800 to-slate-900', color: '#fb923c' },
                { label: 'Lime', value: 'from-lime-400/20 via-slate-800 to-slate-900', color: '#a3e635' },
                { label: 'Rose', value: 'from-rose-400/20 via-slate-800 to-slate-900', color: '#fb7185' },
                { label: 'Indigo', value: 'from-indigo-400/20 via-slate-800 to-slate-900', color: '#818cf8' },
                { label: 'Teal', value: 'from-teal-400/20 via-slate-800 to-slate-900', color: '#2dd4bf' },
                { label: 'Violet', value: 'from-violet-400/20 via-slate-800 to-slate-900', color: '#a78bfa' },
                { label: 'Cyan', value: 'from-cyan-400/20 via-slate-800 to-slate-900', color: '#22d3ee' },
                { label: 'Red', value: 'from-red-400/20 via-slate-800 to-slate-900', color: '#f87171' },
                { label: 'Yellow', value: 'from-yellow-400/20 via-slate-800 to-slate-900', color: '#facc15' },
                { label: 'Fuchsia', value: 'from-fuchsia-400/20 via-slate-800 to-slate-900', color: '#e879f9' },
              ].map(g => `
                <button type="button"
                  onclick="selectGradient('${g.value}')"
                  title="${g.label}"
                  id="grad-btn-${g.value.split('-')[1]}"
                  class="gradient-swatch-btn w-full h-10 rounded-xl border-2 transition-all ${
                    (p.gradient || '').includes(g.value.split('-')[1]) ? 'border-white scale-110 ring-2 ring-amber-400' : 'border-slate-700'
                  }"
                  style="background: linear-gradient(135deg, ${g.color}33, #1e293b, #0f172a);"
                >
                  <span class="text-[9px] font-bold text-white/70 block mt-1">${g.label}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Badge Color & Category Label -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-300 uppercase mb-1 text-xs">Badge Color Theme</label>
              <select id="p-badge-color" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs">
                <option value="bg-amber-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('amber') ? 'selected' : ''}>🟡 Amber / Gold</option>
                <option value="bg-emerald-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('emerald') ? 'selected' : ''}>🟢 Emerald / Green</option>
                <option value="bg-sky-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('sky') ? 'selected' : ''}>🔵 Sky / Blue</option>
                <option value="bg-purple-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('purple') ? 'selected' : ''}>🟣 Purple</option>
                <option value="bg-pink-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('pink') ? 'selected' : ''}>🩷 Pink</option>
                <option value="bg-orange-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('orange') ? 'selected' : ''}>🟠 Orange</option>
                <option value="bg-lime-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('lime') ? 'selected' : ''}>🍏 Lime</option>
                <option value="bg-rose-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('rose') ? 'selected' : ''}>🌹 Rose</option>
                <option value="bg-indigo-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('indigo') ? 'selected' : ''}>🔷 Indigo</option>
                <option value="bg-teal-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('teal') ? 'selected' : ''}>🩵 Teal</option>
                <option value="bg-violet-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('violet') ? 'selected' : ''}>💜 Violet</option>
                <option value="bg-yellow-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('yellow') ? 'selected' : ''}>⭐ Yellow</option>
                <option value="bg-red-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('red-3') ? 'selected' : ''}>🔴 Red</option>
                <option value="bg-cyan-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('cyan') ? 'selected' : ''}>🩵 Cyan</option>
                <option value="bg-fuchsia-300 text-slate-950 font-bold" ${(p.badgeColor||'').includes('fuchsia') ? 'selected' : ''}>💗 Fuchsia</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-300 uppercase mb-1 text-xs">Category Label (Badge Text)</label>
              <input type="text" id="p-category-label" value="${escapeHtml(p.categoryLabel || '')}" placeholder="e.g. Enterprise &amp; Banking" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs">
            </div>
          </div>

          <!-- Icon Picker -->
          <div>
            <label class="block font-bold text-slate-300 uppercase mb-2 text-xs">Card Icon</label>
            <input type="hidden" id="p-icon" value="${p.icon || 'landmark'}">
            <div class="grid grid-cols-6 gap-2">
              ${[
                { id: 'landmark', label: '🏦 Bank' },
                { id: 'database', label: '🗄️ Data' },
                { id: 'car', label: '🚗 Auto' },
                { id: 'building-2', label: '🏢 Gov' },
                { id: 'file-text', label: '📄 Doc' },
                { id: 'store', label: '🏪 Store' },
                { id: 'shopping-bag', label: '🛍️ Shop' },
                { id: 'ticket', label: '🎟️ Event' },
                { id: 'wrench', label: '🔧 Tech' },
                { id: 'file-search', label: '🔍 Search' },
                { id: 'hash', label: '# Hash' },
                { id: 'tv', label: '📺 Media' },
              ].map(ic => `
                <button type="button"
                  onclick="selectIcon('${ic.id}')"
                  id="icon-btn-${ic.id}"
                  class="icon-picker-btn px-1 py-2 rounded-xl border-2 text-center transition-all text-xs ${
                    p.icon === ic.id ? 'border-amber-400 bg-amber-400/10 text-amber-300' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500'
                  }"
                >${ic.label}</button>
              `).join('')}
            </div>
          </div>
        </div>
        <!-- ===== END CARD HEADER FRAME VISUAL ===== -->

        <button type="submit" class="w-full py-3 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 border-2 border-slate-950 font-heading">
          Save Project Entry ✦
        </button>
      </form>
    </div>
  `;

  modalBackdrop.classList.remove('hidden');
  initCategoryPanel();

  document.getElementById('project-crud-form').onsubmit = (e) => {
    e.preventDefault();
    p.title = document.getElementById('p-title').value;
    p.category = document.getElementById('p-category').value;
    p.subtitle = document.getElementById('p-subtitle').value;
    p.impact = document.getElementById('p-impact').value;
    p.role = document.getElementById('p-role').value;
    p.sprintDuration = document.getElementById('p-sprint').value;
    p.description = document.getElementById('p-desc').value;
    p.deliverables = document.getElementById('p-deliverables').value.split('\n').filter(l => l.trim() !== '');
    p.techStack = document.getElementById('p-tech').value.split(',').map(t => t.trim()).filter(t => t !== '');

    // Card Header Frame Visual fields
    p.gradient = document.getElementById('p-gradient').value;
    p.badgeColor = document.getElementById('p-badge-color').value;
    p.categoryLabel = document.getElementById('p-category-label').value ||
      document.getElementById('p-category').options[document.getElementById('p-category').selectedIndex].text;
    p.icon = document.getElementById('p-icon').value;

    if (isNew) {
      currentCmsData.projects.push(p);
    } else {
      currentCmsData.projects[index] = p;
    }

    saveCmsData(currentCmsData);
    closeCmsModal();
    renderProjectsList();
  };
};

/* Gradient & Icon picker helpers */
window.selectGradient = function(value) {
  document.getElementById('p-gradient').value = value;
  document.querySelectorAll('.gradient-swatch-btn').forEach(btn => {
    btn.classList.remove('border-white', 'scale-110', 'ring-2', 'ring-amber-400');
    btn.classList.add('border-slate-700');
  });
  // Highlight selected
  const colorName = value.split('-')[1]; // e.g. "amber"
  const btn = document.getElementById('grad-btn-' + colorName);
  if (btn) {
    btn.classList.add('border-white', 'scale-110', 'ring-2', 'ring-amber-400');
    btn.classList.remove('border-slate-700');
  }
};

window.selectIcon = function(iconId) {
  document.getElementById('p-icon').value = iconId;
  document.querySelectorAll('.icon-picker-btn').forEach(btn => {
    btn.classList.remove('border-amber-400', 'bg-amber-400/10', 'text-amber-300');
    btn.classList.add('border-slate-700', 'bg-slate-800', 'text-slate-400');
  });
  const btn = document.getElementById('icon-btn-' + iconId);
  if (btn) {
    btn.classList.add('border-amber-400', 'bg-amber-400/10', 'text-amber-300');
    btn.classList.remove('border-slate-700', 'bg-slate-800', 'text-slate-400');
  }
};

window.closeCmsModal = function() {
  document.getElementById('cms-modal').classList.add('hidden');
};

/* 5. Contact Form */
function renderContactForm() {
  const form = document.getElementById('contact-cms-form');
  if (!form) return;

  const c = currentCmsData.contact;

  form.innerHTML = `
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Contact Section Headline</label>
        <input type="text" id="contact-headline" value="${escapeHtml(c.headline)}" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Subheadline</label>
        <textarea id="contact-subheadline" rows="2" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">${escapeHtml(c.subheadline)}</textarea>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Email Address</label>
          <input type="email" id="contact-email" value="${escapeHtml(c.email)}" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Response Guarantee Text</label>
          <input type="text" id="contact-response" value="${escapeHtml(c.responseTime)}" class="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-slate-700 text-white text-sm focus:border-amber-400">
        </div>
      </div>

      <button type="submit" class="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 border-2 border-slate-950 shadow-offset font-heading transition-all">
        Publish Contact Changes ✦
      </button>
    </div>
  `;

  form.onsubmit = (e) => {
    e.preventDefault();
    currentCmsData.contact.headline = document.getElementById('contact-headline').value;
    currentCmsData.contact.subheadline = document.getElementById('contact-subheadline').value;
    currentCmsData.contact.email = document.getElementById('contact-email').value;
    currentCmsData.contact.responseTime = document.getElementById('contact-response').value;
    saveCmsData(currentCmsData);
  };
}

/* Global Actions */
function initGlobalActions() {
  const resetBtn = document.getElementById('reset-cms-btn');
  const exportBtn = document.getElementById('export-cms-btn');
  const importInput = document.getElementById('import-cms-file');
  const clearCacheBtn = document.getElementById('clear-cache-btn');
  const viewLiveBtn = document.getElementById('view-live-btn');

  // Initialize viewLiveBtn with direct URL to http://localhost:8765/index.html
  const currentVersion = localStorage.getItem('portfolio_cache_version');
  if (viewLiveBtn) {
    viewLiveBtn.href = currentVersion ? `http://localhost:8765/index.html?v=${currentVersion}` : `http://localhost:8765/index.html`;
    viewLiveBtn.onclick = (e) => {
      e.preventDefault();
      const v = localStorage.getItem('portfolio_cache_version') || Date.now();
      window.open(`http://localhost:8765/index.html?v=${v}`, '_blank');
    };
  }

  if (clearCacheBtn) {
    clearCacheBtn.onclick = async () => {
      const originalText = clearCacheBtn.innerHTML;
      clearCacheBtn.disabled = true;
      clearCacheBtn.innerHTML = '⏳ Clearing...';

      try {
        // 1. Purge CacheStorage API
        if (window.caches) {
          const cacheKeys = await caches.keys();
          await Promise.all(cacheKeys.map(key => caches.delete(key)));
        }

        // 2. Unregister any service workers
        if (navigator.serviceWorker) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          await Promise.all(registrations.map(reg => reg.unregister()));
        }

        // 3. Clear sessionStorage
        sessionStorage.clear();

        // 4. Update asset version timestamp in localStorage
        const newVer = Date.now();
        localStorage.setItem('portfolio_cache_version', newVer);

        // 5. Update View Live Site link so it loads fresh
        if (viewLiveBtn) {
          viewLiveBtn.href = `http://localhost:8765/index.html?v=${newVer}`;
        }

        showCmsToast('Cache cleared! Browser storage purged & cache-busted (v=' + newVer.toString().slice(-4) + ') ✦');

        clearCacheBtn.innerHTML = '✅ Cleared!';
        setTimeout(() => {
          clearCacheBtn.innerHTML = originalText;
          clearCacheBtn.disabled = false;
        }, 1800);
      } catch (err) {
        console.error('Clear cache error:', err);
        showCmsToast('Cache cleared with notice: ' + (err.message || 'Complete'));
        clearCacheBtn.innerHTML = originalText;
        clearCacheBtn.disabled = false;
      }
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('Reset all content back to original default dataset?')) {
        localStorage.removeItem('portfolio_cms_content');
        currentCmsData = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
        saveCmsData(currentCmsData);
        location.reload();
      }
    };
  }

  if (exportBtn) {
    exportBtn.onclick = () => {
      const blob = new Blob([JSON.stringify(currentCmsData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio_cms_content.json';
      a.click();
      URL.revokeObjectURL(url);
    };
  }

  if (importInput) {
    importInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          saveCmsData(imported);
          location.reload();
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
      reader.readAsText(file);
    };
  }
}

function showCmsToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-50 bg-amber-400 text-slate-950 font-extrabold px-5 py-3 rounded-2xl shadow-offset border-2 border-slate-950 font-heading text-sm';
  toast.innerHTML = `✨ ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

/* ====================================================
   LEADS FORM MANAGER
   Reads / writes localStorage key: 'portfolio_leads'
   Lead schema: { id, name, email, message, submittedAt, status }
   Status values: 'new' | 'read' | 'followup'
   ==================================================== */

let leadsCurrentFilter = 'all';

function loadLeads() {
  try {
    const raw = localStorage.getItem('portfolio_leads');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) { return []; }
}

function saveLeads(leads) {
  localStorage.setItem('portfolio_leads', JSON.stringify(leads));
}

function updateLeadStatus(leadId, newStatus) {
  const leads = loadLeads();
  const lead = leads.find(l => l.id === leadId);
  if (lead) {
    lead.status = newStatus;
    saveLeads(leads);
    renderLeadsPanel();
    updateLeadsNavBadge();
  }
}

window.updateLeadStatus = updateLeadStatus;

function deleteLead(leadId) {
  if (!confirm('Delete this lead permanently?')) return;
  const leads = loadLeads().filter(l => l.id !== leadId);
  saveLeads(leads);
  renderLeadsPanel();
  updateLeadsNavBadge();
}

window.deleteLead = deleteLead;

function toggleLeadMessage(leadId) {
  const el = document.getElementById('lead-msg-' + leadId);
  const btn = document.getElementById('lead-msg-btn-' + leadId);
  if (!el) return;
  const isHidden = el.classList.contains('hidden');
  el.classList.toggle('hidden', !isHidden);
  if (btn) btn.textContent = isHidden ? '▲ Hide Message' : '▼ Read Message';

  // Auto-mark as read when expanded
  if (isHidden) {
    const leads = loadLeads();
    const lead = leads.find(l => l.id === leadId);
    if (lead && lead.status === 'new') {
      lead.status = 'read';
      saveLeads(leads);
      updateLeadsNavBadge();
      // refresh the status selector in-place
      const sel = document.getElementById('status-sel-' + leadId);
      if (sel) sel.value = 'read';
      // Update the status pill
      const pill = document.getElementById('status-pill-' + leadId);
      if (pill) {
        pill.className = 'status-pill px-2.5 py-1 rounded-full text-[10px] font-extrabold border ' + statusPillClass('read');
        pill.textContent = statusLabel('read');
      }
    }
  }
}

window.toggleLeadMessage = toggleLeadMessage;

function statusPillClass(status) {
  switch (status) {
    case 'new':      return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    case 'read':     return 'bg-slate-600/40 text-slate-300 border-slate-500/40';
    case 'followup': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    default:         return 'bg-slate-600/40 text-slate-300 border-slate-500/40';
  }
}

function statusLabel(status) {
  switch (status) {
    case 'new':      return '🔴 New';
    case 'read':     return '⚪ Read';
    case 'followup': return '🟡 Follow Up';
    default:         return status;
  }
}

function updateLeadsNavBadge() {
  const leads = loadLeads();
  const newCount = leads.filter(l => !l.status || l.status === 'new').length;
  const badge = document.getElementById('leads-new-badge');
  if (!badge) return;
  if (newCount > 0) {
    badge.textContent = newCount;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function renderLeadsPanel() {
  const container = document.getElementById('leads-table-container');
  if (!container) return;

  const allLeads = loadLeads().map(l => ({
    ...l,
    status: l.status || 'new'  // default untagged leads to 'new'
  }));

  // Update counts
  const counts = { all: allLeads.length, new: 0, read: 0, followup: 0 };
  allLeads.forEach(l => { if (counts[l.status] !== undefined) counts[l.status]++; });

  const countEl = (id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = counts[id.replace('count-', '')] ?? 0;
  };
  ['count-all', 'count-new', 'count-read', 'count-followup'].forEach(countEl);

  // Filter
  const filtered = leadsCurrentFilter === 'all'
    ? allLeads
    : allLeads.filter(l => l.status === leadsCurrentFilter);

  // Init filter buttons (only once via delegation on first render)
  if (!container.dataset.filterBound) {
    container.dataset.filterBound = '1';
    document.querySelectorAll('.leads-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        leadsCurrentFilter = btn.dataset.filter;
        document.querySelectorAll('.leads-filter-btn').forEach(b => {
          b.classList.remove('active-filter', 'bg-amber-400', 'text-slate-950', 'border-slate-950');
          b.classList.add('bg-slate-800', 'text-slate-300', 'border-slate-700');
        });
        btn.classList.add('active-filter', 'bg-amber-400', 'text-slate-950', 'border-slate-950');
        btn.classList.remove('bg-slate-800', 'text-slate-300', 'border-slate-700');
        renderLeadsPanel();
      });
    });

    // Refresh button
    const refreshBtn = document.getElementById('leads-refresh-btn');
    if (refreshBtn) refreshBtn.onclick = () => { renderLeadsPanel(); updateLeadsNavBadge(); };

    // Clear all read button
    const clearReadBtn = document.getElementById('leads-clear-read-btn');
    if (clearReadBtn) {
      clearReadBtn.onclick = () => {
        if (!confirm('Delete all leads with "Read" status?')) return;
        const remaining = loadLeads().filter(l => (l.status || 'new') !== 'read');
        saveLeads(remaining);
        renderLeadsPanel();
        updateLeadsNavBadge();
      };
    }

    // Inject test lead button
    const injectBtn = document.getElementById('leads-inject-btn');
    if (injectBtn) {
      injectBtn.onclick = () => {
        const names = ['Sarah Jenkins', 'Ahmad Fauzi', 'Budi Santoso', 'Jessica Tan', 'Reza Putra'];
        const domains = ['gmail.com', 'company.com', 'startup.io', 'corp.id'];
        const messages = [
          'Hi! I need help building a government portal with data visualization and role-based access.',
          'We are looking for an IT PM to lead a 6-month e-commerce platform revamp project.',
          'Our team needs a website specialist for a banking landing page. Budget is flexible.',
          'Looking for someone to manage the delivery of a mobile app for our logistics company.',
        ];
        const name = names[Math.floor(Math.random() * names.length)];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        const testLead = {
          id: 'lead-test-' + Date.now(),
          name: name,
          email: name.toLowerCase().replace(' ', '.') + '@' + domain,
          message: messages[Math.floor(Math.random() * messages.length)],
          status: 'new',
          submittedAt: new Date().toISOString()
        };
        const leads = loadLeads();
        leads.unshift(testLead);
        saveLeads(leads);
        renderLeadsPanel();
        updateLeadsNavBadge();
        showCmsToast('Test lead injected! ✦');
      };
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center gap-4">
        <div class="text-5xl opacity-30">📭</div>
        <p class="text-slate-400 text-sm font-medium">No leads found for this filter.</p>
        <p class="text-slate-500 text-xs">New submissions from the Direct Message form will appear here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="space-y-3">
      ${filtered.map(lead => {
        const date = new Date(lead.submittedAt);
        const dateStr = isNaN(date) ? '—' : date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        const timeStr = isNaN(date) ? '' : date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

        return `
          <div class="lead-card group p-5 rounded-2xl bg-slate-800/60 border-2 ${lead.status === 'new' ? 'border-rose-500/50' : lead.status === 'followup' ? 'border-amber-500/40' : 'border-slate-700'} hover:border-slate-500 transition-all">

            <!-- Top row: name, email, date, status pill -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
              <div class="flex items-center gap-3 min-w-0">
                <!-- Avatar -->
                <div class="w-9 h-9 rounded-xl bg-slate-700 border-2 border-slate-600 flex-shrink-0 flex items-center justify-center text-sm font-extrabold text-amber-300 font-heading">
                  ${escapeHtml((lead.name || '?')[0].toUpperCase())}
                </div>
                <div class="min-w-0">
                  <p class="text-sm font-extrabold text-white font-heading leading-tight truncate">${escapeHtml(lead.name || 'Unknown')}</p>
                  <p class="text-xs text-slate-400 truncate">${escapeHtml(lead.email || '—')}</p>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-2 flex-shrink-0">
                <!-- Date -->
                <div class="text-[10px] text-slate-500 font-medium">${dateStr}<br><span class="text-slate-600">${timeStr}</span></div>

                <!-- Status Pill -->
                <span id="status-pill-${lead.id}" class="status-pill px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${statusPillClass(lead.status)}">
                  ${statusLabel(lead.status)}
                </span>
              </div>
            </div>

            <!-- Actions row -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <!-- Status changer -->
              <select id="status-sel-${lead.id}"
                onchange="updateLeadStatus('${lead.id}', this.value)"
                class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-[11px] font-bold cursor-pointer focus:border-amber-400 outline-none">
                <option value="new"      ${lead.status === 'new'      ? 'selected' : ''}>🔴 Mark as New</option>
                <option value="read"     ${lead.status === 'read'     ? 'selected' : ''}>⚪ Mark as Read</option>
                <option value="followup" ${lead.status === 'followup' ? 'selected' : ''}>🟡 Mark as Follow Up</option>
              </select>

              <!-- Read message toggle -->
              <button id="lead-msg-btn-${lead.id}"
                onclick="toggleLeadMessage('${lead.id}')"
                class="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-amber-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all">
                ▼ Read Message
              </button>

              <!-- Reply via email -->
              <a href="mailto:${escapeHtml(lead.email || '')}?subject=Re: Your Project Inquiry"
                class="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all inline-flex items-center gap-1">
                ✉ Reply
              </a>

              <!-- Delete -->
              <button onclick="deleteLead('${lead.id}')"
                class="ml-auto px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-rose-400 bg-slate-900 border border-rose-900/40 hover:bg-rose-950/50 transition-all">
                🗑 Delete
              </button>
            </div>

            <!-- Expandable message -->
            <div id="lead-msg-${lead.id}" class="hidden mt-3 pt-3 border-t-2 border-slate-700/60">
              <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Project Overview / Message</p>
              <p class="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap bg-slate-900/60 rounded-xl p-4 border border-slate-700">${escapeHtml(lead.message || '(no message)')}</p>
            </div>

          </div>
        `;
      }).join('')}
    </div>
  `;
}


/* ── Authentication Manager ────────────────────────────── */

const CMS_SESSION_KEY = 'cms_session_token';
const CMS_SESSION_EXPIRY_KEY = 'cms_session_expiry';
const CMS_SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

function checkAuthSession() {
  const token = sessionStorage.getItem(CMS_SESSION_KEY);
  const expiry = sessionStorage.getItem(CMS_SESSION_EXPIRY_KEY);
  const loginOverlay = document.getElementById('cms-login');
  const cmsApp = document.getElementById('cms-app');

  // Also clear any old localStorage token from previous version
  localStorage.removeItem('cms_session_token');

  const isValid = token === 'active' && expiry && Date.now() < parseInt(expiry, 10);

  if (isValid) {
    loginOverlay.classList.add('hidden');
    cmsApp.classList.remove('hidden');
    cmsApp.classList.add('flex');
    initCms();
  } else {
    // Clear any expired session
    sessionStorage.removeItem(CMS_SESSION_KEY);
    sessionStorage.removeItem(CMS_SESSION_EXPIRY_KEY);
    loginOverlay.classList.remove('hidden');
    cmsApp.classList.add('hidden');
    cmsApp.classList.remove('flex');
  }
}

document.getElementById('cms-login-form').onsubmit = (e) => {
  e.preventDefault();
  const userIn = document.getElementById('login-username').value.trim();
  const passIn = document.getElementById('login-password').value.trim();
  const loginBtn = e.target.querySelector('button[type="submit"]');

  if (!userIn || !passIn) return;

  // Brief loading state
  if (loginBtn) { loginBtn.disabled = true; loginBtn.textContent = 'Verifying...'; }

  const users = currentCmsData.adminUsers || DEFAULT_PORTFOLIO_DATA.adminUsers;
  const validUser = users.find(u => u.username === userIn && u.password === passIn);

  setTimeout(() => {
    if (validUser) {
      sessionStorage.setItem(CMS_SESSION_KEY, 'active');
      sessionStorage.setItem(CMS_SESSION_EXPIRY_KEY, String(Date.now() + CMS_SESSION_DURATION_MS));
      document.getElementById('cms-login-form').reset();
      checkAuthSession();
    } else {
      // Show inline error instead of alert
      const errEl = document.getElementById('login-error-msg');
      if (errEl) {
        errEl.textContent = '⚠ Invalid username or password. Please try again.';
        errEl.classList.remove('hidden');
        setTimeout(() => errEl.classList.add('hidden'), 4000);
      }
      if (loginBtn) { loginBtn.disabled = false; loginBtn.textContent = 'Secure Login ✦'; }
    }
  }, 400);
};

document.getElementById('logout-btn').onclick = () => {
  sessionStorage.removeItem(CMS_SESSION_KEY);
  sessionStorage.removeItem(CMS_SESSION_EXPIRY_KEY);
  checkAuthSession();
};

/* ── User Management CRUD ────────────────────────────── */

function renderUsersList() {
  const container = document.getElementById('users-cms-list');
  if (!container) return;
  const users = currentCmsData.adminUsers || [];
  
  if (users.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-slate-500 text-sm font-bold border-2 border-dashed border-slate-700 rounded-2xl">No admin users found.</div>`;
    return;
  }
  
  let html = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`;
  users.forEach((u, idx) => {
    html += `
      <div class="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col gap-2">
        <div class="flex items-start justify-between">
          <div>
            <div class="font-extrabold text-white text-sm">${escapeHtml(u.username)}</div>
            <div class="text-[10px] font-bold text-amber-300 uppercase">${escapeHtml(u.role || 'Admin')}</div>
          </div>
          <div class="flex items-center gap-1">
            <button onclick="openUserModalEditor(${idx})" class="p-1.5 rounded-lg bg-slate-700 text-slate-300 hover:text-white hover:bg-slate-600 transition-colors" title="Edit">✏️</button>
            <button onclick="deleteUser(${idx})" class="p-1.5 rounded-lg bg-slate-700 text-rose-400 hover:text-white hover:bg-rose-900 transition-colors" title="Delete">🗑</button>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

window.deleteUser = function(index) {
  if (currentCmsData.adminUsers.length <= 1) {
    alert("Cannot delete the last remaining admin user.");
    return;
  }
  if (confirm(`Are you sure you want to delete user "${currentCmsData.adminUsers[index].username}"?`)) {
    currentCmsData.adminUsers.splice(index, 1);
    saveCmsData(currentCmsData);
    renderUsersList();
  }
};

window.openUserModalEditor = function(index) {
  const isNew = index === null;
  const u = isNew ? {
    id: 'usr-' + Date.now(),
    username: '',
    password: '',
    role: 'Admin'
  } : JSON.parse(JSON.stringify(currentCmsData.adminUsers[index]));

  const modalBackdrop = document.getElementById('cms-modal');
  const modalBody = document.getElementById('cms-modal-body');

  modalBody.innerHTML = `
    <div class="p-6 bg-slate-900 border-2 border-slate-700 rounded-3xl space-y-4 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between pb-3 border-b-2 border-slate-800">
        <h3 class="text-lg font-bold text-white font-heading">${isNew ? 'Create New Admin User' : 'Edit User: ' + escapeHtml(u.username)}</h3>
        <button onclick="closeCmsModal()" class="text-slate-400 hover:text-white font-bold">✕</button>
      </div>

      <form id="user-crud-form" class="space-y-4 text-xs">
        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Username</label>
          <input type="text" id="u-username" value="${escapeHtml(u.username)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold">
        </div>
        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Password</label>
          <input type="text" id="u-password" value="${escapeHtml(u.password)}" required class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold">
        </div>
        <div>
          <label class="block font-bold text-slate-300 uppercase mb-1">Role</label>
          <select id="u-role" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold">
            <option value="Super Admin" ${u.role === 'Super Admin' ? 'selected' : ''}>Super Admin</option>
            <option value="Admin" ${u.role === 'Admin' ? 'selected' : ''}>Admin</option>
          </select>
        </div>

        <button type="submit" class="w-full py-3 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 border-2 border-slate-950 font-heading">
          Save User ✦
        </button>
      </form>
    </div>
  `;

  modalBackdrop.classList.remove('hidden');

  document.getElementById('user-crud-form').onsubmit = (e) => {
    e.preventDefault();
    u.username = document.getElementById('u-username').value.trim();
    u.password = document.getElementById('u-password').value.trim();
    u.role = document.getElementById('u-role').value;

    if (isNew) {
      if (!currentCmsData.adminUsers) currentCmsData.adminUsers = [];
      const exists = currentCmsData.adminUsers.find(x => x.username === u.username);
      if (exists) {
        alert("Username already exists.");
        return;
      }
      currentCmsData.adminUsers.push(u);
    } else {
      currentCmsData.adminUsers[index] = u;
    }

    saveCmsData(currentCmsData);
    closeCmsModal();
    renderUsersList();
  };
};

