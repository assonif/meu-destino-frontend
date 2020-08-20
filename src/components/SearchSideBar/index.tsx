import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { Container, InputContainer, PeopleContainer } from './styles';

const SearchSideBar: React.FC = () => {
  return (
    <Container>
      <h2>Pesquisar</h2>

      <InputContainer>
        <span>Destino</span>
        <input type="text" />
      </InputContainer>

      <InputContainer>
        <span>Data de entrada</span>
        <input type="text" />
      </InputContainer>

      <InputContainer>
        <span>Data de saída</span>
        <input type="text" />
      </InputContainer>
      <span>2 diárias</span>

      <PeopleContainer>
        <input type="text" />
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </PeopleContainer>

      <button type="button">
        <FiSearch />
        Pesquisar
      </button>
    </Container>
  );
};

export default SearchSideBar;
