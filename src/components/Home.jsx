import { useState, useEffect, useRef } from 'react';
import Hero from './Hero'
import Contact from './Contact'
import Project1Card from './Project1Card'
import Project2Card from './Project2Card'
import Project3Card from './Project3Card'
import Skills from './Skills'

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="HomePage">
      <Hero />
      <Skills />
      
      <section 
        ref={sectionRef}
        className='mx-auto md:px-6 bg-red-200 mb-42 py-6 text-center'
      >
        <h2 
          className={`text-3xl font-bold py-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Here are some of my Projects!
        </h2>
        
        <div 
          className={`flex flex-wrap px-2 justify-center gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <Project1Card />
          <Project2Card />
          <Project3Card />
        </div>
        
        <button 
          className={`bg-blue-500 mt-4 justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-1000 delay-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="/project">More Projects</a>
        </button>
      </section>
      
      <Contact />
    </div>
  )
}

export default Home