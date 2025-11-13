import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id='hero' className='bg-red-500 overflow-hidden'>
      <div className='mx-auto mb-max-w-xl pt-4 pb-7'>
        <div className="flex justify-center items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
          >
            <img
              src="assets/headshot.jpg"
              alt="profile-picture"
              className="rounded-full w-32 h-32 object-cover shadow-lg"
            />
          </div>
        </div>
        
        <div className='relative isolate px-6 pt-10 lg:px-8'>
          <div className='text-center'>
            <h1 
              className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Hello! I am Rambod!
            </h1>
            <h2 
              className={`text-2xl font-italic tracking-tight text-gray-700 sm:text-4xl mt-4 transition-all duration-1000 delay-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              I am a Web Developer
            </h2>
          </div>
          
          <div 
            className={`mt-10 flex items-center justify-center gap-x-6 transition-all duration-1000 delay-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="./Project.js"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View my Work
            </a>
            <a 
              href="#contact" 
              className="text-sm font-semibold leading-6 text-gray-900 hover:translate-x-1 transition-transform duration-200"
            >
              Stay in Touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;