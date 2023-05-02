import styled from 'styled-components';

export const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #251525;
  padding: 4rem 0;

  h1 {
    font-family: 'Mina';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 1.5rem;

    span {
        color: #0FFF97;
      }
  }

  h3 {
    font-family: 'Mina';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 3rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
  }

  a:hover {
    background-color: #9b78df;
    transition: background-color 0.3s ease-in-out;
  }

  img {
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
      line-height: 2rem;
    }

    h3 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const Buttons = styled.a`
  width: 325px;
  height: 90px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Mina';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  color: #5C6BC0;
  padding: 2rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #9b78df;
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 72px;
    font-size: 1.25rem;
    padding: 1rem;
  }
}
`;