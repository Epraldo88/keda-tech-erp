import LoginButton from "./LoginButton";
import NavbarLink from "./NavbarLink";

export interface NavbarDesktopProps {
  sections: string[];
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
          key={section}
          section={section}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      ))}
      <LoginButton />
    </div>
  );
};

export default NavbarDesktop;
