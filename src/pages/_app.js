import { useEffect, useState } from 'react';
import '@/styles/hide-fullpage-credit.css';
import '../styles/globals.css'
import '../styles/fullpage-navigation.css';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import GoogleAnalytics from '../utils/googleAnalytics';
import Loading from '../components/Loading';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loading />;

  return (
    <>
      <GoogleAnalytics />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
