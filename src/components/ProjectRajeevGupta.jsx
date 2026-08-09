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
  FaJsSquare,
  FaFigma,
} from "react-icons/fa";

function ProjectRajeevGupta() {
  return (
    <Card className="w-96 h-full flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      
      {/* Image */}
      <CardHeader className="relative h-56 bg-black">
        <img
          src="assets/rajeev-gupta-home.png"
          alt="RajeevGupta"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </CardHeader>

      {/* Content */}
      <CardBody className="px-6 py-5 flex-1">
        <Typography variant="h5" className="mb-3 text-white tracking-tight">
          Rajeev Gupta
        </Typography>

        <Typography className="text-sm text-slate-400 leading-relaxed mb-4">
          A Next.js law firm website where I designed and developed a professional UI, exploring layout hierarchy, conversion optimization, and the complete design-to-development workflow.
        </Typography>

        {/* Tech stack — MUST live inside CardBody */}
        <div className="flex flex-wrap gap-3 text-slate-400">
          <FaHtml5 className="text-xl hover:text-orange-500 transition-colors" />
          <FaCss3 className="text-xl hover:text-blue-400 transition-colors" />
          <FaJsSquare className="text-xl hover:text-yellow-400 transition-colors" />
          <FaReact className="text-xl hover:text-cyan-400 transition-colors" />
          <FaFigma className="text-xl hover:text-cyan-400 transition-colors" />
        </div>
      </CardBody>

      {/* Actions — pinned to bottom */}
      <CardFooter className="px-6 pt-6 pb-6 flex gap-3 mt-auto">
        <a
          href="/rajeevguptacase-study"
          className="flex-1 text-center rounded-md bg-cyan-200 text-slate-900 font-semibold py-2 text-sm hover:bg-cyan-400 transition-colors"
        >
          Case Study
        </a>

        <a
          href="https://rajeev-gupta-law.vercel.app/"
          className="flex-1 text-center rounded-md bg-cyan-500 text-slate-900 font-semibold py-2 text-sm hover:bg-cyan-400 transition-colors"
        >
          Live Demo
        </a>

        <a
          href="https://github.com/rpg225/rajeev-gupta-law"
          className="flex items-center justify-center gap-2 flex-1 rounded-md border border-slate-700 text-slate-300 py-2 text-sm hover:border-cyan-400 hover:text-white transition-colors"
        >
          <FaGithub className="text-lg" />
          Repo
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProjectRajeevGupta;
