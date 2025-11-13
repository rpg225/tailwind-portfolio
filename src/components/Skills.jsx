import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaHtml5, FaCss3, FaReact, FaJsSquare, FaNode, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiRust, SiWordpress, SiPhp, SiExpress, SiVisualstudio } from "react-icons/si";
import { SiSolidity, SiPython, SiWeb3Dotjs } from "react-icons/si";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const skills = [
    { icon: <FaHtml5 className='text-4xl text-orange-600' />, name: 'HTML' },
    { icon: <FaCss3 className='text-4xl text-blue-600' />, name: 'CSS3' },
    { icon: <FaJsSquare className='text-4xl text-yellow-500' />, name: 'JavaScript' },
    { icon: <SiTypescript className='text-4xl text-blue-700' />, name: 'TypeScript' },
    { icon: <FaGithub className='text-4xl text-gray-800' />, name: 'Github' },
    { icon: <FaReact className='text-4xl text-cyan-500' />, name: 'React' },
    { icon: <SiRust className='text-4xl text-orange-800' />, name: 'Rust' },
    { icon: <FaNode className='text-4xl text-green-600' />, name: 'Node' },
    { icon: <FaBootstrap className='text-4xl text-purple-600' />, name: 'Bootstrap' },
    { icon: <SiWordpress className='text-4xl text-blue-800' />, name: 'WordPress' },
    { icon: <SiPython className='text-4xl text-blue-500' />, name: 'Python' },
    { icon: <SiPhp className='text-4xl text-indigo-600' />, name: 'PHP' },
    { icon: <SiWeb3Dotjs className='text-4xl text-orange-500' />, name: 'Web3' },
    { icon: <SiSolidity className='text-4xl text-gray-700' />, name: 'Solidity' },
    { icon: <SiExpress className='text-4xl text-gray-800' />, name: 'Express' },
    { icon: <SiVisualstudio className='text-4xl text-blue-600' />, name: 'VS Code' },
  ];

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills bg-gray-300 mb-21 wrapper py-16">
        <div className="subHeadingContainer">
          <h1 
            className={`text-3xl md:text-4xl font-bold text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Skills
          </h1>
        </div>
        
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
          {skills.map((skill, index) => (
            <li 
              key={skill.name}
              className={`flex flex-col items-center transition-all duration-700 hover:scale-110 hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {skill.icon}
              <p className='mt-2 font-medium text-gray-800'>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;