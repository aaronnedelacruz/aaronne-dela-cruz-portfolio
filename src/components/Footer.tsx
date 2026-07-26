import { footer } from "../data/portfolio";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-background
      "
    >
      <div
        className="
          w-full
          max-w-[1800px]
          mx-auto

          px-6
          sm:px-10
          md:px-16
          lg:px-24
          xl:px-[clamp(5rem,13vw,22rem)]

          py-6

          flex
          flex-col
          sm:flex-row

          items-center
          justify-between

          gap-4
          text-center
          sm:text-left
        "
      >
        <p
          className="
            text-[0.875rem]
            text-muted
            leading-relaxed
          "
        >
          {footer.copyright}
        </p>

        <a
          href={footer.backToTop.href}
          className="
            whitespace-nowrap
            text-[0.875rem]
            font-medium
            text-primary
            transition-colors
            duration-300
            hover:text-white
          "
        >
          {footer.backToTop.text}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
