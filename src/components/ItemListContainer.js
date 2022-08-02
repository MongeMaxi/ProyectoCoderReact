import { ItemCount } from "./ItemCount"

const ItemListContainer = (greeting) => {
    console.log(greeting)
    console.log(greeting.nombre)
    return (
        <>
            <p>Bienvenido {greeting.nombre}</p>
            {<ItemCount initial={1} stock={5} onAdd={() => { }} />}
        </>
    )
}

export default ItemListContainer