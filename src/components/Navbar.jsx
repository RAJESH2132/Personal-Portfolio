import { X, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="fixed top-0  w-full z-10  bg-violet-950 text-white ">
      <div className=" px-4 py-8 mx-auto  text-sm">
        <div className="flex justify-between items-center ">
          <div>
            <span className="text-xl tracking-tight ml-20 font-semibold">
              RAJESH.
            </span>
          </div>
          <div>
            <ul className="hidden lg:flex ml-14 space-x-16 font-medium mr-20 text-xl">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </ul>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end z-30">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X className="text-black" /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed right-0 z-20 w-full top-0 bottom-0 overflow-hidden bg-white transition-all text-black">
            <ul className="flex flex-col items-center gap-5 mt-12">
              <a
                className="text-xl font-semibold"
                href="#home"
                onClick={closeNavbar}
              >
                Home
              </a>
              <a
                className="text-xl font-semibold"
                href="#about"
                onClick={closeNavbar}
              >
                About
              </a>
              <a
                className="text-xl font-semibold"
                href="#projects"
                onClick={closeNavbar}
              >
                Projects
              </a>
              <a
                className="text-xl font-semibold"
                href="#contact"
                onClick={closeNavbar}
              >
                Contact
              </a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
