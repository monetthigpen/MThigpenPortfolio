import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarM from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <NavbarM />
       <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
