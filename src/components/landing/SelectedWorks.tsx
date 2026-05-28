import Image from "next/image";

const PROJECTS = [
  { name: "Lumina Dashboard", bg: "#f5f5f0", image: "/images/day-25.webp" },
  { name: "Halcyon Landing", bg: "#f0f0eb", image: "/images/day-26.webp" },
  { name: "Plex Analytics", bg: "#f5f3ee", image: "/images/day-27.webp" },
  { name: "Quartz Mobile", bg: "#faf5ef", image: "/images/day-28.webp" },
  { name: "Northbeam CRM", bg: "#f2f2ed", image: "/images/day-29.webp" },
  { name: "Vertex", bg: "#f0f2f5", image: "/images/day-29-1.webp" },
  { name: "Echo Platform", bg: "#f0f5f5", image: "/images/day-34.webp" },
  { name: "Aria Store", bg: "#faf5f5", image: "/images/day-24-1.webp" },
  { name: "Vela SaaS", bg: "#f5f0fa", image: "/images/day-22.webp" },
  { name: "Nimbus App", bg: "#f0faf0", image: "/images/day-23-1.webp" },
  { name: "Solara", bg: "#f5f0f0", image: "/images/day-1.webp" },
  { name: "Cascade UI", bg: "#f0f5fa", image: "/images/day-6.webp" },
];

export function SelectedWorks() {
  return (
    <div id="work" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-5 sm:px-8 md:px-10 lg:px-12 py-5 md:py-6 lg:py-8 bg-bg">
      {PROJECTS.map((project) => (
        <a
          key={project.name}
          href="#"
          className="group block rounded-[20px] md:rounded-[24px] p-2 md:p-3 aspect-[4/3] flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          style={{ background: project.bg }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={0}
            height={0}
            className="w-full h-full object-cover rounded-xl md:rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </a>
      ))}
    </div>
  );
}
