import { hero } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${hero.images.background})`,
      }}
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          inset-[-20px]
          bg-cover
          bg-center
          blur-lg
          -z-0
        "
        style={{
          backgroundImage: `url(${hero.images.background})`,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[55%]
          bg-gradient-to-b
          from-transparent
          via-black/40
          to-background
          z-10
        "
      />

      {/* Container */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-[1800px]
          mx-auto
          px-[clamp(1.5rem,8vw,145px)]
          mt-24
        "
      >
        {/* Banner */}
        <div
          className="
          relative
          min-h-[clamp(380px,45vw,500px)]
          flex
          items-center
          rounded-3xl
          overflow-hidden
        "
        >
          {/* Banner Image ONLY */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-right
              bg-no-repeat

              scale-110
              sm:scale-125
              md:scale-115
              lg:scale-105

              blur-0
              max-lg:blur-md

              transition-all
              duration-1000
              ease-in-out
            "
            style={{
              backgroundImage: `url(${hero.images.banner})`,
            }}
          />

          {/* Banner Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-black/10
            max-lg:bg-black/50
            transition-all
            duration-700
          "
          />

          {/* Content */}
          <div
            className="
            relative
            z-10
            flex
            flex-col
            items-start
            gap-[clamp(0.75rem,2vw,1.25rem)]
            px-[clamp(2rem,5vw,5rem)]
            max-w-[800px]
          "
          >
            <h1
              className="
                text-white
                text-[clamp(2rem,5vw,3.75rem)]
                font-medium
                leading-[1.1]
                tracking-tight
                whitespace-nowrap
              "
            >
              {hero.name}
            </h1>

            <h2
              className="
                text-white
                text-[clamp(1rem,2vw,1.5rem)]
                font-medium
              "
            >
              {hero.title}
            </h2>

            <p
              className="
                text-white
                text-[clamp(0.875rem,1.5vw,1.125rem)]
                leading-relaxed
                max-w-xl
              "
            >
              {hero.tagline}
            </p>

            {/* Button */}
            <div>
              <a
                href={hero.button.href}
                className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-primary
                text-black
                px-[clamp(1rem,2vw,1.5rem)]
                py-[clamp(0.4rem,0.8vw,0.6rem)]
                text-[clamp(0.75rem,1vw,0.9rem)]
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
              "
              >
                {hero.button.text}
              </a>
            </div>

            {/* Social Icons */}
            <div
              className="
              flex
              items-center
              gap-5
              mt-6
            "
            >
              {hero.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  aria-label={social.name}
                  className="
                  text-white
                  text-[1.9rem]
                  transition-all
                  duration-300
                  hover:text-primary
                  hover:-translate-y-1
                "
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
