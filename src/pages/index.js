import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../templates/PageTemplate';

const MainSlide = styled.div`
  padding-top: 120px;
  height: 480px;

  p {
    font-size: 1.3em;
  }

  text-align: center;

  @media (max-width: 768px) {
    padding-top: 50px;
    height: 240px;
  }
`;

const BodySlide = styled.div`
  margin: 4rem 0;
`;

const CourseSlide = styled.div`
  margin: 2rem 0;
`;

const Home = () => (
  <PageTemplate>
    <MainSlide>
      <h1>Kickstart your tech career</h1>
      <p>
        With step by step lessons that focus on core programming concepts,
        Core Standards is the <strong>first step to your career in tech.</strong>
      </p>
    </MainSlide>
    <BodySlide>
      <h2>Course overview</h2>
      <p>
        Don't get sidetracked by unnecessary details! Focus on core programming
        concepts that will prepare you to pick up any language or framework.
      </p>

      <CourseSlide>
        <h3>Beginner: HTML, CSS, JS</h3>
        <p>
          Learn about HTML elements that make up a website. Once we learn the basic
          elements, we will extend their functionality by adding styles with CSS
          and interactivity with JavaScript.
        </p>
      </CourseSlide>

      <CourseSlide>
        <h3>Intermediate: Frontend</h3>
        <p>
          Learn how to write simple games, interact with external libraries and APIs,
          and to top it off, learn how to craft components with React.
        </p>
      </CourseSlide>

      <CourseSlide>
        <h3>Advanced: Backend</h3>
        <p>
          Create a web server that listens to HTTP requests and sends the appropriate
          response. By the end we will have a backend API that queries and updates
          the database.
        </p>
      </CourseSlide>

      <CourseSlide>
        <h3>Pro: Full stack</h3>
        <p>
          Put it all together by having a client interact with a backend API.
        </p>
      </CourseSlide>

      <CourseSlide>
        <h3>Master: Algorithms and data structures</h3>
        <p>
          Learn basics of computer science to improve the quality of your software.
        </p>
      </CourseSlide>
    </BodySlide>
  </PageTemplate>
);

export default Home;
