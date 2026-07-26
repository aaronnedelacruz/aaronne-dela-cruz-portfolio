import { about } from "../data/portfolio";

function About() {
  return (
    <section
      id="about"
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
            grid
            grid-cols-1
            lg:grid-cols-[1.75fr_0.75fr]
            items-center
            gap-[clamp(2rem,5vw,6rem)]
          "
        >
          {/* Content */}
          <div
            className="
              flex
              flex-col
              gap-[clamp(1rem,2vw,2rem)]
              max-w-[900px]
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
              About
            </span>

            <h2
              className="
                text-white
                font-medium
                leading-tight
                text-[clamp(2rem,3vw,3.5rem)]
              "
            >
              {about.title}
            </h2>

            {about.description.map((paragraph, index) => (
              <p
                key={index}
                className="
                  text-muted
                  leading-relaxed
                  text-[clamp(0.95rem,1.15vw,1.1rem)]
                "
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image */}
          <div
            className="
              flex
              justify-center
              lg:justify-end
              lg:pl-8
            "
          >
            <img
              src={about.image}
              alt={about.title}
              className="
                w-full
                max-w-[340px]
                lg:max-w-[390px]
                xl:max-w-[430px]
                h-auto
                object-contain
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;