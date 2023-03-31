import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const narbarStyle = {
  backgroundColor:'lightblue'
};

const Header = (props) => {
    return (
        <Navbar style={narbarStyle} variant="light">
          <Container>
            <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          </Container>
        </Navbar>
    )
};

export default Header;

