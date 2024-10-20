import './cart.css'


const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart : {cart.length}</h4>
            <div className="cart">
                {cart.map(bottle => <img src={bottle.img}/>)}
            </div>
        </div>
    );
};

export default Cart;