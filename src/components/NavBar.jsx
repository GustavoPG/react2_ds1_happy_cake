import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar expand="md" className="text-white" bg="danger">
                <Container className="py-2">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                            <Link to="/contacto" className="text-white ms-3 text-decoration-none">📝 Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <span className="justify-content-end">
                        <Navbar.Brand className="text-white">Happy Cake 🎂</Navbar.Brand>
                    </span>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;