import { contact } from "../data/portfolio";

function Contact() {
  const email = contact.items.find((item) => item.label === "Email");
  const location = contact.items.find((item) => item.label === "Location");
  const socials = contact.items.filter(
    (item) => item.label === "GitHub" || item.label === "LinkedIn",
  );

  return (
    <section
      id="contact"
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
          Contact
        </span>

        <h2
          className="
            mt-4
            text-[clamp(2rem,3vw,3.5rem)]
            font-medium
            text-white
          "
        >
          {contact.title}
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-muted
            leading-relaxed
            text-[clamp(.95rem,1.1vw,1.1rem)]
          "
        >
          {contact.description}
        </p>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
          "
        >
          {/* Left */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-surface/60
              backdrop-blur-md
              p-8
            "
          >
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>

            <div className="mt-8 space-y-8">
              {/* Email */}

              {email && (
                <div>
                  <p className="text-primary text-sm uppercase tracking-wider">
                    Email
                  </p>

                  <a
                    href={email.href}
                    className="
                      mt-2
                      inline-block
                      text-lg
                      hover:text-primary
                      transition
                    "
                  >
                    {email.value}
                  </a>
                </div>
              )}

              {/* Location */}

              {location && (
                <div>
                  <p className="text-primary text-sm uppercase tracking-wider">
                    Location
                  </p>

                  <p className="mt-2 text-muted">{location.value}</p>
                </div>
              )}

              {/* Socials */}

              <div>
                <p className="text-primary text-sm uppercase tracking-wider">
                  Socials
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-full
                        border
                        border-primary/30
                        px-5
                        py-2.5
                        transition
                        hover:bg-primary
                        hover:text-black
                      "
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div
            className="
              rounded-3xl
              border
              border-primary/20
              bg-primary/5
              backdrop-blur-md
              p-8
              flex
              flex-col
              justify-center
            "
          >
            <h3
              className="
                text-3xl
                font-semibold
                text-white
              "
            >
              Ready to build something together?
            </h3>

            <p
              className="
                mt-5
                text-muted
                leading-relaxed
              "
            >
              Whether it's a full-time opportunity, freelance work, or an
              exciting software project, I'm always open to discussing new ideas
              and opportunities.
            </p>

            {email && (
              <a
                href={email.href}
                className="
                  mt-8
                  w-fit
                  rounded-full
                  bg-primary
                  text-black
                  font-semibold
                  px-8
                  py-4
                  transition
                  hover:scale-105
                "
              >
                Send an Email
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
