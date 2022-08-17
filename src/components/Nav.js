import React from "react";
import { Link, NavLink } from "react-router-dom"

const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <NavLink to="categoria/Remeras">Remeras</NavLink>
        <NavLink to="categoria/Buzos">Buzos</NavLink>
        <NavLink to="Carrito">
          <span class="header__image material-symbols-outlined">
            shopping_cart
          </span>
        </NavLink>
      </nav>
    )
  } else {
    return (
      <nav>
        <NavLink to="#">link footer</NavLink>
        <NavLink to="#">link footer</NavLink>
        <NavLink to="#">link footer</NavLink>
      </nav>
    )
  }
}


export default Nav