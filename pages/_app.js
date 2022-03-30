import React from 'react';

// components
import { Layout } from '../components';

// styles
import '../styles/globals.scss';

/* everyhting else will be rendered below the header when wrapped in Layout */

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
