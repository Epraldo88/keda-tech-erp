import LoginButton from "./LoginButton";
import NavbarLink from "./NavbarLink";

export interface NavbarMobileProps {
  sections: string[];
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
            key={section}
            section={section}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isMobile
          />
        ))}
        <LoginButton isMobile />
      </div>
    </div>
  );
};

export default NavbarMobile;
