import { ArrowRight } from "lucide-react";
import TopLeftBlob from "../Blob/TopLeftBlob";
import BottomRightBlob from "../Blob/BottomRightBlob";
import MiddleRightBlob from "../Blob/MiddleRightBlob";
import BouncingCircle from "./BouncingCircle";
import { useScrollToSection } from "../../hooks/useScrollToSection";

const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <TopLeftBlob />
        <BottomRightBlob />
        <MiddleRightBlob />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="block pb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover innovative solutions that drive growth and elevate your
            business to new heights. Join thousands of satisfied customers who
            trust our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 animate-pulse"></div>
      <BouncingCircle />
    </section>
  );
};

export default HeroSection;
