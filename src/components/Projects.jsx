// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = ({ data, isPending, error }) => {
  return (
    <div className="min-h-screen mx-auto bg-[#101010] py-12">
      <div className="py-6 px-12">
        <div className="text-white font-bold text-2xl pl-12">Projects</div>
        <div className="max-w-[80%] mx-auto">
          {isPending && <div className="text-white">Loading...</div>}
          {error && <div className="text-white">Error catch API..</div>}
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            className="min-h-[300px]"
          >
            {data &&
              data.d_ports.projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="m-5 shadow-white shadow-lg bg-[#252525]/25 p-5 rounded-lg block text-white overflow-y-auto max-h-screen max-w-[80%] mx-auto">
                    <p className="font-medium lg:text-2xl text-md pb-5">{project.title}</p>
                    <p className="font-medium lg:text-md text-sm pb-5">{project.description}</p>
                    <Link to={project.url_project} className="p-2 rounded-lg bg-transparent hover:bg-blue-700 duration-300 ease-in-out hover:shadow-white lg:text-md text-sm">
                      {project.url_project}
                    </Link>
                    <p className="font-light text-white mt-5">~ {project.created_at}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
