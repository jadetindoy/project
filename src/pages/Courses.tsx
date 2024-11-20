import React from 'react';
import { BookOpen, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Spanish for Beginners',
    description: 'Start your journey with Spanish fundamentals and basic conversations.',
    level: 'Beginner',
    duration: '12 weeks',
    students: '2,500+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 2,
    title: 'Business Japanese',
    description: 'Master Japanese business etiquette and professional communication.',
    level: 'Intermediate',
    duration: '16 weeks',
    students: '1,800+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 3,
    title: 'French Culture & Language',
    description: 'Immerse yourself in French culture while learning the language.',
    level: 'All Levels',
    duration: '14 weeks',
    students: '2,100+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
  }
];

export default function Courses() {
  return (
    <div className="bg-gray-50 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Available Courses
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our wide range of language courses designed to help you achieve fluency
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600">{course.level}</p>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-500">{course.rating}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{course.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      {course.students}
                    </div>
                  </div>
                  <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}