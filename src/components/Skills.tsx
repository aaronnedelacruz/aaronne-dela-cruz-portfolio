import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section
      id="skills"
      className="
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
          {skills.title}
        </span>

        <h2
          className="
            mt-4
            text-[clamp(2rem,3vw,3.5rem)]
            font-medium
            text-white
          "
        >
          Technical Expertise
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
          {skills.subtitle}
        </p>

        {/* Skill Groups */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >
          {skills.categories.map((category, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-white/10
                bg-surface/60
                backdrop-blur-md
                p-8
                transition-all
                duration-300
                hover:border-primary/40
                hover:-translate-y-1
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {category.title}
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      rounded-full
                      border
                      border-primary/25
                      bg-primary/5
                      px-4
                      py-2
                      text-sm
                      text-white
                      transition
                      hover:border-primary
                      hover:bg-primary
                      hover:text-black
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;