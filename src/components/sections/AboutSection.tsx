import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiCsharp, SiDart } from "react-icons/si";
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
        { text: "Java (5 years)", icon: <FaJava /> },
        { text: "C# (3 years)", icon: <SiCsharp /> },
        { text: "Python (2 years)", icon: <FaPython /> },
        { text: "Dart (1 year)", icon: <SiDart /> },
      ],
    },
  ];

  return (
    <SectionWrapper
      title={{
        header: "All about me",
        description:
          "A quick description of my coding beginnings, my current education, and the technologies I have learned throughout the many years.",
      }}
      className="flex flex-col items-center"
    >
      <div className="w-5/6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row sm:grid-rows-2 gap-4">
          <AboutDiv title="Coding experience">
            I started coding in 2017, almost 7 years ago. I spent the first 4
            years solely teaching myself Java. Eventually, I moved to other
            languages such as C, C#, Python, and Typescript. I&apos;ve been
            doing full-stack web development for over 2 years now.
          </AboutDiv>

          <AboutDiv title="Education" className="sm:row-start-2 sm:col-start-1">
            I am currently pursuing an Honours Bachelor of Computer Science at
            Sheridan College. Expected to graduate in 2027.
          </AboutDiv>

          <AboutDiv
            title="Technologies"
            className="sm:row-span-2 sm:col-start-2 items-center"
          >
            <div className="space-y-10 md:space-y-16">
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
      className={`inline-flex flex-col items-center p-6 border-2 border-black bg-white ${className}`}
    >
      <span className="font-semibold mb-2">{title}</span>
      <div className="max-w-[300px] sm:max-w-[550px]">{children}</div>
    </div>
  );
};

export default AboutSection;
