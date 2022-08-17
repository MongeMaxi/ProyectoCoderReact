import React from "react";
import ItemListContainer from "./ItemListContainer"
import {Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart";


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle" element={<ItemDetailContainer/>}/>
                <Route path="/Carrito" element={<Cart/>}/>
                <Route path="/categoria/:category" element={<ItemListContainer/>}/>
                
            </Routes>
        </main>
    )
}


export default Main