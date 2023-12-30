import React from "react";

interface WorkProps {
  company: string;
  position: string;
  year: string;
  description: string;
  logo: string;
}

const WorkItem: React.FC<WorkProps> = ({
  company,
  position,
  year,
  description,
  logo,
}) => (
  <div className="flex items-center justify-center">
    <img
      src={logo}
      alt={`${company} logo`}
      className="w-20 h-20 mr-6 rounded-md object-cover"
    />
    <div>
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
        {company}
      </h2>
      <p className="text-md text-zinc-400">
        {position} • {year}
      </p>
      <p className="text-md text-zinc-400">{description}</p>
    </div>
  </div>
);

const WorkTimeline = () => (
  <article className="p-4 md:p-8">
    <div>
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display mb-6">
        Experience
      </h2>

      <WorkItem
        company="Momenta"
        position="Software Test Engineer Intern"
        year="Nov 2023 - Dec 2023"
        description="Physical and simulational testing team responsible for the validation of ADAS functionality in autonomous vehicles."
        logo="/momenta_logo.png"
      />

      <div className="w-px h-12 bg-zinc-400 mx-4 ml-9"></div>

      <WorkItem
        company="Zeiss"
        position="Mechatronics Engineer Intern"
        year="Aug 2023 - Nov 2023"
        description="Research and development team for Zeiss Xradia Ultra and Synchrotron product lines, nanoscale x-ray imaging machines"
        logo="/zeiss_logo.png"
      />

      <div className="w-px h-12 bg-zinc-400 mx-4 ml-9"></div>

      <WorkItem
        company="Zeiss"
        position="Mechanical Engineer Intern"
        year="Aug 2022 - May 2022"
        description="Research and development team for Zeiss Xradia Ultra and Synchrotron product lines, nanoscale x-ray imaging machines"
        logo="/zeiss_logo.png"
      />
    </div>
  </article>
);

export default WorkTimeline;
