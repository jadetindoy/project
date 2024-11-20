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
    color: 'gray'
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
    color: 'green'
  },
  {
    name: 'Green',
    price: 50,
    popular: true,
    features: [
      'All Gray-Green features',
      '8 hours of live content',
      '50 monthly tutor messages',
      'Group lectures (30 students)',
      'Enhanced learning tools'
    ],
    color: 'emerald'
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
    color: 'yellow'
  }
];

export default function PricingSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
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
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.popular ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white'
              }`}
            >
              <h3 className={`text-lg font-semibold leading-8 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight">${tier.price}</span>
                <span className={tier.popular ? 'text-gray-300' : 'text-gray-600'}>/month</span>
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${tier.popular ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className={tier.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.popular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                }`}
              >
                Get started today
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-base font-semibold text-gray-600">
            Need more personalized attention?
          </p>
          <button className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add One-on-One Sessions ($50/hr)
          </button>
        </div>
      </div>
    </div>
  );
}