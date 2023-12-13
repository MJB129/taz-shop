import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";

const { getData } = require("./db/db");
const buds = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (bud) => {
    const exist = cartItems.find((x) => x.id === bud.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === bud.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...bud, quantity: 1 }]);
    }
  };

  const onRemove = (bud) => {
    const exist = cartItems.find((x) => x.id === bud.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== bud.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === bud.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Menu</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {buds.map((bud) => {
          return (
            <Card bud={bud} key={bud.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
