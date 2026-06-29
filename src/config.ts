export const siteConfig = {
  siteUrl: "https://dearlipu.github.io",
  googleSiteVerification: "TSCFrIOxF2u50hCpi2uMfBaJEYATy4CKBIzyvy6iyyc",
  name: "DearLipu Studio",
  tagline: "Creative Design • Websites • Branding • Video Editing",
  title: "Premium creative design studio for brands that want to stand out.",
  description:
    "DearLipu Studio creates premium branding, websites, UI/UX, graphics, video editing, and motion systems that help businesses attract customers and grow online.",
  accentColor: "#1d4ed8",
  social: {
    email: "infodearlipu+web@gmail.com",
    whatsapp: "918144991049",
    instagram: "https://www.instagram.com/dearlipu",
    twitter: "https://x.com/dearlipu",
    youtube: "https://www.youtube.com/@dearlipu",
  },
};

export const services = [
  ["brand-identity", "Brand Identity", "Distinctive identity systems that make your business easier to recognize, remember, and trust.", ["Logo direction", "Color and typography", "Brand guidelines", "Launch assets"]],
  ["website-design", "Website Design", "Conversion-focused websites with premium visuals, clear messaging, and fast responsive builds.", ["Landing pages", "Business websites", "Responsive UI", "SEO-ready structure"]],
  ["ui-ux-design", "UI/UX Design", "Interfaces that reduce friction, improve clarity, and guide users toward meaningful action.", ["User flows", "Wireframes", "High-fidelity UI", "Design systems"]],
  ["graphic-design", "Graphic Design", "Campaign visuals, marketing assets, and digital graphics built for consistency and attention.", ["Social assets", "Ad creatives", "Presentation design", "Marketing collateral"]],
  ["video-editing", "Video Editing", "Sharp edits with stronger hooks, clean pacing, and platform-ready exports for growth channels.", ["Short-form video", "YouTube edits", "Promos", "Color and sound polish"]],
  ["motion-graphics", "Motion Graphics", "Elegant motion systems for launches, explainers, logo reveals, and scroll-stopping content.", ["Logo animation", "Explainers", "Kinetic typography", "Product motion"]],
  ["social-media-design", "Social Media Design", "Repeatable content systems that help brands publish faster without losing quality.", ["Content templates", "Carousels", "Campaign kits", "Monthly design systems"]],
  ["print-design", "Print Design", "Premium print-ready materials for events, sales, packaging inserts, and editorial moments.", ["Brochures", "Cards", "Flyers", "Editorial layouts"]],
  ["packaging-design", "Packaging Design", "Shelf-ready packaging concepts that communicate value and create memorable unboxing moments.", ["Packaging concepts", "Labels", "Mockups", "Production-ready files"]],
] as const;

export const projects = [
  { slug: "saas-launch-system", name: "SaaS Launch System", industry: "Technology", services: "Branding, Website, Motion", image: "/projects/p1-3.webp", result: "+38% demo requests", description: "A polished launch identity and landing experience that turned a complex product into a clear growth story." },
  { slug: "ecommerce-brand-refresh", name: "E-commerce Brand Refresh", industry: "Retail", services: "Identity, Packaging, Social", image: "/projects/p1-8.webp", result: "+24% conversion clarity", description: "A cleaner visual system, packaging direction, and campaign assets for a premium consumer brand." },
  { slug: "creator-content-engine", name: "Creator Content Engine", industry: "Education", services: "Video Editing, Social Design", image: "/projects/p1-1.gif", result: "+40% watch time", description: "A repeatable editing and design workflow for high-retention short-form content." },
  { slug: "studio-website-redesign", name: "Studio Website Redesign", industry: "Creative Services", services: "Web Design, UI/UX", image: "/projects/p1-5.webp", result: "2.1x inquiries", description: "A premium website system designed to build trust quickly and move visitors toward project inquiries." },
  { slug: "restaurant-visual-system", name: "Restaurant Visual System", industry: "Hospitality", services: "Brand, Print, Social", image: "/projects/p1-9.webp", result: "+31% campaign saves", description: "A warm, modern brand kit with menus, social templates, and launch collateral." },
  { slug: "fintech-product-story", name: "Fintech Product Story", industry: "Finance", services: "UI/UX, Motion, Website", image: "/projects/p1-6.webp", result: "Faster investor pitch", description: "A refined product narrative, interface visuals, and motion pieces for a high-trust fintech presentation." },
] as const;
