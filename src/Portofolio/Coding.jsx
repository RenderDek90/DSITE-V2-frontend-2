import { Link } from 'react-router-dom';

const Coding = ({ title }) => {
  return (
    <>
      <div className="h-[100px] h-[100px]" id="website"></div>
      <div className="text-4xl w-fit flex flex-row gap-2">
        <p>💻</p>
        <div>
          <p>{title}</p>
          <div className="ml-5 bg-cyan-500 h-[2px] w-100 my-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-12">
        <Link
          to="https://dsite.netlify.com"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">DSITE</p>
            <p>My Own Website for personal branding using a little bit of bootstrap 5 framework. I didn't use figma for the design representation, instead I use my own creative mind to make this. So, I'm very proud of myself :D</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>HTML</p>
            <p>CSS</p>
            <p>Netlify</p>
          </div>
        </Link>

        <Link
          to="https://github.com/RenderDek90/ProjectAMDP1"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">Medicare Website</p>
            <p>Part of my website design projects that was build during the training of IT Division in Bina Nusantara University. The project was only using HTML, CSS, and JS.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </Link>

        <Link
          to="https://websitecreativekidsgideon.dere1.repl.co"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">Creative Kids Website</p>
            <p>A Website for my Sunday School Community that are still in development, because lack of content. It took me 4 weeks for making this, with a little help of Figma. But I'm happy about it.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap 5</p>
            <p>Netlify</p>
          </div>
        </Link>

        <Link
          to="https://github.com/RenderDek90/BigiaryWebsite"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">Bigiary</p>
            <p>This Website allows the user to create a new post, this website is for my own training to know how to connect between PHP and HTML, with form validation.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>HTML</p>
            <p>CSS</p>
            <p>PHP</p>
            <p>Javascript</p>
          </div>
        </Link>

        <Link
          to="https://github.com/RenderDek90/FaceRecognizer"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">Face Recognizer</p>
            <p>Face Recognizer based on the dataset. The project is to detect faces based on the training dataset, and have them tested. This project uses Python 3.7.6 version, to get OpenCV library for detecting.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>Python 3.7.6</p>
            <p>OpenCV</p>
            <p>Haarcascade</p>
          </div>
        </Link>

        <Link
          to="https://github.com/RenderDek90/MaiBoutique"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">MaiBoutique</p>
            <p>Maiboutique is a clothing online shopping website, it's my one of my projects using PHP Framework (Laravel). The online shoping uses Authentication for user.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>PHP</p>
            <p>Laravel</p>
            <p>Tailwind</p>
            <p>Git</p>
          </div>
        </Link>

        <Link
          to="https://github.com/RenderDek90/E-Grocery"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">E-Grocery</p>
            <p>E-Grocery is a clothing online shopping website. This website uses features like Carts, and Authentication. Each person need to login first to be able to use the website.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>PHP</p>
            <p>Laravel</p>
            <p>Tailwind</p>
          </div>
        </Link>

        <Link
          to="https://github.com/RenderDek90/GiantBookSupplierr"
          target="_blank"
          className="grid w-100 p-5 border-4 border-cyan-900/25 hover:border-cyan-500/50 hover:scale-105 duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-cyan-300 lg:text-base text-sm"
        >
          <div className="self-start">
            <img src="" alt="" />
            <p className="text-2xl font-bold pb-5">Giant Book Supplier</p>
            <p>GiantBookSupplier is a website full of books with categories and have their own publisher information. Each books have their own categories and has their details information.</p>
          </div>
          <div className="website-skill-phone md:website-skill mt-5 self-end">
            <p>PHP</p>
            <p>Laravel</p>
            <p>Bootstrap</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Coding;
