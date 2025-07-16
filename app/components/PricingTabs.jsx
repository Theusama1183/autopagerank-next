'use client';
import { useState } from 'react';

const plans = {
  trial: {
    title: "Free Trial",
    price: "$0.00",
    subText: "/ for first 7 days",
    buttonText: "Sign Up",
    features: [
      "Free trial is 7 days free then $97 per month",
      "300 articles / 200 indexes daily",
    ],
  },
  weekly: {
    title: "Weekly Package",
    price: "$29",
    subText: "/ per week",
    buttonText: "Get Weekly Plan",
    features: [
      "Weekly is $29 per week",
      "300 articles / 200 indexes daily",
    ],
  },
  monthly: {
    title: "Monthly Package",
    price: "$97",
    subText: "/ per month",
    buttonText: "Get Monthly Plan",
    features: [
      "Monthly - $97 per month",
      "300 articles / 200 indexes daily",
    ],
  },
  unlimited: {
    title: "Unlimited Package",
    price: "$297",
    subText: "/ per month",
    buttonText: "Get Unlimited Plan",
    features: [
      "Unlimited - $297 per month",
      "Unlimited articles / 200 indexes daily",
    ],
  },
};

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState('trial');
  const currentPlan = plans[activeTab];

  return (
    <div className="w-full md:w-1/2 bg-white px-6 py-10">
      <h3 className="text-4xl font-bold mb-6">Pricing Plans</h3>

      <div className="border border-[#338CF5] rounded-[15px] mb-6">
        <div className="text-center p-5 bg-[#338CF5] rounded-t-[15px]">
          <p className="text-white font-semibold text-xl">
            {activeTab === 'trial' ? "$0.00 Free For First 7 Days" : currentPlan.price + " " + currentPlan.subText}
          </p>
        </div>

        <div className="p-6 mt-8">
          <h4 className="text-2xl font-bold mb-1 text-center">{currentPlan.title}</h4>
          <h3 className="text-6xl font-bold text-[#18191F] mb-4 text-center">
            {currentPlan.price}
            <span className="text-xl font-light text-[#18191F99]"> {currentPlan.subText}</span>
          </h3>
        </div>

        <div className="p-6 bg-[#FCFCFC] mt-6 rounded-b-[15px]">
          <ul className="text-lg text-[#18191F] space-y-1 mb-6">
            {currentPlan.features.map((feature, idx) => (
              <li key={idx} className="flex gap-2.5 mt-3">
                <svg className="mt-2" width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5025 10.1999L15.2675 11.9649L25.8494 1.38288L27.6173 3.15064L15.2675 15.5004L7.3125 7.54538L9.08026 5.77763L11.7362 8.43363L13.5025 10.1999ZM13.5046 6.66525L19.6954 0.474365L21.4583 2.23722L15.2675 8.428L13.5046 6.66525ZM9.97123 13.7341L8.20495 15.5004L0.25 7.54538L2.01776 5.77763L3.78404 7.544L3.78255 7.54538L9.97123 13.7341Z" fill="#338CF5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <a href="#" target="_blank">
            <button className="w-full bg-[#2F80ED] hover:bg-[#1669d8] text-white py-2 rounded-lg font-semibold transition-all">
              {currentPlan.buttonText}
            </button>
          </a>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-col space-y-3">
        {Object.entries(plans).map(([key, value]) => (
          <button
            key={key}
            className={`w-full border text-center py-4 rounded-[10px] font-medium ${
              activeTab === key
                ? 'border-[#338CF5] text-[#338CF5] bg-[#EAF2FF]'
                : 'border-[#338CF566] text-[#18191F]'
            }`}
            onClick={() => setActiveTab(key)}
          >
            {value.title}
          </button>
        ))}
      </div>
    </div>
  );
}
