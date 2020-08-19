import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 2rem 0 2rem;

  > span {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    color: #4d6a6d;

    > h1 {
      margin: 0;
    }

    > p {
      margin-left: 1rem;
      margin-bottom: 0.2rem;
    }
  }

  @media (max-width: 500px) {
    margin: 1rem 1rem 0 1rem;

    > span {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: #4d6a6d;

      > h1 {
        font-size: 1.6rem;
      }

      > p {
        margin-left: 1rem;
        margin-bottom: 0.2rem;
      }
    }
  }
`;

export const FilterContainer = styled.div`
  height: 62vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 1rem 2rem 1rem 2rem;

  flex-wrap: wrap;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const ButtonContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  button {
    align-self: flex-end;
    width: 20vw;
    min-width: 6rem;
    max-width: 14rem;
    height: 3rem;
    color: #ebebeb;
    background: #4d6a6d;

    border: 0;
    border-radius: 10px;

    transition: 0.4s;
  }

  button:hover {
    filter: opacity(0.8);
  }
`;
