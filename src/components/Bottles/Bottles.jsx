import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const handleCart = bottle =>{
        console.log(bottle)
    }

    const [bottles,setBottles] = useState([])
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    },[])
    return (
        <div>
            <h4>Bottles Available here {bottles.length}</h4>
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