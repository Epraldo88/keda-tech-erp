import LanguageToggle from "./LanguageToggle";
import LoginButton from "./LoginButton";
import NavbarLink from "./NavbarLink";

export interface Section {
  id: string;
  label: string;
  labelKey?: string; // optional, only needed if you want to keep key for i18n
}
export interface NavbarMobileProps {
  sections: Section[];
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const NavbarMobile = ({
  sections,
  activeSection,
  scrollToSection,
}: NavbarMobileProps) => {
  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {sections.map((section) => (
          <NavbarLink
            key={section.id}
            id={section.id}
            section={section.label}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isMobile
          />
        ))}
        <LoginButton isMobile />
      </div>

      <div className="px-4 py-2 border-t border-gray-200">
        <LanguageToggle />
      </div>
    </div>
  );
};

export default NavbarMobile;
