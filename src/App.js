import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components.js/Nav";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Home from "./components.js/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components.js/Footer";

function App() {
  return (
    <Router>
      <section className="d-flex flex-column justify-content-between">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
