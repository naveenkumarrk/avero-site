const PROJECTS = [
  { name: "Lumina Dashboard", bg: "#f5f5f0" },
  { name: "Halcyon Landing", bg: "#f0f0eb" },
  { name: "Plex Analytics", bg: "#f5f3ee" },
  { name: "Quartz Mobile", bg: "#faf5ef" },
  { name: "Northbeam CRM", bg: "#f2f2ed" },
  { name: "Sift AI", bg: "#f5f5f0" },
];

export function SelectedWorks() {
  return (
    <div id="work" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-5 sm:px-8 md:px-10 lg:px-12 py-5 md:py-6 lg:py-8 bg-bg">
      {PROJECTS.map((project) => (
        <a
          key={project.name}
          href="#"
          className="group block rounded-[20px] md:rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          style={{ background: project.bg }}
        >
          {/* Image container with inner padding like Bricx */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="aspect-[4/3] rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden relative border border-black/[0.04]">
              {/* Placeholder — replace with <Image /> when you have screenshots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ink-12 text-xs font-mono uppercase tracking-widest select-none">
                  {project.name}
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
