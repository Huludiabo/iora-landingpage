// src/components/StyledSection.js
import styled from 'styled-components';

export const StyledSectionHeader = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  background-color: ${(props) => props.backgroundColor};
`;

export const StyledSectionServices = styled.div`
  padding: 2rem;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  background-color: ${(props) => props.backgroundColor};
  background-image: url('/assets/images/features_bg.svg');
  background-repeat: no-repeat;
  background-position: center;
`;
export const StyledSectionBase = styled.div`
  min-height: 100vh;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  background-color: ${(props) => props.backgroundColor};
  background-image: url('/assets/images/office_craft_bg.png');
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledSectionKnowledge = styled.div`
  min-height: 100vh;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  background-color: ${(props) => props.backgroundColor};
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    align-items:center;
  }
`;

export const StyledSectionContact = styled.div`
  min-height: 100vh;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  background-color: ${(props) => props.backgroundColor};
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

export const StyledSectionLinkTree = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 514px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  background-color: ${(props) => props.backgroundColor};
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items:center;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.backgroundColor};
    margin: auto;
  }
`;
