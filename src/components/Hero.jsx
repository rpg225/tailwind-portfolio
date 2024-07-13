
const Hero = () => {
  return (
    <section id='hero' className='bg-blue-500'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='relative isolate px-6 pt-14 lg:px-8'>
                <div className='text-center'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'> Hello! I am Rambod! </h1>
                <h2 className='text-2xl font-italic tracking-tight text-gray-700 sm:text-4xl'>I am a Web Developer</h2>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="./Project.js"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View my Work
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                Stay in Touch <span aria-hidden="true">→</span>
              </a>
            </div>
            </div>
        </div>
    </section>
    
    
  )
}

export default Hero