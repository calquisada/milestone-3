import { useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = ''

    if (currentUser) {
        loginActions = (
            <ul>
                <li>
                    Logged in as {currentUser.firstName} {currentUser.lastName}
                </li>
            </ul>
        )
    }

    let logoutButton = ""
    if (currentUser) {
        logoutButton = (
            <div>
                <a href="/#" onClick={() => window.location.reload()}>LogOut</a>
            </div>
        )
    }

    return (
        <Navbar expand="lg" className='nav' >
            <Container>
                <Navbar.Brand>To Do List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => history.push("/")}>Login</Nav.Link>
                        <Nav.Link href="#" onClick={() => history.push("/signup")}>Signup</Nav.Link>
                        <Nav.Link href="#" onClick={() => history.push("/todo")}>Lists</Nav.Link>
                        <Nav.Link href="#" onClick={() => history.push("/todo/new")}>Add List</Nav.Link>
                        <Nav.Link>{loginActions}</Nav.Link>
                        <Nav.Link>{logoutButton}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;