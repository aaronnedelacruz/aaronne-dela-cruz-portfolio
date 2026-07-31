import { useEffect, useState } from "react";
import { projects } from "../data/portfolio";

interface ProjectTech {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  tools?: string[];
}

interface ProjectDetails {
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  tech: ProjectTech;
  links: {
    demo: string;
    repository: string;
  };
}

interface ProjectItem {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  repository: string;
  hasDemo: boolean;
  demo: string;
  details: ProjectDetails;
}

function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Lock page scroll and allow Escape to close while the modal is open.
  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-[clamp(5rem,10vw,9rem)] bg-background">
      <div className="w-full max-w-[1800px] mx-auto px-[clamp(5rem,13vw,22rem)]">
        {/* Heading */}
        <span
          className="
            text-primary
            uppercase
            tracking-[0.25em]
            font-semibold
            text-[clamp(.8rem,.9vw,.95rem)]
          "
        >
          Projects
        </span>

        <h2
          className="
            mt-4
            text-[clamp(2rem,3vw,3.5rem)]
            font-medium
          "
        >
          {projects.title}
        </h2>

        <p
          className="
            mt-5
            max-w-3xl
            text-muted
            leading-relaxed
            text-[clamp(.95rem,1.1vw,1.1rem)]
          "
        >
          {projects.subtitle}
        </p>

        {/* Project Grid */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-8
          "
        >
          {projects.items.map((project, index) => (
            <article
              key={index}
              onClick={() => setActiveProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-surface/60
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-primary/40
                hover:-translate-y-1
                cursor-pointer
                overflow-hidden
                flex
                flex-col
              "
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    rounded-2xl
                  "
                />

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  <p className="mt-2 text-primary text-sm">
                    {project.category}
                  </p>

                  <p className="mt-5 text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features — always visible now */}
                <h4 className="mt-8 mb-4 font-semibold">
                  {projects.labels.features}
                </h4>

                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <span
                        className="
                          mt-2
                          h-2
                          w-2
                          rounded-full
                          bg-primary
                          shrink-0
                        "
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack — always visible now */}
                <h4 className="mt-8 mb-4 font-semibold">
                  {projects.labels.techStack}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                      rounded-lg
                      bg-white/5
                      px-3
                      py-1.5
                      text-sm
                      text-muted
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions — clicks here shouldn't also open the modal */}
                <div
                  className="
                    mt-8
                    pt-6
                    border-t
                    border-white/10
                    flex
                    flex-wrap
                    items-center
                    gap-4
                  "
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-primary
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    transition
                    hover:bg-primary
                    hover:text-black
                  "
                  >
                    <i className="bi bi-github"></i>
                    {projects.labels.repository}
                  </a>

                  {project.hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/15
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      transition
                      hover:border-primary/50
                    "
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      {projects.labels.demo}
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-primary
                    text-black
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    hover:scale-105
                    ml-auto
                  "
                  >
                    {projects.labels.viewDetails}
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} ${projects.labels.modalSuffix}`}
          onClick={() => setActiveProject(null)}
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            p-[clamp(1rem,4vw,2.5rem)]
            bg-black/70
            backdrop-blur-sm
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-3xl
              max-h-[85vh]
              overflow-y-auto
              rounded-3xl
              border
              border-white/10
              bg-surface
              p-[clamp(1.5rem,4vw,3rem)]
            "
          >
            <button
              onClick={() => setActiveProject(null)}
              aria-label={projects.labels.close}
              className="
                absolute
                top-5
                right-5
                h-10
                w-10
                flex
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-xl
                leading-none
                text-white
                transition
                hover:border-primary
                hover:text-primary
              "
            >
              ×
            </button>

            <img
              src={activeProject.thumbnail}
              alt={activeProject.title}
              className="w-full h-[240px] object-cover rounded-2xl"
            />

            <h3 className="mt-6 text-3xl font-semibold">
              {activeProject.title}
            </h3>

            <p className="mt-2 text-primary text-sm">
              {activeProject.category}
            </p>

            <h4 className="mt-8 mb-3 font-semibold">
              {projects.labels.overview}
            </h4>
            <p className="text-muted leading-relaxed">
              {activeProject.details.overview}
            </p>

            <h4 className="mt-8 mb-3 font-semibold">
              {projects.labels.challenge}
            </h4>
            <p className="text-muted leading-relaxed">
              {activeProject.details.challenge}
            </p>

            <h4 className="mt-8 mb-3 font-semibold">
              {projects.labels.solution}
            </h4>
            <p className="text-muted leading-relaxed">
              {activeProject.details.solution}
            </p>

            <h4 className="mt-8 mb-4 font-semibold">
              {projects.labels.impact}
            </h4>
            <ul className="space-y-3">
              {activeProject.details.impact.map((point, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span
                    className="
                      mt-2
                      h-2
                      w-2
                      rounded-full
                      bg-primary
                      shrink-0
                    "
                  />
                  {point}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 mb-4 font-semibold">
              {projects.labels.technologies}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(
                Object.entries(activeProject.details.tech) as [
                  string,
                  string[] | undefined,
                ][]
              ).map(([category, techs]) =>
                techs && techs.length > 0 ? (
                  <div key={category}>
                    <p className="text-primary text-sm uppercase tracking-wide mb-2">
                      {
                        {
                          frontend: projects.labels.frontend,
                          backend: projects.labels.backend,
                          database: projects.labels.database,
                          tools: projects.labels.tools,
                        }[category]
                      }
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="
                          rounded-lg
                          bg-white/5
                          px-3
                          py-1.5
                          text-sm
                          text-muted
                        "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null,
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={activeProject.repository}
                target="_blank"
                rel="noreferrer"
                className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-primary
                px-4
                py-2.5
                text-sm
                font-medium
                transition
                hover:bg-primary
                hover:text-black
              "
              >
                <i className="bi bi-github"></i>
                {projects.labels.repository}
              </a>

              {activeProject.hasDemo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/15
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition
                  hover:border-primary/50
                "
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  {projects.labels.demo}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
