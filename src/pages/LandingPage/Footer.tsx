import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerSections = [
  {
    title: "About Terra Go",
    links: [
      { label: "Our Mission", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Impact Stories", href: "#" },
      { label: "Press & Media", href: "#" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Eco Resorts", href: "#" },
      { label: "Wildlife Sanctuaries", href: "#" },
      { label: "Marine Reserves", href: "#" },
      { label: "Conservation Sites", href: "#" },
    ],
  },
  {
    title: "Activities",
    links: [
      { label: "Reef Restoration", href: "#" },
      { label: "Forest Conservation", href: "#" },
      { label: "Beach Cleanups", href: "#" }    ,
      { label: "Wildlife Monitoring", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Become a Steward", href: "#" },
      { label: "Partner With Us", href: "#" },
      { label: "NGO Collaboration", href: "#" },
      { label: "Blog & Resources", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">Terra Go</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Empowering sustainable tourism and environmental restoration through community-driven action.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Terra Go. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
