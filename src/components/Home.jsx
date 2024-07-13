import Hero from './Hero'
import Contact from './Contact'
import SampleWork from './SampleWork'
import Skills from './Skills'

function Home() {
  return (
    <div className="HomePage">
    <Hero />
      {/* skills section goes here */}
    <Skills />
        {/* For this section only just put 3 samples of work, for everything else click view my work*/}
    <SampleWork />
    <Contact />
      </div>

    
    
  )
}

export default Home