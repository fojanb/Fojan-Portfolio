import Header from "../components/Header/Header";
import ArrowRight from "../assets/arrRight.png";
import cross from "../assets/cross.png";
import camera from "../assets/camera.png";
import Footer from "../components/Footer/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
function App() {
  return (
    <div>
      <Header/>
      <div className="text-gray-300 absolute right-48 bottom-96 -mb-10">
        21 April 2021
      </div>
      <img
        src={ArrowRight}
        alt="Arrow Right"
        className="absolute right-0 bottom-72 w-72"
      />
      <img
        src={cross}
        alt="Cross Lines"
        className="absolute -left-14 bottom-72 w-30"
      />
      <article className="border-b-2 border-opacity-50 text-gray-300 italic absolute top-40 text-2xl	left-36 font-bold p-4 -ml-3">
        “Your first 10,000 photographs are your worst.”
        <br />
        <span className="text-sm	">-H.Bresson</span>
      </article>
      <div className="text-5xl text-gray-300 absolute left-36 top-80 font-bold">
        <span className="inline-block">FOJAN</span>
        <img
          src={camera}
          alt="Camera Icon"
          className="absolute left-96 ml-40 -bottom-24 w-96"
        />
      </div>
      <div className="text-base text-gray-300 absolute left-36 top-96">
        <FaMapMarkerAlt className="inline-block mb-2" />
        <span className="italic ">Vancouver, CA</span>
      </div>
      <button className="bg-secondary text-gray-300 font-bold text-2xl px-8 py-2 absolute left-36 top-80 mt-40">
        Join Me
      </button>
      <button className="text-gray-300 font-bold text-2xl px-8 py-2 absolute left-80 top-80 mt-40 ml-10 border">
        Subscribe
      </button>

      <Footer />
    </div>
  );
}
export default App;
