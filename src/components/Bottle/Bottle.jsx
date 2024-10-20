import './Bottle.css'

const Bottle = ({bottle , handleCart}) => {
    const {name,img,price}= bottle;
    return (
        <div className="Bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h4>Price: {price} $</h4>
            <button onClick={()=>handleCart(bottle)}>Buy now</button>
        </div>
    );
};

export default Bottle;