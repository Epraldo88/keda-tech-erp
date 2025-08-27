import type { JSX } from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  gradient,
}) => (
  <div className="flex items-start space-x-4">
    <div
      className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
    >
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default FeatureItem;
