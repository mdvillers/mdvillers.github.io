import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border-radius: 14px;
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  box-shadow: 0 8px 20px var(--shadow-color);
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease-out, border-color 0.2s ease-out;
  color: var(--text-color);
  :hover {
    box-shadow: 0 12px 26px var(--shadow-color);
    border-color: var(--accent-color);
  }
  a {
    margin-top: auto;
    color: var(--accent-color);
    font-weight: 600;
    text-decoration: none;
  }
  h3 {
    margin-bottom: 0.75rem;
  }
  p {
    color: var(--muted-text-color);
  }
`;
const AboutBox = ({ info }) => (
  <Box>
    <h3>{info.title}</h3>
    <p> {info.description}</p>
    <Link to={info.path}>Read more</Link>
  </Box>
);

export default AboutBox;
