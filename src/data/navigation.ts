export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/#hero",
    description: "Back to the top"
  },
  {
    title: "About",
    href: "/#about",
    description: "Learn more about me"
  },
  {
    title: "Philosophy",
    href: "/#philosophy",
    description: "Read my latest articles"
  },
  {
    title: "Projects",
    href: "/#projects",
    description: "View my projects and portfolio"
  },
  {
    title: "Contact",
    href: "/#contact",
    description: "Get in touch with me"
  }
];