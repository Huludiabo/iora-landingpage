// src/components/Knowledge/styles.js
import styled from 'styled-components';

export const StyledKnowledgeBase = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 100%;
    max-width: 800px;
    height: auto;
    background-color: rgba(72, 7, 72, 0.9);
    border: 5px solid #0fff97;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 24px;

    img {
      width: 60px;
      height: 60px;
    }

    h2 {
      font-family: 'Mina';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      color: #FFFFFF;
      margin-bottom: 16px;
      text-align: center;
    }

    p {
      font-family: 'Mina';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
      margin: 0;
      text-align: center;
    }

    @media screen and (max-width: 767px) {
        max-width: 500px;

        p {
          font-size: 14px;
          line-height: 22px;
        }
    
        h2 {
          font-size: 20px;
        }
      }
  }

  @media screen and (max-width: 767px) {
    .card {
        width: 90%;
    }
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;

  svg {
    color: #ffffff;
    font-size: 28px;
  }
`;