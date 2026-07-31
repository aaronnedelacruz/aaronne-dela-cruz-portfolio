import { education } from "../data/portfolio";

function Education() {
  return (
    <section
      id="education"
      className="
        py-20
        sm:py-24
        lg:py-32
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
          Education
        </span>

        <h2
          className="
            mt-4
            text-white
            font-medium
            text-[clamp(2rem,3vw,3.5rem)]
          "
        >
          {education.title}
        </h2>

        <p
          className="
            mt-5
            text-muted
            max-w-3xl
            leading-relaxed
            text-[clamp(.95rem,1.1vw,1.1rem)]
          "
        >
          {education.subtitle}
        </p>

        {/* Education Card */}
        <div
          className="
            mt-10
            sm:mt-16
            rounded-3xl
            border
            border-white/10
            bg-surface/60
            backdrop-blur-md
            p-5
            sm:p-6
            lg:p-8
            transition
            duration-300
            hover:border-primary/40
          "
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
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-white
                "
              >
                {education.degree}
              </h3>

              <p
                className="
                  mt-2
                  text-primary
                  font-medium
                "
              >
                {education.university}
              </p>
            </div>

            <span
              className="
                text-muted
              "
            >
              {education.year}
            </span>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="text-muted">{education.address}</p>

            <ul className="mt-5 sm:mt-6 space-y-3">
              {education.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="
                  flex
                  gap-3
                  text-muted
                  leading-relaxed
                "
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
