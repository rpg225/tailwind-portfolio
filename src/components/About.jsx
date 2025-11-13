import { useState, useEffect, useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      className="about mx-auto md:px-6 bg-red-200 mb-42 py-6 text-center overflow-hidden"
    >
      <div>
        <h1 
          className={`text-3xl font-bold py-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          About
        </h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Profile Card with 3D tilt effect */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 transition-all duration-1000 delay-200 hover:shadow-2xl ${
            isVisible ? 'opacity-100 -translate-x-0 rotate-0' : 'opacity-0 -translate-x-32 -rotate-12'
          }`}
          style={{
            transform: isVisible 
              ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) translateZ(0px)`
              : 'none',
            transition: 'transform 0.2s ease-out, opacity 1s, translate 1s, rotate 1s'
          }}
        >
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80 group">
            <img
              src="assets/headshot.jpg"
              alt="profile-picture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
              Rambod Pour Goshtasbi
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text">
              Web Developer
            </p>
          </div>
          
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a 
              href="https://www.linkedin.com/in/rpg225/"
              className="transform transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <FaLinkedin className='text-4xl fill-[#0077b5] hover:fill-[#005582] transition-colors duration-300' />
            </a>
          </div>
        </div>

        {/* Bio Text with typewriter reveal */}
        <div 
          className={`max-w-lg text-left transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-32 rotate-12'
          }`}
        >
          <div className="relative">
            <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 transition-opacity duration-1000 ${
              isVisible ? 'opacity-25' : 'opacity-0'
            }`}></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <p className={`text-2xl leading-relaxed transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                As a <span className="font-bold text-blue-600 inline-block hover:scale-110 transition-transform duration-200">Front-End Developer</span>, I'm passionate about creating engaging and responsive web experiences that meet user needs. I specialize in <span className="font-semibold text-orange-600">HTML</span>, <span className="font-semibold text-blue-500">CSS</span>, and <span className="font-semibold text-yellow-600">JavaScript</span>, and enjoy experimenting with new technologies to push the boundaries of what's possible. With a focus on clean code and attention to detail, I strive to deliver high-quality work that delights users and exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;