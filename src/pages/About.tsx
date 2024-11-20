import React from 'react';
import { Globe2, Award, Users, BookOpen } from 'lucide-react';

const team = [
  {
    name: 'Jazzy Gee',
    role: 'Founder & CEO',
    image: 'https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-6/461721333_18455204017025719_4805294901087637866_n.jpg?stp=cp6_dst-jpegr&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFvF7VGPNRoyr7EfKbiBVkvMJIuOPbqEKIwki449uoQogK_pIBUy4hqRFzXshlui3mN2TQfEe1H8dsEcY9g-8oI&_nc_ohc=zdft2ZOOZQYQ7kNvgEUCTHO&_nc_zt=23&se=-1&_nc_ht=scontent.fmnl19-1.fna&_nc_gid=AKPHtBBjDjzMmJSuVPtSnpJ&oh=00_AYA-dBY7igx4ZLeGzj_J83VKe6WS6gYL-6aMCqU1pXFL9Q&oe=67436C9E',
    bio: 'Passionate about linguistics and language teaching, with a deep commitment to fostering effective communication and learning.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Education',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Curriculum development expert specializing in immersive learning methods.'
  },
  {
    name: 'Emma Watson',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Tech innovator focused on creating seamless learning experiences.'
  }
];

export default function About() {
  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pb-16 pt-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Gotta Be Lingual</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're revolutionizing language learning through technology and human connection. Our mission is to make language learning accessible, effective, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Languages Offered</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">25+</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Active Students</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">50,000+</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Certified Teachers</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">500+</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Success Rate</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">94%</dd>
          </div>
        </dl>
      </div>

      {/* Values Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe in making language learning accessible, effective, and enjoyable for everyone through innovation and dedication.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <Globe2 className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
              Global Access
            </dt>
            <dd className="inline">Breaking down language barriers worldwide</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <Award className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
              Excellence
            </dt>
            <dd className="inline">Committed to the highest teaching standards</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <Users className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
              Community
            </dt>
            <dd className="inline">Building connections through language</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <BookOpen className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
              Innovation
            </dt>
            <dd className="inline">Pioneering modern learning methods</dd>
          </div>
        </dl>
      </div>

      {/* Team Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the passionate experts behind Gotta Be Lingual who are dedicated to transforming language education.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.image} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-indigo-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}