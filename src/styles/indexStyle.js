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




// Keyframes for ultra-smooth flowing animation
const flowingTransition = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px) scale(0.96);
    filter: blur(6px);
    color: #ffffff;
  }
  10% {
    opacity: 0.1;
    transform: translateY(13.5px) scale(0.965);
    filter: blur(5.5px);
    color: #e0f7ff; /* Light fade towards cyan */
  }
  20% {
    opacity: 0.2;
    transform: translateY(12px) scale(0.97);
    filter: blur(5px);
    color: #c1efff; /* Continue fading towards cyan */
  }
  30% {
    opacity: 0.3;
    transform: translateY(10px) scale(0.975);
    filter: blur(4px);
    color: #a3e7ff; /* Even lighter cyan */
  }
  40% {
    opacity: 0.4;
    transform: translateY(8px) scale(0.98);
    filter: blur(3px);
    color: #85dfff; /* Slightly more cyan */
  }
  50% {
    opacity: 0.5;
    transform: translateY(6px) scale(0.985);
    filter: blur(2.5px);
    color: #01ffff; /* Full cyan */
  }
  60% {
    opacity: 0.6;
    transform: translateY(4px) scale(0.99);
    filter: blur(2px);
    color: #7fe3e7; /* Light cyan as it begins to fade back */
  }
  70% {
    opacity: 0.7;
    transform: translateY(3px) scale(0.995);
    filter: blur(1.5px);
    color: #a0d9d9; /* Fading back towards white */
  }
  80% {
    opacity: 0.8;
    transform: translateY(2px) scale(1);
    filter: blur(1px);
    color: #b8cfcf; /* Very light cyan */
  }
  90% {
    opacity: 0.9;
    transform: translateY(1px) scale(1);
    filter: blur(0.5px);
    color: #d0e5e5; /* Almost white */
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    color: #ffffff; /* Back to white */
  }
`;


// Styled component with the smoothest animation
export const AnimatedText = styled.span`
  display: inline-block;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out, filter 1s ease-in-out;
  animation: ${(props) => (props.isVisible ? flowingTransition : "none")} 1s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  position: absolute;
  white-space: nowrap;
  color: #ffffff;
`;

export const NameWrapper = styled.div`
  position: relative;
  height: 40px; /* Adjust based on font size */
  display: flex;
  align-items: center;
`;