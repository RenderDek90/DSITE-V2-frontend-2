import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer w-full bg-[#252525]">
      <div className="flex flex-row justify-center items-center p-10 w-100">
        <div className="left-section text-white">
          <div className="mt-2 flex flex-row gap-5 text-white justify-center items-center">
            <Link to="https://www.instagram.com/darrenezra_/" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-fuchsia-400 ">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
            <Link to="https://www.linkedin.com/in/darren-ezra-9090/" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </Link>
            <Link to="https://github.com/RenderDek90" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-orange-500">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Link>
            <Link to="mailto:darrenezra902@gmail.com?subject=Hey Darren! Let's Connect!" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-cyan-500">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Link>
          </div>
          <p className="mt-5 lg:text-lg text-base">&copy; Copyright 2023 - Darren Ezra - V2</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
