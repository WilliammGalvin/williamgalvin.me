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
      "My team develops the technology for the bank's designated market making desk on Canadian equities and ETFs.",
    bullets: [
      {
        heading: "Cross-system fill reconciliation",
        body: "Built a Polars pipeline over two kdb+ tables reconciling executed fills from the desk's ultra-high-frequency trading system against the drop copies recorded by the strategy system that instructed them. The two desync on ungraceful shutdown of either side, and the gap has to be closed by hand with paper fills. A continuous intraday monitor flags and localizes one-sided breaks within two minutes, replacing manual discovery and cutting the time to get both systems back in sync. Runs in production every trading day.",
      },
      {
        heading: "Launcher and release pipeline for a Qt/C++ trading GUI",
        body: "Replaced a manual build-and-copy deployment — hand-building the GUI and dropping the executable on a shared drive — with a Qt/C++ launcher that checks the GitHub Enterprise Releases API on every start and runs the latest build from a local version cache, with pinned rollback and opt-in prereleases. Backed by a PowerShell release pipeline automating versioning, prerelease promotion to production, and setLatest tag management.",
      },
      {
        heading: "Build system and test coverage for the trading GUI",
        body: "Authored the CMake build system for the GUI traders use to control live market-making strategies, restructuring it into a monorepo with proper shared-dependency resolution. Wrote its full unit test suite and developer documentation so the desk could extend and maintain it after handoff.",
      },
      {
        heading: "Log compression for long-term retention",
        body: "Cut compressed trading-system logs by a further 20.9% on top of gzip across a seven-year retention archive, using frequency analysis to select key tuples for substitution. Output stays human-readable and rehydrates to a byte-exact MD5 match.",
      },
      {
        heading: "DMM compliance reporting",
        body: "Rewrote a legacy Java reporter producing the desk's designated market maker securities report, against revised requirements for end-of-day book handling and restricted symbols. Replaced per-run scratch-table repopulation and a monolithic query with a pipeline that reads exchange-published files and database tables into separate frames, normalizes each independently, and joins into a persistent securities table — reducing report generation to a single join against the security master.",
      },
      {
        heading: "Operations automation",
        body: "Built an IMAP IDLE inbox monitor with config-driven parsers, missing-message alerting, and session recovery across the trading day. Modernized the UHF trading-parameter downloader from Bash into configurable Python.",
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
