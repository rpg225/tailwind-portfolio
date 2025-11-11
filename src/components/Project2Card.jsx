import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { 
  FaHtml5, 
  FaCss3,
  FaGithub,
  FaReact,
  FaJsSquare } 
  from 'react-icons/fa';

function Project2Card() {
  return (
    <Card className="mt-6 w-full max-w-sm py-4 px-4 shadow-lg rounded-lg">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="assets/learnfrench.png"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Learn French React App
        </Typography>
        <Typography>
         A streamlined French vocabulary builder, developed using React, that provides users with a new word, translation, and context sentence on each click.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2 items-center text-center justify-center">
          <i><FaHtml5 className='text-4xl text-gray-500' /></i>
          <i><FaCss3 className='text-4xl text-gray-500' /></i>
          <i><FaJsSquare className='text-4xl text-gray-500' /></i>
          <i><FaReact className='text-4xl text-gray-500' /></i>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2 items-center text-center justify-center">
          <button className="bg-teal-900 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            <a 
              className="text-sm flex items-center justify-center"
              href="https://frenchlearnreact.netlify.app/">
              Live Demo
            </a>
          </button>
          <button className="bg-slate-900 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            <a 
              className="text-sm flex items-center justify-center"
              href="https://github.com/rpg225/LearnFrenchReact">
              <i className="text-center"><FaGithub className='text-xl mr-2 justify-center text-gray-500' /></i>
              Repo
            </a>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Project2Card