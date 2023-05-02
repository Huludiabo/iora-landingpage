// src/components/Knowledge/index.js
import Image from 'next/image';
import { StyledSectionKnowledge } from '@/styles/sections';
import { StyledKnowledgeBase, StyledIcons } from './styles';
import { FaYoutube, FaMedium } from 'react-icons/fa';

export default function KnowledgeBase() {
  return (
    <StyledSectionKnowledge backgroundColor="#251525" fullHeight id="knowledge">
      <StyledKnowledgeBase>
        <div className="card">
          <Image
            src="/assets/images/icons/book.svg"
            alt="Stay Ahead with Our Comprehensive Blockchain Knowledge Base"
            width={80}
            height={80}
          />
          <div>
            <h2>Stay Ahead with Our Comprehensive Blockchain Knowledge Base</h2>
            <p>We believe in the power of knowledge sharing. Explore our extensive library of resources, including articles, case studies, whitepapers, and webinars, to deepen your understanding of blockchain technology and its potential impact on your industry.</p>
            <StyledIcons>
              <FaYoutube size={40} />
              <FaMedium size={40} />
            </StyledIcons>
          </div>
        </div>
      </StyledKnowledgeBase>
    </StyledSectionKnowledge>
  );
}