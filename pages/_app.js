import React from 'react';

// components
import { Layout } from '../components';

// styles
import '../styles/globals.scss';

// for darkmode
import { ThemeProvider } from 'next-themes';

/* everyhting else will be rendered below the header when wrapped in Layout */

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
