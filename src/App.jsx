import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
