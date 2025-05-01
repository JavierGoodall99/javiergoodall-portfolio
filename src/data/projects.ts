export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  impact: string;
  url: string; 
}

export const projects: Project[] = [
  {
    id: "ruimijmwoning",
    title: "Ruimijmwoning",
    subtitle: "Real Estate Platform",
    description:
      "A property listing platform designed to help users find affordable housing opportunities in the Netherlands, featuring responsive layouts, fast filtering, and clean UI.",
    imageUrl: "/ruilmijnwoning.png",
    tags: ["Next.js", "TypeScript", "Bootstrap", "Sass", "Node.js"],
    impact:
      "Improved housing visibility for underserved renters while delivering a seamless, high-performance browsing experience across devices.",
    url: "https://ruilmijnwoning.nl"
  },
  {
    id: "chatflow",
    title: "ChatFlow",
    subtitle: "WhatsApp Business Assistant",
    description:
      "ChatFlow turns chaotic WhatsApp messages into structured business records—automatically extracting payment messages, generating invoices, and visualizing financial summaries. Designed for freelancers and small businesses who run on WhatsApp.",
    imageUrl: "/chatflow.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    impact:
      "Enabled solo business owners to create invoices and track payments directly from WhatsApp exports—bringing structure and professionalism to informal chat-based commerce.",
    url: "https://chatflow.app"
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    subtitle: "Financial Services",
    description: "A mobile banking application designed for simplicity and security, allowing users to manage accounts, transfer funds, and track spending from anywhere.",
    imageUrl: "/projects/banking.webp",
    tags: ["React Native", "TypeScript", "Redux", "Biometrics"],
    impact: "Achieved 4.8/5 rating on app stores with 200,000+ active monthly users",
    url: "https://mobilebanking-demo.com"
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Portal",
    subtitle: "Patient Management System",
    description: "A comprehensive portal connecting patients with healthcare providers, featuring appointment scheduling, secure messaging, and medical record access.",
    imageUrl: "/projects/healthcare.webp",
    tags: ["Vue.js", "Node.js", "MongoDB", "HIPAA Compliance"],
    impact: "Reduced administrative tasks by 65% while improving patient satisfaction scores",
    url: "https://healthcare-portal.dev"
  }
];