import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useNavigationStore } from "../../store/navigation.store";
import Logo from "../Logo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useNavigationStore();
  const { scrollToSection } = useScrollToSection();
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "about", "pricing", "contact"];

  // Detect scroll & set active section
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = sectionId;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo placement="navbar" />

          {/* Desktop Menu */}
          <NavbarDesktop
            sections={sections}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMobile
          sections={sections}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
    </nav>
  );
};

export default Navbar;
