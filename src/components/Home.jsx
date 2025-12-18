import Hero from "./Hero";
import Skills from "./Skills";
import ProjectPreview from "./ProjectPreview";
import Contact from "./Contact";

function Home() {
  return (
    <div className="HomePage">
      <Hero />
      <Skills />
      <ProjectPreview />
      <Contact />
    </div>
  );
}

export default Home;
