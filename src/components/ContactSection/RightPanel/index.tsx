import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const RightPanel = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
  };
  return (
    <div className="p-8 lg:w-2/3 lg:p-12">
      <div className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              {t("contact.yourName")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 border-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              {t("contact.yourEmail")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="hello@dekatech.com"
              className="w-full px-4 py-3 border-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            {t("contact.yourSubject")}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={t("contact.placeholder.subject")}
            className="w-full px-4 py-3 border-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            {t("contact.message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("contact.placeholder.message")}
            rows={6}
            className="w-full px-4 py-3 border-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 resize-none transition-colors duration-200"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-right">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {t("contact.button.sendMessage")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
