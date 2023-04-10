import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const narbarStyle = {
  backgroundColor: '#ECFFFF',
};

const Header = ({ title }) => {
  return (
    <Navbar style={narbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '16rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
