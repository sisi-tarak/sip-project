import Nav from "./Components/Nav.jsx";
import Home from "./Components/home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
