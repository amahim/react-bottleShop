import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../Utils/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])


    const handleCart = bottle =>{
        const newCart = [...cart,bottle]
        setCart(newCart);
        addToLS(bottle.id)
    }


    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    },[])
    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart,bottles)
            const savedCart = []
            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart)
            setCart(savedCart)

        }
    },[bottles])


    return (
        <div>
            <h4>Bottles Available {bottles.length}</h4>
            <Cart cart={cart}></Cart>
            <div className="Bottles">
            {
                bottles.map(bottle=> <Bottle
                bottle={bottle}
                key={bottle.id}
                handleCart = {handleCart}
                ></Bottle>)
            }
            </div>
        </div>
       
    );
};

export default Bottles;