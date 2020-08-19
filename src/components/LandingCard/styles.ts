import styled from 'styled-components';

export const Container = styled.div`
  background: #cad2c5;

  width: 30vw;
  height: 30vw;
  border-radius: 50px;

  margin: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 1px 1px #4d6a6d;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4vw;
    color: #4d6a6d;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    width: 90vw;
    height: 20vh;
    border-radius: 20px;

    margin: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1.6rem;
    }
  }
`;
