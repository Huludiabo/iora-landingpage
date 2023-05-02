// src/components/Base/index.js
import Image from 'next/image';
import { StyledSectionBase } from '@/styles/sections';
import { StyledBase, Text } from './styles';

export default function Base() {
  return (
    <StyledSectionBase backgroundColor="#251525" fullHeight id="base">
      <StyledBase>
        <h1>Shaping the Future of Blockchain One Block at a Time</h1>
        <Image width={523} height={318} src="/assets/images/office_craft.png" alt="Office Craft" />
        <Text>
          Founded in 2022, <span>Iora Labs</span> is a team of dedicated professionals committed to building high-quality projects for Web 3.0. We believe in the transformative power of blockchain technology and are excited to help you make a lasting impact. Our team works remotely and only accepts invitations from metaverses or web3 networks, ensuring a forward-thinking approach to blockchain services.
        </Text>
        <hr />
        <Text>
          <span>Iora Processamento de Dados Ltda</span> CNPJ: 45.783.959/0001-89<br />
          Rodovia Jose Carlos Daux, 4150 - Complemento: Sala 401<br />
          Saco Grande - Florianópolis/SC - 88.032-005
        </Text>
      </StyledBase>
    </StyledSectionBase>
  );
}