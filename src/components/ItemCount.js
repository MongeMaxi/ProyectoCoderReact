import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const aumentar = () => count < stock && setCount(count + 1)
    const disminuir = () => count > initial && setCount(count - 1)

    return (
        <div>
            <button onClick={aumentar}>+</button>
            <p>{count}</p>
            <button onClick={disminuir}>-</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export { ItemCount }