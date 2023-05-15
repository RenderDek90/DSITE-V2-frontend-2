import logo from './logo.svg';

import { Navbar } from './Navbar';
import { AboutMe } from './AboutMe';
import { Showcase } from './Showcase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <AboutMe />
      <p>Testing</p>
    </div>
  );
}

export default App;
