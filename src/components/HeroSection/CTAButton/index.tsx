import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollToSection } from "../../../hooks/useScrollToSection";

const CTAButton = () => {
  const { t } = useTranslation();
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={() => scrollToSection("pricing")}
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <span>{t("heroSection.buttonGetStarted")}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
      >
        {t("heroSection.buttonLearnMore")}
      </button>
    </div>
  );
};

export default CTAButton;
