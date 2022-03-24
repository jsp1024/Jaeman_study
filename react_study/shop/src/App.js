import './App.css';
import Data from "./data";
import Detail from "./Detail"
import {Link, Route, Switch} from 'react-router-dom'
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useState} from "react";


function App() {
    let [shoes, shoes_change] = useState(Data);
    return (
        <div className="App">
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/detail/1">Detail</Nav.Link>
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
            <Route exact path="/">
                <div className="background">
                    <div className="title">
                        <h2>Shoes Sale</h2>
                        <p>goooood</p>
                        <Button variant="primary" size="lg">굳굳</Button>{' '}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            shoes.map((a, i) => {
                                return <ShoesCard shoes={shoes[i]} i={i} />
                            })
                        }
                    </div>
                </div>
            </Route>
            <Route path="/detail/:id">
                <Detail shoes={shoes} />
            </Route>
        </div>
    );
}

export default App;

function ShoesCard(props) {
    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content} & {props.shoes.price}</p>
        </div>
    )
}