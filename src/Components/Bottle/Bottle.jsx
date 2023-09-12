import { useEffect } from "react";
import { useState } from "react";
import { addToLocalStorage, getStoredCart, removedFromLocalStorage } from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";
import DetailsBottle from "../DetailsBottle";
import "./Bottle.css";

const Bottle = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("../../public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // Load cart from local storage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCartIds = getStoredCart();

      const savedCart = [];
      for (const id of storedCartIds) {
        const purchaseBottles = bottles.find((bottle) => bottle.id === id);
        if (purchaseBottles) {
          savedCart.push(purchaseBottles)
        }
      }
      setCart(savedCart)
    }
    
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newBottles = [...cart, bottle];
    setCart(newBottles);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveItem=(id)=>{
    const remainingCart=cart.filter(na=>na.id!==id)
    removedFromLocalStorage(id)
    setCart(remainingCart)
  }
  return (
    <div>
      <h1>Bottle:{bottles.length}</h1>
      <div id="contianer">
        <div id="bottlesContainer">
          {bottles.map((na) => (
            <DetailsBottle
              key={na.id}
              bottle={na}
              handleAddToCart={handleAddToCart}
            ></DetailsBottle>
          ))}
        </div>
        <div className="card-container">
          <h2>Purchased:{cart.length}</h2>
          {cart.map((na) => (
            <Cart cart={na} handleRemoveItem={handleRemoveItem}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottle;
