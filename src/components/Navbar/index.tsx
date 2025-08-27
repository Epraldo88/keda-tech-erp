import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useNavigationStore } from "../../store/navigation.store";
import Logo from "../Logo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import LanguageToggle from "./LanguageToggle"; // import the toggle

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
          <div className="hidden md:flex items-center space-x-6">
            <NavbarDesktop
              sections={sections}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
            {/* Language Toggle */}
          </div>

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
        <div className="md:hidden">
          <NavbarMobile
            sections={sections}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <div className="px-4 py-2 border-t border-gray-200">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
