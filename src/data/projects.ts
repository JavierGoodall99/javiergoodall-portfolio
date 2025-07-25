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
    id: "ruimijnwoning",
    title: "Ruimijnwoning",
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
    url: "https://chatflow.studio/"
  },
  {
    id: "newgenmarketing",
    title: "NewGen Marketing",
    subtitle: "Online Marketing Agency",
    description:
      "NewGen Marketing is an online marketing agency that helps businesses grow their online presence and increase their visibility in the market. We offer a range of services, including SEO, social media management, graphic design, and photography.",
    imageUrl: "/newgenmarketing.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    impact:
      "Helped local businesses increase website traffic by more than 200% through improved social media and digital branding strategies.",
    url: "https://newgenmarketing.netlify.app/"
  },
  {
    id: "web-portal-1910",
    title: "A Web Portal Frozen in 1910",
    subtitle: "Alt-History Digital Experience",
    description:
      "A historically faithful reimagining of what the internet might look like if invented in 1910. The interface blends Edwardian-era design with modern frontend technology to create a narrative, tactile experience—complete with telegrams, thought archives, and card-catalog metaphors.",
    imageUrl: "/vintagenewspaper.png",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "Vintage Typography"],
    impact:
      "Transformed frontend code into a speculative historical artifact—challenging modern UX assumptions through design, narrative, and deep immersion.",
    url: "https://year1910.vercel.app/"
  },
  {
    id: "icon-library",
    title: "Custom Icon Library",
    subtitle: "Reusable Icon Component System",
    description:
      "A fully customizable icon library built with React and TypeScript. Users can adjust stroke width, size, and colors, and download icons as PNG or SVG. Designed for consistency, flexibility, and easy integration into any design system.",
    imageUrl: "/iconlibrary.png",
    tags: ["React", "TypeScript", "FluentUI", "Accessibility"],
    impact:
      "Empowered developers and designers to maintain brand consistency with flexible, themeable icons—while reducing asset management overhead through on-demand customization and export.",
    url: "https://iconlib.vercel.app/"
  },
  {
    id: "boutiquehotel",
    title: "Boutique Hotel",
    subtitle: "Hotel Booking Platform",
    description:
      "A hotel booking platform built with React and TypeScript. The interface is designed to be user-friendly and easy to navigate.",
    imageUrl: "/boutiquehotel.png",
    tags: ["React", "TypeScript", "TailwindCSS", "radix/ui"],
    impact:
      "Enabled users to book hotel rooms with ease, while providing a seamless experience for hotel staff to manage bookings and reservations.",
    url: "https://boutiquehotel.netlify.app/"
  },
  {
    id: "contemporaryphotography",
    title: "Contemporary Photography",
    subtitle: "Photography Portfolio",
    description:
      "A clean and minimal photography portfolio built with React and TypeScript. It showcases high-resolution imagery with smooth transitions and an intuitive layout.",
    imageUrl: "/contemporaryphotography.png",
    tags: ["React", "TypeScript", "TailwindCSS", "radix/ui"],
    impact:
      "Provided a professional platform for photographers to display their work, attract clients, and build an online presence with fast load times and mobile responsiveness.",
    url: "https://elana-photography.netlify.app/"
  }

];