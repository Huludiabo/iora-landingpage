// src/pages/bio_url.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Loading from '@/components/Loading';
import LinksList from '@/components/LinkList';
import Header from '@/components/Header';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function BioUrl() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const url = new URL(window.location.href);
        const source = url.searchParams.get('utm_source');
        const medium = url.searchParams.get('utm_medium');
        const campaign = url.searchParams.get('utm_campaign');
    
        if (source || medium || campaign) {
            trackEvent('Acquisition', 'Source', source || 'unknown');
            trackEvent('Acquisition', 'Medium', medium || 'unknown');
            trackEvent('Acquisition', 'Campaign', campaign || 'unknown');
        }
    
        setIsMounted(true);
    }, []);
    

    const links = [
        { label: 'Livro: Como Sobreviver e Ganhar Dinheiro em um Mundo Web3', url: 'https://a.co/d/6C6cUZs' },
        { label: 'Telegram', url: 'https://t.me/+gFCiQ27KTWI2MmEx', icon: <FaYoutube /> },
        { label: 'Youtube', url: 'https://www.youtube.com/@ioralabs', icon: <FaYoutube /> },
        { label: 'Instagram', url: 'https://www.instagram.com/_pemagalhaes_/', icon: <FaInstagram /> },
        { label: 'Twitter', url: 'https://twitter.com/pemagalhaesrj', icon: <FaTwitter /> },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pemagalhaes/', icon: <FaLinkedin /> },
        { label: 'Website', url: 'https://ioralabs.com/' },
    ];

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
                {isMounted ?
                    <>
                        <Header isCentered />
                        <div className="youtube-video-container">
                            <iframe width="414" height="235"
                            src="https://www.youtube.com/embed/l8rddXQTcsI?controls=0"
                            title="Algo está para acontecer"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <LinksList links={links} />
                    </>
                    : <Loading />}
            </main>
        </div>
    );
}
