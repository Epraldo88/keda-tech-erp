import { useTranslation } from "react-i18next";
import BottomRightBlob from "../Blob/BottomRightBlob";
import MiddleRightBlob from "../Blob/MiddleRightBlob";
import TopLeftBlob from "../Blob/TopLeftBlob";
import BouncingCircle from "./BouncingCircle";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const { t } = useTranslation();

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
          {/* Content Copywriting */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("heroSection.headerLine1")}
            <span className="block pb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("heroSection.headerLine2")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t("heroSection.paragraph")}
          </p>

          {/* CTA */}
          <CTAButton />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 animate-pulse"></div>
      <BouncingCircle />
    </section>
  );
};

export default HeroSection;
