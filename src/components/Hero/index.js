import { StyledSectionHeader } from '@/styles/sections';
import Image from 'next/image';
import { Container, Title, Subtitle, Button, ButtonSection } from './styles';

export default function Hero({ fullpageApi }) {
  const handleButtonClick = () => {
    fullpageApi.moveTo(5); // move to the Contact section (index 5)
  };

  return (
    <StyledSectionHeader backgroundColor="#251525" fullHeight id="hero">
      <Container>
        <div>
          <Title>Blockchain Services <br /><span>Beyond Imagination</span></Title>
          <Subtitle>
            It&apos;s like a dream – our comprehensive business and technology expertise combined with fast,
            secure, and professional services.
          </Subtitle>
          <ButtonSection>
            <Button onClick={handleButtonClick}>Get in Touch</Button>
          </ButtonSection>
        </div>
        <div className="flex justify-start items-start">
          <Image src="/assets/images/pyramid.svg" alt="Pyramid" width={820} height={700} />
        </div>
      </Container>
    </StyledSectionHeader>
  );
}
