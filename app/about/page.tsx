// AboutPage.js
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; // Assuming you have a Card component

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0 flex items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              About
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              <div className="col-span-2">
                <p className="mt-4 text-zinc-400 text-lg">
                  Hello, I'm Gunit, a student at the University of California,
                  Berkeley, pursuing simultaneous degrees in Data Science and
                  Mechanical Engineering.
                </p>
                <p className="mt-4 text-zinc-400 text-lg">
                  I'm fascinated by artificial intelligence, machine learning,
                  robotics, and software engineering. My aim is to contribute to
                  the forefront of technological advancements.
                </p>
                <p className="mt-4 text-zinc-400 text-lg">
                  I started my academic journey with dreams of becoming a
                  mechanical engineer where I explored various facets of
                  engineering. It was in the realm of robotics, where hardware
                  meets software, that I found my passion for artificial
                  intelligence. This led me to embrace software and pursue a a
                  second degree in data science with a domain emphasis of
                  robotics.
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="/gunit_photo.png"
                  alt="Gunit's Image"
                  className="w-50 h-50 object-cover rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {/* Work Experience Card */}
          <Card>
            <h3 className="text-xl font-bold text-zinc-200 mb-2">
              Work Experience
            </h3>
            {/* Add details about work experience with padding */}
            <p className="text-sm text-zinc-400 leading-6">
              {/* Work experience details go here */}
            </p>
          </Card>

          {/* Education Card */}
          <Card>
            <h3 className="text-xl font-bold text-zinc-200 mb-2">Education</h3>
            {/* Add details about education with padding */}
            <p className="text-sm text-zinc-400 leading-6">
              {/* Education details go here */}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
