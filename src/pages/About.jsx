import { motion } from "framer-motion";
import SkillButton from "../components/SkillButton";
import { description, headings, skills } from "../constants";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50" id="about">
      <div className="flex flex-col items-center">
        <div className="text-4xl pb-4 tracking-widest font-bold mt-32 mb-10 border-b-[3px] border-violet-600 ">
          {headings.about.main}
        </div>
        <p className="text-xl text-gray-600 text-center max-w-2xl tracking-tighter mx-20">
          {description.about.intro}
        </p>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center md:grid grid-cols-2 md:space-x-10 mt-10 mx-14 md:mx-28"
        >
          <div className="mb-8 ">
            <div className="text-3xl font-bold mb-6 text-center md:text-left">
              {headings.about.sub1}
            </div>
            <p className="text-base tracking-wide md:mr-12 mb-8 leading-7 text-wrap text-gray-700 font-medium text-center md:text-left">
              {description.about.para1}
            </p>
            <p className="text-base tracking-wide md:mr-12 mb-8 leading-7 text-wrap text-gray-700 font-medium text-center md:text-left">
              {description.about.para2}
            </p>
            <div className="max-md:flex justify-center">
              <a
                href="#contact"
                className="bg-violet-800 py-4 px-12  md:my-10  rounded-md text-xl tracking-widest font-bold text-white hover:bg-white hover:text-violet-800 border-2 border-violet-500 "
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-6 text-center md:text-left">
              {headings.about.sub2}
            </div>
            <div className="flex flex-wrap max-sm:justify-center  ">
              {skills.map((skill, index) => (
                <SkillButton key={index} data={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
