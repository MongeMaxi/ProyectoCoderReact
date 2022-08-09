import React from "react";

const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <a href="#">catalogo</a>
        <a href="#">sobre nosotros</a>
        <a href="#">FAQ</a>
      </nav>
    )
  } else {
    return (
      <nav>
        <a href="#">link footer</a>
        <a href="#">link footer</a>
        <a href="#">link footer</a>
      </nav>
    )
  }
}


export default Nav