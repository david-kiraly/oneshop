import Layout from '../components/layout';
import '../components/layout/styles.css';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}