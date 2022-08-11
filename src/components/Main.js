import React from "react";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = ({ uno, dos, tres }) => {
    console.log(uno)
    console.log(dos)
    console.log(tres)
    return (
        <main>
            <h2>Home</h2>
            <ItemListContainer test={true} nombre="Maximiliano" />
            
        </main>
    )
}


export default Main