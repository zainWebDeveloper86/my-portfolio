import config from "@/data/config.json";
import SocialLinks from "./SocialLinks"; 

export default function Footer() {

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-3 px-6 py-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© Copyright, {new Date().getFullYear()}</p>
        <p>Developed with 🧡 by {config.name}</p>
        {/* Social Links */}
        <SocialLinks className="flex flex-row gap-6" iconSize={22} />
      </div>
    </footer>
  );
}
