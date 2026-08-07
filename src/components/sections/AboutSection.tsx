import SectionWrapper from "../SectionWrapper";

const coursework = [
  "Theory of Computation",
  "Computer Architecture",
  "Operating Systems Analysis & Design",
  "Data Structures & Algorithms",
  "Programming Languages",
  "Software Design",
  "Linear Algebra",
  "Statistics for Data Science",
];

const stack: { title: string; note: string; items: string[] }[] = [
  {
    title: "Primary",
    note: "Day to day, in production and in personal work.",
    items: ["C++", "Python", "Java"],
  },
  {
    title: "Working",
    note: "Built and shipped projects in these.",
    items: ["TypeScript", "C", "Go", "Rust", "OCaml"],
  },
  {
    title: "Tools & systems",
    note: "",
    items: [
      "Linux",
      "kdb+ / q",
      "SQL",
      "Polars",
      "Bash",
      "CMake",
      "Qt",
      "LLVM",
      "Git",
      "React / Next.js",
    ],
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper
      title={{
        header: "Background",
        description:
          "Where I study, what I've worked with, and what I'm available for.",
      }}
      className="flex flex-col items-center"
    >
      <div className="w-5/6 max-w-[975px] pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            <Card title="Education">
              <p className="font-medium">
                Honours Bachelor of Computer Science (Mobile Computing)
              </p>
              <p className="text-sm text-neutral-700 mt-1">
                Sheridan College, Oakville, ON · Graduating December 2027
              </p>
              <p className="text-sm mt-4 mb-2 font-medium">
                Relevant coursework
              </p>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-neutral-800">
                {coursework.map((course, i) => (
                  <li key={i} className="border border-neutral-400 px-2 py-0.5">
                    {course}
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Availability">
              <p className="text-sm leading-relaxed">
                Open to Winter 2027 and Summer 2027 internships in systems and
                trading infrastructure.
              </p>
            </Card>
          </div>

          <Card title="Technologies">
            <div className="space-y-8">
              {stack.map((group, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between gap-x-4">
                    <span className="font-medium">{group.title}</span>
                    {group.note && (
                      <span className="text-xs text-neutral-600 text-right">
                        {group.note}
                      </span>
                    )}
                  </div>
                  <hr className="w-full h-[2px] bg-neutral-400 border-0 mt-1 mb-3" />
                  <ul className="flex flex-wrap gap-x-2 gap-y-2 text-sm">
                    {group.items.map((item, i2) => (
                      <li
                        key={i2}
                        className="border border-black px-2 py-0.5 bg-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Card = ({
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
      className={`flex flex-col p-6 border-2 border-black bg-white ${className ?? ""
        }`}
    >
      <span className="font-semibold mb-3">{title}</span>
      <div>{children}</div>
    </div>
  );
};

export default AboutSection;
