import React from "react";

interface EducationProps {
  school: string;
  degree: string;
  year: string;
  description: string;
  logo: string;
}

const EducationItem: React.FC<EducationProps> = ({
  school,
  degree,
  year,
  description,
  logo,
}) => (
  <div className="flex items-center justify-center">
    <img
      src={logo}
      alt={`${school} logo`}
      className="w-20 h-20 mr-6 rounded-md object-cover"
    />
    <div>
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
        {school}
      </h2>
      <p className="text-md text-zinc-300">
        {degree} • {year}
      </p>
      <p className="text-md text-zinc-300">{description}</p>
    </div>
  </div>
);

const EducationTimeline = () => (
  <article className="p-4 md:p-8">
    <div>
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display mb-6">
        Education
      </h2>

      <EducationItem
        school="University of California, Berkeley"
        degree="BA, Data Science"
        year="Aug 2020 - Dec 2024"
        description="Relevant Coursework: Structure of Computer Programs, Data Structures and Algorithims, Intro to Data Science, Artificial Intelligence, Probability and Random Processes. Linear Algebra."
        logo="/berkeley_logo.png"
      />

      <div className="w-px h-12 bg-zinc-400 mx-4 ml-9"></div>

      <EducationItem
        school="University of California, Berkeley"
        degree="BS, Mechanical Engineering"
        year="Aug 2020 - Dec 2024"
        description="Relevant Coursework: Vehicle Dynamics and Control, Electronics for the IoT, Dynamic Systems and Feedback, Design of Microprocessor-Based Mechanical Systems."
        logo="/berkeley_logo.png"
      />
    </div>
  </article>
);

export default EducationTimeline;
