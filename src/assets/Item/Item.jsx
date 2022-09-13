import './item.css';
import React from 'react';

const Item = (info) => {
    return (
        <a href="" className='libro'>
            <img src={info.image} alt="" />
            <p>{info.tittle}</p>
        </a>

    );
}

export default Item;