
const Cart = ({cart,handleRemoveItem}) => {
    console.log(cart)
    return (
        <div>
            <div id="cart-details">
            <p>{cart.name}</p>
            <button onClick={()=>handleRemoveItem(cart.id)}>Removed</button>
            </div>
        </div>
    );
};

export default Cart;