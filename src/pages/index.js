import React from "react";
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
  NameTag,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <UserWrapper>
      <HeroSection>
        <UserTitleDescriptionWrapper>
          <NameTag>Madhav Aryal</NameTag>
          <UserTitle>PhD Student</UserTitle>
          <UserDescription>
            I work in privacy, security, and LLM research at the University of
            South Florida.
          </UserDescription>
        </UserTitleDescriptionWrapper>
        <UserImage>
          <img
            src="https://github.com/user-attachments/assets/2e9aad3d-440f-4d05-92b9-3437de0537b7"
            alt="Madhav Aryal"
          />
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

export default IndexPage;
