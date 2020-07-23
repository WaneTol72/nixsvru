import React, {Component} from 'react';
import {Navbar, Nav ,Container} from "react-bootstrap";
import logo from '../logo/server.webp';

class Header extends Component {

    render() {

        let project = () => window.innerWidth < 768 ? project = "" : project = " - Проект игровых серверов";

            return (
                <>
                    <Navbar fixed="top" collapseOnSelect expand="md"  id="nav" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top mr-2"
                                    alt="Logo"
                                /> Pheonix Project{project()}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#home">Главная</Nav.Link>
                                    <Nav.Link href="#donate">Донат</Nav.Link>
                                    <Nav.Link href="#ifr">Карты</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            );
        }
    }
export default Header;