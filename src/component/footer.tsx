const Footer = () => {
  return (
    <footer className="flex mx-auto border-t-2 border-slate-700">
      <div className="text-white text-4xl font-bold container px-16 my-4 flex justify-between items-center">
        <div className="">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0810f]  to-[#e6df44] ">
            IM.
          </span>
          Dev
        </div>
        <div>
          <h3 className="text-slate-400 text-xl font-semibold">
            Copyright © 2023. All rights are reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
