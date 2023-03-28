import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import{Navbar,Nav,Container}from 'react-bootstrap'
function MainNavbar() {
  return (
    <>
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">React-Router Dom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="home" className={({isActive})=>isActive?'active nav-link':'nav-link'}>Home</NavLink>
            <NavLink to="about"className='nav-link'>About</NavLink>
            <NavLink to="contact"className='nav-link'>Contact</NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default MainNavbar
