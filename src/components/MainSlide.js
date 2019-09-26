import styled from 'styled-components';

const MainSlide = styled.div`
  padding-top: 120px;
  height: 400px;
  text-align: center;

  p {
    line-height: 1.4;
    margin: 0 auto;
    font-size: 24px
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    height: 240px;
    text-align: left;

    h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.3;
      font-size: 18px
    }
  }
`;

export default MainSlide;
