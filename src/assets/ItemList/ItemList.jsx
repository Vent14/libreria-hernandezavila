import Item from "../Item/Item"
import React from "react";

const ItemList = ({data}) => {
    return (
        <div>
        {data.map(libro => <Item key={libro.id} info={libro}/>)}
        </div>
    )
}

export default ItemList;