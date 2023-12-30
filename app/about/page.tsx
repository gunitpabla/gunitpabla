// AboutPage.js
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import EducationTimeline from "./education";
import WorkTimeline from "./experience";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </h2>
          <div className="lg:flex items-center col-span-3">
            <div className="lg:mr-40">
              <p className="mt-4 text-zinc-100 text-lg">
                Hello, I'm Gunit, a student at the University of California,
                Berkeley, pursuing simultaneous degrees in Data Science and
                Mechanical Engineering.
              </p>
              <p className="mt-4 text-zinc-100 text-lg">
                I'm fascinated by artificial intelligence, machine learning,
                robotics, and software engineering. My aim is to contribute to
                the forefront of technological advancements.
              </p>
              <p className="mt-4 text-zinc-100 text-lg">
                I started my academic journey with aspirations of becoming a
                mechanical engineer where I explored various facets of
                engineering. It was in the realm of robotics, where hardware
                meets software, that I found my passion for artificial
                intelligence. This led me to embrace software and pursue a a
                second degree in data science with a domain emphasis of
                robotics.
              </p>
            </div>
            <div className="flex-shrink-0 sm:mt-10 mr-20">
              <img
                src="/gunit_photo.png"
                alt="Gunit's Image"
                className="w-80 h-90 object-cover rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {/* Work Experience Card */}
          <Card>
            <EducationTimeline></EducationTimeline>
          </Card>

          {/* Education Card */}
          <Card>
            <WorkTimeline></WorkTimeline>
          </Card>
        </div>
      </div>
    </div>
  );
}
