import config from "@/data/config.json";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { IconType } from "react-icons";

interface SocialLinksProps {
  className?: string; 
  linkClassName?: string; 
  iconClassName?: string; 
  iconSize?: number; 
  showLabels?: boolean;
}

export default function SocialLinks({
  className = "flex items-center gap-4",
  linkClassName = "flex w-fit items-center gap-2.5 text-foreground/85 transition-colors hover:text-accent",
  iconClassName = "text-muted hover:text-accent",
  iconSize = 20,
  showLabels = false,
}: SocialLinksProps) {
  const links = [
    config.contact.email && {
      label: config.contact.email,
      href: `mailto:${config.contact.email}`,
      icon: TbMail,
    },
    config.contact.github && {
      label: "GitHub",
      href: config.contact.github,
      icon: SiGithub,
    },
    config.contact.linkedin && {
      label: "LinkedIn",
      href: config.contact.linkedin,
      icon: FaLinkedin,
    },
  ].filter(Boolean) as { label: string; href: string; icon: IconType }[];

  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={linkClassName}
        >
          <link.icon size={iconSize} className={iconClassName} />
          {showLabels && <span>{link.label}</span>}
        </a>
      ))}
    </div>
  );
}