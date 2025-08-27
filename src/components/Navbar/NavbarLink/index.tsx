export interface NavbarLinkProps {
  id: string;
  section: string;
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMobile?: boolean;
}

const NavbarLink = ({
  id,
  section,
  activeSection,
  scrollToSection,
  isMobile = false,
}: NavbarLinkProps) => {
  const baseClass = isMobile
    ? `block w-full text-left px-3 py-2`
    : `transition-colors`;

  const activeClass =
    activeSection === id
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <button
      onClick={() => scrollToSection(id)}
      className={`${baseClass} ${activeClass}`}
    >
      {section}
    </button>
  );
};

export default NavbarLink;
