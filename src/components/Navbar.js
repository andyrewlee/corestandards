import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const Navbar = () => (
  <>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/lessons/">Lessons</StyledLink>
    <StyledLink to="/certifications/">Certifications</StyledLink>
    <StyledLink to="/about/">About</StyledLink>
  </>
);

export default Navbar;
