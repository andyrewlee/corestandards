import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledDiv = styled.div`
  margin-bottom: 1rem;
`;

const LessonLink = ({ lesson }) => (
  <StyledDiv>
    <Link to={lesson.frontmatter.path}>
      {lesson.frontmatter.title}
    </Link>
  </StyledDiv>
);

export default LessonLink;
