import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => (
  <div className="bg-[#252525] p-5">
    <div className="flex flex-row px-12 py-8 text-white justify-between items-center w-100 ">
      <h1 className="font-display font-bold">DSITE</h1>
    </div>
    <div className="w-100 flex flex-row justify-center items-center pb-5">
      <ul className="grid grid-cols-3 w-100 items-center gap-5 text-white text-center">
        <a href="#about_me" className="hover:text-blue-400 duration-300 ease-in-out">
          About Me
        </a>
        <a href="#gallery" className="hover:text-blue-400 duration-300 ease-in-out">
          Gallery
        </a>
        <a href="#portofolio" className="hover:text-blue-400 duration-300 ease-in-out">
          Portofolio
        </a>
      </ul>
    </div>
  </div>
);
