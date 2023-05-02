// src/components/Hero/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 4rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Mina';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1.5rem;

  span {
    color: #0FFF97;
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;
    line-height: 4rem;
    text-align: left;
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Mina';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.8125rem;
    text-align: left;
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button`
background-color: #5fd855;
width: 180px;
height: 40px;
font-family: 'Mina';
font-style: normal;
font-weight: 700;
font-size: 0.875rem;
line-height: 1.5rem;
text-align: center;
color: #251525;
border: none;
border-radius: 0.25rem;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
  background-color: #50c24e;
}

@media screen and (min-width: 768px) {
  font-size: 1.125rem;
  line-height: 1.8125rem;
}
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;