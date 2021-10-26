import Header from "../components/Header/Header";
import ArrowRight from "../assets/arrRight.png";
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
      <article className="text-gray-200 italic absolute top-40 text-2xl	left-36">
        “ When words become unclear, I shall focus with photographs.
        <br />
        &nbsp;&nbsp;When images become inadequate,
        <br />
        &nbsp;&nbsp;I shall be content with silence.
      </article>
      <span className="text-5xl text-gray-300 absolute left-36 top-80 font-bold">
        <span className="font-bold text-green text-5xl">F</span>OJAN
      </span>
      <span className="text-base text-gray-300 absolute left-36 top-96">
        <FaMapMarkerAlt className="inline-block mb-2" />
        <span className="italic ">Vancouver, CA</span>
      </span>
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
