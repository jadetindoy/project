import React from 'react';
import { Users, Video, MessageCircle, Award, BookOpen, Globe } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Native Speakers",
    description: "Learn from certified native speakers who understand your learning journey"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Live Sessions",
    description: "Interactive live classes with real-time feedback and practice"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated language mentors"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certification",
    description: "Earn recognized certificates as you progress"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Custom Curriculum",
    description: "Personalized learning paths based on your goals"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Cultural Immersion",
    description: "Learn culture and customs alongside language"
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to master a new language
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive platform combines technology with human expertise to deliver the most effective language learning experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}