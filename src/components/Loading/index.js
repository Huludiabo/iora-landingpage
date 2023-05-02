import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #251525;
  width: 100vw;

  svg {
    animation: ${spin} 2s linear infinite;
  }
`;

export default function Loading() {
    return (
        <StyledLoading>
            <Image src="/assets/images/icons/iora.svg" alt="Iora logo" width={64} height={64} />
        </StyledLoading>
    );
}
