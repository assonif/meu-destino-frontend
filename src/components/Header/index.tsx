import React from 'react';

import { Container, Actions } from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../../assets/logo.png');

const Header: React.FC = () => {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Meu destino" />
      </a>
      <Actions>
        <a href="/">Entrar</a>
        <button type="button">Anunciar</button>
      </Actions>
    </Container>
  );
};

export default Header;
