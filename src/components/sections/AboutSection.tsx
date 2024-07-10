import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiCsharp } from "react-icons/si";
import SectionWrapper from "../SectionWrapper";

const AboutSection = () => {
  const technologies: {
    title: string;
    technologies: { text: string; icon: React.ReactNode }[];
  }[] = [
    {
      title: "Web techstack (2 years)",
      technologies: [
        { text: "React, NextJS", icon: <FaReact /> },
        { text: "Typescript, Javascript", icon: <RiJavascriptFill /> },
        { text: "TailwindCSS", icon: <RiTailwindCssFill /> },
      ],
    },
    {
      title: "Other languages",
      technologies: [
        { text: "Java", icon: <FaJava /> },
        { text: "C#", icon: <SiCsharp /> },
        { text: "Python", icon: <FaPython /> },
        { text: "C", icon: <SiC /> },
      ],
    },
  ];

  return (
    <SectionWrapper
      title={{
        header: "All about me",
        description:
          "A quick description of my coding beginnings, my current education, and the technologies I have learnt throughout the many years.",
      }}
      className="flex flex-col items-center"
    >
      <div className="w-5/6">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <AboutDiv title="Coding experience">
            I started coding in 2017, almost 7 years ago. I spent the first 4
            years soley teaching myself Java. Eventually, I moved onto other
            languages such as C, C#, Python, and finally Typescript. I&apos;ve
            been doing full-stack web development for just over 2 years now.
          </AboutDiv>

          <AboutDiv title="Education" className="row-start-2 col-start-1">
            I am currently pursuing an Honours Bachelor of Computer Science at
            Sheridan College. Expected to graduate in 2027.
          </AboutDiv>

          <AboutDiv
            title="Technologies"
            className="row-span-2 col-start-2 items-center"
          >
            <div className="space-y-14">
              {technologies.map((category, i) => {
                return (
                  <div key={i}>
                    <span>{category.title}</span>
                    <hr className="w-full h-[2px] bg-neutral-400 mt-1 mb-4" />

                    <ul className="space-y-2">
                      {category.technologies.map((items, i2) => {
                        return (
                          <li key={i2} className="flex items-center gap-x-3">
                            <span className="text-xl">{items.icon}</span>
                            {items.text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </AboutDiv>
        </div>
      </div>
    </SectionWrapper>
  );
};

const AboutDiv = ({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`inline-flex flex-col p-6 border-2 border-black bg-white text-center ${className}`}
    >
      <span className="font-semibold mb-2">{title}</span>
      <div className="max-w-[550px]">{children}</div>
    </div>
  );
};

export default AboutSection;
