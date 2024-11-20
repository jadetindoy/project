import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Just launched February 2024</span>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Master Any Language with Expert Guidance
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join thousands of successful learners who have achieved fluency through our personalized approach. 
                Get started with native speakers, live sessions, and a curriculum tailored to your goals.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#pricing"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Learning Now
                </a>
                <a href="#" className="flex items-center text-sm font-semibold leading-6 text-gray-900">
                  <PlayCircle className="mr-2 h-5 w-5 text-gray-400" />
                  Watch demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="App screenshot"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}