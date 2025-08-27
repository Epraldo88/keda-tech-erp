import { Check } from "lucide-react";
import React from "react";

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
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $29<span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">Perfect for small businesses</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Up to 10 users</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Basic analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Email support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">5GB storage</span>
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white transform scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Business</h3>
              <div className="text-4xl font-bold mb-2">
                $79<span className="text-lg opacity-80">/month</span>
              </div>
              <p className="opacity-90">Ideal for growing companies</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span>Up to 50 users</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span>50GB storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span>API access</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          {/* Entrepreneur Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Entrepreneur
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $149<span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">For enterprise solutions</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Unlimited users</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Custom analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">24/7 phone support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Unlimited storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">White-label solution</span>
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
