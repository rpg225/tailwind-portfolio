import Project1Card from "./Project1Card"
import Project2Card from "./Project2Card"
import Project3Card from "./Project3Card"
import Project4Card from "./Project4Card"
import Project5Card from "./Project5Card"
import Project6Card from "./Project6Card"
import Project7Card from "./Project7Card"

const Project = () => {
  return (
    <div className="bg-red-200">
      <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 bg-red-200 pb-6 text-center">
        <h2 className="text-3xl font-bold py-6 bg-red-200">
          Welcome to My Project Page
        </h2>
        
        {/* Grid layout - responsive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Project1Card />
          <Project2Card />
          <Project3Card />
          <Project4Card />
          <Project5Card />
          <Project6Card />
          <Project7Card />
          <Project4Card />
          <Project4Card />
          <Project4Card />
          <Project4Card />
          <Project4Card />
        </div>
      </section>
    </div>
  )
}

export default Project