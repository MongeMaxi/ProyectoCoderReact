import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {ItemDetail}  from "./ItemDetail";
import { NavLink } from "react-router-dom"


const Item = ({ product }) => {

    console.log(product)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                <Card.Title className="Item_title">{product.product}</Card.Title>
                <Card.Text className="Item_price">
                    ${product.price}
                </Card.Text>
                <Card.Text>
                    Stock: {product.stock}
                </Card.Text>
                <Button variant="primary">Agregar al Carrito</Button>
                <NavLink to={`/detalle/${product.description}`}>ver detalle</NavLink>
                <ItemDetail/>
            </Card.Body>
            
        </Card> 
    )
}

export { Item }