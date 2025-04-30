export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    id: "digital-dashboard",
    title: "Digital Dashboard",
    subtitle: "Analytics Platform",
    description: "A comprehensive analytics dashboard for monitoring key performance indicators with real-time data visualization and customizable widgets.",
    imageUrl: "/projects/dashboard.webp", 
    tags: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    impact: "Reduced decision-making time by 40% through intuitive visualization of complex datasets"
  },
  {
    id: "ecommerce-redesign",
    title: "E-commerce Redesign",
    subtitle: "User Experience Optimization",
    description: "Complete redesign of an e-commerce platform focused on improving conversion rates through streamlined checkout process and enhanced product discovery.",
    imageUrl: "/projects/ecommerce.webp",
    tags: ["Next.js", "Framer Motion", "Stripe", "Sanity CMS"],
    impact: "Increased conversion rate by 27% and reduced cart abandonment by 35%"
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    subtitle: "Financial Services",
    description: "A mobile banking application designed for simplicity and security, allowing users to manage accounts, transfer funds, and track spending from anywhere.",
    imageUrl: "/projects/banking.webp",
    tags: ["React Native", "TypeScript", "Redux", "Biometrics"],
    impact: "Achieved 4.8/5 rating on app stores with 200,000+ active monthly users"
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Portal",
    subtitle: "Patient Management System",
    description: "A comprehensive portal connecting patients with healthcare providers, featuring appointment scheduling, secure messaging, and medical record access.",
    imageUrl: "/projects/healthcare.webp",
    tags: ["Vue.js", "Node.js", "MongoDB", "HIPAA Compliance"],
    impact: "Reduced administrative tasks by 65% while improving patient satisfaction scores"
  }
];