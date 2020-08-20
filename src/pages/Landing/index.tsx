import React from 'react';

import LandingCard from '../../components/LandingCard';

import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <LandingCard route="/search">
        <strong>JÁ SEI </strong>
        PRA ONDE
        <strong>EU VOU!</strong>
      </LandingCard>
      <LandingCard route="/filters">
        ACEITO
        <strong> SUGESTÕES </strong>
        DE DESTINOS!
      </LandingCard>
    </Container>
  );
};

export default Landing;
