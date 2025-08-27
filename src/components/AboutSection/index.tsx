import { Check, Star, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import FeatureItem from "./FeatureItem";
import type { JSX } from "react";

interface Feature {
  key: string; // translation key
  icon: JSX.Element;
  gradient: string;
}

const AboutSection = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      key: "aboutSection.innovation",
      icon: <Star className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      key: "aboutSection.customer",
      icon: <User className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      key: "aboutSection.results",
      icon: <Check className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("aboutSection.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("aboutSection.paragraph")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {features.map((feature) => (
            <FeatureItem
              key={feature.key}
              title={t(`${feature.key}.title`)}
              description={t(`${feature.key}.description`)}
              icon={feature.icon}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
