import styled from 'styled-components';

export const StyledServices = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-size: cover;
  gap: 32px;
  padding-bottom: 4rem;

  .container {
    width: 100%;
    height: auto;
    border: 1px solid #9B78DF;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    border-radius: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 24px;
    gap: 24px;
    color: #fff;

    img {
      width: 40px;
      height: 40px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


    }
    
    @media screen and (min-width: 768px) {
      img {
        width: 80px;
        height: 80px;
      }
      margin: 0 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 5px;

    .container {
      width: 700px;
      height: 240px;
      align-items: center;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Mina';
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;
  color: #ffffff;
  margin-bottom: 1.5rem;

  span {
    color: #0FFF97;
  }
  
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin: 0 20px;
  }
`;

export const Text = styled.span`
  font-family: 'Mina';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8125rem;
  color: #ffffff;
  text-align: center;

  h3 {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    font-family: 'Mina';
  }

  p {
    font-size: 16px;
    font-weight: normal;
    font-family: 'Mina';
    margin: 0;
    text-align: left;
  }

  @media screen and (max-width: 767px) {
    p {
      font-size: 14px;
      line-height: 22px;
    }

    h3 {
      font-size: 20px;
    }
  }
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 20px;
`;