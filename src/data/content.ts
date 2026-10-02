export const profile = {
  name: "Khushi Singh",
  role: "Web Developer & Frontend Specialist",
  shortRole: "Web Developer",
  email: "khushisingh.dev21@gmail.com",
  phone: "+91 62064 90079",
  phoneHref: "916206490079",
  location: "Noida, India",
  linkedin: "https://www.linkedin.com/in/khushi-singh200106",
  linkedinLabel: "www.linkedin.com/in/khushi-singh200106",
  github: "https://github.com/Khushisingh0",
  instagram: "https://instagram.com/",
};

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const hero = {
  badge: "Hi, I'm Khushi Singh",
  titleLead: "Web Developer &",
  titleAccent: "Frontend Specialist",
  description:
    "I build modern websites, landing pages & digital experiences for businesses that are fast, responsive and user-friendly.",
};

export const heroHighlights = [
  { title: "Fast Performance", subtitle: "Optimized Speed", icon: "zap" },
  { title: "Fully Responsive", subtitle: "Works on all devices", icon: "smartphone" },
  { title: "Clean Code", subtitle: "Scalable & maintainable", icon: "code" },
] as const;

export const techRibbon = [
  "html5",
  "css3",
  "javascript",
  "react",
  "nextjs",
  "tailwind",
  "git",
  "github",
  "ga4",
  "gtm",
  "vercel",
  "hostinger",
  "domain",
] as const;

export const about = {
  heading: "I build websites that are modern, responsive &",
  accent: "results-driven.",
  paragraphs: [
    "I'm a web developer and frontend specialist who helps businesses grow online with modern, high-performing websites. From landing pages to complete business sites, I focus on clean design, fast load times, and a user experience that converts visitors into customers.",
    "I work with React, Next.js and Tailwind CSS to build websites that look great on every device and are easy to maintain. My goal is simple: deliver digital experiences that create real business value.",
  ],
};

export const aboutTech = [
  "react",
  "nextjs",
  "javascript",
  "typescript",
  "tailwind",
  "html5",
  "css3",
  "git",
  "github",
  "figma",
  "vercel",
  "hostinger",
  "domain",
] as const;

export const reasons = [
  {
    title: "Focus on Results",
    description: "Every website is built to support business goals and drive real outcomes.",
    icon: "target",
  },
  {
    title: "Responsive Design",
    description: "Pixel-perfect layouts that look great on phones, tablets and desktops.",
    icon: "smartphone",
  },
  {
    title: "Performance First",
    description: "Fast loading, optimized code and a smooth experience for every visitor.",
    icon: "gauge",
  },
  {
    title: "Clean & Maintainable Code",
    description: "Scalable, well-structured code that's easy to update as you grow.",
    icon: "code",
  },
  {
    title: "Clear Communication",
    description: "You'll always know the status of your project — no guesswork, no delays.",
    icon: "message",
  },
] as const;

export const services = [
  {
    title: "Landing Page Development",
    description:
      "High-converting landing pages designed to capture attention and turn visitors into leads.",
    icon: "layout",
    features: [
      "Conversion-focused design",
      "Responsive for all devices",
      "Fast loading & SEO friendly",
    ],
  },
  {
    title: "Business Websites",
    description:
      "Professional websites that represent your brand and help customers find you online.",
    icon: "monitor",
    features: ["Modern & clean design", "Mobile responsive", "Easy to manage"],
  },
  {
    title: "Website Updates & Maintenance",
    description:
      "Keep your website fresh, secure and up to date with ongoing improvements and support.",
    icon: "pen",
    features: [
      "Content & styling updates",
      "Bug fixing & improvements",
      "Ongoing support",
    ],
  },
  {
    title: "Responsive Design & UI Fixes",
    description:
      "Fix layout issues, improve UI/UX and make sure your site works perfectly on every device.",
    icon: "devices",
    features: [
      "Responsive design",
      "Cross-browser compatibility",
      "UI/UX improvements",
    ],
  },
  {
    title: "Analytics & Tracking Setup",
    description:
      "Set up tracking so you can measure traffic, conversions and the performance of your website.",
    icon: "chart",
    features: [
      "Google Analytics 4 (GA4) Setup",
      "Google Tag Manager (GTM) Setup",
      "Conversions & Event Tracking",
    ],
  },
] as const;

export const projects = [
  {
    title: "Parasym Syndicate",
    category: "Cybersecurity Website",
    filter: "business",
    description:
      "A cybersecurity and AI intelligence website for Parasym Syndicate — showcasing defense platforms, VAPT, AI red teaming, digital forensics and OSINT services.",
    image: "/images/project-parasym.png",
    url: "https://www.parasym.in/",
    stack: ["nextjs", "tailwind", "javascript"] as const,
  },
  {
    title: "Ornate Quality",
    category: "Business Website",
    filter: "business",
    description:
      "A professional compliance website for BIS, WPC, BEE, EPR and CE certification — with consultation booking, services and CRM login.",
    image: "/images/project-ornate-live.png",
    url: "https://ornatequality.com/",
    stack: ["nextjs", "tailwind", "javascript"] as const,
  },
  {
    title: "Cosmic Guruji",
    category: "Astrology Website",
    filter: "business",
    description:
      "An astrology and spiritual growth platform where I built the UI and integrated APIs for experts, live sessions, kundli/consultations, programs and bookings.",
    image: "/images/project-cosmicguruji.png",
    url: "https://cosmicguruji.com/",
    stack: ["nextjs", "tailwind", "javascript"] as const,
  },
  {
    title: "Zanifest Insurance",
    category: "Insurance E-commerce",
    filter: "business",
    description:
      "Insurance Marketplace Platform — A digital insurance platform that enables users to explore, compare and purchase various insurance products online.",
    image: "/images/project-zanifest.png",
    url: "https://zanifestinsurance.com/",
    stack: ["nextjs", "tailwind", "javascript"] as const,
  },
  {
    title: "Digital Marketing Landing Page",
    category: "Landing Page",
    filter: "landing",
    description:
      "A data-driven marketing page with charts, stats and campaign-focused sections built to generate leads.",
    image: "/images/project-marketing.png",
    url: "#",
    stack: ["nextjs", "tailwind", "javascript"] as const,
  },
  {
    title: "Portfolio Website Template",
    category: "Other",
    filter: "other",
    description:
      "A dark creative portfolio template with bold 3D visuals, smooth sections and a distinctive personal brand look.",
    image: "/images/project-portfolio.png",
    url: "#",
    stack: ["nextjs", "tailwind", "javascript"] as const,
  },
];

export const projectFilters = [
  { id: "all", label: "All Projects", icon: "grid" },
  { id: "landing", label: "Landing Pages", icon: "layout" },
  { id: "business", label: "Business Websites", icon: "building" },
  { id: "other", label: "Other", icon: "dots" },
] as const;
