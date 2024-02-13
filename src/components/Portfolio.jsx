import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../css/portfolio.css';
import Coding from '../Portofolio/Coding';
import Creative from '../Portofolio/Creative';
import VideoEditor from '../VideoEditor/VideoEditor';

const Portfolio = () => {
  return (
    <>
      <div className="flex lg:justify-start lg:items-start justify-center items-center lg:flex-col px-5 lg:top-[40%] lg:fixed top-0 sticky z-[99] lg:w-fit lg:bg-transparent bg-[#252525]">
        <div className="lg:grid lg:grid-cols-1 text-left flex lg:flex-col gap-3 py-5 ">
          <a href="#website" className="nav-port hover:scale-105 hover:font-bold font-light hover:text-blue-400 lg:text-black text-white duration-300 ease-in-out">
            Coding
          </a>
          <a href="#creative" className="nav-port hover:scale-105 hover:font-bold font-light hover:text-blue-400 lg:text-black text-white duration-300 ease-in-out">
            Creative
          </a>
          <a href="#video-editor" className="nav-port hover:scale-105 hover:font-bold font-light hover:text-blue-400 lg:text-black text-white duration-300 ease-in-out">
            Video Editor
          </a>
        </div>
      </div>

      {/* Portfolio */}
      <div className="py-5 max-w-[80%] mx-auto">
        <Coding title="Coding" />
        <Creative title="Creative" />
        <VideoEditor title="Video Editor" />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Portfolio;
