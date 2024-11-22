import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Gray',
    price: 10,
    features: [
      'Virtual-only content',
      'Written and recorded material',
      '10 hours weekly content access',
      '24 hours monthly content limit',
      'Basic learning resources'
    ],
    color: 'gray',
    bgColor: 'bg-gray-100',
    buttonBg: 'bg-gray-600',
    buttonHover: 'hover:bg-gray-700',
    accentColor: 'text-gray-600',
    checkColor: 'text-gray-500'
  },
  {
    name: 'Gray-Green',
    price: 20,
    features: [
      'All Gray tier features',
      'Messaging with tutors',
      'Unlimited content access',
      '24 hours monthly content',
      'Recorded sessions access'
    ],
    color: 'green',
    bgColor: 'bg-green-50',
    buttonBg: 'bg-green-600',
    buttonHover: 'hover:bg-green-700',
    accentColor: 'text-green-600',
    checkColor: 'text-green-500'
  },
  {
    name: 'Green',
    price: 50,
    recommended: true,
    features: [
      'All Gray-Green features',
      '8 hours of live content',
      '50 monthly tutor messages',
      'Group lectures (30 students)',
      'Enhanced learning tools'
    ],
    color: 'emerald',
    bgColor: 'bg-emerald-100',
    buttonBg: 'bg-emerald-600',
    buttonHover: 'hover:bg-emerald-700',
    accentColor: 'text-emerald-600',
    checkColor: 'text-emerald-500'
  },
  {
    name: 'Gold',
    price: 100,
    features: [
      'Full feature access',
      '1-hour one-on-one session',
      'Unlimited messaging',
      'Early content access',
      'Live classes with Q&A'
    ],
    color: 'yellow',
    bgColor: 'bg-yellow-50',
    buttonBg: 'bg-yellow-600',
    buttonHover: 'hover:bg-yellow-700',
    accentColor: 'text-yellow-600',
    checkColor: 'text-yellow-500'
  }
];

export default function PricingSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose your learning journey
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Select the plan that best fits your learning style and goals. All plans include access to our learning platform.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 ${tier.bgColor} transition-all duration-200
                ${tier.recommended ? 'ring-2 ring-emerald-500 shadow-lg scale-105' : 'ring-1 ring-gray-200 hover:shadow-md'}`}
            >
              {tier.recommended && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-500/20">
                    Recommended
                  </span>
                </div>
              )}
              
              <div>
                <h3 className={`text-lg font-semibold leading-8 ${tier.accentColor}`}>
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className={`text-4xl font-bold tracking-tight ${tier.accentColor}`}>${tier.price}</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <button
                  className={`mt-4 w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
                    ${tier.buttonBg} ${tier.buttonHover} transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                  Get started today
                </button>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${tier.checkColor}`} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-base font-semibold text-gray-600">
            Need more personalized attention?
          </p>
          <button className="mt-4 inline-flex items-center rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
            Add One-on-One Sessions ($50/hr)
          </button>
        </div>
      </div>
    </div>
  );
}
