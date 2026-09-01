import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import {
  FaShopify,
  FaFigma,
  FaCss3,
  FaJsSquare,
} from "react-icons/fa";

function ProjectThriveVantage() {
  return (
    <Card className="w-96 h-full flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      
      {/* Image */}
      <CardHeader className="relative h-56 bg-black">
        <img
          src="assets/thrive-vantage-home.png"
          alt="Thrive Vantage"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </CardHeader>

      {/* Content */}
      <CardBody className="px-6 py-5 flex-1">
        <Typography variant="h5" className="mb-3 text-white tracking-tight">
          Thrive Vantage Nutrition
        </Typography>

        <Typography className="text-sm text-slate-400 leading-relaxed mb-4">
          A fully custom Shopify storefront for a nutrition brand. Built bespoke sections, scroll-reveal animations, a blog ecosystem, and a brand-matched design system — all within the Tinker OS 2.0 theme architecture.
        </Typography>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-3 text-slate-400">
          <FaShopify className="text-xl hover:text-green-400 transition-colors" />
          <FaCss3 className="text-xl hover:text-blue-400 transition-colors" />
          <FaJsSquare className="text-xl hover:text-yellow-400 transition-colors" />
          <FaFigma className="text-xl hover:text-pink-400 transition-colors" />
        </div>
      </CardBody>

      {/* Actions — pinned to bottom */}
      <CardFooter className="px-6 pt-6 pb-6 flex gap-3 mt-auto">
        <a
          href="/thrivevantagecase-study"
          className="flex-1 text-center rounded-md bg-cyan-200 text-slate-900 font-semibold py-2 text-sm hover:bg-cyan-400 transition-colors"
        >
          Case Study
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProjectThriveVantage;
