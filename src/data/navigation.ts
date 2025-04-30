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
    description: "Learn more about me"
  },
  {
    title: "Work",
    href: "/work",
    description: "View my projects and portfolio"
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read my latest articles"
  },
  {
    title: "Gallery",
    href: "/gallery",
    description: "View my photography and artwork"
  }
];