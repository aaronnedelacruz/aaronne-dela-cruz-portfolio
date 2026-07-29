import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/80
        backdrop-blur-xl
        px-[clamp(2rem,8vw,10rem)]
        py-5
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div
          className="
            text-white
            text-2xl
            font-bold
          "
        >
          <img
            src="/horizontal-logo.png"
            alt="Aaronne Dela Cruz Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-6
          "
        >
          <a
            className="
              text-white
              text-sm
              hover:text-primary
              transition
            "
            href="#about"
          >
            About
          </a>

          <a className="text-white hover:text-primary" href="#experience">
            Experience
          </a>

          <a className="text-white hover:text-primary" href="#projects">
            Projects
          </a>

          <a className="text-white hover:text-primary" href="#skills">
            Skills
          </a>

          <a className="text-white hover:text-primary" href="#education">
            Education
          </a>

          <a className="text-white hover:text-primary" href="#contact">
            Contact
          </a>

          <a
            href="#contact"
            className="
              rounded-full
              bg-primary
              text-black
              px-7
              py-2
              font-semibold
            "
          >
            Let's Connect
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-white
            text-xl
            lg:text-2xl
          "
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-5
            mt-6
            pb-5
          "
        >
          <a
            href="#about"
            className="text-white hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#experience"
            className="text-white hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-white hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-white hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#education"
            className="text-white hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-white hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <a
            href="#contact"
            className="
              rounded-full
              bg-primary
              text-black
              px-7
              py-2
              text-center
              font-semibold
            "
          >
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
