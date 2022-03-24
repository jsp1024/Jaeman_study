import './App.css';
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="background">
            <div className="title">
                <h2>Shoes Sale</h2>
                <p>goooood</p>
                <Button variant="primary">굳굳</Button>{' '}
            </div>
        </div>
    </div>
  );
}

export default App;
