import Script from 'next/script';

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-LVVW4QXM8T"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LVVW4QXM8T');
        `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
