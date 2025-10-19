import Hero from './Hero'
import Contact from './Contact'
import Project1Card from './Project1Card'
import Project2Card from './Project2Card'
import Project3Card from './Project3Card'
import Skills from './Skills'

function Home() {
  return (
    <div className="HomePage">
    <Hero />
      {/* skills section goes here */}
    <Skills />
        {/* For this section only just put 3 samples of work, for everything else click view my work*/}
   <section className='mx-auto md:px-6 bg-red-200 mb-42 py-6 text-center'>
    < h2 className=" text-3xl font-bold py-6"> Here are some of my Projects! </h2>
      <div className='flex flex-wrap px-2 justify-center gap-8'>
      <Project1Card />
      <Project2Card />
      <Project3Card />
      </div>
      <button className="bg-blue-500  mt-4 justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="/project"> More Projects </a>
        </button>
      </section>
    <Contact />
      </div>

    
    
  )
}

export default Home