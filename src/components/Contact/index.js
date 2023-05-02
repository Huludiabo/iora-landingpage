// src/components/Contact/index.js
import Image from 'next/image';
import { StyledSectionContact } from '@/styles/sections';
import { StyledContact, Buttons } from './styles';
import Link from 'next/link';

export default function Contact() {
  return (
    <StyledSectionContact backgroundColor="#251525" fullHeight id="contact">
      <StyledContact>
        <h1>Let&apos;s Build the Future <span>Together</span></h1>
        <h3>Get in touch with us to discuss your project and explore how we can help you succeed in the world of blockchain.</h3>
        <div className="button-container">
          <Link href="https://discord.gg/wjQAhe5qSB" target="_blank" rel="noopener noreferrer">
            <Buttons>
              <Image src="/assets/images/icons/discord.svg" width={40} height={40} alt="Discord" /> Open Discord
            </Buttons>
          </Link>
          <Link href="https://t.me/+Pdbe6ti-EE40ZmFh" target="_blank" rel="noopener noreferrer">
            <Buttons>
              <Image src="/assets/images/icons/telegram.svg" width={40} height={40} alt="Telegram" /> Open Telegram
            </Buttons>
          </Link>
        </div>
      </StyledContact>
    </StyledSectionContact>
  );
}
