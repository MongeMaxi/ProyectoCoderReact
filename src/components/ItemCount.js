import React from "react";

import { useState, useEffect } from 'react'
//useState: hook de estado
//useEffect : hook de efectos ("simula" los metodos del ciclo de vida de un componente) ej: useEffect(function,array?): array es un array de dependencias
/* useEffect(()=>{
        console.log("Pido todo a una API etc etc")
        setTimeout(()=>{
            console.log("Ya traje todo")
            setCount()
        },5000)
    },[]) */


const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    useEffect(()=>{
        console.log("Pido todo a una API etc etc")
        setTimeout(()=>{
            console.log("Ya traje todo")
            setCount(1)
        },2000)
    },[])

    const aumentar = () => count < stock && setCount(count + 1)
    const disminuir = () => count > initial && setCount(count - 1)

    const addToCart = () => { }

    return (
        <div>
            <p>El contador va: {count}</p>
            <button onClick={aumentar}>+</button>
            <button onClick={addToCart}>Agregar al carrito</button>
            <button onClick={disminuir}>-</button>
        </div>
    )
}

export { ItemCount }