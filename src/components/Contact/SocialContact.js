import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  margin-bottom: 1rem;
  img {
    margin: 0 0.75rem 0 0;
    width: 22px;
    height: 22px;
    filter: invert(52%) sepia(71%) saturate(1044%) hue-rotate(166deg)
      brightness(101%) contrast(95%);
  }
  @media (max-width: 700px) {
    img {
      margin: 0 0 0.5rem;
    }
  }
`;
const ContactLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  p {
    font-size: 1.05rem;
    color: var(--text-color);
    margin: 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      font-size: 1rem;
    }
  }
`;
const ContactBox = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.05rem;
    color: var(--text-color);
    margin: 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      font-size: 1rem;
    }
  }
`;
const SocialContact = ({ info }) => (
  <ContactWrapper>
    {info.linkTo ? (
      <ContactLink href={info.path}>
        <img src={info.icon} alt="contact link mdvillers" />
        <p>{info.title}</p>
      </ContactLink>
    ) : (
      <ContactBox>
        <img src={info.icon} alt="contact link mdvillers" />
        <p>{info.title}</p>
      </ContactBox>
    )}
  </ContactWrapper>
);

export default SocialContact;
