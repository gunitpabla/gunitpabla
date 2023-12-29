// AboutPage.js
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; // Assuming you have a Card component

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-90 mr-9">
              <p className="text-lg text-zinc-400">
                Hello, I'm Gunit, a student at the University of California,
                Berkeley, pursuing a double major in Data Science and Mechanical
                Engineering. I have a broad interest in various fields,
                including artificial intelligence, machine learning, robotics,
                and general software engineering. I hope to contribute to the
                next generation of cutting-edge technology.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/gunit_photo.png" // Reference the image directly
                alt="Gunit's Image"
                className="w-80 h-80 object-cover rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"
              />
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
