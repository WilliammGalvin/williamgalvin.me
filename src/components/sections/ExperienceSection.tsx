import SectionWrapper from "../SectionWrapper";

type Role = {
  title: string;
  org: string;
  team: string;
  location: string;
  dates: string;
  context: string;
  bullets: { heading: string; body: string }[];
};

const roles: Role[] = [
  {
    title: "Software Developer Intern",
    org: "RBC Capital Markets",
    team: "Quantitative Technology Services — Central Risk Book Team",
    location: "Toronto, ON",
    dates: "May – August 2026",
    context:
      "My team developed the technology for the bank's designated market making desk on Canadian equities and ETFs.",
    bullets: [
      {
        heading: "Cross-system fill reconciliation",
        body: "Built a kdb+ to Polars pipeline reconciling fills between the risk-management system of record and the drop-copied ultra-high-frequency system, surfacing matches and one-sided breaks from either side. Paired it with a continuous intraday monitor that alerts on discrepancies as they appear. Both run in production every trading day.",
      },
      {
        heading: "Release engineering for a Qt/C++ trading GUI",
        body: "Owned build, test, and release for one of the desk's core trading system's GUI. Restructured CMake into a monorepo with proper path dependencies, added a unit test suite and a bundled launcher, and wrote a PowerShell pipeline handling automated versioning, pre-release promotion to production, and rollback.",
      },
      {
        heading: "Log compression for long-term retention",
        body: "Cut compressed trading-system logs by a further 20.9% on top of gzip across a seven-year retention archive, using frequency analysis to select key tuples for substitution. Output stays human-readable and rehydrates to a byte-exact MD5 match.",
      },
      {
        heading: "Compliance and operations automation",
        body: "Replaced a legacy Java reporting job with a centralized designated-market-maker securities table, split into a write path and a read-only report generator. Built an IMAP IDLE inbox monitor with config-driven parsers, missing-message alerting, and session recovery across the trading day. Modernized the UHF trading-parameter downloader from Bash into configurable Python.",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper
      title={{
        header: "Experience",
        description:
          "Production work on a market-making desk — trading systems, release infrastructure, and the tooling around them.",
      }}
      className="flex flex-col items-center"
    >
      <div className="w-5/6 max-w-[900px] pb-12 space-y-6">
        {roles.map((role, i) => (
          <article
            key={i}
            className="border-2 border-black bg-white p-6 sm:p-8"
          >
            <header className="border-b-2 border-black pb-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-1">
                <h3 className="font-semibold text-lg">{role.title}</h3>
                <span className="text-sm text-neutral-600 whitespace-nowrap">
                  {role.dates}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-1 mt-1">
                <span className="text-base">
                  {role.org}
                  <span className="text-neutral-600"> · {role.team}</span>
                </span>
                <span className="text-sm text-neutral-600 whitespace-nowrap">
                  {role.location}
                </span>
              </div>
              <p className="mt-3 text-sm italic text-neutral-700">
                {role.context}
              </p>
            </header>

            <ul className="space-y-5">
              {role.bullets.map((bullet, i2) => (
                <li key={i2}>
                  <span className="font-semibold block mb-1">
                    {bullet.heading}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-800">
                    {bullet.body}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
