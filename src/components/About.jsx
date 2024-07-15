import {FaLinkedin} from 'react-icons/fa'


const About = () => {
  return (
    <section className="about mx-auto md:px-6 bg-red-200 mb-42 py-6 text-center">
        <div>
        <h1 className="text-3xl font-bold py-6">About</h1>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img
            src="assets/linkedin-headshot.png"
            alt="profile-picture"
            className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
            Rambod Pour Goshtasbi
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text">
            Web Developer
            </p>
        </div>
        
        <div className="flex justify-center p-6 pt-2 gap-7">
        <i> 
            <a href="https://www.linkedin.com/in/rpg225/">
            <FaLinkedin className='text-4xl fill-[#0077b5]'>
            </FaLinkedin>
            </a>
            </i>
            {/* <a
            href="#facebook"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
            >
            <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
            href="#twitter"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
            >
            <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
            href="#instagram"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
            >
            <i className="fab fa-instagram" aria-hidden="true"></i>
            </a> */}
        </div>
      </div>
      <div className="max-w-lg text-left">
        <p className='text-2xl'>
        As a Front-End Developer, I'm passionate about creating engaging and responsive web experiences that meet user needs. I specialize in HTML, CSS, and JavaScript, and enjoy experimenting with new technologies to push the boundaries of what's possible. With a focus on clean code and attention to detail, I strive to deliver high-quality work that delights users and exceeds expectations.
        </p>
        </div>
    </div>
</section>
  )
}

export default About