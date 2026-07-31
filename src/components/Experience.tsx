import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        py-20
        md:py-24
        xl:py-36
        bg-background
      "
    >
      <div
        className="
          w-full
          max-w-[1800px]
          mx-auto
          px-6
          sm:px-8
          md:px-12
          lg:px-20
          xl:px-[clamp(5rem,13vw,22rem)]
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
              mt-10
              sm:mt-14
              rounded-3xl
              border
              border-white/10
              bg-surface/60
              px-5
              sm:px-8
              lg:px-12
              py-6
              sm:py-7
              lg:py-8
              backdrop-blur-sm
            "
          >
            {experience.items.map((item, index) => (
              <div
                key={index}
                className={
                  index !== 0 ? "mt-12 pt-12 border-t border-white/10" : ""
                }
              >
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
