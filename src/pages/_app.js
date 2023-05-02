import '@/styles/hide-fullpage-credit.css';
import '../styles/globals.css'
import '../styles/fullpage-navigation.css';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
