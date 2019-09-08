import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const Navbar = () => (
  <div>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </div>
);

export default Navbar;
