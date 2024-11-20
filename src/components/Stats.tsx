import React from 'react';

const stats = [
  { id: 1, name: 'Active Students', value: '50,000+' },
  { id: 2, name: 'Languages Offered', value: '25+' },
  { id: 3, name: 'Certified Teachers', value: '500+' },
  { id: 4, name: 'Success Rate', value: '94%' },
];

export default function Stats() {
  return (
    <div className="relative bg-indigo-600">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-indigo-600 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <p key={stat.id} className="text-center">
                <span className="block text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="mt-1 block text-base font-semibold text-indigo-100">
                  {stat.name}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}