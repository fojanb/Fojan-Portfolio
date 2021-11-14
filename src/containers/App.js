import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Appointment from "../components/Appointment/Appointment";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Join from "../components/Join/Join";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// react-router-dom@6 includes ----> {BrowserRouter as Router, Routes, Route, Link}
// react-router-dom@5 includes ----> {BrowserRouter as Router, Switch, Route, Link}
function App() {
  return (
    <Router>
      <NavBar />
      {/* ---Our routers include these components and we can Link to them from other components--- */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/home/join" component={Join} />
      </Switch>
      {/* ------ */}
      <Footer />
    </Router>
  );
}
export default App;
