import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Navbar from '../components/Navbar';

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const LessonTemplate = ({ data, pageContext }) => {
  console.log('pageContext', pageContext)
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { next, prev } = pageContext;

  return (
    <div>
      <Navbar />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      {prev &&
        <StyledLink to={prev.frontmatter.path}>
          Previous
        </StyledLink>
      }
      {next &&
        <StyledLink to={next.frontmatter.path}>
          Next
        </StyledLink>
      }
    </div>
  );
};

export default LessonTemplate;
