import { FaGithub,FaHtml5, FaCss3, FaReact, FaJsSquare, FaNode, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiRust, SiWordpress, SiFigma, SiVuedotjs, SiAngular, SiPhp, SiExpress, SiVisualstudio } from "react-icons/si";
import { SiSolidity, SiCplusplus, SiPython, SiWeb3Dotjs } from "react-icons/si";

function Skills() {
  return (
    <section id="skills">
    <div id="skills" className=" skills bg-gray-300 mb-16 wrapper py-16">
        <div className="subHeadingContainer">
          <h1 className='text-3xl md:text-4xl font-bold text-center'>Skills</h1>
        
        </div>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
            <li className='flex flex-col items-center'>
              <FaHtml5 className='text-4xl text-gray-500'></FaHtml5>
              <p className='mt-2'>HTML</p>
            </li>
            <li className='flex flex-col items-center'>
              <FaCss3 className='text-4xl text-gray-500'></FaCss3>
              <p className='mt-2'>CSS3</p>
            </li>
            <li className='flex flex-col items-center'>
              <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare>
              <p className='mt-2'>JavaScript</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiTypescript className='text-4xl text-gray-500'></SiTypescript>
              <p className='mt-2'>TypeScript</p>
            </li>
            <li className='flex flex-col items-center'>
              <FaGithub className='text-4xl text-gray-500'></FaGithub>
              <p className='mt-2'>Github</p>
            </li>
            <li className='flex flex-col items-center'>
              <FaReact className='text-4xl text-gray-500'></FaReact>
              <p className='mt-2'>React</p>
            </li><li className='flex flex-col items-center'>
              <SiRust className='text-4xl text-gray-500'></SiRust>
              <p className='mt-2'>Rust</p>
            </li>
            <li className='flex flex-col items-center'>
              <FaNode className='text-4xl text-gray-500'></FaNode>
              <p className='mt-2'>Node</p>
            </li>
            <li className='flex flex-col items-center'>
              <FaBootstrap className='text-4xl text-gray-500'></FaBootstrap>
              <p className='mt-2'>Bootstrap</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiWordpress className='text-4xl text-gray-500'></SiWordpress>
              <p className='mt-2'>WordPress</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiFigma className='text-4xl text-gray-500'></SiFigma>
              <p className='mt-2'>Figma</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiPhp className='text-4xl text-gray-500'></SiPhp>
              <p className='mt-2'>PHP</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiVuedotjs className='text-4xl text-gray-500'></SiVuedotjs>
              <p className='mt-2'>Vue</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiAngular className='text-4xl text-gray-500'></SiAngular>
              <p className='mt-2'>Angular</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiExpress className='text-4xl text-gray-500'></SiExpress>
              <p className='mt-2'>Express</p>
            </li>
            <li className='flex flex-col items-center'>
              <SiVisualstudio className='text-4xl text-gray-500'></SiVisualstudio>
              <p className='mt-2'>VS Code</p>
            </li>
            
        </ul>
      </div> {/* .wrapper end */}
    <div className="wrapper  mb-16 wrapper py-16">
        <div className="subHeadingContainer">
          <h1 className='text-3xl md:text-4xl font-bold text-center'>Learning</h1>
        </div>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
          <li className='flex flex-col items-center'>
          <SiSolidity className='text-4xl text-gray-500'></SiSolidity>
                <p className='mt-2'>Solidity</p>
          </li>
              {/* c++*/}
          <li className='flex flex-col items-center'>
          <SiCplusplus className='text-4xl text-gray-500'></SiCplusplus>
                <p className='mt-2'>C++</p>
             </li>
              {/* python */}
              <li className='flex flex-col items-center'>
          <SiPython className='text-4xl text-gray-500'></SiPython>
                <p className='mt-2'>Python</p>
             </li>
             <li className='flex flex-col items-center'>
          <SiWeb3Dotjs className='text-4xl text-gray-500'></SiWeb3Dotjs>
                <p className='mt-2'>Web3</p>
             </li>
              {/* */}
              {/* put all the stuff learning */}
            
        </ul>
      </div> {/* .wrapper end */}
    </section> 

  )
}

export default Skills