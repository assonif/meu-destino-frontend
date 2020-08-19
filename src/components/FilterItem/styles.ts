import styled, { css } from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 4rem;

  background: #cad2c5;
  padding: 0 1.6rem 0 1.6rem;
  margin: 0.3rem 0.6rem 0.3rem 0.6rem;

  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  cursor: pointer;

  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);

  transition: 0.2s;

  ${props =>
    props.selected &&
    css`
      background: #4d6a6d;
      color: white;
    `}

  @media (max-width: 500px) {
    padding: 0.6rem;
    height: 2rem;
    margin: 0.2rem 0.3rem;

    overflow: hidden;
  }
`;
