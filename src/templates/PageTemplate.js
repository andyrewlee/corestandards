import React from 'react';
import Navbar from '../components/Navbar';

const PageTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default PageTemplate;
