import styled,{keyframes} from "styled-components";

const typingAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

export const UserWrapper = styled.div`
  margin: 10% auto;
`;
export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: #ffffff;
  span {
    color: #01ffff;
  }
  @media (max-width: 700px) {
    font-size: 3em;
  }
`;
export const UserDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-bottom: 10%;
  p {
    color: #ffffff;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 15%;
    flex-grow: 4;
    .cursor {
      color: #01ffff;
      animation: ${typingAnimation} 0.5s infinite;
    }
  }
  img {
    max-width: 20%;
    background-size:cover;
    background-position:top center;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    img {
      max-width: 100%;
    }
    p {
      max-width: 100%;
      font-size: 19px;
    }
  }
`;
export const UserTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

