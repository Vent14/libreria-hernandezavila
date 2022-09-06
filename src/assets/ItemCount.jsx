import './ItemCount.css';

import React, {useState} from "react";

export const ItemCount = () =>
{ 
const [count, setCount] = useState(1);

    return(
        <div className="counter" >
            <button>-</button>
            <span>{count}</span>
            <button>+</button>
            <div>
                <button>Agregar Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;