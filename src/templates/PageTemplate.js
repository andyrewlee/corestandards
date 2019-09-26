import React from 'react';

import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const PageTemplate = ({ children }) => (
  <Layout>
    <Navbar />
    {children}
  </Layout>
);

export default PageTemplate;
