import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      {/*  <MyProjects />
      <Contacts />
      <Footer /> */}
    </div>
  );
}

export default App;
