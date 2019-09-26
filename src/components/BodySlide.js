import styled from 'styled-components';

const BodySlide = styled.div`
  margin: 40px 0;

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    line-height: 1.3;
    font-size: 18px
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    h3 {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
`;

export default BodySlide;
