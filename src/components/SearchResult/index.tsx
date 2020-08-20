import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

import {
  Container,
  DescriptionContainer,
  PriceContainer,
  RatingContainer,
} from './styles';

const SearchResult: React.FC = () => {
  return (
    <Container>
      <img
        src="https://cf.bstatic.com/images/hotel/max500/191/191793183.jpg"
        alt="Chacara"
      />
      <DescriptionContainer>
        <h2>Chácara Lailai Loulou</h2>
        <span>Socorro - SP - 2.5km do centro</span>
        <strong>3 Quartos + 1 Suíte</strong>
        <p>
          Chácara completa para até 10 pessoas. Contém píscina, campo de
          futebol, salão de jogos e área de churrasqueira.
        </p>
      </DescriptionContainer>

      <PriceContainer>
        <RatingContainer>
          <span>14 avaliações</span>
          <div>9.7</div>
        </RatingContainer>

        <span>
          <span>3 diárias, 2 adultos</span>
          <strong>R$ 1200</strong>
          <span>impostos e taxas incluídos</span>

          <button type="button">
            Ver disponibilidade
            <BsArrowRight />
          </button>
        </span>
      </PriceContainer>
    </Container>
  );
};

export default SearchResult;
