import { hero, socials } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      w-full
      overflow-x-hidden
      overflow-y-hidden
      flex
      items-start
      lg:items-center
      justify-center
      bg-cover
      bg-center
      bg-no-repeat
      "
      style={{
        backgroundImage: `url(${hero.images.background})`,
      }}
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          -inset-32
          scale-125
          bg-cover
          bg-center
          bg-no-repeat
          blur-xl
          pointer-events-none
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
        pt-24
        sm:pt-28
        lg:pt-0
      "
      >
        {/* Banner */}
        <div
          className="
          relative
          min-h-[390px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[500px]
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
            bg-[80%_center]
            bg-no-repeat

            scale-125
            sm:scale-115
            md:scale-110
            lg:scale-105

            blur-0
            max-lg:blur-md

            transition-all
            duration-700
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
            px-6
            sm:px-8
            md:px-10
            lg:px-12
            xl:px-16
            max-w-[52rem]
          "
          >
            <h1
              className="
                text-white
                text-[clamp(1.5rem,3vw,3.5rem)]
                font-medium
                leading-[1.1]
                tracking-tight
              "
            >
              {hero.name}
            </h1>

            <h2
              className="
                text-white
                text-[clamp(1.125rem,2vw,1.5rem)]
                font-medium
              "
            >
              {hero.title}
            </h2>

            <p
              className="
                text-white
                text-[clamp(1rem,1.5vw,1.125rem)]
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
                text-[clamp(0.875rem,1vw,0.9rem)]
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
              {socials.map((social) => (
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
                  text-2xl
                  sm:text-[1.9rem]
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
