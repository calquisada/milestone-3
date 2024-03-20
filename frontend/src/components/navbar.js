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
            <li>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }

    let addListButton = null

    if (currentUser?.role === 'admin') {
        addListButton = (
            <li>
                <a href="#" onClick={() => history.push("/todolist/new")}>
                    Add List
                </a>
            </li>
        )
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">To Do List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => history.push("/")}>Home</Nav.Link>
                        <Nav.Link href="#" onClick={() => history.push("/todolist")}>Lists</Nav.Link>
                        <Nav.Link href="#" onClick={() => history.push("/")}>Login</Nav.Link>
                        <Nav.Link href="#" onClick={() => history.push("/signup")}>Signup</Nav.Link>
                        <Nav.Link>{addListButton}</Nav.Link>
                        <Nav.Link>{loginActions}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav>
        //     <ul>
        //         <li>
        //             <a href="#" onClick={() => history.push("/")}>
        //                 Home
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#" onClick={() => history.push("/todolist")}>
        //                 Lists
        //             </a>
        //         </li>
        //         {addListButton}
        //         {loginActions}
        //     </ul>
        // </nav>
    )
}

export default NavBar;