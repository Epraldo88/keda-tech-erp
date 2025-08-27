export interface Plan {
  nameKey: string;
  priceValue: string; // numeric price (e.g., "29")
  pricePeriodKey: string; // translation key for period (e.g., "pricingSection.month")
  descriptionKey: string;
  featuresKeys: string[];
  ctaKey: string;
  popular?: boolean;
  gradient?: string;
  textColor?: string;
  buttonStyle?: string;
}
export const plans: Plan[] = [
  {
    nameKey: "pricingSection.basic.name",
    priceValue: "29",
    pricePeriodKey: "pricingSection.month",
    descriptionKey: "pricingSection.basic.description",
    featuresKeys: [
      "pricingSection.basic.features.feature1",
      "pricingSection.basic.features.feature2",
      "pricingSection.basic.features.feature3",
    ],
    ctaKey: "pricingSection.basic.cta",
  },
  {
    nameKey: "pricingSection.business.name",
    priceValue: "79",
    pricePeriodKey: "pricingSection.month",
    descriptionKey: "pricingSection.business.description",
    featuresKeys: [
      "pricingSection.business.features.feature1",
      "pricingSection.business.features.feature2",
      "pricingSection.business.features.feature3",
      "pricingSection.business.features.feature4",
    ],
    ctaKey: "pricingSection.business.cta",
    popular: true,
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColor: "text-white",
    buttonStyle: "bg-white text-purple-600 hover:bg-gray-100",
  },
  {
    nameKey: "pricingSection.entrepreneur.name",
    priceValue: "149",
    pricePeriodKey: "pricingSection.month",
    descriptionKey: "pricingSection.entrepreneur.description",
    featuresKeys: [
      "pricingSection.entrepreneur.features.feature1",
      "pricingSection.entrepreneur.features.feature2",
      "pricingSection.entrepreneur.features.feature3",
      "pricingSection.entrepreneur.features.feature4",
      "pricingSection.entrepreneur.features.feature5",
      "pricingSection.entrepreneur.features.feature6",
    ],
    ctaKey: "pricingSection.entrepreneur.cta",
  },
];
