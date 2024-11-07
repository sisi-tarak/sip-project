import Nav from "./Components/Nav.jsx";
import Home from "./Components/home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
