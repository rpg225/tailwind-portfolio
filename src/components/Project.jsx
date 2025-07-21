import Project1Card from "./Project1Card"
import Project2Card from "./Project2Card"
import Project3Card from "./Project3Card"
import Project4Card from "./Project4Card"

const Project = () => {
    return (
      <div className=" bg-red-200 " >
      <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 bg-red-200 pb-6 text-center">
      <h2 className=" text-3xl font-bold py-6 bg-red-200"> Welcome to My Project Page </h2>
        {/* first row */}
        <div className=" flex flex-wrap justify-center space-x-0 sm:space-x-4">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            {/* Cat Tinder */}
            <Project1Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            {/* Learn French */}
          <Project2Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            {/* Asteroids */}
          <Project3Card />
          </div>
          
          {/* testing page */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Project4Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Project4Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Project4Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Project4Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Project4Card />
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Project4Card />
          </div>
          {/* <Project4Card /> */}
          {/* project 6 */}
        </div>
        {/* <div className=" flex justify-center space-x-4"> */}
          {/* <Project1Card />
          <Project2Card />
          <Project3Card /> */}
          {/* testing page */}

          {/* <Project4Card /> */}
          {/* project 6 */}
        {/* </div> */}
      </section>
            </div>
    )
  }
  
  export default Project 