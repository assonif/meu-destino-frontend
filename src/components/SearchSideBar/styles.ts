import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.6rem;
  max-height: 30rem;
  width: 26vw;
  max-width: 17.5rem;
  background: #cad2c5;

  border-radius: 1rem;

  > h2 {
    font-weight: 500;
    margin-bottom: 0.6rem;
  }

  > span {
    font-size: 0.8rem;
  }

  > button {
    margin-top: 1.7rem;
    width: 100%;
    height: 3rem;
    color: #ebebeb;
    background: #4d6a6d;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 3px;

    transition: 0.4s;

    > svg {
      margin-right: 0.5rem;
      margin-top: 0.1rem;
    }
  }

  button:hover {
    filter: opacity(0.8);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  > input {
    width: 100%;
    height: 2.4rem;
    border: none;

    border-radius: 5px;
  }

  > span {
    font-size: 0.8rem;
  }

  & + & {
    margin-top: 0.5rem;
  }
`;

export const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.6rem;

  input {
    height: 2.4rem;
    border: none;

    border-radius: 3px;
  }

  > div {
    display: flex;
    flex-direction: row;

    width: 100%;

    margin-top: 0.3rem;
    > input {
      width: 50%;
    }

    > input:first-child {
      margin-right: 0.15rem;
    }
    > input + input {
      margin-left: 0.15rem;
    }
  }
`;
