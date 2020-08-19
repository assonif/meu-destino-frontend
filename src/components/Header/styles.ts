import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.6rem;

  @media (max-width: 500px) {
    flex-direction: column;
    position: relative;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > a {
    color: #4d6a6d;
    text-decoration: none;

    margin-right: 1rem;

    transition: 0.2s;
  }

  > a:hover {
    filter: opacity(0.6);
  }

  > button {
    width: 15vw;
    min-width: 6rem;
    max-width: 11.5rem;
    height: 2.5rem;
    color: #4d6a6d;
    background: transparent;

    border: 1px solid #4d6a6d;
    border-radius: 3.1rem;

    transition: 0.4s;
  }

  > button:hover {
    color: #ebebeb;
    background: #4d6a6d;

    box-shadow: 1rem;
  }

  @media (max-width: 500px) {
    margin-top: 0.6rem;
  }
`;
