import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import mouse from "../assets/mouse.svg";
import { github, linkedin, codolio, description, headings } from "../constants";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" absolute mt-72 hidden md:flex flex-col items-start bg-gray-50 border-2 border-black  space-y-0  rounded-sm "
      >
        <a
          href={github.link}
          target="_blank"
          className="flex items-center justify-center w-14 h-14 p-2   "
        >
          <img
            src={github.icon}
            alt={github.alt}
            className="max-w-full max-h-full"
          />
        </a>

        <a
          href={linkedin.link}
          target="_blank"
          className="flex items-center justify-center w-14 h-14 p-2 "
        >
          <img
            src={linkedin.icon}
            alt={linkedin.alt}
            className="max-w-full max-h-full"
          />
        </a>

        <a
          href={codolio.link}
          target="_blank"
          className="flex items-center relative overflow-hidden justify-center w-14 h-16 p-0 "
        >
          <img
            src={codolio.icon}
            alt={codolio.alt}
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-6 flex flex-col  items-center " id="home">
          <h1 className="text-4xl mx-5 mt-32 sm:test-5xl lg:text-6xl text-center tracking-wide font-bold lg:mt-64">
            {headings.home}
          </h1>
          <p className="mt-12 text-lg text-center text-neutral-600 max-w-2xl mx-10">
            {description.home}
          </p>
          <div className="flex flex-wrap justify-center my-12 gap-3">
            <a
              href="#"
              className=" py-5 px-6 mx-3 rounded-md text-xl font-bold text-violet-800  hover:bg-violet-800 hover:text-white border-2 border-violet-500"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-violet-800 py-5 px-8 mx-3 rounded-md text-xl font-bold text-white hover:bg-white hover:text-violet-800 border-2 border-violet-500 "
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center ">
          <div className=" my-12 w-10 animate-bounce hover:animate-none  transition-transform ">
            <img src={mouse} alt="mouse" className="w-14 h-14" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
