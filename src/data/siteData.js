export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Bebas Neue", body: "Inter", display: "Bebas Neue" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Super Natural Hardware",
    legalName: "Super Natural Hardware",
    tagline: "Quality Building Materials & Hardware Supplies",
    description: "Super Natural Hardware has been serving Harare's builders, contractors, and homeowners with quality building materials and hardware supplies for over a decade.",
    phone: "+263 77 630 0466",
    phoneRaw: "+263776300466",
    whatsappNumber: "263776300466",
    email: "info@supernaturalhardware.co.zw",
    address: "no 9, 102 Harare St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 2,
    established: "2018",
    yearsExperience: "6+",
    projectsCompleted: "5000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "super-natural-hardware-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Super", logoLine2: "Natural Hardware" },

  hero: {
    badge: "Harare's Complete Building Materials Supplier",
    titleParts: [
      { text: "BUILD IT " },
      { text: "RIGHT", highlight: true },
      { text: " THE FIRST TIME." },
    ],
    subtitle: "We stock everything from foundation materials to rooftop finishes -- all under one roof, at competitive prices, with knowledgeable staff who understand what your project needs.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Our Services",
    trustBadge: "5000+ Products in Stock",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Professional workspace and equipment" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85", alt: "Team delivering quality service" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Modern facilities and operations" },
    ],
  },

  stats: [
    { number: "5000+", label: "Products in Stock" },
    { number: "10+", label: "Years Trusted" },
    { number: "1000+", label: "Projects Supplied" },
    { number: "100%", label: "Quality Guaranteed" },
  ],

  servicesPreview: [
    { title: "Building Materials", desc: "Everything you need from foundation to rooftop. Cement, bricks, sand, aggregate, timber, and structural steel -- all from trusted suppliers.", icon: "Buildings" },
    { title: "Plumbing Supplies", desc: "Complete range of pipes, fittings, valves, and fixtures. From basic PVC to premium copper -- we stock it all.", icon: "Briefcase" },
    { title: "Electrical Supplies", desc: "Wiring, switches, distribution boards, and lighting. Everything for residential and commercial electrical installations.", icon: "Lightbulb" },
    { title: "Paint & Finishes", desc: "Premium interior and exterior paints, varnishes, and specialty coatings. We stock all major brands with expert colour-matching.", icon: "Star" },
    { title: "Tools & Equipment", desc: "Hand tools, power tools, and construction equipment for professionals and DIY enthusiasts. Quality brands at competitive prices.", icon: "Heart" },
    { title: "Roofing & Guttering", desc: "IBR sheeting, Chromadek, tiles, and complete guttering systems. Delivered to site or available for collection.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs. Quality and reliability in everything we do.",
    items: [
      { title: "Building Materials", slug: "building-materials", desc: "Everything you need from foundation to rooftop. Cement, bricks, sand, aggregate, timber, and structural steel -- all from trusted suppliers.", features: ["Cement & Concrete", "Bricks & Blocks", "Structural Steel", "Timber & Board", "Sand & Aggregate", "Bulk Delivery"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Plumbing Supplies", slug: "plumbing", desc: "Complete range of pipes, fittings, valves, and fixtures. From basic PVC to premium copper -- we stock it all.", features: ["PVC & HDPE Pipes", "Copper Fittings", "Taps & Mixers", "Geysers & Tanks", "Drainage Systems", "Installation Kits"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
      { title: "Electrical Supplies", slug: "electrical", desc: "Wiring, switches, distribution boards, and lighting. Everything for residential and commercial electrical installations.", features: ["Cables & Wiring", "Distribution Boards", "Switches & Sockets", "LED Lighting", "Circuit Breakers", "Solar Components"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Paint & Finishes", slug: "paint-finishes", desc: "Premium interior and exterior paints, varnishes, and specialty coatings. We stock all major brands with expert colour-matching.", features: ["Interior Paints", "Exterior Coatings", "Wood Varnishes", "Waterproofing", "Colour Matching", "Spray Equipment"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Tools & Equipment", slug: "tools", desc: "Hand tools, power tools, and construction equipment for professionals and DIY enthusiasts. Quality brands at competitive prices.", features: ["Power Tools", "Hand Tools", "Measuring Equipment", "Safety Gear", "Ladders & Scaffolding", "Tool Accessories"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
      { title: "Roofing & Guttering", slug: "roofing", desc: "IBR sheeting, Chromadek, tiles, and complete guttering systems. Delivered to site or available for collection.", features: ["IBR Sheeting", "Chromadek Colour", "Roof Tiles", "Gutters & Downpipes", "Fascia Boards", "Waterproof Membranes"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to excellence.",
    items: [
      { title: "Residential Estate Supply", slug: "residential-estate", category: "Residential", location: "Harare, Zimbabwe", desc: "Complete materials supply for a 20-unit residential estate development.", client: "Client Project", services: ["Building Materials", "Plumbing Supplies"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "School Renovation", slug: "school-renovation", category: "Institutional", location: "Harare, Zimbabwe", desc: "Full building materials package for a primary school classroom block renovation.", client: "Client Project", services: ["Building Materials", "Plumbing Supplies"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "Commercial Fitout", slug: "commercial-fitout", category: "Commercial", location: "Harare, Zimbabwe", desc: "Electrical and plumbing supply for a new 500sqm retail space fitout.", client: "Client Project", services: ["Building Materials", "Plumbing Supplies"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Roofing Replacement", slug: "roofing-project", category: "Roofing", location: "Harare, Zimbabwe", desc: "Chromadek roofing and guttering supply for a church building restoration.", client: "Client Project", services: ["Building Materials", "Plumbing Supplies"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "DIY Home Makeover", slug: "diy-makeover", category: "Residential", location: "Harare, Zimbabwe", desc: "Paint, tools, and finishing materials for a complete home interior refresh.", client: "Client Project", services: ["Building Materials", "Plumbing Supplies"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Super Natural Hardware has been our go-to hardware supplier for three years. Consistent quality, fair pricing, and they always have stock when others do not.", name: "Blessing Chakandinakira", role: "Building Contractor", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "The plumbing range is excellent and the staff actually know their products. They helped me spec the right materials for my renovation.", name: "Tatenda Mupfupi", role: "Homeowner, Mt Pleasant", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "Bulk delivery is always on time and the prices are competitive. Super Natural Hardware is the only hardware store I recommend to my clients.", name: "Farai Mukwashi", role: "Architect", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "From paint to roofing sheets, everything under one roof. The convenience and quality keeps us coming back project after project.", name: "Kudzai Chigumira", role: "Property Developer", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on trust, driven by excellence.",
    story: [
      "Super Natural Hardware has been serving Harare's builders, contractors, and homeowners with quality building materials and hardware supplies for over a decade.",
      "We stock everything from foundation materials to rooftop finishes -- all under one roof, at competitive prices, with knowledgeable staff who understand what your project needs.",
      "Whether you are building from scratch, renovating, or tackling a weekend DIY project, we are your one-stop shop for quality materials and expert advice.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or the materials we use." },
      { title: "Reliability", desc: "When we make a promise, we keep it. On time, every time." },
      { title: "Customer Focus", desc: "Your satisfaction is our measure of success." },
      { title: "Integrity", desc: "Honest pricing, transparent communication, and ethical business practices." },
    ],
    team: [
      { name: "Tendai Masuku", role: "Managing Director", bio: "20 years of experience in building materials supply and construction.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Farai Chinyanga", role: "Warehouse Manager", bio: "Ensures stock availability and coordinates bulk deliveries across Harare.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Grace Moyo", role: "Sales Consultant", bio: "Expert at helping customers spec the right materials for their projects.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our clients say about working with us.",
    items: [
      { text: "Super Natural Hardware has been our go-to hardware supplier for three years. Consistent quality, fair pricing, and they always have stock when others do not.", name: "Blessing Chakandinakira", role: "Building Contractor", rating: 5 },
      { text: "The plumbing range is excellent and the staff actually know their products. They helped me spec the right materials for my renovation.", name: "Tatenda Mupfupi", role: "Homeowner, Mt Pleasant", rating: 5 },
      { text: "Bulk delivery is always on time and the prices are competitive. Super Natural Hardware is the only hardware store I recommend to my clients.", name: "Farai Mukwashi", role: "Architect", rating: 5 },
      { text: "From paint to roofing sheets, everything under one roof. The convenience and quality keeps us coming back project after project.", name: "Kudzai Chigumira", role: "Property Developer", rating: 5 },
      { text: "Outstanding service from start to finish. Super Natural Hardware exceeded all our expectations.", name: "Memory Dube", role: "Satisfied Customer", rating: 5 },
      { text: "Professional, reliable, and great value for money. I recommend Super Natural Hardware to everyone.", name: "Tafadzwa Chikumba", role: "Regular Client", rating: 5 },
      { text: "The team at Super Natural Hardware is knowledgeable and always willing to go the extra mile.", name: "Chenai Manyika", role: "Business Owner", rating: 5 },
      { text: "Consistently excellent service. Super Natural Hardware has been our trusted partner for years.", name: "Patrick Nhamo", role: "Property Manager", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented, dedicated people.",
    positions: [
      { title: "Operations Assistant", department: "Operations", location: "Harare", type: "Full-time", desc: "Support daily operations and ensure smooth service delivery." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to get started? Contact us for a free quote.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in your details and we will respond within 24 hours.",
  },

  homeCta: {
    title: "BUILD YOUR VISION",
    subtitle: "Ready to experience the difference? Get in touch today for a free, no-obligation quote. We look forward to serving you.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "WhatsApp Us",
    whatsappText: "Hi Super Natural Hardware! I would like to request a quote.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85",
  },

  footer: {
    description: "Super Natural Hardware has been serving Harare's builders, contractors, and homeowners with quality building materials and hardware supplies for over a decade.",
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export default siteData;
