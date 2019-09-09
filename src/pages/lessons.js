import React from 'react';
import { graphql } from 'gatsby';

import PageTemplate from '../templates/PageTemplate';
import LessonLink from '../components/LessonLink';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

const Lessons = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const lessons = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <LessonLink key={edge.node.id} lesson={edge.node} />)

  return (
    <PageTemplate>
      <h1>Lessons</h1>
      {lessons}
    </PageTemplate>
  );
}
export default Lessons;
