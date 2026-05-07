/* ===========================================================
   Omar Saber — Portfolio (Profile build)
   Vanilla JS: animations, interactivity, AI chatbot, etc.
   =========================================================== */

(() => {
  'use strict';

  // ------------------------------------------------------------
  // DATA
  // ------------------------------------------------------------

  const GRADIENTS = {
    'cyan-blue':       'linear-gradient(135deg, #06b6d4, #3b82f6)',
    'violet-purple':   'linear-gradient(135deg, #8b5cf6, #a855f7)',
    'emerald-teal':    'linear-gradient(135deg, #10b981, #14b8a6)',
    'orange-red':      'linear-gradient(135deg, #f97316, #ef4444)',
    'pink-rose':       'linear-gradient(135deg, #ec4899, #f43f5e)',
    'indigo-blue':     'linear-gradient(135deg, #6366f1, #3b82f6)',
    'yellow-orange':   'linear-gradient(135deg, #eab308, #f97316)',
    'purple-pink':     'linear-gradient(135deg, #a855f7, #ec4899)',
    'teal-cyan':       'linear-gradient(135deg, #14b8a6, #06b6d4)',
    'fuchsia-violet':  'linear-gradient(135deg, #d946ef, #8b5cf6)',
  };

  const EXPERIENCES = [
    {
      title: 'AI Engineer (Automation integrated with Backend)',
      company: 'Jameia.com',
      location: 'Kuwait',
      period: 'Feb 2025 – Present',
      icon: 'cpu',
      logo: 'jameia',
      description: 'Designing and developing AI-driven automation workflows integrated with backend systems to optimize business operations. Building scalable backend services with Java and Spring Boot, orchestrating workflows in n8n (notifications, approvals, process management), and deploying AI agents for repetitive business tasks, customer interactions, and operational processes. Managing authentication, role-based access control, AWS deployment, Docker, CI/CD, and database optimization with SQL and Flyway.',
      technologies: ['AI Agents', 'n8n', 'Java', 'Spring Boot', 'AWS', 'Docker', 'CI/CD', 'REST APIs', 'Flyway'],
      gradient: 'fuchsia-violet',
    },
    {
      title: 'Chief Technology Officer (CTO)',
      company: 'Dyar Hajer Consultants',
      location: 'Saudi Arabia',
      period: 'Aug 2025 – Apr 2026',
      icon: 'users',
      logo: 'dyar',
      description: 'Defining and executing the company\'s technology strategy aligned with business goals. Leading cross-functional teams (Backend, Frontend, DevOps, QA), designing scalable Microservices architectures on AWS, governing the tech stack, and supervising the full SDLC from planning to deployment. Ensuring system security, performance, scalability, and reliability while mentoring engineering teams and driving continuous innovation.',
      technologies: ['Tech Strategy', 'Microservices', 'AWS', 'Docker', 'CI/CD', 'Team Leadership', 'SDLC'],
      gradient: 'cyan-blue',
    },
    {
      title: 'Senior Software Engineer | Project Manager',
      company: 'Dyar Hajer Consultants',
      location: 'Saudi Arabia',
      period: 'Jul 2025 – Present',
      icon: 'briefcase',
      logo: 'dyar',
      description: 'Leading end-to-end software development projects from requirements gathering to production delivery. Designing and building scalable applications with Java, Spring Boot, and Angular. Managing scope, timelines, milestones, and Agile/Scrum sprints. Coordinating with stakeholders, conducting code reviews, and resolving technical risks and delivery blockers.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Agile / Scrum', 'PMP', 'Code Review'],
      gradient: 'violet-purple',
    },
    {
      title: 'Software Engineer',
      company: 'Armed Forces Agouza Rehabilitation & Rheumatology Center (ARRC)',
      location: 'Cairo',
      period: 'May 2024 – Jun 2025',
      icon: 'code',
      logo: 'arrc',
      description: 'Designed, developed, tested, and maintained internal software systems. Applied software engineering principles to solve real operational challenges. Participated in system analysis, implementation, and continuous improvement. Supported system optimization, debugging, and long-term maintenance.',
      technologies: ['Software Engineering', 'System Analysis', 'Debugging', 'SQL Server', 'Maintenance'],
      gradient: 'emerald-teal',
    },
    {
      title: 'IT Support Engineer',
      company: 'Armed Forces Agouza Rehabilitation & Rheumatology Center (ARRC)',
      location: 'Cairo',
      period: 'May 2024 – Jun 2025',
      icon: 'shield',
      logo: 'arrc',
      description: 'Managed biometric attendance systems integrated with SQL Server databases. Maintained and monitored security camera systems. Provided help desk support for PCs, printers, and network issues. Ensured system reliability, data security, and minimal downtime in a high-availability environment.',
      technologies: ['Biometric Systems', 'SQL Server', 'Security Cameras', 'Help Desk', 'Networking'],
      gradient: 'orange-red',
    },
    {
      title: 'Backend Developer',
      company: 'Infantry House — Armed Forces of Egypt',
      location: 'Cairo',
      period: 'Apr 2024 – May 2024',
      icon: 'cpu',
      logo: 'infantry',
      description: 'Developed and maintained high-performance RESTful APIs using Java and Spring Boot. Designed backend systems following MVC and Microservices architecture. Optimized application performance, scalability, and reliability while enforcing clean code principles and backend best practices.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'MVC', 'Microservices', 'Performance Tuning'],
      gradient: 'pink-rose',
    },
    {
      title: 'Backend Developer (Freelance)',
      company: 'Remote',
      location: 'Egypt / Remote',
      period: 'Aug 2023 – Sep 2023',
      icon: 'cloud',
      logo: 'freelance',
      description: 'Designed and implemented RESTful APIs for scalable backend services. Developed optimized data models using SQL and NoSQL databases. Handled request validation, business logic, and performance optimization following MVC and Microservices principles.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'NoSQL', 'MVC'],
      gradient: 'indigo-blue',
    },
  ];

  // ----- LOGO BADGE LIBRARY -----
  // image: optional path to a real logo file inside profile/logos/
  //        (you can drop a logo file there manually; if it loads, it will show, else fall back to text)
  // text + bg: fallback text badge
  const LOGOS = {
    jameia:   { image: 'logos/jameia.png',     text: 'JM',   bg: 'linear-gradient(135deg,#f97316,#ef4444)', fg: '#fff' },
    dyar:     { image: 'logos/dyar.png',       text: 'DH',   bg: 'linear-gradient(135deg,#0f766e,#14b8a6)', fg: '#fff' },
    arrc:     { image: 'logos/arrc.png',       text: 'AR',   bg: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', fg: '#fff' },
    infantry: { image: 'logos/infantry.png',   text: 'IH',   bg: 'linear-gradient(135deg,#365314,#65a30d)', fg: '#fff' },
    freelance:{                                text: 'FR',   bg: 'linear-gradient(135deg,#475569,#94a3b8)', fg: '#fff' },
    pmi:      { image: 'logos/pmi.png',        text: 'PMI',  bg: 'linear-gradient(135deg,#7c3aed,#a855f7)', fg: '#fff' },
    microsoft:{ image: 'logos/microsoft.png',  text: 'MS',   bg: 'linear-gradient(135deg,#0078d4,#005a9e)', fg: '#fff' },
    depi:     { image: 'logos/depi.png',       text: 'DEPI', bg: 'linear-gradient(135deg,#15803d,#22c55e)', fg: '#fff' },
    fue:      { image: 'logos/fue.png',        text: 'FUE',  bg: 'linear-gradient(135deg,#991b1b,#dc2626)', fg: '#fff' },
    cincinnati:{ image: 'logos/cincinnati.png',text: 'UC',   bg: 'linear-gradient(135deg,#991b1b,#000000)', fg: '#fff' },
    bue:      { image: 'logos/bue.png',        text: 'BUE',  bg: 'linear-gradient(135deg,#1e40af,#3b82f6)', fg: '#fff' },
    zewail:   { image: 'logos/zewail.png',     text: 'ZC',   bg: 'linear-gradient(135deg,#0e7490,#06b6d4)', fg: '#fff' },
    iao:      { image: 'logos/iao.png',        text: 'IAO',  bg: 'linear-gradient(135deg,#7c2d12,#ea580c)', fg: '#fff' },
    aitb:     { image: 'logos/aitb.png',       text: 'AITB', bg: 'linear-gradient(135deg,#1e3a8a,#f97316)', fg: '#fff' },
    ottobock: { image: 'logos/ottobock.png',   text: 'OB',   bg: 'linear-gradient(135deg,#fbbf24,#f59e0b)', fg: '#1f2937' },
  };

  // Cache of which logo files actually exist (HEAD-checked once at startup)
  const LOGO_AVAILABLE = new Set();

  function logoBadge(key, size = 48) {
    const l = LOGOS[key];
    if (!l) return '';
    const fontSize = l.text.length > 2 ? size * 0.32 : size * 0.42;
    const textBadge = `<div class="company-logo" style="width:${size}px;height:${size}px;background:${l.bg};color:${l.fg};font-size:${fontSize}px">${l.text}</div>`;

    if (l.image && LOGO_AVAILABLE.has(key)) {
      return `<div class="company-logo-img" style="width:${size}px;height:${size}px">
        <img src="${l.image}" alt="${l.text}" loading="lazy" />
      </div>`;
    }
    return textBadge;
  }

  // Probe each logo URL once at startup. After all probes complete, re-render
  // the cards that have been built so far.
  async function detectAvailableLogos() {
    const probes = Object.entries(LOGOS)
      .filter(([, v]) => v.image)
      .map(async ([key, v]) => {
        try {
          const res = await fetch(v.image, { method: 'HEAD' });
          if (res.ok) LOGO_AVAILABLE.add(key);
        } catch (e) { /* ignore */ }
      });
    await Promise.all(probes);
  }

  // Devicon CDN base — official tech logos as SVG
  const DEVI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

  // ===========================================================
  // TECH MARQUEE — items with optional real logo (devicon)
  // ===========================================================
  const MARQUEE_ITEMS = [
    { label: 'Java',              emoji: '☕',  iconUrl: `${DEVI}/java/java-original.svg` },
    { label: 'Spring Boot',       emoji: '🌱',  iconUrl: `${DEVI}/spring/spring-original.svg` },
    { label: 'Angular',           emoji: '🅰️', iconUrl: `${DEVI}/angularjs/angularjs-original.svg` },
    { label: 'Microservices',     emoji: '📦' },
    { label: 'REST APIs',         emoji: '🔗' },
    { label: 'AWS',               emoji: '☁️',  iconUrl: `${DEVI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { label: 'Docker',            emoji: '🐳',  iconUrl: `${DEVI}/docker/docker-original.svg` },
    { label: 'CI/CD',             emoji: '🚀',  iconUrl: `${DEVI}/jenkins/jenkins-original.svg` },
    { label: 'Kubernetes',        emoji: '⚙️', iconUrl: `${DEVI}/kubernetes/kubernetes-plain.svg` },
    { label: 'SQL Server',        emoji: '💾',  iconUrl: `${DEVI}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
    { label: 'NoSQL',             emoji: '🗄️', iconUrl: `${DEVI}/mongodb/mongodb-original.svg` },
    { label: 'MVC Architecture',  emoji: '🏛️' },
    { label: 'Machine Learning',  emoji: '🧠',  iconUrl: `${DEVI}/tensorflow/tensorflow-original.svg` },
    { label: 'AI',                emoji: '🤖',  iconUrl: `${DEVI}/pytorch/pytorch-original.svg` },
    { label: 'Linux',             emoji: '🐧',  iconUrl: `${DEVI}/linux/linux-original.svg` },
    { label: 'Secure API Design', emoji: '🔐' },
    { label: 'PMP',               emoji: '🏆' },
    { label: 'Agile / Scrum',     emoji: '🌀' },
    { label: 'Git',               emoji: '🌳',  iconUrl: `${DEVI}/git/git-original.svg` },
    { label: 'GitHub',            emoji: '🐙',  iconUrl: `${DEVI}/github/github-original.svg` },
  ];

  function buildMarquee() {
    const track = $('#marqueeTrack');
    if (!track) return;

    const itemHtml = (it) => {
      const icon = it.iconUrl
        ? `<span class="marquee-icon" data-emoji="${it.emoji}">
             <img src="${it.iconUrl}" alt=""
                  onerror="this.parentElement.classList.add('failed');this.remove();" />
           </span>`
        : `<span class="marquee-icon" data-emoji="${it.emoji}" style="font-size:1.1rem">${it.emoji}</span>`;
      return `<div class="marquee-item">${icon}<span>${it.label}</span></div>`;
    };

    const rowHtml = `<div class="marquee-row">${MARQUEE_ITEMS.map(itemHtml).join('')}</div>`;
    // Two identical rows so the -50% animation loops seamlessly
    track.innerHTML = rowHtml + rowHtml;
  }

  // ===========================================================
  // I18N — Arabic ↔ English translations for UI chrome
  // ===========================================================
  const I18N = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.certificates': 'Certificates',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.download_cv': 'Download CV',

      'hero.pill': '💼 Software Engineer • CTO • PMP Certified',
      'hero.sub': 'Senior Software Engineer & Technology Leader. I design and deliver scalable, secure, high-performance systems with Java, Spring Boot, Microservices, and AWS — and lead teams from concept to production.',
      'hero.hire_me': 'Hire Me',
      'hero.view_projects': 'View Projects',
      'hero.chat_ai': "Chat with Omar's AI",

      'chat.assistant': 'Omar AI Assistant',
      'chat.online': 'Online',

      'about.title': 'About Me',
      'experience.title': 'Experience Timeline',
      'skills.title': 'Skills Galaxy',
      'skills.desc': 'A comprehensive toolkit spanning backend engineering, AI automation, cloud architecture, and modern development practices.',
      'certs.title': 'Certifications & Education',
      'certs.desc': 'Professional certifications and credentials validating expertise across AI, cloud, backend development, and project management.',
      'projects.title': 'Featured Projects',
      'projects.desc': 'Real-world solutions delivering measurable business impact through intelligent automation, scalable architecture, and modern engineering.',
      'contact.title': "Let's Build Something Amazing",
      'contact.desc': "Ready to start your next project? Get in touch and let's discuss how we can bring your ideas to life.",
      'contact.get_in_touch': 'Get in Touch',
      'contact.get_in_touch_desc': "Whether you need AI automation, scalable backend systems, or enterprise solutions, I'm here to help transform your vision into reality.",
      'contact.quick_actions': 'Quick Actions',
      'contact.whatsapp': 'WhatsApp Direct',
      'contact.send_message': 'Send a Message',

      'form.name': 'Name *',
      'form.email': 'Email *',
      'form.company': 'Company',
      'form.phone': 'Phone',
      'form.service': 'Service Needed *',
      'form.message': 'Message *',
      'form.send': 'Send Message',
      'form.name_ph': 'Your Name',
      'form.company_ph': 'Company Name',
      'form.message_ph': 'Tell me about your project...',
      'form.select_service': 'Select a service',
      'form.svc_ai': 'AI & Automation',
      'form.svc_backend': 'Backend Development',
      'form.svc_fullstack': 'Full-Stack Development',
      'form.svc_cloud': 'Cloud Architecture',
      'form.svc_consulting': 'Technical Consulting',
      'form.svc_other': 'Other',
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'نبذة',
      'nav.experience': 'الخبرة',
      'nav.skills': 'المهارات',
      'nav.certificates': 'الشهادات',
      'nav.projects': 'المشاريع',
      'nav.contact': 'تواصل',
      'nav.download_cv': 'تحميل السيرة',

      'hero.pill': '💼 مهندس برمجيات • CTO • معتمد PMP',
      'hero.sub': 'مهندس برمجيات أول وقائد تقني. أصمّم وأطوّر أنظمة قابلة للتوسع وآمنة وعالية الأداء باستخدام Java و Spring Boot و Microservices و AWS — وأقود الفرق من الفكرة حتى الإنتاج.',
      'hero.hire_me': 'وظّفني',
      'hero.view_projects': 'شاهد المشاريع',
      'hero.chat_ai': 'تكلم مع عمر AI',

      'chat.assistant': 'مساعد عمر الذكي',
      'chat.online': 'متصل',

      'about.title': 'نبذة عني',
      'experience.title': 'الخبرات المهنية',
      'skills.title': 'مهاراتي',
      'skills.desc': 'مجموعة شاملة من الأدوات تغطي هندسة الباك إند، أتمتة الذكاء الاصطناعي، معمارية السحابة، وأحدث ممارسات التطوير.',
      'certs.title': 'الشهادات والتعليم',
      'certs.desc': 'شهادات مهنية تؤكد الخبرة في الذكاء الاصطناعي، السحابة، تطوير الباك إند، وإدارة المشاريع.',
      'projects.title': 'مشاريع مختارة',
      'projects.desc': 'حلول واقعية تحقق أثرًا ملموسًا في الأعمال من خلال الأتمتة الذكية والمعمارية القابلة للتوسع والهندسة الحديثة.',
      'contact.title': 'هيا نبني شيئًا مذهلاً',
      'contact.desc': 'جاهز لبدء مشروعك القادم؟ تواصل معي ولنناقش كيف نحوّل أفكارك إلى واقع.',
      'contact.get_in_touch': 'تواصل معي',
      'contact.get_in_touch_desc': 'سواء احتجت أتمتة بالذكاء الاصطناعي، أنظمة باك إند قابلة للتوسع، أو حلول مؤسسية — أنا هنا لتحويل رؤيتك إلى واقع.',
      'contact.quick_actions': 'إجراءات سريعة',
      'contact.whatsapp': 'واتساب مباشر',
      'contact.send_message': 'أرسل رسالة',

      'form.name': 'الاسم *',
      'form.email': 'البريد الإلكتروني *',
      'form.company': 'الشركة',
      'form.phone': 'الهاتف',
      'form.service': 'الخدمة المطلوبة *',
      'form.message': 'الرسالة *',
      'form.send': 'إرسال الرسالة',
      'form.name_ph': 'اسمك',
      'form.company_ph': 'اسم الشركة',
      'form.message_ph': 'حدثني عن مشروعك...',
      'form.select_service': 'اختر خدمة',
      'form.svc_ai': 'ذكاء اصطناعي وأتمتة',
      'form.svc_backend': 'تطوير الباك إند',
      'form.svc_fullstack': 'تطوير شامل',
      'form.svc_cloud': 'معمارية سحابية',
      'form.svc_consulting': 'استشارات تقنية',
      'form.svc_other': 'أخرى',
    },
  };

  let currentLang = 'en';

  function applyLang(lang) {
    currentLang = lang;
    const dict = I18N[lang] || I18N.en;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Element text content
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Element attribute (placeholders, titles, etc.)
    $$('[data-i18n-attr]').forEach((el) => {
      const attr = el.getAttribute('data-i18n-attr');
      const key = el.getAttribute('data-i18n-key');
      if (key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });

    // Toggle button visual state
    const btn = $('#langToggle');
    if (btn) {
      btn.querySelector('.lang-en')?.classList.toggle('lang-current', lang === 'en');
      btn.querySelector('.lang-ar')?.classList.toggle('lang-current', lang === 'ar');
    }

    try { localStorage.setItem('omar-lang', lang); } catch (e) { /* ignore */ }
  }

  function initLang() {
    const saved = localStorage.getItem('omar-lang') || 'en';
    applyLang(saved);
    $('#langToggle')?.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  const SKILLS = [
    // Backend
    { name: 'Java', level: 95, category: 'Backend', icon: '☕', color: '#f89820', iconUrl: `${DEVI}/java/java-original.svg` },
    { name: 'Spring Boot', level: 92, category: 'Backend', icon: '🌱', color: '#6db33f', iconUrl: `${DEVI}/spring/spring-original.svg` },
    { name: 'RESTful APIs', level: 93, category: 'Backend', icon: '🔗', color: '#06b6d4' },
    { name: 'API Design & Integration', level: 90, category: 'Backend', icon: '🧬', color: '#0891b2' },
    { name: 'Business Logic', level: 90, category: 'Backend', icon: '💼', color: '#3b82f6' },
    // Architecture
    { name: 'MVC Architecture', level: 92, category: 'Architecture', icon: '🏛️', color: '#eab308' },
    { name: 'Microservices', level: 88, category: 'Architecture', icon: '📦', color: '#f97316' },
    { name: 'System Analysis & Design', level: 88, category: 'Architecture', icon: '📐', color: '#fb923c' },
    { name: 'Performance Optimization', level: 85, category: 'Architecture', icon: '⚡', color: '#fbbf24' },
    // Frontend
    { name: 'Angular', level: 80, category: 'Frontend', icon: '🅰️', color: '#dd0031', iconUrl: `${DEVI}/angularjs/angularjs-original.svg` },
    // Database
    { name: 'SQL', level: 88, category: 'Database', icon: '🗃️', color: '#ec4899', iconUrl: `${DEVI}/mysql/mysql-original.svg` },
    { name: 'SQL Server', level: 90, category: 'Database', icon: '🗄️', color: '#cc2927', iconUrl: `${DEVI}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
    { name: 'NoSQL', level: 75, category: 'Database', icon: '🍃', color: '#22c55e', iconUrl: `${DEVI}/mongodb/mongodb-original.svg` },
    { name: 'Data Modelling', level: 82, category: 'Database', icon: '📊', color: '#f43f5e' },
    { name: 'Query Optimization', level: 80, category: 'Database', icon: '🔍', color: '#db2777' },
    // Cloud & DevOps
    { name: 'AWS', level: 80, category: 'Cloud / DevOps', icon: '☁️', color: '#ff9900', iconUrl: `${DEVI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: 'Docker', level: 75, category: 'Cloud / DevOps', icon: '🐳', color: '#2496ed', iconUrl: `${DEVI}/docker/docker-original.svg` },
    { name: 'CI/CD', level: 78, category: 'Cloud / DevOps', icon: '🚀', color: '#10b981', iconUrl: `${DEVI}/jenkins/jenkins-original.svg` },
    { name: 'Application Deployment', level: 82, category: 'Cloud / DevOps', icon: '📤', color: '#14b8a6', iconUrl: `${DEVI}/kubernetes/kubernetes-plain.svg` },
    // AI / ML
    { name: 'Machine Learning', level: 75, category: 'AI / ML', icon: '🧠', color: '#6366f1', iconUrl: `${DEVI}/tensorflow/tensorflow-original.svg` },
    { name: 'Artificial Intelligence', level: 78, category: 'AI / ML', icon: '🤖', color: '#8b5cf6', iconUrl: `${DEVI}/pytorch/pytorch-original.svg` },
    // Leadership / PM
    { name: 'Project Management (PMP)', level: 90, category: 'Leadership / PM', icon: '🏆', color: '#a855f7' },
    { name: 'Agile / Scrum', level: 88, category: 'Leadership / PM', icon: '🌀', color: '#d946ef' },
    { name: 'Team Leadership', level: 88, category: 'Leadership / PM', icon: '👥', color: '#c026d3' },
    { name: 'Stakeholder Management', level: 85, category: 'Leadership / PM', icon: '🤝', color: '#a21caf' },
    // Security
    { name: 'Secure API Design', level: 82, category: 'Security', icon: '🔐', color: '#ef4444' },
    { name: 'Access Control', level: 80, category: 'Security', icon: '🛡️', color: '#dc2626' },
    { name: 'System Monitoring', level: 78, category: 'Security', icon: '📡', color: '#f97316', iconUrl: `${DEVI}/grafana/grafana-original.svg` },
    // IT & Infrastructure
    { name: 'Biometric Systems', level: 85, category: 'IT & Infra', icon: '👆', color: '#d946ef' },
    { name: 'Security Cameras', level: 80, category: 'IT & Infra', icon: '📹', color: '#a855f7' },
    { name: 'Hardware Troubleshooting', level: 85, category: 'IT & Infra', icon: '🔧', color: '#9333ea', iconUrl: `${DEVI}/linux/linux-original.svg` },
    // Tools
    { name: 'Git', level: 92, category: 'Tools', icon: '🌳', color: '#f05032', iconUrl: `${DEVI}/git/git-original.svg` },
    { name: 'Clean Code', level: 90, category: 'Tools', icon: '✨', color: '#14b8a6' },
    { name: 'Code Review', level: 88, category: 'Tools', icon: '🔍', color: '#06b6d4', iconUrl: `${DEVI}/github/github-original.svg` },
  ];

  const SKILL_CATEGORY_GRAD = {
    Backend: 'cyan-blue',
    Frontend: 'violet-purple',
    'Cloud / DevOps': 'emerald-teal',
    Database: 'pink-rose',
    'AI / ML': 'indigo-blue',
    Architecture: 'yellow-orange',
    'Leadership / PM': 'purple-pink',
    Security: 'orange-red',
    'IT & Infra': 'fuchsia-violet',
    Tools: 'teal-cyan',
  };

  const CERTIFICATES = [
    { title: 'Project Management Professional (PMP)', issuer: 'Project Management Institute (PMI) — via EYOUTH', date: 'Nov 2025', category: 'Project Management', description: 'Global PMI certification (No. 4230110) — formally evaluated for experience, knowledge, and performance in defining and overseeing projects, resources, and organizational objectives. Valid through Nov 2028.', emoji: '🏆', logo: 'pmi', image: 'certificates/pmp.jpeg', gradient: 'cyan-blue' },
    { title: 'Microsoft Machine Learning Engineer', issuer: 'Digital Egypt Pioneers Initiative (DEPI) — MCIT Egypt', date: 'Jun – Dec 2025', category: 'AI & Machine Learning', description: 'Government-sponsored Microsoft track on machine learning engineering — completed and achieved the core learning outcomes of the Digital Egypt Pioneers Program.', emoji: '🤖', logo: 'depi', image: 'certificates/microsoft-ml.jpeg', gradient: 'violet-purple' },
    { title: 'DEPI Team Leader — Certificate of Appreciation', issuer: 'Ministry of Communications & IT — Digital Egypt Pioneers', date: 'Jun – Dec 2025', category: 'Leadership', description: 'Recognized for outstanding leadership and exceptional contributions as a Team Leader in the Digital Egypt Pioneers Program.', emoji: '🎖️', logo: 'depi', image: 'certificates/depi-leader.jpeg', gradient: 'purple-pink' },
    { title: 'Bachelor of Computer Information Technology', issuer: 'Future University in Egypt + University of Cincinnati', date: 'Sep 2023', category: 'Education', description: 'Bachelor degree in Computers and Information Technology, Computer Science major. Dual programme accredited by NAQAAE and ABET. Graduation project grade: Excellent.', emoji: '🎓', logo: 'fue', image: 'certificates/bachelor-fue.jpg', gradient: 'indigo-blue' },
    { title: 'Applications of Artificial Intelligence', issuer: 'British University in Egypt — School of Continuing Education', date: 'Feb 2025', category: 'AI & Machine Learning', description: 'Hands-on training (15 hours) on practical applications of Artificial Intelligence delivered by the Faculty of Engineering.', emoji: '🧠', logo: 'bue', image: 'certificates/ai-bue.jpg', gradient: 'violet-purple' },
    { title: 'Artificial Intelligence (Advanced)', issuer: 'IAO / IMPACT — ISO 21001 Accredited', date: 'Feb 2025', category: 'AI & Machine Learning', description: 'Internationally accredited AI training (Serial ZIN1832) covering applied AI techniques and project workflows.', emoji: '🤖', logo: 'iao', image: 'certificates/ai-iao-2025.jpg', gradient: 'indigo-blue' },
    { title: 'Introduction to Artificial Intelligence', issuer: 'Zewail City of Science & Technology', date: 'Aug 2023', category: 'AI & Machine Learning', description: 'Blended-learning programme on AI fundamentals and applications training (50 hours), delivered jointly with IMPACT.', emoji: '🏛️', logo: 'zewail', image: 'certificates/ai-zewail.jpg', gradient: 'cyan-blue' },
    { title: 'Artificial Intelligence (Foundation)', issuer: 'IAO / IMPACT — ISO 21001 Accredited', date: 'Nov 2023', category: 'AI & Machine Learning', description: 'Internationally accredited AI training (Serial ZIN0671, 50 hours) covering core AI concepts.', emoji: '🧩', logo: 'iao', image: 'certificates/ai-iao-2023.jpg', gradient: 'violet-purple' },
    { title: 'Angular Development Training', issuer: 'AITB Educational Services', date: 'Jul – Aug 2023', category: 'Frontend', description: 'Completed 50-hour Angular Development training — components, services, routing, forms, and modern Angular best practices.', emoji: '🅰️', logo: 'aitb', image: 'certificates/angular-aitb.jpg', gradient: 'orange-red' },
    { title: 'Certificate of Experience — ARRC', issuer: 'Agouza Rehabilitation & Rheumatology Center, Armed Forces of Egypt', date: 'May 2024 – Jun 2025', category: 'Experience', description: 'Official letter of experience from the Information Systems Department of ARRC for Programming and IT work, certifying high level of expertise, competence, and professionalism.', emoji: '🪪', logo: 'arrc', image: 'certificates/arrc-experience.jpg', gradient: 'emerald-teal' },
    { title: 'Workshop on Prosthetics & Orthotics', issuer: 'Agouza Rehabilitation Center / Ottobock', date: 'Nov 2024', category: 'Workshop', description: 'Attended a specialized workshop on prosthetics and orthotics organized by the Agouza Rehabilitation Center in collaboration with Ottobock.', emoji: '🛠️', logo: 'ottobock', image: 'certificates/ottobock-workshop.jpg', gradient: 'yellow-orange' },
  ];

  const PROJECTS = [
    {
      title: 'Dyar Hajer Microservices Platform',
      category: 'Backend & Cloud — Dyar Hajer Consultants',
      icon: 'cloud',
      problem: 'The company needed a scalable, secure, and maintainable architecture aligned with long-term growth and multi-team development.',
      solution: 'Designed and oversaw a Microservices ecosystem on AWS — defined the technology stack, established coding/architecture standards, and built CI/CD pipelines with Docker for reliable deployments.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'CI/CD'],
      impact: ['Scalable multi-service architecture', 'Standardised engineering practices across teams', 'Reliable deployments via CI/CD'],
      gradient: 'cyan-blue',
    },
    {
      title: 'End-to-End Project Delivery (Java + Angular)',
      category: 'Full-Stack Delivery — Dyar Hajer Consultants',
      icon: 'workflow',
      problem: 'Business stakeholders needed product features delivered predictably from requirements to production.',
      solution: 'Led full SDLC delivery with Agile/Scrum — gathered requirements, designed the system, built backend with Java/Spring Boot and frontend with Angular, ran code reviews, and shipped to production.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Agile/Scrum', 'Code Review', 'PMP'],
      impact: ['On-time milestone delivery', 'Higher code quality through reviews', 'Clear stakeholder alignment'],
      gradient: 'violet-purple',
    },
    {
      title: 'ARRC Internal Information Systems',
      category: 'Enterprise Software — ARRC, Cairo',
      icon: 'database',
      problem: 'The center needed reliable internal software systems to streamline daily operations and information flow.',
      solution: 'Designed, developed, tested, and maintained internal applications. Performed system analysis, debugging, and continuous improvement, and supported long-term maintenance and optimization.',
      technologies: ['Java', 'SQL Server', 'System Analysis', 'Debugging', 'Maintenance'],
      impact: ['Improved operational efficiency', 'Stable, maintainable internal tools', 'Resolved real operational challenges'],
      gradient: 'emerald-teal',
    },
    {
      title: 'Biometric Attendance Integration',
      category: 'IT Infrastructure — ARRC, Cairo',
      icon: 'shield',
      problem: 'Fingerprint attendance hardware needed to integrate seamlessly with the central SQL Server database for accurate records.',
      solution: 'Managed biometric attendance scanners and integrated them with SQL Server — ensured data security, system reliability, and minimal downtime in a high-availability environment.',
      technologies: ['Biometric Scanners', 'SQL Server', 'Data Security', 'System Reliability'],
      impact: ['Accurate attendance records', 'Minimal downtime', 'Secure data flow end-to-end'],
      gradient: 'orange-red',
    },
    {
      title: 'High-Performance REST APIs (Infantry House)',
      category: 'Backend Engineering — Armed Forces of Egypt',
      icon: 'cpu',
      problem: 'The unit needed reliable, well-architected backend services to support its operational software.',
      solution: 'Built and maintained high-performance RESTful APIs with Java and Spring Boot, structured around MVC and Microservices, and tuned for performance, scalability, and reliability.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'MVC', 'Microservices'],
      impact: ['Fast, reliable API responses', 'Clean code following best practices', 'Scalable backend foundation'],
      gradient: 'pink-rose',
    },
    {
      title: 'Freelance RESTful Backend Services',
      category: 'Freelance — Remote',
      icon: 'bot',
      problem: 'Clients needed scalable backend services with optimized data access and clean business logic.',
      solution: 'Designed and implemented RESTful APIs with optimized SQL/NoSQL data models, request validation, and business logic — applying MVC and Microservices principles for maintainability.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'NoSQL', 'MVC'],
      impact: ['Scalable backend services', 'Optimized data models', 'Clean, validated request handling'],
      gradient: 'indigo-blue',
    },
  ];

  // ------------------------------------------------------------
  // SVG ICONS
  // ------------------------------------------------------------

  const ICON = (name) => {
    const SVGS = {
      cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/>',
      users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
      code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
      bot: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>',
      workflow: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a2 2 0 0 0 2 2h4"/><path d="M18 9v3a2 2 0 0 1-2 2h-4"/>',
      cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
      chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
      database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    };
    return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${SVGS[name] || ''}</svg>`;
  };

  // ------------------------------------------------------------
  // INIT helpers
  // ------------------------------------------------------------

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const onReady = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  };

  // ------------------------------------------------------------
  // PARTICLES BACKGROUND
  // ------------------------------------------------------------

  function initParticles() {
    const canvas = $('#particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${p.opacity})`;
        ctx.fill();
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i], p2 = particles[j];
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.15 * (1 - d / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(step);
    }
    step();
  }

  // ------------------------------------------------------------
  // MOUSE GLOW
  // ------------------------------------------------------------

  function initMouseGlow() {
    const glow = $('#mouseGlow');
    if (!glow) return;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;

    window.addEventListener('mousemove', (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });

    function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.left = cx + 'px';
      glow.style.top = cy + 'px';
      requestAnimationFrame(loop);
    }
    loop();
  }

  // ------------------------------------------------------------
  // NAVIGATION
  // ------------------------------------------------------------

  function initNav() {
    const nav = $('#nav');
    const burger = $('#navBurger');
    const mobile = $('#navMobile');

    const onScroll = () => {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    burger?.addEventListener('click', () => {
      mobile.classList.toggle('open');
    });

    $$('#navMobile a').forEach((a) => {
      a.addEventListener('click', () => mobile.classList.remove('open'));
    });
  }

  // ------------------------------------------------------------
  // REVEAL ON SCROLL
  // ------------------------------------------------------------

  // Single shared IntersectionObserver — works for elements added later too.
  let revealIO = null;
  function ensureRevealIO() {
    if (revealIO) return revealIO;
    if (!('IntersectionObserver' in window)) return null;
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    return revealIO;
  }

  function observeReveal(el) {
    const io = ensureRevealIO();
    if (!io) { el.classList.add('is-visible'); return; }
    // If already in viewport on observation start, IO will fire immediately.
    io.observe(el);
  }

  function initReveal() {
    const items = $$('.reveal');
    items.forEach(observeReveal);

    // Safety net: any reveal still hidden after 4s but inside viewport gets revealed.
    setTimeout(() => {
      $$('.reveal:not(.is-visible)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    }, 4000);
  }

  // ------------------------------------------------------------
  // COUNTERS (about stats)
  // ------------------------------------------------------------

  function initCounters() {
    const cards = $$('.stat-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const target = parseInt(card.dataset.counter || '0', 10);
        const span = card.querySelector('.counter');
        if (!span) return;
        const duration = 2000;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          span.textContent = Math.floor(p * target).toString();
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(card);
      });
    }, { threshold: 0.3 });
    cards.forEach((c) => io.observe(c));
  }

  // ------------------------------------------------------------
  // TIMELINE
  // ------------------------------------------------------------

  function buildTimeline() {
    const root = $('#timeline');
    if (!root) return;

    EXPERIENCES.forEach((exp, i) => {
      const side = i % 2 === 0 ? 'left' : 'right';
      const item = document.createElement('div');
      item.className = `timeline-item ${side}`;
      item.style.setProperty('--card-grad', GRADIENTS[exp.gradient]);
      item.style.transitionDelay = (i * 0.05) + 's';

      item.innerHTML = `
        <div class="timeline-card-wrap">
          <div class="timeline-card">
            <div class="timeline-card-head">
              ${exp.logo ? logoBadge(exp.logo, 56) : `<div class="timeline-icon">${ICON(exp.icon)}</div>`}
              <div class="timeline-card-meta">
                <h3 class="timeline-title">${exp.title}</h3>
                <p class="timeline-company">${exp.company} • ${exp.location}</p>
              </div>
            </div>
            <p class="timeline-period">${exp.period}</p>
            <p class="timeline-desc">${exp.description}</p>
            <div class="timeline-techs">
              ${exp.technologies.map((t) => `<span class="timeline-tech">${t}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="timeline-dot-wrap">
          <div class="timeline-dot"></div>
        </div>
      `;
      root.appendChild(item);
    });

    // Reveal on scroll — use the shared IO so behavior matches all other cards
    $$('#timeline .timeline-item').forEach((el) => {
      el.classList.add('reveal');
      observeReveal(el);
    });
  }

  // ------------------------------------------------------------
  // SKILLS
  // ------------------------------------------------------------

  let activeSkillCategory = 'all';

  function buildSkillFilters() {
    const root = $('#skillFilters');
    if (!root) return;

    const cats = Array.from(new Set(SKILLS.map((s) => s.category)));
    cats.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = 'skill-filter';
      btn.dataset.cat = cat;
      btn.textContent = cat;
      btn.style.setProperty('--card-grad', GRADIENTS[SKILL_CATEGORY_GRAD[cat]]);
      root.appendChild(btn);
    });

    root.addEventListener('click', (e) => {
      const t = e.target.closest('.skill-filter');
      if (!t) return;
      activeSkillCategory = t.dataset.cat;
      $$('#skillFilters .skill-filter').forEach((b) => {
        b.classList.toggle('active', b === t);
        if (b === t && b.dataset.cat !== 'all') {
          b.style.background = GRADIENTS[SKILL_CATEGORY_GRAD[b.dataset.cat]];
        } else {
          b.style.background = '';
        }
      });
      renderSkills();
    });
  }

  function renderSkills() {
    const grid = $('#skillsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = activeSkillCategory === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeSkillCategory);

    filtered.forEach((skill, i) => {
      const card = document.createElement('div');
      card.className = 'skill-card reveal';
      card.style.setProperty('--card-grad', GRADIENTS[SKILL_CATEGORY_GRAD[skill.category]]);
      card.style.setProperty('--skill-color', skill.color || '#22d3ee');
      card.style.transitionDelay = (i * 0.03) + 's';
      const iconHtml = skill.iconUrl
        ? `<div class="skill-logo skill-logo-img" data-emoji="${skill.icon || '⚡'}">
             <img src="${skill.iconUrl}" alt="" loading="lazy"
                  onerror="this.parentElement.classList.add('failed');this.remove();" />
           </div>`
        : `<div class="skill-logo">${skill.icon || '⚡'}</div>`;

      card.innerHTML = `
        <div class="skill-card-top">
          ${iconHtml}
          <div class="skill-meta">
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-cat">${skill.category}</span>
          </div>
          <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-target="${skill.level}"></div>
        </div>
      `;
      grid.appendChild(card);
    });

    // Reveal + animate bars (uses shared IO for consistency)
    const barIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        const fill = entry.target.querySelector('.skill-bar-fill');
        if (fill) {
          requestAnimationFrame(() => {
            fill.style.width = fill.dataset.target + '%';
          });
        }
        barIO.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    $$('#skillsGrid .skill-card').forEach((c) => barIO.observe(c));
  }

  // ------------------------------------------------------------
  // CERTIFICATES
  // ------------------------------------------------------------

  function buildCerts() {
    const grid = $('#certsGrid');
    if (!grid) return;

    CERTIFICATES.forEach((cert, i) => {
      const card = document.createElement('div');
      card.className = 'cert-card reveal';
      card.style.setProperty('--card-grad', GRADIENTS[cert.gradient]);
      card.style.transitionDelay = (i * 0.05) + 's';
      card.dataset.index = String(i);
      card.innerHTML = `
        <div class="cert-top">
          ${cert.logo ? logoBadge(cert.logo, 56) : `<div class="cert-emoji">${cert.emoji}</div>`}
          <span class="cert-emoji-mini">${cert.emoji}</span>
        </div>
        <div class="cert-cat-badge" style="background: ${GRADIENTS[cert.gradient]}">${cert.category}</div>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-date">${cert.date}</p>
        <div class="cert-view">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          View Details
        </div>
      `;
      card.addEventListener('click', () => openCertModal(i));
      grid.appendChild(card);
    });

    $$('#certsGrid .cert-card').forEach(observeReveal);
    initTilt('.cert-card');
  }

  function openCertModal(i) {
    const cert = CERTIFICATES[i];
    const modal = $('#certModal');
    const content = $('#certModalContent');
    if (!modal || !content) return;

    // Replace inner (keep close button)
    const close = content.querySelector('.modal-close').outerHTML;
    content.style.setProperty('--card-grad', GRADIENTS[cert.gradient]);
    content.innerHTML = close + `
      <div class="modal-logo-wrap">${cert.logo ? logoBadge(cert.logo, 80) : `<div class="modal-emoji">${cert.emoji}</div>`}</div>
      <div class="modal-cat" style="background: ${GRADIENTS[cert.gradient]}">${cert.category}</div>
      <h2 class="modal-title gradient-text">${cert.title}</h2>
      <p class="modal-issuer">${cert.issuer}</p>
      <p class="modal-date">Issued: ${cert.date}</p>
      <p class="modal-desc">${cert.description}</p>
      ${cert.image ? `
        <div class="modal-actions">
          <button class="btn btn-gradient" data-view-image="${cert.image}" data-view-title="${cert.title.replace(/"/g, '&quot;')}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            View Certificate
          </button>
        </div>
      ` : ''}
    `;

    // Re-bind close
    content.querySelector('.modal-close').addEventListener('click', closeCertModal);
    // View certificate button
    const viewBtn = content.querySelector('[data-view-image]');
    viewBtn?.addEventListener('click', () => {
      openImageViewer(viewBtn.dataset.viewImage, viewBtn.dataset.viewTitle);
    });
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // ------------------------------------------------------------
  // IMAGE VIEWER (lightbox) — shows full certificate image
  // ------------------------------------------------------------
  function openImageViewer(src, title) {
    let viewer = document.querySelector('.image-viewer');
    if (!viewer) {
      viewer = document.createElement('div');
      viewer.className = 'image-viewer';
      viewer.innerHTML = `
        <div class="image-viewer-backdrop"></div>
        <button class="image-viewer-close" aria-label="Close">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="image-viewer-stage">
          <img class="image-viewer-img" alt="" />
          <div class="image-viewer-caption"></div>
          <a class="image-viewer-download btn btn-gradient" download>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </a>
        </div>
      `;
      document.body.appendChild(viewer);
      const close = () => closeImageViewer();
      viewer.querySelector('.image-viewer-backdrop').addEventListener('click', close);
      viewer.querySelector('.image-viewer-close').addEventListener('click', close);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && viewer.classList.contains('open')) close();
      });
    }
    const img = viewer.querySelector('.image-viewer-img');
    const cap = viewer.querySelector('.image-viewer-caption');
    const dl  = viewer.querySelector('.image-viewer-download');
    img.src = src;
    img.alt = title || '';
    cap.textContent = title || '';
    dl.href = src;
    dl.setAttribute('download', src.split('/').pop());
    viewer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeImageViewer() {
    const v = document.querySelector('.image-viewer');
    if (!v) return;
    v.classList.remove('open');
    // If cert modal is also open, keep body locked; otherwise restore.
    if (!document.querySelector('#certModal.open')) {
      document.body.style.overflow = '';
    }
  }

  function closeCertModal() {
    const modal = $('#certModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initCertModal() {
    const modal = $('#certModal');
    if (!modal) return;
    modal.querySelector('.modal-backdrop').addEventListener('click', closeCertModal);
    modal.querySelector('.modal-close').addEventListener('click', closeCertModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCertModal();
    });
  }

  // ------------------------------------------------------------
  // PROJECTS
  // ------------------------------------------------------------

  function buildProjects() {
    const grid = $('#projectsGrid');
    if (!grid) return;

    PROJECTS.forEach((proj, i) => {
      const card = document.createElement('div');
      card.className = 'project-card reveal';
      card.style.setProperty('--card-grad', GRADIENTS[proj.gradient]);
      card.style.transitionDelay = (i * 0.05) + 's';
      card.innerHTML = `
        <div class="project-head">
          <div class="project-icon">${ICON(proj.icon)}</div>
          <div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-cat">${proj.category}</p>
          </div>
        </div>
        <div class="project-section problem">
          <h4>❌ Problem</h4>
          <p>${proj.problem}</p>
        </div>
        <div class="project-section solution">
          <h4>✅ Solution</h4>
          <p>${proj.solution}</p>
        </div>
        <div class="project-techs-label">Technologies Used</div>
        <div class="project-techs">
          ${proj.technologies.map((t) => `<span class="project-tech">${t}</span>`).join('')}
        </div>
        <div class="project-impact-label">Business Impact</div>
        <div class="project-impact">
          ${proj.impact.map((it) => `
            <div class="project-impact-item">
              <span class="project-impact-dot"></span>
              ${it}
            </div>
          `).join('')}
        </div>
      `;
      grid.appendChild(card);
    });

    $$('#projectsGrid .project-card').forEach(observeReveal);
    initTilt('.project-card');
  }

  // ------------------------------------------------------------
  // TILT EFFECT (subtle 3D tilt on hover)
  // ------------------------------------------------------------

  function initTilt(selector) {
    $$(selector).forEach((el) => {
      let raf = null;

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * 8;
        const ry = (x - 0.5) * 8;

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
      };

      const onLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        el.style.transform = '';
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  // ------------------------------------------------------------
  // HERO INLINE CHAT  (Claude-powered via Cloudflare Worker)
  // ------------------------------------------------------------
  // Paste your Cloudflare Worker URL here to enable real Claude responses.
  // If left empty, the chat falls back to the simple keyword-based replies.
  // Setup steps: see cloudflare-worker/README.md
  const CHATBOT_API_URL = '';   // <-- e.g. 'https://omar-chat.your-subdomain.workers.dev'

  // Conversation history for the API call (last N turns)
  const heroChatHistory = [];

  async function askClaude(userText) {
    heroChatHistory.push({ role: 'user', content: userText });
    try {
      const res = await fetch(CHATBOT_API_URL + '/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: heroChatHistory.slice(-10),
          lang: currentLang,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        return data.error || `Server error (${res.status}). Please try again.`;
      }
      const reply = (data.reply || '').trim() || "Sorry, I couldn't generate a reply.";
      heroChatHistory.push({ role: 'assistant', content: reply });
      // Cap history at 12 to keep payload small
      if (heroChatHistory.length > 12) heroChatHistory.splice(0, heroChatHistory.length - 12);
      return reply;
    } catch (err) {
      return 'Network error. Please try again, or email omaralabaseery81@gmail.com.';
    }
  }

  // Inline reply thread inside the hero chat bar (no floating window)
  function initHeroChat() {
    const input = $('#heroChatInput');
    const send = $('#heroChatSend');
    const list = $('#heroChatMessages');
    const chips = $('#heroChatChips');
    if (!input || !send || !list) return;

    const BOT_AVATAR = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>';
    const USER_AVATAR = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

    const append = (sender, text) => {
      const el = document.createElement('div');
      el.className = `chat-bar-msg ${sender}`;
      el.innerHTML = `
        <div class="chat-bar-msg-avatar">${sender === 'bot' ? BOT_AVATAR : USER_AVATAR}</div>
        <div class="chat-bar-msg-bubble">${escapeHtml(text)}</div>
      `;
      list.appendChild(el);
      list.classList.add('has-messages');
      list.scrollTop = list.scrollHeight;
      return el;
    };

    const showTyping = () => {
      const el = document.createElement('div');
      el.className = 'chat-bar-msg bot typing';
      el.innerHTML = `
        <div class="chat-bar-msg-avatar">${BOT_AVATAR}</div>
        <div class="chat-bar-msg-bubble"><span></span><span></span><span></span></div>
      `;
      list.appendChild(el);
      list.classList.add('has-messages');
      list.scrollTop = list.scrollHeight;
      return el;
    };

    const submit = async () => {
      const v = input.value.trim();
      if (!v) return;
      input.value = '';
      append('user', v);

      // Hide the suggestion chips after first send to keep things tidy
      if (chips) chips.style.display = 'none';

      const typing = showTyping();

      let reply;
      if (CHATBOT_API_URL) {
        // Real Claude via Cloudflare Worker
        reply = await askClaude(v);
      } else {
        // Local fallback (keyword-based) — mimic small delay for UX
        await new Promise((r) => setTimeout(r, 600));
        reply = generateBotResponse(v);
      }

      typing.remove();
      append('bot', reply);
    };

    send.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
    });

    $$('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        input.value = chip.dataset.q || '';
        submit();
      });
    });
  }

  // ------------------------------------------------------------
  // FLOATING AI CHATBOT
  // ------------------------------------------------------------

  let chatLanguage = 'en';
  let chatMessages = [];

  function openChatbot() {
    const win = $('#chatbotWindow');
    const fab = $('#chatbotFab');
    win.classList.add('open');
    fab.classList.add('open');

    if (chatMessages.length === 0) {
      const greeting = chatLanguage === 'en'
        ? "Hi! I'm Omar's AI Assistant. I can help you learn about Omar's experience, projects, and services. Are you looking to hire Omar, discuss a project, or request a consultation?"
        : "مرحباً! أنا مساعد عمر الذكي. أقدر أساعدك تعرف خبراته ومشاريعه وخدماته. هل تريد توظيف عمر، مناقشة مشروع، أو طلب استشارة؟";
      addBotMessage(greeting);
    }
  }
  function closeChatbot() {
    const win = $('#chatbotWindow');
    const fab = $('#chatbotFab');
    win.classList.remove('open');
    fab.classList.remove('open');
  }

  function addBotMessage(text) {
    chatMessages.push({ sender: 'bot', text });
    appendMessageDOM('bot', text);
  }
  function addUserMessage(text) {
    chatMessages.push({ sender: 'user', text });
    appendMessageDOM('user', text);
  }
  function appendMessageDOM(sender, text) {
    const list = $('#chatbotMessages');
    if (!list) return;
    const msg = document.createElement('div');
    msg.className = `chatbot-msg ${sender}`;

    const avatarSvg = sender === 'bot'
      ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>'
      : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

    msg.innerHTML = `
      <div class="chatbot-msg-avatar">${avatarSvg}</div>
      <div class="chatbot-msg-bubble">${escapeHtml(text)}</div>
    `;
    list.appendChild(msg);
    list.scrollTop = list.scrollHeight;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function sendChatbotMessage() {
    const input = $('#chatbotInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = '';

    // Detect Arabic
    if (/[؀-ۿ]/.test(text) && chatLanguage !== 'ar') {
      chatLanguage = 'ar';
      $('#chatbotWindow').classList.add('rtl');
      $('#chatbotLang').textContent = 'EN';
    }

    setTimeout(() => addBotMessage(generateBotResponse(text)), 700);
  }

  function generateBotResponse(input) {
    const u = input.toLowerCase();
    const en = chatLanguage === 'en';

    if (u.includes('hire') || input.includes('توظيف') || u.includes('work with')) {
      return en
        ? "Great! Omar is open to discuss new opportunities. He specializes in:\n\n• Java / Spring Boot backend\n• Microservices architecture\n• AWS, Docker & CI/CD\n• Angular full-stack delivery\n• Project Management (PMP)\n\nReach him at omaralabaseery81@gmail.com or +965 6907 3995."
        : "رائع! عمر مستعد يناقش فرص جديدة. متخصص في:\n\n• Java / Spring Boot للباك إند\n• معمارية الـ Microservices\n• AWS و Docker و CI/CD\n• Angular Full-Stack\n• إدارة المشاريع (PMP)\n\nتواصل معاه: omaralabaseery81@gmail.com أو +965 6907 3995.";
    }
    if (u.includes('experience') || input.includes('خبرة') || u.includes('background')) {
      return en
        ? "Omar's career so far:\n\n💼 CTO — Dyar Hajer Consultants, KSA (Aug 2025 – Present)\n💼 Senior SWE / PM — Dyar Hajer (Jul 2025 – Present)\n💼 Software Engineer — ARRC, Cairo (May 2024 – Jun 2025)\n💼 IT Support Engineer — ARRC, Cairo (May 2024 – Jun 2025)\n💼 Backend Developer — Infantry House, Egypt (Apr – May 2024)\n💼 Backend Developer (Freelance) — Remote (Aug – Sep 2023)\n\nWhich role would you like to know more about?"
        : "خبرة عمر:\n\n💼 CTO — Dyar Hajer Consultants، السعودية (أغسطس 2025 – حالياً)\n💼 Senior Software Engineer / PM — Dyar Hajer (يوليو 2025 – حالياً)\n💼 Software Engineer — ARRC، القاهرة (مايو 2024 – يونيو 2025)\n💼 IT Support Engineer — ARRC، القاهرة (مايو 2024 – يونيو 2025)\n💼 Backend Developer — Infantry House، مصر (أبريل – مايو 2024)\n💼 Backend Developer (Freelance) — عن بُعد (أغسطس – سبتمبر 2023)";
    }
    if (u.includes('skill') || input.includes('مهارات') || u.includes('tech stack') || u.includes('stack')) {
      return en
        ? "Core stack:\n\n• Backend: Java, Spring Boot, REST APIs\n• Architecture: Microservices, MVC, System Design\n• Frontend: Angular\n• Database: SQL Server, SQL, NoSQL\n• Cloud / DevOps: AWS, Docker, CI/CD\n• Security: Secure API Design, Access Control\n• PM: PMP, Agile / Scrum, Team Leadership\n• AI/ML: Microsoft ML Engineer + AI training"
        : "الـ Stack الأساسي:\n\n• Backend: Java, Spring Boot, REST APIs\n• معماريات: Microservices, MVC, System Design\n• Frontend: Angular\n• قواعد بيانات: SQL Server, SQL, NoSQL\n• Cloud/DevOps: AWS, Docker, CI/CD\n• أمان: تصميم APIs آمن، Access Control\n• إدارة: PMP، Agile/Scrum، قيادة فرق\n• AI/ML: Microsoft ML Engineer + تدريبات AI";
    }
    if (u.includes('project') || input.includes('مشروع') || u.includes('portfolio')) {
      return en
        ? "Highlights from Omar's work:\n\n• Microservices platform on AWS — Dyar Hajer\n• End-to-end Java + Angular delivery (Agile/Scrum)\n• Internal information systems — ARRC\n• Biometric attendance + SQL Server integration — ARRC\n• High-performance REST APIs — Infantry House\n• Freelance backend services with optimized data models\n\nScroll down to the Projects section for full details."
        : "أهم مشاريع عمر:\n\n• منصة Microservices على AWS — Dyar Hajer\n• تسليم Full-Stack بـ Java + Angular (Agile/Scrum)\n• أنظمة معلومات داخلية — ARRC\n• تكامل بصمة الحضور مع SQL Server — ARRC\n• REST APIs عالية الأداء — Infantry House\n• خدمات باك إند Freelance بنماذج بيانات محسّنة";
    }
    if (u.includes('contact') || input.includes('تواصل') || u.includes('email') || u.includes('phone')) {
      return en
        ? "You can reach Omar directly:\n\n📧 omaralabaseery81@gmail.com\n📱 Kuwait: +965 6907 3995\n📱 Egypt:  +20 106 941 5101\n📍 West Abdullah Mubarak, Kuwait\n\nOr use the contact form below — he'll get back to you soon."
        : "تقدر توصل لعمر مباشرة:\n\n📧 omaralabaseery81@gmail.com\n📱 الكويت: +965 6907 3995\n📱 مصر:  +20 106 941 5101\n📍 غرب عبدالله المبارك، الكويت\n\nأو استخدم نموذج التواصل تحت.";
    }
    if (u.includes('certificate') || input.includes('شهادات') || u.includes('certification')) {
      return en
        ? "Omar holds 11+ verified certifications:\n\n🏆 PMP — Project Management Professional (PMI, 2025)\n🤖 Microsoft Machine Learning Engineer — DEPI/MCIT (2025)\n🎖️ DEPI Team Leader — Certificate of Appreciation (2025)\n🎓 Bachelor of CIT — Future Univ. + Univ. of Cincinnati (2023)\n🧠 AI Applications — British University in Egypt (2025)\n🧠 AI training — IAO/IMPACT (2023, 2025)\n🏛️ Intro to AI — Zewail City (2023)\n🅰️ Angular Development — AITB (2023)\n🪪 Certificate of Experience — ARRC (2024-2025)"
        : "عمر معاه 11+ شهادة موثقة:\n\n🏆 PMP — Project Management Professional (PMI, 2025)\n🤖 Microsoft Machine Learning Engineer — DEPI (2025)\n🎖️ شهادة تقدير قائد فريق — DEPI (2025)\n🎓 بكالوريوس CIT — جامعة المستقبل + جامعة Cincinnati (2023)\n🧠 تطبيقات الذكاء الاصطناعي — الجامعة البريطانية في مصر (2025)\n🧠 تدريبات AI — IAO/IMPACT (2023، 2025)\n🏛️ مقدمة في الذكاء الاصطناعي — مدينة زويل (2023)\n🅰️ تطوير Angular — AITB (2023)\n🪪 شهادة خبرة — ARRC (2024-2025)";
    }
    if (u.includes('education') || input.includes('تعليم') || u.includes('study') || u.includes('university')) {
      return en
        ? "🎓 Bachelor of Computer Information Technology\nFuture University in Egypt — in affiliation with University of Cincinnati\nMajor: Computer Science\nGraduated: September 2023 (Graduation project: Excellent)"
        : "🎓 بكالوريوس تكنولوجيا الحاسبات والمعلومات\nجامعة المستقبل في مصر بالتعاون مع جامعة Cincinnati\nتخصص: علوم الحاسب\nالتخرج: سبتمبر 2023 (مشروع التخرج: ممتاز)";
    }
    return en
      ? "I can help you with:\n\n💼 Omar's experience and roles\n🎓 Certifications and education\n🚀 Projects and portfolio\n⚡ Skills and tech stack\n📞 Contact details\n\nWhat would you like to know?"
      : "أقدر أساعدك في:\n\n💼 خبرة عمر وأدواره\n🎓 الشهادات والتعليم\n🚀 المشاريع\n⚡ المهارات والـ Stack\n📞 طرق التواصل";
  }

  function initChatbot() {
    // Floating chatbot is disabled in favour of the inline hero chat.
    // The "Chat with Omar's AI" hero button focuses the inline input.
    const heroBtn = $('#openChatbot');
    const heroInput = $('#heroChatInput');
    heroBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      heroInput?.focus();
      heroInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // ------------------------------------------------------------
  // CONTACT FORM
  // ------------------------------------------------------------

  // ============================================================
  // CONTACT FORM
  // ============================================================
  // The site is fully static (HTML/CSS/JS only) — there is no
  // backend to receive the form POST. To make submissions actually
  // arrive in Omar's inbox you have two options:
  //
  //   A) MAILTO FALLBACK (works immediately, no setup)
  //      The form opens the visitor's email client pre-filled
  //      with all the data. Visitor just clicks "Send".
  //
  //   B) WEB3FORMS (recommended — visitor never leaves the page)
  //      1. Go to https://web3forms.com
  //      2. Enter omaralabaseery81@gmail.com → get a free access key
  //      3. Paste the key below and you're done.
  //
  // ============================================================
  const WEB3FORMS_ACCESS_KEY = 'f2d6581e-df61-40ba-afbd-6fd0d95bffae';
  const RECIPIENT_EMAIL = 'omaralabaseery81@gmail.com';
  // ============================================================

  function setSubmitting(submit, sending) {
    submit.disabled = sending;
    submit.innerHTML = sending
      ? '<span class="spinner"></span> Sending...'
      : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> <span class="btn-label">Send Message</span>`;
  }

  async function sendViaWeb3Forms(data) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New project inquiry from ${data.name} — ${data.service || 'General'}`,
        from_name: data.name,
        replyto: data.email,
        ...data,
      }),
    });
    return res.ok;
  }

  function sendViaMailto(data) {
    const subject = `Project inquiry — ${data.service || 'General'} (from ${data.name || 'Website'})`;
    const lines = [
      `Name:    ${data.name || '-'}`,
      `Email:   ${data.email || '-'}`,
      data.company ? `Company: ${data.company}` : null,
      data.phone   ? `Phone:   ${data.phone}`   : null,
      `Service: ${data.service || '-'}`,
      '',
      'Message:',
      data.message || '-',
    ].filter(Boolean).join('\n');
    const url = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    window.location.href = url;
  }

  function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submit = $('#contactSubmit');
      const data = Object.fromEntries(new FormData(form));

      if (WEB3FORMS_ACCESS_KEY) {
        // Path A: real submission via Web3Forms
        setSubmitting(submit, true);
        try {
          const ok = await sendViaWeb3Forms(data);
          if (ok) {
            form.reset();
            showToast('Message sent successfully! Omar will get back to you soon.', 'success');
          } else {
            showToast('Could not send. Try again or email directly.', 'error');
          }
        } catch (err) {
          showToast('Network error. Please try again or email directly.', 'error');
        } finally {
          setSubmitting(submit, false);
        }
      } else {
        // Path B: mailto fallback — opens visitor's email client
        sendViaMailto(data);
        showToast('Opening your email app to send the message…', 'success');
      }
    });
  }

  // ------------------------------------------------------------
  // TOASTS
  // ------------------------------------------------------------

  function showToast(text, type = 'success') {
    const c = $('#toastContainer');
    if (!c) return;
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = text;
    c.appendChild(t);
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 300);
    }, 4000);
  }

  // ------------------------------------------------------------
  // FOOTER YEAR
  // ------------------------------------------------------------

  function initFooter() {
    const y = $('#footerYear');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  // ------------------------------------------------------------
  // SMOOTH SCROLL FOR NAV LINKS
  // ------------------------------------------------------------

  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  // ------------------------------------------------------------
  // WIREFRAME GLOBE — inject latitude / longitude rings
  // ------------------------------------------------------------

  function initGlobe() {
    const globe = $('#globe');
    if (!globe) return;
    const equator = globe.querySelector('.globe-equator');

    const frag = document.createDocumentFragment();
    // 7 latitudes
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * 180 - 90;
      const r = document.createElement('div');
      r.className = 'globe-lat';
      r.style.transform = `rotateX(${angle}deg)`;
      frag.appendChild(r);
    }
    // 8 longitudes
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * 180;
      const r = document.createElement('div');
      r.className = 'globe-lon';
      r.style.transform = `rotateY(${angle}deg)`;
      frag.appendChild(r);
    }
    globe.insertBefore(frag, equator);
  }

  // ------------------------------------------------------------
  // SKILLS CUBE — mouse-driven 3D rotation + auto Z spin
  // ------------------------------------------------------------

  function initSkillsCube() {
    const stage = $('#skillsCubeStage');
    const cube = $('#skillsCube');
    if (!stage || !cube) return;

    // Target & current angles
    let targetX = -15, targetY = 15;
    let curX = -15, curY = 15;
    let zRot = 0;
    let lastT = performance.now();

    stage.addEventListener('mousemove', (e) => {
      const r = stage.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;  // -0.5 .. 0.5
      const ny = (e.clientY - r.top) / r.height - 0.5;
      targetY = nx * 180;     // rotateY -90..90
      targetX = -ny * 90;     // rotateX
    });
    stage.addEventListener('mouseleave', () => {
      targetX = -15;
      targetY = 15;
    });

    function loop(now) {
      const dt = Math.min((now - lastT) / 1000, 0.1);
      lastT = now;

      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      zRot = (zRot + 9 * dt) % 360; // 360deg / 40s = 9 deg/s

      cube.style.transform = `rotateZ(${zRot}deg) rotateX(${curX}deg) rotateY(${curY}deg)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // ------------------------------------------------------------
  // THEME TOGGLE — Dark <-> Light
  // ------------------------------------------------------------

  function initTheme() {
    const html = document.documentElement;
    const btn = $('#themeToggle');
    const saved = localStorage.getItem('omar-theme');
    const initial = saved || 'dark';
    if (initial === 'light') html.setAttribute('data-theme', 'light');
    btn?.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      if (next === 'light') html.setAttribute('data-theme', 'light');
      else html.removeAttribute('data-theme');
      try { localStorage.setItem('omar-theme', next); } catch (e) { /* ignore */ }
    });
  }

  // ------------------------------------------------------------
  // BOOT
  // ------------------------------------------------------------

  onReady(async () => {
    initTheme();
    initLang();
    initParticles();
    initMouseGlow();
    initNav();
    initSmoothScroll();
    initReveal();
    initCounters();
    initGlobe();
    initSkillsCube();
    buildMarquee();

    // Probe logo files (anything dropped into profile/logos/) so the cards
    // we build below can use the real logo if it's there.
    await detectAvailableLogos();

    buildTimeline();
    buildSkillFilters();
    renderSkills();
    buildCerts();
    initCertModal();
    buildProjects();
    initHeroChat();
    initChatbot();
    initContactForm();
    initFooter();
    // Re-apply language after dynamic content is built
    applyLang(currentLang);

    // Safety net for hero animate-up: if browser pauses CSS animations
    // (e.g. background tabs) leaving content invisible, force-show after 3s.
    setTimeout(() => {
      $$('.animate-up').forEach((el) => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.5) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, 3000);
  });

})();
