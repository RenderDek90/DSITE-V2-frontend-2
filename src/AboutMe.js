import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const AboutMe = () => (
  <div className="w-100 flex flex-row justify-center items-center bg-[#191919] p-10 min-h-screen" id="aboutme">
    <div className="block text-white text-center leading-10">
      <h1 className="text-5xl font-bold">Hi!!</h1>
      <p>My name is Darren!!</p>
      <hr />

      {/* <img src="" alt="" /> */}
      <div className="flex flex-row gap-5">
        <p>Graphics Designer | Web Developer | Musician </p>
      </div>
    </div>
  </div>
);
