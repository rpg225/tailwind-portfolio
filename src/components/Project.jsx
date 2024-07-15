import Project1Card from "./Project1Card"
import Project2Card from "./Project2Card"
import Project3Card from "./Project3Card"
import Project4Card from "./Project4Card"

const Project = () => {
    return (
    <section className="mx-auto md:px-6 bg-red-200 mb-42 py-6 text-center">
      <h2 className=" text-3xl font-bold py-6"> Welcome to My Project Page </h2>
        {/* first row */}
        <div className="flex justify-center space-x-4">
          <Project1Card />
          <Project2Card />
          {/* project 5 */}
          <Project3Card />
          <Project4Card />
          {/* project 6 */}
        </div>
      </section>
   
    )
  }
  
  export default Project 