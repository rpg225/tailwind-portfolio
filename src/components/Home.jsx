import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div className="HomePage">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
