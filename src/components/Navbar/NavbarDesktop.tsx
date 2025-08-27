import LanguageToggle from "./LanguageToggle";
import LoginButton from "./LoginButton";
import NavbarLink from "./NavbarLink";

export interface Section {
  id: string;
  label: string;
  labelKey?: string; // optional, only needed if you want to keep key for i18n
}

export interface NavbarDesktopProps {
  sections: Section[];
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const NavbarDesktop = ({
  sections,
  activeSection,
  scrollToSection,
}: NavbarDesktopProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {sections.map((section) => (
        <NavbarLink
          key={section.id}
          id={section.id}
          section={section.label}
          activeSection={activeSection}
          scrollToSection={() => scrollToSection(section.id)}
        />
      ))}
      <LoginButton />
      <LanguageToggle />
    </div>
  );
};

export default NavbarDesktop;
