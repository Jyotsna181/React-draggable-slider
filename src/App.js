import React from "react";
import Slider from "react-draggable-slider";
import "./styles.css";
import Project1 from "./imgs/Img1.jpeg";
import Project2 from "./imgs/Img2.jpeg";
import Project3 from "./imgs/Img3.jpeg";
import Project4 from "./imgs/Img4.jpeg";
import Project5 from "./imgs/Img5.jpeg";
export default function App() {
  const projectList = [
    {
      title: "The Sunset",
      image: Project1,
      description:
        "Inisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu. "
    },
    {
      title: "The seane",
      image: Project2,
      description:
        "Inisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu. "
    },
    {
      title: "The painter man",
      image: Project3,
      description:
        "Inisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu."
    },
    {
      title: "Deserts Night",
      image: Project4,
      description:
        "A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to denudation. About one-third of the land surface of the Earth is arid or semi-arid. "
    },
    {
      title: "Horses",
      image: Project5,
      description:
        "The horse (Equus ferus caballus) is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today. "
    }
  ];
  const sliderSettings = {
     data: projectList,
     speed: 3000,
     easing: "elastic",
     bgColor: "rgba(255, 255, 255, 0.05)",
    buttonHref: "https://www.google.com",
    buttonTarget: "_self",
    buttonText: "View project",
    showButton: true,
    };
  return (
    <div className="App">
      {" "}
      <Slider sliderSettings={sliderSettings} />{" "}
    </div>
  );
}
