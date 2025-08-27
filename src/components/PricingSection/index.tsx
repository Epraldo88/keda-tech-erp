import { plans } from "./constant";
import PlanCard from "./PlanCard";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan that fits your needs and budget. All plans
            include our core features.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <PlanCard
              key={idx}
              nameKey={plan.nameKey}
              priceValue={plan.priceValue}
              pricePeriodKey={plan.pricePeriodKey}
              descriptionKey={plan.descriptionKey}
              featuresKeys={plan.featuresKeys}
              ctaKey={plan.ctaKey}
              popular={plan.popular}
              gradient={plan.gradient}
              textColor={plan.textColor}
              buttonStyle={plan.buttonStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
