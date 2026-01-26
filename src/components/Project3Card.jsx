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
  FaJsSquare,
} from "react-icons/fa";

function Project3Card() {
  return (
    <Card className="w-96 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      
      {/* Image */}
      <CardHeader className="relative h-56 bg-black">
        <img
          src="assets/asteroidsgamecard.png"
          alt="Asteroids JavaScript Game"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </CardHeader>

      {/* Content */}
      <CardBody className="px-6 py-5">
        <Typography
          variant="h5"
          className="mb-3 text-white tracking-tight"
        >
          Asteroids (Vanilla JS)
        </Typography>

        <Typography className="text-sm text-slate-400 leading-relaxed">
          A fully playable remake of the classic Asteroids arcade game,
          built from scratch using vanilla JavaScript to manage game
          state, physics, input, and rendering.
        </Typography>
      </CardBody>

      {/* Tech stack */}
      <div className="px-6 flex gap-3 text-slate-400">
        <FaHtml5 className="text-xl hover:text-orange-500 transition-colors" />
        <FaCss3 className="text-xl hover:text-blue-400 transition-colors" />
        <FaJsSquare className="text-xl hover:text-yellow-400 transition-colors" />
      </div>

      {/* Actions */}
      <CardFooter className="px-6 pt-6 pb-6 flex gap-3">
        <a
          href="https://github.com/rpg225/AsteroidsJS"
          className="flex items-center justify-center gap-2 flex-1 rounded-md border border-slate-700 text-slate-300 py-2 text-sm hover:border-cyan-400 hover:text-white transition-colors"
        >
          <FaGithub className="text-lg" />
          Repo
        </a>
      </CardFooter>
    </Card>
  );
}

export default Project3Card;