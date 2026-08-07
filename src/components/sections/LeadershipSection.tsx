import SectionWrapper from "../SectionWrapper";

type Entry = {
  role: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
};

const entries: Entry[] = [
  {
    role: "Founder & Lead Organizer",
    org: "Sheridan Datathon",
    location: "Mississauga, ON",
    dates: "November 2025",
    points: [
      "Founded and ran Sheridan's first datathon, themed on the UN Sustainability Goals, drawing 200+ participants.",
      "Led 30+ organizers and 9 mentors, raised $6.8k in sponsorship, and owned execution end to end — venue, competition design, judging, website, and registration.",
    ],
  },
  {
    role: "Hackathon Lead",
    org: "Google Developer Group, Sheridan",
    location: "Oakville, ON",
    dates: "June 2025 – Present",
    points: [
      "Plan and run GDG hackathons, and delivered a workshop on language processing fundamentals to 25+ students.",
    ],
  },
];

const LeadershipSection = () => {
  return (
    <SectionWrapper
      title={{
        header: "Leadership",
        description:
          "Events and communities I've built and helped run at Sheridan.",
      }}
      className="flex flex-col items-center"
    >
      <div className="w-5/6 max-w-[975px] pb-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {entries.map((entry, i) => (
          <article key={i} className="border-2 border-black bg-white p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-1">
              <h3 className="font-semibold">{entry.role}</h3>
              <span className="text-sm text-neutral-600 whitespace-nowrap">
                {entry.dates}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-1 mt-1 mb-4">
              <span className="text-sm">{entry.org}</span>
              <span className="text-sm text-neutral-600 whitespace-nowrap">
                {entry.location}
              </span>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-neutral-800 list-disc ml-4">
              {entry.points.map((point, i2) => (
                <li key={i2}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default LeadershipSection;
