import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Connect from "../../connectors/Connect"
import { Link } from 'react-router-dom';
import Disconnect from '../../connectors/Disconnect';
import { useWeb3React } from '@web3-react/core'
import {navBarImage} from "../../links/Links"

import "./Navbar.css"

const NavBar = () => {
  const { active } = useWeb3React();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand><Link to="/" className='nav-link-mode'>
          <img
            alt=""
            src={navBarImage}
            width="180"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/" className='sub-nav'>Home</Link></Nav.Link>
            <Nav.Link><Link to="trade" className='sub-nav'>Trade</Link></Nav.Link>
            <Nav.Link><Link to="add-liquidity" className='sub-nav'>Add</Link></Nav.Link>
            <Nav.Link><Link to="remove-liquidity" className='sub-nav'>Remove</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            {!active ? <Connect /> : <Disconnect />}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavBar };
