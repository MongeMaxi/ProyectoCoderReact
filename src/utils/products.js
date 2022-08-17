import BuzoDeportivo from "../img/BuzoDeportivo.JPG"
import ChombaDeportiva from "../img/ChombaDeportiva.JPG"
import HoodieOversize from "../img/HoodieOversize.JPG"
import RemeraOversize from "../img/RemeraOversize.JPG"

export const products=[
    {
        id:1,
        image : RemeraOversize,
        product: "Remera Oversize",
        category:"Remeras",
        price:1500,
        stock: 50,
        initial: 1,
        description: "Remera oversize confeccionada en algodon pesado de excelente calidad",
        config:{
            color: ['rojo','azul','verde','negro','blanco'],
        }
    },
    {
        id:2,
        image : ChombaDeportiva,
        product: "Chomba deportiva",
        category:"Remeras",
        price:2000,
        stock: 50,
        initial: 1,
        description:"Chomba deportiva confeccionada en tela deportiva liviana, absorvente y elastica",
        config:{
            color: ['rojo','azul','verde','negro','blanco'],
        }
    },
    {
        id:3,
        image : HoodieOversize,
        product: "Oversize Hoodie",
        category:"Buzos",
        price:3000,
        stock: 50,
        initial: 1,
        description:"Buzo estilo canguro, estilo oversize, confeccionado en algodon y con interior frisado",
        config:{
            color: ['rojo','azul','verde','negro','blanco'],
        }
    },
    {
        id:4,
        image : BuzoDeportivo,
        product: "Buzo deportivo",
        category:"Buzos",
        price:2500,
        stock: 50,
        initial: 1,
        description:"Buzo sin capucha confeccionado en algodon con interior frisado",
        config:{
            color: ['rojo','azul','verde','negro','blanco'],
        }
    },
    
]