import accessoriesImg from "../images/accessories.jpg";
import concentratesImg from "../images/concentrates.jpeg";
import ediblesImg from "../images/edibles.jpg";
import flowertestpicImg from "../images/flowertestpic.jpg";
import shakeImg from "../images/shake.jpg";
import shroomsImg from "../images/shrooms.jpg";
import smallsImg from "../images/smalls.jpg";
import burrprintbgImg from "../images/burrprint-bg.png";

export function getData() {
  return [
    { title: "Fifth Pocket", price: 75, Image: flowertestpicImg,id:1 },
    { title: "Back Pocket", price: 40, Image: smallsImg,id:2 },
    { title: "Front Pocket", price: 25, Image: shakeImg ,id:3},
    { title: "Accessories", price: 5, Image: accessoriesImg,id:4 },
    { title: "Concentrates", price: 40, Image: concentratesImg,id:5 },
    { title: "Shrooms", price: 30, Image: shroomsImg,id:6 },
    { title: "Edibles", price: 10, Image: ediblesImg,id:7 },
  ];
}
