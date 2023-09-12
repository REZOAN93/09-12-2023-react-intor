
const DetailsBottle = ({bottle,handleAddToCart}) => {
    const{id,category,name,seller,price,stock,ratings,img,shipping,quantity}=bottle
    return (
        <div id="bottleBox">
             <div className="body-text">
            <h3>{name}</h3>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="body-text">
            <p>{seller}</p>
            <p>${price}.00</p>
            </div>
            <button onClick={()=>handleAddToCart(bottle)} id="btn-purchase">Purchase</button>
        </div>
    );
};

export default DetailsBottle;