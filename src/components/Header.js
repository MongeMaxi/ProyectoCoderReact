import { Container, Button } from "react-bootstrap"
import CartWidget from "./CartWidget"
import Nav from "./Nav"


function Header() {
    return (
        <Container>
            <h1 className="titulo">Ireland indumentaria</h1>
            <CartWidget />
            <Nav />
        </Container>
    )
}

export default Header