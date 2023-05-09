// src/pages/bio_url.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Loading from '@/components/Loading';
import LinksList from '@/components/LinkList';
import Header from '@/components/Header';
import { FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';
import { StyledSectionLinkTree } from '@/styles/sections';
import { trackEvent } from '@/utils/gaTracking';

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
        { label: 'Consultoria: Agende uma reunião!', url: 'https://calendly.com/pedrosgmagalhaes' },
        { label: 'Telegram: Relatório diário de tokens e lançamentos', url: 'https://t.me/+gFCiQ27KTWI2MmEx', icon: <FaTelegram /> },
        { label: 'Youtube: Tutoriais de análise e desenvolvimento de dapps', url: 'https://www.youtube.com/@ioralabs', icon: <FaYoutube /> },
        { label: 'Instagram: Uso de blockchain e melhores práticas de segurança', url: 'https://www.instagram.com/_pemagalhaes_/', icon: <FaInstagram /> },
        { label: 'LinkedIn: Pedro Magalhães', url: 'https://www.linkedin.com/in/pemagalhaes/', icon: <FaLinkedin /> },
        { label: 'Website: Offical website from Iora Labs', url: 'https://ioralabs.com/' },
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div>
            <NextSeo
                title="ioralabs"
                description="Somos uma equipe de entusiastas de blockchain com paixão por inovação e determinação para fazer a diferença. Nossa missão é criar soluções de blockchain de ponta que ajudem as empresas a alcançar seus objetivos e transformar setores."
                canonical="https://ioralabs.com/"
                openGraph={{
                    url: 'https://ioralabs.com/',
                    title: 'ioralabs',
                    description:
                        'Somos uma equipe de entusiastas de blockchain com paixão por inovação e determinação para fazer a diferença. Nossa missão é criar soluções de blockchain de ponta que ajudem as empresas a alcançar seus objetivos e transformar setores.',
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
                <title>ioralabs - links úteis</title>
                <meta name="description" content="A Iora Labs é uma empresa de desenvolvimento de blockchain focada na criação de soluções personalizadas para empresas de todos os tamanhos. Entre em contato conosco hoje para discutir seu projeto." />
                <link rel="icon" href="/assets/images/icons/iora.png" />
            </Head>

            <main>
                {isMounted ?
                    <StyledSectionLinkTree backgroundColor="#251525">
                        <Header isCentered />
                        <></>
                        {/* <div className="youtube-video-container">
                            <iframe width="380" height="215"
                                src="https://www.youtube.com/embed/l8rddXQTcsI?controls=0"
                                title="Algo está para acontecer"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div> */}
                        <LinksList links={links} />
                    </StyledSectionLinkTree>
                    : <Loading />}
            </main>
        </div>
    );
}
