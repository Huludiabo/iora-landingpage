// src/components/Base/styles.js
import styled from 'styled-components';
// src/components/Base/styles.js

export const StyledBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Mina';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 24px;
  }

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #ffffff;
    margin: 32px 0;
  }

  p {
    font-family: 'Mina';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    color: #FFFFFF;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 48px;
      line-height: 56px;
      margin-bottom: 48px;
    }

    hr {
      width: 784px;
      margin: 48px 0;
    }

    p {
      font-size: 24px;
      line-height: 40px;
    }
  }
`;

export const Text = styled.div`
  font-family: 'Mina';
  font-style: normal;
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 25px;
  padding: 24px 0;
  max-width: 800px;

  span {
    color: #0FFF97;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 48px 0;
  }
`;