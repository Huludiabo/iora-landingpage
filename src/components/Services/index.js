// src/components/Services/index.js
import Image from 'next/image';
import { StyledSectionServices } from '@/styles/sections';
import { Title, StyledServices, Text, Container} from './styles';

export default function Services() {
  return (
    <StyledSectionServices backgroundColor="#251525" fullHeight id="services">
      <StyledServices>
        <Title>Services</Title>
        <div className="container">
          <Image
            src="/assets/images/icons/setting.svg"
            alt="Custom Blockchain Development"
            width={80}
            height={80}
          />
          <Text>
            <h3>Custom Blockchain Development</h3>
            <p>Tailor-made Blockchain Solutions for Your Unique Requirements. Our team of experts will work closely with you to design, develop, and implement a custom blockchain solution that meets your specific business needs.</p>
          </Text>
        </div>

        <div className="container">
          <Image
            src="/assets/images/icons/smartcontract.svg"
            alt="Smart Contract Development"
            width={80}
            height={80}
          />
          <Text>
            <h3>Smart Contract Development</h3>
            <p>We offer robust and secure smart contract development services to help streamline your business processes and improve efficiency.</p>
          </Text>
        </div>

        <div className="container">
          <Image
            src="/assets/images/icons/dapps.svg"
            alt="Decentralized Applications (DApps)"
            width={80}
            height={80}
          />
          <Text>
            <h3>Decentralized Applications (DApps)</h3>
            <p>Our team specializes in building high-performance, user-friendly DApps that leverage the power of blockchain to create new opportunities for your business.</p>
          </Text>
        </div>

        <div className="container">
          <Image
            src="/assets/images/icons/learning.svg"
            alt="Blockchain Learning & Courses"
            width={80}
            height={80}
          />
          <Text>
            <h3>Blockchain Learning & Courses</h3>
            <p>Expand your knowledge with our comprehensive blockchain courses, designed for various skill levels. Stay ahead in the rapidly-evolving world of blockchain technology and gain a competitive edge with our expert-led training programs.</p>
          </Text>
        </div >
      </StyledServices >
    </StyledSectionServices >
  );
}