import React, { useState, useEffect } from "react";
import programmerIcon from "../assets/images/me-800k.png";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
  UserWrapper,
  UserTitleDescriptionWrapper,
  UserTitle,
  UserDescription,
  UserTopic,
  UserImage,
  HeroSection,
  AnimatedText,
  NameWrapper
} from "../styles/indexStyle.js";
import Layout from "../components/layout";


const IndexPage = () => {
  const textOptions = [
    {
      name: "Madhav Aryal",
      text: "Hello there, welcome to my portfolio. I am a technical solutions engineer."
    },
    {
      name: "माधव अर्याल",
      text: "नमस्कार, मेरो पोर्टफोलियोमा स्वागत छ। म एक प्राविधिक समाधान इञ्जिनियर हुँ।"
    }
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // Tracks which language is displayed
  const [isFading, setIsFading] = useState(true); // Controls fade animation

  useEffect(() => {
    const { text } = textOptions[textIndex];

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const switchTimeout = setTimeout(() => {
        setIsFading(false); // Start fade-out animation
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
          setTextIndex((prev) => (prev + 1) % textOptions.length); // Toggle language
          setIsFading(true); // Start fade-in animation
        }, 500); // Wait for fade-out before switching text
      }, 1500);
      return () => clearTimeout(switchTimeout);
    }
  }, [index, textIndex]);

  return (
    <Layout>
      <UserWrapper>
        <HeroSection>
          <UserTitleDescriptionWrapper>
            <UserTitle>
              <NameWrapper>
                {textOptions.map((option, i) => (
                  <AnimatedText key={i} isVisible={textIndex === i}>
                    {option.name}
                  </AnimatedText>
                ))}
              </NameWrapper>
            </UserTitle>
            <UserDescription>
              <p>
                {displayText}
                <span className="cursor">|</span>
              </p>
            </UserDescription>
          </UserTitleDescriptionWrapper>
          <UserImage>
            <img src={programmerIcon} alt="mdv self" />
          </UserImage>
        </HeroSection>
        <UserTopic>
          {about.map((item) => (
            <AboutBox key={item.id} info={item} />
          ))}
        </UserTopic>
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
