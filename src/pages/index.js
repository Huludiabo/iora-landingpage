// src/pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import FullPageSections from '@/components/FullPageSections';
import { NextSeo } from 'next-seo';
import Loading from '@/components/Loading';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <NextSeo
        title="ioralabs"
        description="We are a team of blockchain enthusiasts with a passion for innovation and a drive to make a difference. Our mission is to create cutting-edge blockchain solutions that help businesses achieve their goals and transform industries."
        canonical="https://ioralabs.com/"
        openGraph={{
          url: 'https://ioralabs.com/',
          title: 'ioralabs',
          description:
            'We are a team of blockchain enthusiasts with a passion for innovation and a drive to make a difference. Our mission is to create cutting-edge blockchain solutions that help businesses achieve their goals and transform industries.',
          images: [
            {
              url: 'https://ioralabs.com/assets/images/icons/iora.svg',
              width: 512,
              height: 512,
              alt: 'ioralabs',
            },
          ],
          site_name: 'ioralabs',
        }}
        twitter={{
          handle: '@ioralabs',
          site: '@ioralabs',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <title>ioralabs</title>
        <meta name="description" content="Iora Labs is a blockchain development company focused on building custom blockchain solutions for businesses of all sizes. Contact us today to discuss your project." />
        <link rel="icon" href="/assets/images/icons/iora.png" />
      </Head>

      <main>
        {isMounted ? <FullPageSections /> : <Loading />}
      </main>
    </div>
  );
}
