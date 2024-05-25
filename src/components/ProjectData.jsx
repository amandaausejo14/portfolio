import CoffeeWebsite from "../assets/projects/coffee-website.png";
import NomadWebsite from "../assets/projects/digital-nomad-ally.png";
import FilmWebsite from "../assets/projects/film-app.png";
import VideoNomadWebsite from "../assets/projects/video-digital-nomad-website.mp4";

const projectData = [
  {
    title: "Digital Nomad Website",
    img: NomadWebsite,
    video: VideoNomadWebsite,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "Scss", "Node"],
    status: "Completed",
  },
  {
    title: "Film Website",
    img: FilmWebsite,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "MaterialUI"],
    status: "Completed",
  },
  {
    title: "Coffe Shop Website",
    img: CoffeeWebsite,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ["React", "TailwindCSS", "Node"],
    status: "Ongoing",
  },
];

export default projectData;
