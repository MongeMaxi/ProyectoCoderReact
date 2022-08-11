import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {ItemDetail}  from "./ItemDetail";


const Item = ({ product }) => {

    console.log(product)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                <Card.Title>{product.product}</Card.Title>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                <Card.Text>
                    Stock: {product.stock}
                </Card.Text>
                <Button variant="primary">Agregar al Carrito</Button>
                <ItemDetail/>
            </Card.Body>
            
        </Card> 
    )
}

export { Item }