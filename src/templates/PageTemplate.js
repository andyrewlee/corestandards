import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const StyledDiv = styled.div`
  max-width: 480px;
`;

const PageTemplate = ({ children }) => (
  <StyledDiv>
    <Navbar />
    {children}
  </StyledDiv>
);

export default PageTemplate;
