import { Link } from 'react-router-dom';
import openingCeremony from '../Portofolio/portfolio-images/image 15.png';
import videoKenangan from '../Portofolio/portfolio-images/image 18.png';

const VideoEditor = ({ title }) => {
  return (
    <>
      <div className="h-[100px]" id="video-editor"></div>
      <div className="text-4xl w-fit flex flex-row gap-2">
        <p>📽️</p>
        <div>
          <p>{title}</p>
          <div className="ml-5 bg-cyan-500 h-[2px] w-100 my-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 py-12">
        <Link
          to="https://youtu.be/sIqjmqC7ejg"
          target="_blank"
          className="grid grid-cols-1 md:grid-cols-2 p-6 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm sm:gap-12"
        >
          <img src={openingCeremony} alt="OpeningCeremony_png" className="w-auto h-auto m-auto rounded-lg shadow" />
          <div className="self-start">
            <p className="text-2xl font-bold py-5 md:mb-3">Opening Ceremony for Freshmen Partner</p>
            <p>
              As a pivotal member of the opening ceremony committee for Freshmen newcomers, I spearheaded the creation of an engaging opening video. Working closely with various divisions and teams, my role involved coordinating efforts to
              craft a visually captivating and informative video that set the tone for the event.
            </p>
            <div className="website-skill-phone md:website-skill mt-5 self-end">
              <p>Adobe Premiere Pro</p>
              <p>3D Blender</p>
            </div>
          </div>
        </Link>

        <Link
          to="https://youtu.be/9WRuzLsY3i4"
          target="_blank"
          className="grid grid-cols-1 md:grid-cols-2 p-6 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm sm:gap-12"
        >
          <img src={videoKenangan} alt="" className="w-auto h-auto m-auto rounded-lg shadow" />
          <div className="self-start">
            <p className="text-2xl font-bold py-5 md:mb-3">Memorable Video HIMTI 2021</p>
            <p>
              As a member of the HIMTI Farewell committee, I had the important task of making a touching video message for the event. My goal was to capture the feelings of our time together and say goodbye to those leaving in a meaningful
              way.
            </p>
            <div className="website-skill-phone md:website-skill mt-5 self-end">
              <p>Adobe Premiere Pro</p>
              <p>3D Blender</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoEditor;
