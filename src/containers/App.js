import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Appointment from "../components/Appointment/Appointment";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <div>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />

    </div>
  );
}
export default App;
