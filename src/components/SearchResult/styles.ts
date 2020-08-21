import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 15rem;
  background: white;

  padding: 1rem;

  border-radius: 1rem;

  cursor: pointer;

  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  transition: 0.2s;

  &:hover {
    -webkit-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.25);
  }

  & + div {
    margin-top: 1rem;
  }

  > img {
    height: 13rem;
    width: 13rem;

    border-radius: 1rem;
  }
`;
export const DescriptionContainer = styled.div`
  margin: 0 0.7rem;
  padding: 0 0.7rem;

  display: flex;
  flex-direction: column;

  border-right: 1px solid #cad2c5;

  > span {
    margin-top: 0.4rem;
    font-size: 0.9rem;
  }

  > strong {
    margin-top: 1.5rem;
    font-size: 0.9rem;
  }

  > p {
    overflow: hidden;
  }
`;

export const PriceContainer = styled.div`
  width: 20rem;
  height: 13rem;

  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  > span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  span {
    font-size: 0.8rem;
  }

  strong {
    font-size: 1.3rem;

    align-self: flex-end;
  }

  button {
    margin-top: 0.8rem;
    height: 2.5rem;
    color: #ebebeb;
    background: #4d6a6d;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 5px;

    transition: 0.2s;

    font-size: 0.8rem;

    padding: 0.8rem;

    &:hover {
      filter: opacity(0.8);
    }

    > svg {
      margin-left: 0.3rem;
      font-size: 1.5rem;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 1rem;
  > span {
    font-size: 0.9rem;
  }

  > div {
    background: #1ceb12;
    border: 1px solid #4d6a6d;
    width: 3.2rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 1.3rem;
    font-weight: 600;
  }
`;
