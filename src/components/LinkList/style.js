import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const LinksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  span {
    padding: 8px;
  }
`;

export const LinkItem = styled.button`
  text-decoration: none;
  font-size: 20px;
  background-color: transparent;
  color: #1db954;
  display: flex;
  align-items: flex-start; 
  justify-content: space-evenly;
  padding: 1rem 2rem;
  border: 2px solid #1db954;
  border-radius: 10px;
  text-align: center;
  min-width: 250px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Mina', sans-serif;
  font-weight: 700;


  &:hover {
    background-color: #1db954;
    color: #fff;
  }
`;

export const FirstLinkItem = styled(LinkItem)`
  margin-top: 20px;
  animation: ${bounce} 2s infinite;
  background-color: #fff;
  font-size: 18px;
`;
