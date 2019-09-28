import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const Styles = styled.div`
  p {
    font-size: 18px;
    line-height: 1.8;
  }
`;

const LessonTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <Styles>
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
      </Styles>
    </Layout>
  );
};

export default LessonTemplate;
