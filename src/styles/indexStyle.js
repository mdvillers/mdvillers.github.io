import styled from "styled-components";

export const UserWrapper = styled.div`
  margin: 4rem auto;
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 3rem;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const UserTitleDescriptionWrapper = styled.div`
  max-width: 680px;
`;

export const NameTag = styled.p`
  margin: 0 0 0.75rem;
  color: var(--accent-color);
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
`;

export const UserTitle = styled.h1`
  margin: 0;
  color: var(--text-color);
  font-size: 3rem;
  line-height: 1.1;
`;

export const UserDescription = styled.p`
  margin: 1.25rem 0 0;
  color: var(--muted-text-color);
  font-size: 1.2rem;
  line-height: 1.7;
`;

export const UserImage = styled.div`
  width: 100%;
  max-width: 320px;
  img {
    width: 100%;
    margin: 0;
    border-radius: 14px;
    box-shadow: 0 12px 30px var(--shadow-color);
  }
`;

export const UserTopic = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
