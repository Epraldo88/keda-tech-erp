import React from "react";
import type { Plan } from "../constant";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const PlanCard: React.FC<Plan> = ({
  nameKey,
  priceValue,
  pricePeriodKey,
  descriptionKey,
  featuresKeys,
  ctaKey,
  popular,
  gradient,
  textColor,
  buttonStyle,
}) => {
  const { t } = useTranslation();
  const isPopular = popular ?? false;
  const textColorClass = textColor ?? "text-gray-900";
  const buttonClass =
    buttonStyle ??
    "border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600";

  return (
    <div
      className={`rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
        gradient ? gradient : "bg-white"
      } ${isPopular ? "transform scale-105" : ""}`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="text-center mb-8">
            {isPopular && (
              <div className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                {t("plans.business.popular", "Most Popular")}
              </div>
            )}
            <h3 className={`text-2xl font-bold mb-2 ${textColorClass}`}>
              {t(nameKey)}
            </h3>
            <div className={`text-4xl font-bold mb-2 ${textColorClass}`}>
              ${priceValue}
              <span className={`text-lg ${textColorClass} opacity-80`}>
                /{t(pricePeriodKey)}
              </span>
            </div>
            <p className={`opacity-90 ${textColorClass}`}>
              {t(descriptionKey)}
            </p>
          </div>
          <ul className="space-y-4 mb-8">
            {featuresKeys.map((key, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <Check
                  className={`w-5 flex-shrink-0 ${
                    isPopular ? "text-white" : "text-green-500"
                  }`}
                />
                <span className={isPopular ? "text-white" : "text-gray-600"}>
                  {t(key)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`w-full py-3 font-semibold rounded-xl transition-colors ${buttonClass}`}
        >
          {t(ctaKey)}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
