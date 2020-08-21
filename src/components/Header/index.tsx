import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Actions } from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../../assets/logo.png');

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Meu destino" />
      </Link>
      <Actions>
        <Link to="login">Entrar</Link>
        <button type="button">Anunciar</button>
      </Actions>
    </Container>
  );
};

export default Header;
