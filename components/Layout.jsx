import React from 'react';

// components
import Header from './Header';

/* everyhting else will be rendered below the header when wrapped in Layout */
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
