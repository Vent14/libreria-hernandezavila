import './item.css';
import React from 'react';

export const Item = ({info}) => {
    return (
        <div>
        <a className='libro'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>
        </div>
    )
}

export default Item