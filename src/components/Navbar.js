import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const StyledSpan = styled.span`
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
`;

const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;

  a {
    &:first-child {
      text-decoration: none;
    }
  }
`;

const Navbar = () => (
  <NavbarContent>
    <StyledLink to="/">
      <LogoContent>
        <StyledSpan>core</StyledSpan>
        <StyledSpan>standards</StyledSpan>
      </LogoContent>
    </StyledLink>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/lessons/">Lessons</StyledLink>
    <StyledLink to="/certifications/">Certifications</StyledLink>
    <StyledLink to="/tutoring/">Tutoring</StyledLink>
  </NavbarContent>
);

export default Navbar;
