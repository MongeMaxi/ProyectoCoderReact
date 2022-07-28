const ItemListContainer = (greeting) => {
    console.log(greeting)
    console.log(greeting.nombre)
    return (
        <p>Bienvenido {greeting.nombre}</p>
    )
}

export default ItemListContainer