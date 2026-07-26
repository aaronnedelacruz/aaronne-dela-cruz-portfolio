import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section>
          <div className="page-container">
            <About />
          </div>
        </section>

        <section>
          <div className="page-container">
            <Experience />
          </div>
        </section>

        <section>
          <div className="page-container">
            <Projects />
          </div>
        </section>

        <section>
          <div className="page-container">
            <Skills />
          </div>
        </section>

        <section>
          <div className="page-container">
            <Education />
          </div>
        </section>

        <section>
          <div className="page-container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
