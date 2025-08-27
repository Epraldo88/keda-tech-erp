import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const LeftPanel = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      text: "+(62-81) 180-878-87",
    },
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      text: "Support@kedatech.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      text: "Jakarta, Indonesia",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:w-1/3 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          {t("contact.formTitle")}
        </h2>
        <p className="text-teal-100 mb-8 leading-relaxed">
          {t("contact.formContent")}
        </p>
        <div className="space-y-2 md:space-y-6">
          {contactInfo.map((item) => (
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="text-white text-sm">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
