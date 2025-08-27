import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "id" : "en");
  };

  console.log(i18n.language);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isEnglish}
        onChange={toggleLanguage}
      />
      <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
      <span
        className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
          isEnglish ? "translate-x-7" : "translate-x-0"
        }`}
      ></span>
      <span className="ml-4 text-sm font-medium">
        {isEnglish ? "EN" : "ID"}
      </span>
    </label>
  );
};

export default LanguageToggle;
