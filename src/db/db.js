import accessoriesImg from "../images/weed-accessories.jpg";
import concentratesImg from "../images/asst-concentrates.jpg";
import ediblesImg from "../images/asst-edibles.jpg";
import shroomsImg from "../images/shroom-ropes.jpg";
import backpocketImg from "../images/back-pocket.gif";
import frontpocketImg from "../images/front-pocket.gif";
import fifthpocketImg from "../images/fifth-pocket.gif";

export function getData() {
  return [
    { title: "Fifth Pocket", price: 75, Image: fifthpocketImg,id:1 },
    { title: "Back Pocket", price: 40, Image: backpocketImg,id:2 },
    { title: "Front Pocket", price: 25, Image: frontpocketImg ,id:3},
    { title: "Accessories", price: 5, Image: accessoriesImg,id:4 },
    { title: "Concentrates", price: 40, Image: concentratesImg,id:5 },
    { title: "Shrooms", price: 30, Image: shroomsImg,id:6 },
    { title: "Edibles", price: 10, Image: ediblesImg,id:7 },
  ];
}
