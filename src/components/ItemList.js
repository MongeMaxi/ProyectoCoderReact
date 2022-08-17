import React from "react";
import { Item } from "./Item"

const ItemList =({listProduct})=>{

    console.log(listProduct)

    return(
        <section className="items">
            {listProduct.map(product=><Item key={product.id} product={product}/>)}
        </section>
    )
}

export {ItemList}