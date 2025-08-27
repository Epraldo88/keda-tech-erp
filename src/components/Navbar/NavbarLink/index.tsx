export interface NavbarLinkProps {
  section: string;
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMobile?: boolean;
}

const NavbarLink = ({
  section,
  activeSection,
  scrollToSection,
  isMobile = false,
}: NavbarLinkProps) => {
  const baseClass = isMobile
    ? `block w-full text-left px-3 py-2`
    : `transition-colors`;

  const activeClass =
    activeSection === section
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <button
      onClick={() => scrollToSection(section)}
      className={`${baseClass} ${activeClass}`}
    >
      {section.toUpperCase()}
    </button>
  );
};

export default NavbarLink;
