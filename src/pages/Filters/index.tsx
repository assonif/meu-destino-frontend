import React from 'react';

import { FiSearch } from 'react-icons/fi';

import FilterItem from '../../components/FilterItem';

import { Container, FilterContainer, ButtonContainer } from './styles';

const Filters: React.FC = () => {
  const data = [
    {
      id: 1,
      title: 'Praia',
    },
    {
      id: 2,
      title: 'Campo',
    },
    {
      id: 3,
      title: 'Lago',
    },
    {
      id: 4,
      title: 'Curtir com amigos',
    },
    {
      id: 5,
      title: 'Tranquilidade pra família',
    },
    {
      id: 6,
      title: 'Pescar tubarão',
    },
    {
      id: 7,
      title: 'Skate',
    },
    {
      id: 8,
      title: 'Surf',
    },
    {
      id: 9,
      title: 'Casa compartilhada',
    },
    {
      id: 10,
      title: 'Casa privativa',
    },
    {
      id: 11,
      title: 'Local com host',
    },
    {
      id: 12,
      title: 'Chácara',
    },
    {
      id: 13,
      title: 'Pousada',
    },
    {
      id: 14,
      title: 'Hotel',
    },
    {
      id: 15,
      title: 'Em baixo da ponte',
    },
    {
      id: 16,
      title: 'Dormir na barraca em cima do pico',
    },
    {
      id: 17,
      title: 'Hopi Hari',
    },
    {
      id: 18,
      title: 'Qualquer coisa',
    },
    {
      id: 19,
      title: 'Sim',
    },
    {
      id: 20,
      title: 'Conhecer o Toni Ramos',
    },
    {
      id: 21,
      title: 'Andar de caminhão',
    },
    {
      id: 22,
      title: 'Bater laje',
    },
    {
      id: 23,
      title: 'Nadar',
    },
    {
      id: 24,
      title: 'São Silvestre',
    },
    {
      id: 25,
      title: 'Maratona',
    },
    {
      id: 26,
      title: 'Neymar Jr campeão',
    },
    {
      id: 27,
      title: 'Teste',
    },
    {
      id: 28,
      title: 'Champions League vai dar PSG',
    },
    {
      id: 29,
      title: 'Bola de ouro é Neymar',
    },
    {
      id: 31,
      title: 'Praia',
    },
    {
      id: 32,
      title: 'Campo',
    },
    {
      id: 33,
      title: 'Lago',
    },
    {
      id: 34,
      title: 'Curtir com amigos',
    },
    {
      id: 35,
      title: 'Tranquilidade pra família',
    },
    {
      id: 36,
      title: 'Pescar tubarão',
    },
    {
      id: 37,
      title: 'Skate',
    },
    {
      id: 38,
      title: 'Surf',
    },
    {
      id: 39,
      title: 'Casa compartilhada',
    },
    {
      id: 310,
      title: 'Casa privativa',
    },
    {
      id: 311,
      title: 'Local com host',
    },
    {
      id: 312,
      title: 'Chácara',
    },
    {
      id: 313,
      title: 'Pousada',
    },
    {
      id: 314,
      title: 'Hotel',
    },
    {
      id: 315,
      title: 'Em baixo da ponte',
    },
    {
      id: 316,
      title: 'Dormir na barraca em cima do pico',
    },
    {
      id: 317,
      title: 'Hopi Hari',
    },
    {
      id: 318,
      title: 'Qualquer coisa',
    },
    {
      id: 319,
      title: 'Sim',
    },
    {
      id: 320,
      title: 'Conhecer o Toni Ramos',
    },
    {
      id: 321,
      title: 'Andar de caminhão',
    },
    {
      id: 232,
      title: 'Bater laje',
    },
    {
      id: 233,
      title: 'Nadar',
    },
    {
      id: 324,
      title: 'São Silvestre',
    },
    {
      id: 325,
      title: 'Maratona',
    },
    {
      id: 236,
      title: 'Neymar Jr campeão',
    },
    {
      id: 327,
      title: 'Teste',
    },
    {
      id: 238,
      title: 'Champions League vai dar PSG',
    },
    {
      id: 293,
      title: 'Bola de ouro é Neymar',
    },
  ];
  return (
    <Container>
      <span>
        <h1>O QUE VOCÊ PROCURA?</h1>
        <p>Selecione tudo o que quiser</p>
      </span>
      <FilterContainer>
        {data.map(filter => (
          <FilterItem key={filter.id} title={filter.title} />
        ))}
      </FilterContainer>
      <ButtonContainer>
        <button type="button">
          <FiSearch />
          Buscar
        </button>
      </ButtonContainer>
    </Container>
  );
};

export default Filters;
