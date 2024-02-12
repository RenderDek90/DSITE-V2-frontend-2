import React from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';

// const URL = 'https://cors-anywhere.herokuapp.com/https://sdfacrgud43cpeysnvmmkpva340khtki.lambda-url.ap-southeast-1.on.aws/';
const URL = 'https://sdfacrgud43cpeysnvmmkpva340khtki.lambda-url.ap-southeast-1.on.aws/';
const TestAPI = () => {
  const abortCont = new AbortController();

  const handlePost = () => {
    var data = {
      inputs: [
        [
          {
            role: 'user',
            content: 'Apa itu BPJS?',
          },
        ],
      ],
      parameters: {
        max_new_tokens: 256,
        top_p: 0.2,
        temperature: 0.6,
      },
    };

    fetch(URL, {
      body: JSON.stringify(data),
      //   mode: 'cors',
      method: 'POST',
      headers: {
        accept: 'application/json',
        origin: '127.0.0.1:3000',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('__chat').innerHTML = JSON.parse(data);

        console.log(JSON.parse(data));
      })
      .catch((err) => {
        console.log(err);
      });

    return () => abortCont.abort();
  };

  return (
    <>
      <div className="bg-slate-500">
        <button className="mt-20" onClick={handlePost}>
          handlePost
        </button>
        <div id="__chat"></div>
      </div>
    </>
  );
};

export default TestAPI;
