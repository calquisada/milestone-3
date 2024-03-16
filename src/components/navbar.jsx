import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">To Do List</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#signup">Signup</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Filler Name</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;