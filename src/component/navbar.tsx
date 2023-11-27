import { useNavigate } from 'react-router-dom';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#001a27] shadow-sm bg-opacity-40">
      <div className="flex flex-wrap py-5 items-center justify-between container px-16">
        <div
          onClick={() => navigate('/')}
          className="text-white font-bold text-4xl cursor-pointer"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0810f]  to-[#e6df44] ">
            IM.
          </span>
          Dev
        </div>
        <div>
          <div className="block md:hidden">
            {!navOpen ? (
              <button
                onClick={() => setNavOpen(true)}
                className="text-slate-400 text-4xl"
              >
                <HiBars3 />
              </button>
            ) : (
              <button
                onClick={() => setNavOpen(false)}
                className="text-slate-400 text-4xl"
              >
                <HiXMark />
              </button>
            )}
          </div>
          <ul className="space-x-6 hidden md:block md:flex">
            <li className=" text-slate-400 hover:text-white cursor-pointer font-bold text-xl">
              <a href="#header">Home</a>
            </li>
            <li className=" text-slate-400 hover:text-white cursor-pointer font-bold text-xl">
              <a href="#about">About</a>
            </li>
            <li className="text-slate-400 hover:text-white cursor-pointer font-bold text-xl">
              <a href="#project">Project</a>
            </li>
            <li className="text-slate-400 hover:text-white cursor-pointer font-bold text-xl">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {navOpen && (
            <div className="md:hidden fixed inset-x-0 bg-[#001a27] shadow-xl bg-opacity-40 z-20">
              <ul className="flex flex-col items-center justify-center h-full mb-5">
                <li
                  onClick={() => {
                    navigate('/');
                    setNavOpen(false);
                  }}
                  className="text-white hover:text-slate-400 cursor-pointer font-bold text-xl mb-4"
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    navigate('/about');
                    setNavOpen(false);
                  }}
                  className="text-white hover:text-slate-400 cursor-pointer font-bold text-xl mb-4"
                >
                  About
                </li>
                <li
                  onClick={() => {
                    navigate('/project');
                    setNavOpen(false);
                  }}
                  className="text-white hover:text-slate-400 cursor-pointer font-bold text-xl mb-4"
                >
                  Project
                </li>
                <li
                  onClick={() => {
                    navigate('/contact');
                    setNavOpen(false);
                  }}
                  className="text-white hover:text-slate-400 cursor-pointer font-bold text-xl"
                >
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
