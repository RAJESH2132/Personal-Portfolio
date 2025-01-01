import { description, github, linkedin, mail } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black text-white">
      <div className="flex max-sm:flex-col justify-between items-center my-10  mx-10">
        <div className="tracking-wide w-2/3 md:w-2/3 text-center md:text-left">
          <div className="text-2xl font-bold mb-3 ">RAJESH.</div>
          <p className="">{description.footer}</p>
        </div>

        <div className="text-center ">
          <p className="text-2xl font-bold mb-3 md:text-left mt-5">Social</p>
          <div className="flex">
            <a href={mail.link} target="_blank">
              <img
                src={mail.icon}
                alt="Mail"
                className="bg-white w-10 h-10 rounded-full p-1 cursor-pointer mr-3"
              />
            </a>

            <a href={github.link} target="_blank">
              <img
                src={github.icon}
                alt="GitHub"
                className="bg-white w-10 h-10 rounded-full p-1 cursor-pointer mr-3"
              />
            </a>

            <a href={linkedin.link} target="_blank">
              <img
                src={linkedin.icon}
                alt="LinkedIn"
                className="bg-white w-10 h-10 rounded-full cursor-pointer mr-3"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-3/4  border-white border-t-[1px] ">
        <p className="tracking-wide py-6 text-center">
          © 2024 Rajesh Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
