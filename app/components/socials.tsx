// Socials.tsx

import React from "react";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

interface SocialIconsProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icon, href }) => (
  <Link href={href} target="_blank">
    <div className="p-1">
      <span className="flex items-center justify-center w-10 h-10 text-sm rounded-full text-zinc-200 hover:ring-2 hover:ring-white transition-all duration-300">
        {icon}
      </span>
    </div>
  </Link>
);

const Socials: React.FC = () => {
  const socials = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/gunitpabla/",
      label: "LinkedIn",
      handle: "gunitpabla",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:gunitpabla@berkeley.edu",
      label: "Email",
      handle: "gunitpabla@berkeley.edu",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/gunitpabla",
      label: "Github",
      handle: "gunitpabla",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:gap-4">
        {socials.map((s) => (
          <SocialIcons key={s.label} icon={s.icon} href={s.href} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
