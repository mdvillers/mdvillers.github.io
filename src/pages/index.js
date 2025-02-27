import React from "react";
import { useState, useEffect } from "react";
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
} from "../styles/indexStyle.js";
import Layout from "../components/layout";


const IndexPage = () => {
  const text = "Hello there, welcome to my portfolio. I am a technical solutions engineer.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <Layout>
      <UserWrapper>
        <HeroSection>
          <UserTitleDescriptionWrapper>
            <UserTitle>
              Madhav <span>Aryal</span>
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
