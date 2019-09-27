import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../templates/PageTemplate';

import MainSlide from '../components/MainSlide';
import BodySlide from '../components/BodySlide';
import BirdOfParadiseImage from '../images/bird-of-paradise.png';

const CourseSlide = styled.div`
  margin: 20px 0;
`;

const StyledImage = styled.img`
  max-width: 240px;

  @media (max-width: 768px) {
    max-width: 180px;
  }
`;

const ImageContent = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  width: 100%;
`;

const Home = () => (
  <PageTemplate>
    <MainSlide>
      <div>
        <h1>Kickstart your tech career</h1>
        <p>
          With step by step lessons that focus on core programming concepts,
          Core Standards is the <strong>first step to your career in tech.</strong>
        </p>
      </div>
      <ImageContent>
        <StyledImage src={BirdOfParadiseImage} alt="Logo" />
      </ImageContent>
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
