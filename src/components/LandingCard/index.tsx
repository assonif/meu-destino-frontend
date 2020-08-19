import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface LandingCardProps {
  children: ReactNode;
  route: string;
}

const LandingCard: React.FC<LandingCardProps> = ({ children, route }) => {
  return (
    <Container>
      <Link to={route}>
        <span>{children}</span>
      </Link>
    </Container>
  );
};

export default LandingCard;
