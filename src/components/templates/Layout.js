import Head from 'next/head';
import Navbar from './NavBar';
import Footer from './FooterTemplate';
import TheyTrustUs from './TheyTrustUs';
import Notifications from '../molecules/Notifications';

function Layout({ trustUs, pageTitle, children, notificationData }) {
  const title = pageTitle ? 'lorem | ' + pageTitle : 'lorem Online';
  const notification = notificationData
    ? {
        msg: 'test',
        type: 'success',
      }
    : null;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="noname yet" />
        <meta
          name="description"
          content="Google recommends website owners to keep their meta descriptions in between 150-160 characters"
        />
        <meta property="og:title" content={title} key={title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Notifications type={notification?.type}>
        {notification?.msg}
      </Notifications>
      <main>{children}</main>
      {trustUs ? <TheyTrustUs data={trustUs} /> : null}
      <Footer />
    </>
  );
}

export default Layout;
