import React, { useRef } from 'react';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Knowledge from '@/components/Knowledge';
import Base from '@/components/Base';
import Contact from '@/components/Contact';

const FullPageSections = () => {
  return (
    <>
      <div className="section">
        <Header isCentered={false} />
        <Hero />
      </div>
      <div className="section">
        <Services />
      </div>
      <div className="section">
        <Knowledge />
      </div>
      <div className="section">
        <Base />
      </div>
      <div className="section">
        <Contact />
      </div>
    </>
  );
};

export default FullPageSections;
