import React, { useState } from 'react';

import { Container } from './styles';

interface filterItemProps {
  title: string;
}

const FilterItem: React.FC<filterItemProps> = ({ title }) => {
  const [select, setSelect] = useState(false);

  const alternateSelect = () => {
    if (select) {
      setSelect(false);
    } else {
      setSelect(true);
    }
  };

  return (
    <Container onClick={() => alternateSelect()} selected={select}>
      {title}
    </Container>
  );
};

export default FilterItem;
