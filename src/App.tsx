import "./App.css";
// import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AuthModal from "./components/AuthModal";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <PricingSection />

      <ContactSection />

      <FooterSection />

      <AuthModal />
    </div>
  );
}

export default App;
