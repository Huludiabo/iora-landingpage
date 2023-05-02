import React, { useRef } from 'react';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Knowledge from '@/components/Knowledge';
import ReactFullpage from '@fullpage/react-fullpage';
import Base from '@/components/Base';
import Contact from '@/components/Contact';

const FullPageSections = () => {
  const fullpageRef = useRef(null);

  return (
    <ReactFullpage
      scrollOverflow={true}
      navigation={true}
      navigationPosition="right"
      ref={fullpageRef}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper ref={fullpageRef}>
            <div className="section">
              <Header />
              <Hero fullpageApi={fullpageApi} />
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPageSections;
