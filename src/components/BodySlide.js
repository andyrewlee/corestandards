import styled from 'styled-components';

const BodySlide = styled.div`
  margin: 40px 0;

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  h3, h3 {
    margin-bottom: 10px;
  }

  p {
    line-height: 1.8;
    font-size: 18px
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 22px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.6;
      font-size: 16px;
      margin: 10px 0;
    }
  }
`;

export default BodySlide;
