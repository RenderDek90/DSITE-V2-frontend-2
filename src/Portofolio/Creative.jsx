import { Link } from 'react-router-dom';
import image1 from './portfolio-images/poster1.png';
import image2 from './portfolio-images/feeds1.png';
import image3 from './portfolio-images/English6 1.png';
import uiImage from './portfolio-images/Preload 1.png';

const Creative = ({ title }) => {
  return (
    <>
      <div className="h-[100px]" id="creative"></div>
      <div className="text-4xl w-fit flex flex-row gap-2">
        <p>🎨</p>
        <div>
          <p>{title}</p>
          <div className="ml-5 bg-cyan-500 h-[2px] w-100 my-2"></div>
        </div>
      </div>
      <div className="p-5 shadow rounded-lg">
        <p>Welcome to a showcase of my best creations! Here you'll find posters, flyers, UI designs, and more. Each piece is a result of my creativity and hard work. Take a look and get inspired!</p>
        <p className="mt-4">
          <a href="https://www.figma.com/proto/uxJsatAP8GmU82l1KEWRPE/Darren's-Portofolio?node-id=2-68&starting-point-node-id=2%3A68&mode=design&t=JynJisriQkbIQyZq-1" target="_blank" className="text-cyan-500">
            See my design portfolio here..
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-6">
        {/* Creative */}
        <div className="max-w-md min-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex lg:grid">
            <div className="self-start shadow shadow-md">
              <img className="h-48 w-full m-auto object-cover" src={image1} />
            </div>
            <div className="p-8 self-center">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Poster</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Sports Day Poster</p>
              <a href="https://ofog.himti.or.id/" target="_blank" className="font-light italic text-sm text-blue-500 hover:font-bold">
                HIMTI Binus University
              </a>
              <p className="mt-2 text-slate-500">This poster are designed for HIMTI activists, encouraging them to take a day off and anticipate an exhilarating sports event!</p>
            </div>
          </div>
        </div>

        <div className="max-w-md min-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex lg:grid">
            <div className="self-start shadow shadow-md">
              <img className="h-48 w-full m-auto object-cover" src={image2} />
            </div>
            <div className="p-8 self-center">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Instagram Feed</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Independence Day Feed</p>
              <a href="https://www.instagram.com/creativekidsgpdigideon/" target="_blank" className="font-light italic text-sm text-blue-500 hover:font-bold">
                Sunday School Creative Kids Gideon
              </a>
              <p className="mt-2 text-slate-500">Develop a 3x3 Instagram design layout for the Sunday School community, uniting to commemorate Independence Day alongside the Sunday School children!</p>
            </div>
          </div>
        </div>

        <div className="max-w-md min-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex lg:grid">
            <div className="self-start shadow shadow-md">
              <img className="h-48 w-full m-auto object-cover" src={image3} />
            </div>
            <div className="p-8 self-center">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Management Skill Article</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">SDC Article</p>
              <a href="https://student.binus.ac.id/student-development-center/" target="_blank" className="font-light italic text-sm text-blue-500 hover:font-bold">
                Student Development Center<br></br> BINUS University
              </a>
              <p className="mt-2 text-slate-500">Become part of the Student Development Center community and craft an article tailored for Binus freshmen focusing on enhancing management skills.</p>
            </div>
          </div>
        </div>

        <div className="max-w-md min-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex lg:grid">
            <div className="self-start shadow shadow-md">
              <img className="h-48 w-full m-auto object-cover" src={uiImage} />
            </div>
            <div className="p-8 self-center">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">UI Kiosk Design - Medstore Dummy Application</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Multimedia Subject Project</p>
              <a href="https://student.binus.ac.id/student-development-center/" target="_blank" className="font-light italic text-sm text-blue-500 hover:font-bold">
                BINUS University
              </a>
              <p className="mt-2 text-slate-500">
                For my college Multimedia subject, I undertook a project to design a user-friendly interface (UI) for a Medstore Kiosk Application. The aim was to simplify the process of purchasing medicine for users, ensuring a seamless
                and efficient experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creative;
