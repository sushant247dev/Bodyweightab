export interface NavLink {
  number: string;
  label: string;
  href: string;
  description?: string;
}

export const NAV_LINKS: NavLink[] = [
  { number: "001", label: "Home", href: "#hero", description: "Return to the top" },
  { number: "002", label: "Skills", href: "#skills", description: "Visual athlete portfolio" },
  { number: "003", label: "Philosophy", href: "#philosophy", description: "Beyond strength, towards control" },
  { number: "004", label: "Coaching", href: "#services", description: "Disciplines & skill programs" },
  { number: "005", label: "Experience", href: "#experience", description: "A system built for progress" },
  { number: "006", label: "Testimonials", href: "#testimonials", description: "Athlete feedback & outcomes" },
  { number: "007", label: "About", href: "#about", description: "The coach behind the practice" },
];

export const BRAND_CONFIG = {
  name: "BODYWEIGHTLAB",
  tagline: "Personalized Calisthenics Coaching",
  coachName: "Sushant Singh",
  email: "notsosushant@gmail.com",
  instagram: "bodyweightlab_",
  instagramUrl: "https://instagram.com/bodyweightlab_",
  availabilityStatus: "Accepting 4 Athletes for Q2 / Q3",
  locationNotice: "Based in Jaipur, India / Online Worldwide",
};
