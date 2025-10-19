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
  import { SiSolidity, SiWeb3Dotjs } from "react-icons/si";


function Project1Card() {
  return (
    <Card className="mt-6 w-96 py-4 px-4 shadow-lg rounded-lg ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="assets/nft-minter.png"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          NFT Minter
        </Typography>
        <Typography>
          This DApp was built as a learning project to understand and implement core Web3 functionalities, including smart contract development, frontend-blockchain interaction, and metadata handling for NFTs.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center  justify-center">
              <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
              <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
              <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
              <i> <FaReact className='text-4xl text-gray-500'></FaReact> </i>
              <i><SiSolidity className='text-4xl text-gray-500'></SiSolidity></i>
              <i><SiWeb3Dotjs className='text-4xl text-gray-500' ></SiWeb3Dotjs></i>
        </div>
        <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
        <button className="bg-teal-900 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            <a 
            className="text-sm flex items-center justify-center"
            href="https://rpg225.github.io/nft-minter/">
             Live Demo </a>
                </button>
                <button className="bg-slate-900 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            <a 
            className="text-sm flex items-center justify-center"
            href="https://github.com/rpg225/nft-minter">
            <i className="text-center"> <FaGithub className='text-xl mr-2 justify-center text-gray-500'></FaGithub> </i>
              Repo </a>
                </button>
          </div>
        {/* <Button>Read More</Button> */}
      </CardFooter>
    </Card>
  );
}

export default Project1Card