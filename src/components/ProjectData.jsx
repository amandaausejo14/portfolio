import CoffeeWebsite from "../assets/projects/coffee-website.png";
import NomadWebsite from "../assets/projects/digital-nomad-ally.png";
import FilmWebsite from "../assets/projects/film-app.png";
import VideoNomadWebsite from "../assets/projects/video-digital-nomad-website.mp4";

const projectData = [
  {
    title: "Digital Nomad Website",
    img: NomadWebsite,
    website: "https://final-project-front-nine.vercel.app/",
    gitHubFront: "https://github.com/Amy1435/final-project-front",
    gitHubBack: "https://github.com/Amy1435/final-project-back",
    description:
      "Digital Nomad Ally is a platform designed for remote workers to find essential information about various cities around the world. It serves as a community where users can create accounts, share their experiences, and post about living and working in different locations. Whether you're looking for insights on local amenities, cost of living, or simply want to connect with fellow digital nomads, this platform has you covered.",
    languages: ["Javascript", "React", "Scss", "Node", "express", "MongoDB"],
    status: "Completed",
  },
  {
    title: "Film Website",
    img: FilmWebsite,
    website: "https://filmapp-amanda.netlify.app/",
    gitHubFront: "https://github.com/Amy1435/filmpire",
    description:
      "Filmpire is a website designed for movie and series enthusiasts. This platform provides up-to-date information on the latest releases and their ratings from viewers. Each movie page includes detailed information about the cast, along with actor biographies. Built using the TMDB API, Filmpire offers a seamless front-end experience where users can explore, rate, and review their favorite movies and series.",
    languages: ["Javascript", "React", "MaterialUI", "API"],
    status: "Completed",
  },
  {
    title: "Coffe Shop Website",
    img: CoffeeWebsite,
    website: "",
    gitHubFront: "https://github.com/Amy1435/coffee-shop",
    gitHubBack: "https://github.com/Amy1435/coffee-shop-back-end",
    description:
      "Inspired by my friend’s dream of opening a coffee shop, I developed this website to introduce the café to the community. Visitors can explore the diverse range of coffee offerings, learn more about each blend, and conveniently purchase their favorite coffee online. ",
    languages: ["Javascript", "React", "TailwindCSS", "Node"],
    status: "Ongoing",
  },
];

export default projectData;
