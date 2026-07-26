import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        py-[clamp(5rem,10vw,9rem)]
        bg-background
      "
    >
      <div
        className="
          w-full
          max-w-[1800px]
          mx-auto
          px-[clamp(5rem,13vw,22rem)]
        "
      >
        <div
          className="
          max-w-[1300px]
          mx-auto
        "
        >
          <span
            className="
              text-primary
              uppercase
              tracking-[0.25em]
              font-semibold
              text-[clamp(0.8rem,0.9vw,0.95rem)]
            "
          >
            Experience
          </span>

          <h2
            className="
              mt-4
              text-white
              font-medium
              leading-tight
              text-[clamp(2rem,3vw,3.5rem)]
            "
          >
            {experience.title}
          </h2>

          <p
            className="
              mt-5
              text-muted
              text-[clamp(0.95rem,1.15vw,1.1rem)]
              leading-relaxed
            "
          >
            {experience.subtitle}
          </p>

          <div
            className="
              mt-14
              rounded-3xl
              border
              border-white/10
              bg-surface/60
              px-[clamp(2rem,3vw,3rem)]
              py-[clamp(1.25rem,2vw,1.75rem)]
              backdrop-blur-sm
            "
          >
            {experience.items.map((item, index) => (
              <div key={index}>
                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    gap-6
                  "
                >
                  <div>
                    <h3
                      className="
                        text-white
                        font-semibold
                        text-[clamp(1.25rem,2vw,1.6rem)]
                      "
                    >
                      {item.role}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-primary
                        font-medium
                      "
                    >
                      {item.company}
                    </p>
                  </div>

                  <span
                    className="
                      text-muted
                      whitespace-nowrap
                      text-[clamp(0.9rem,1vw,1rem)]
                    "
                  >
                    {item.duration}
                  </span>
                </div>

                <ul
                  className="
                    mt-6
                    space-y-3
                  "
                >
                  {item.responsibilities.map((responsibility, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        gap-4
                        text-muted
                        text-[clamp(0.95rem,1.1vw,1.05rem)]
                        leading-relaxed
                      "
                    >
                      <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-primary" />

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
