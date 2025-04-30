export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Welcome to the homepage"
  },
  {
    title: "About",
    href: "/about",
    description: "Learn more about us"
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read our latest articles"
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us"
  }
];