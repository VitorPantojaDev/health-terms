import { Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navbar() {
    return (
        <BsNavbar bg="light" expand="lg" className="mb-3">
            <div className="container">
                <BsNavbar.Brand>Health Terms</BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </BsNavbar.Collapse>
            </div>
        </BsNavbar>
    );
}
