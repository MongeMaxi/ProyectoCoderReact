import { Container, Button } from "react-bootstrap"
import CartWidget from "./CartWidget"
import Nav from "./Nav"


const Header = ({ contador }) => {
    return (
        <Container>
            <header class="header">
                <h1 className="header__titulo">Ireland indumentaria</h1>
                <CartWidget />
            </header>
            <Nav type="header"
            />
        </Container>
    )
}

export default Header