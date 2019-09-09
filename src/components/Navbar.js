import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const StyledDiv = styled.div`
  margin-bottom: 1rem;
`;

const Navbar = () => (
  <StyledDiv>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/lessons/">Lessons</StyledLink>
    <StyledLink to="/about/">About</StyledLink>
    <StyledLink to="/contact/">Contact</StyledLink>
  </StyledDiv>
);

export default Navbar;
