import { FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';

const Project = () => {
    return (
    <section className="mx-auto md:px-6 bg-red-200 mb-42 py-6 text-center">
      <h2 className=" text-3xl font-bold py-6"> Welcome to My Project Page </h2>
        <div className="flex justify-center space-x-4">
          <div className=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
              <div className="max-w-sm rounded overflow-hidden shaddow-lg">
                <img className="w-full" src="assets/img/asteroidsgamecard.png" alt="asteroidsgamecard" />
                    <div className="px-6 py-4"></div>
                      <div className="font-bold text-xl mb2"> Asteroids Game  </div>
                        <p className="text-gray-700 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore facilis accusamus blanditiis dolorem vel assumenda perspiciatis eligendi, quis harum, excepturi explicabo consequuntur voluptates sed quae quas, inventore obcaecati rerum.</p>
                     </div>
              <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
                <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
                <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
                <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
              </div>
            </div>
              {/* project 2 */}
            <div className="flex justify-center space-x-4">
              <div className=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
              <div className="max-w-sm rounded overflow-hidden shaddow-lg">
                <img className="w-full" src="assets/img/asteroidsgamecard.png" alt="asteroidsgamecard" />
                    <div className="px-6 py-4"></div>
                      <div className="font-bold text-xl mb2"> French Quiz App  </div>
                        <p className="text-gray-700 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore facilis accusamus blanditiis dolorem vel assumenda perspiciatis eligendi, quis harum, excepturi explicabo consequuntur voluptates sed quae quas, inventore obcaecati rerum.</p>
                     </div>
              <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
                <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
                <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
                <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
                <i> <FaReact className='text-4xl text-gray-500'></FaReact> </i>
              </div>
            </div>
          </div>
          {/* project 3 */}
          <div className="flex justify-center space-x-4">
              <div className=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
              <div className="max-w-sm rounded overflow-hidden shaddow-lg">
                <img className="w-full" src="assets/img/cat-tinder-card.png" alt="cattinder-gamecard" />
                    <div className="px-6 py-4"></div>
                      <div className="font-bold text-xl mb2"> Cat Tinder </div>
                        <p className="text-gray-700 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore facilis accusamus blanditiis dolorem vel assumenda perspiciatis eligendi, quis harum, excepturi explicabo consequuntur voluptates sed quae quas, inventore obcaecati rerum.</p>
                     </div>
              <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
                <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
                <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
                <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    )
  }
  
  export default Project 