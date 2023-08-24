// src/components/Contact/styles.js
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

export const StyledInput = styled.input.attrs({ refKey: 'ref' })`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #0FFF97;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  color: #251525;
  font-weight: 600;

  &:focus {
    border-color: #9b78df;
  }

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const StyledTextArea = styled.textarea.attrs({ refKey: 'ref' })`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #0FFF97;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s ease-in-out;
  color: #b5b5b5;

  &:focus {
    border-color: #9b78df;
    color: #b5b5b5;
  }

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #0FFF97;
  color: #251525;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-weight: 600;
  margin-top: 20px;

  &:hover {
    background-color: #9b78df;
  }

  &[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;