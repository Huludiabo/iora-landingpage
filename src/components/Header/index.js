import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  padding: 4rem 0.2rem 4rem 4rem;
  background-color: #251525;
`;

export default function Header() {
    return (
        <StyledHeader id="header">
            <Link href="/">
                <Image src="/assets/images/logo.svg" alt="Iora Labs" width={235} height={56} />
            </Link>
        </StyledHeader>
    );
}