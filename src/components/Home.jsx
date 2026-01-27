import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="HomePage">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
