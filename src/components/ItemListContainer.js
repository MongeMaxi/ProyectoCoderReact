import React from "react";
import { ItemCount } from "./ItemCount"
import { ItemList } from "./ItemList"
import {products} from "../utils/products"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"


const ItemListContainer = (greeting) => {

    const[listProduct, setListProduct]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        setLoading(true)
        customFetch(products)
            .then (res=>{
                setLoading(false)
                setListProduct(res)
            })
    },[])

    return (
        <>
            <p>Bienvenido {greeting.nombre}</p>
            {!loading
            ?
            <ItemList listProduct={listProduct}/>
            :
            <p>Cargando...</p>
            }
            {/* {<ItemCount initial={1} stock={5} onAdd={() => { }} />} */}
        </>
    )
}

export default ItemListContainer