import React, {useState, useEffect} from "react";

import Title from "../Title";
import ItemCount from "./ItemCount"; 
import ItemList from "./ItemList";
import Item from "./Item";



const libro = [
    { id: 1, image:"https://m.media-amazon.com/images/I/613iyqY5DqL.jpg", title:"Momo"},
    { id: 2, Image:"https://m.media-amazon.com/images/P/B00JCGCWBI.01._SCLZZZZZZZ_SX500_.jpg", title:"Game of thrones"},
    { id: 3, Image:"https://m.media-amazon.com/images/I/51AOsVIXgqL._SY346_.jpg", title:"Tratados morales"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(libro);
            }, 3000);
        });
        getData.them(res => setData(res)); 


    }, [])

    const onAdd = (quantify) => {
        console.log = ('Compraste $(quantify) unidades');
    }


    return (
        <>
            <Title greeting="Libros"/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
            <Item />
        </>
    );
}

export default ItemListContainer;