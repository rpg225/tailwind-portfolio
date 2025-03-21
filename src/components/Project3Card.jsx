import { 
  FaHtml5, 
  FaCss3,
  FaGithub,
  FaJsSquare } 
  from 'react-icons/fa';

function Project3Card() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="assets/asteroidsgamecard.png"
      alt="Asteroids"
      className="rounded-xl h-80 w-80" />
  </figure>
  <div className="card-body pb-4 pt-4 items-center text-center">
    <h2 className="card-title">Asteroids Game</h2>
    <p>Lorem</p>
    <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
              <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
              <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
              <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
        </div>
    <div className="card-actions">
    <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
        <button className="bg-teal-900 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            <a 
            className="text-sm flex items-center justify-center"
            href="https://frenchlearnreact.netlify.app/">
             Live Demo </a>
                </button>
                <button className="bg-slate-900 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            <a 
            className="text-sm flex items-center justify-center"
            href="https://github.com/rpg225/LearnFrenchReact">
            <i className="text-center"> <FaGithub className='text-xl mr-2 justify-center text-gray-500'></FaGithub> </i>
              Repo </a>
                </button>
          </div>
    </div>
  </div>
</div>
  )
}

export default Project3Card