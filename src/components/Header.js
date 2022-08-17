import React from "react";
import { Container, Button } from "react-bootstrap"
import CartWidget from "./CartWidget"
import Nav from "./Nav"
import {Link} from "react-router-dom"


const Header = ({ contador }) => {
    return (
        <Container>
            <header class="header">
                <Link to="/">
                <h1 className="header__titulo">Ireland indumentaria</h1>
                </Link>
                <Nav type="header"/>
            </header>
            
        </Container>
    )
}

export default Header