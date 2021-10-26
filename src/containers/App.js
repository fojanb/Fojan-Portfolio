import Header from "../components/Header/Header";
import ArrowRight from "../assets/arrRight.png";
import cross from "../assets/cross.png";
import camera from "../assets/camera.png"
import Footer from "../components/Footer/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <div className="text-gray-300 absolute right-48 bottom-96 -mb-10">
        21 April 2021
      </div>
      <img
        src={ArrowRight}
        alt="Arrow Right"
        className="absolute right-0 bottom-72 w-72"
      />
      <img src={cross} alt="Cross Lines" className="absolute -left-14 bottom-72 w-30"/>
      <article className="text-main italic absolute top-40 text-2xl	left-36 font-bold">
        “ When words become unclear, I shall focus with photographs.
        <br />
        &nbsp;&nbsp;When images become inadequate,
        <br />
        &nbsp;&nbsp;I shall be content with silence.
      </article>
      <div className="text-5xl text-gray-300 absolute left-36 top-80 font-bold">
        <span className="inline-block">
          <span className="font-bold text-green text-5xl">F</span>OJAN
        </span>
        <img src={camera} alt="Camera Icon" className="absolute left-96 ml-40 -bottom-24 w-96"/>
      </div>
      <div className="text-base text-gray-300 absolute left-36 top-96">
        <FaMapMarkerAlt className="inline-block mb-2" />
        <span className="italic ">Vancouver, CA</span>
      </div>
      <button className="bg-secondary text-gray-300 font-bold text-2xl px-8 py-2 absolute left-36 top-80 mt-40">
        Read This
      </button>
      <button className="text-gray-300 font-bold text-2xl px-8 py-2 absolute left-80 top-80 mt-40 ml-20 border">
        Subscribe
      </button>

      <Footer />
    </div>
  );
}
export default App;
