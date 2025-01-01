import { motion } from "framer-motion";
import Card from "../components/Card";
import { headings, projects } from "../constants";

const Projects = () => {
  return (
    <div className="min-h-screen mb-5" id="projects">
      <div className="flex flex-col items-center">
        <div className="text-4xl pb-4 tracking-widest font-bold mt-32 mb-10 border-b-[3px] border-violet-600">
          {headings.project}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 justify-items-center content-between gap-8"
        >
          {projects.map((project, index) => (
            <Card key={index} data={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
