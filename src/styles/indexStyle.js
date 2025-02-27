import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

export const UserWrapper = styled.div`
  margin: 10% auto;
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const UserTitleDescriptionWrapper = styled.div`
  flex: 1; 
  min-width: 515px;
  @media (max-width: 575px) {
    min-width: 300px;
  }
`

export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: #ffffff;
  span {
    color: #01ffff;
  }
`;
export const UserDescription = styled.div`
  margin-bottom: 10%;
  p {
    color: #ffffff;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 15%;
    .cursor {
      color: #01ffff;
      animation: ${typingAnimation} 0.5s infinite;
    }
  }
`;

export const UserImage = styled.div`
   max-width: 350px;
   img {
    width:100%;
    background-size:cover;
    background-position:top center;
  }
`


export const UserTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

