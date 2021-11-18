import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Appointment from "../components/Appointment/Appointment";
import Works from "../components/Works/Works";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Join from "../components/Join/Join";
import SSO from "../components/SSO/SSO";
import Story from "../components/Story/Story";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// react-router-dom@6 includes ----> {BrowserRouter as Router, Routes, Route, Link}
// react-router-dom@5 includes ----> {BrowserRouter as Router, Switch, Route, Link}
function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
      {/* ---Our routers include these components and we can Link to them from other components--- */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
        <Route path="/home/join" component={Join} />
        <Route path="/google-login" component={SSO} />
        <Route path="/story" component={Story} />

      </Switch>
      {/* ------ */}
      <Footer />
    </Router>
  );
}
export default App;
