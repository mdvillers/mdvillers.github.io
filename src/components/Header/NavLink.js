import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const LinkNav = styled(Link)`
  color: var(--muted-text-color);
  transition: color 0.2s ease-out;
  text-decoration: none;
  font-weight: 500;

  &.active {
    span{
      color: var(--accent-color);
    }
    img{
      filter: invert(52%) sepia(71%) saturate(1044%) hue-rotate(166deg) brightness(101%) contrast(95%);
    }
  }
`;

const Span = styled.span`
  :hover {
    color: var(--accent-color);
    transition: color 0.2s;
  }
  @media (max-width: 400px) {
    display:none;
  }
`;

const Img = styled.img`
  display: none;
  height: 20px;
  width: 20px;
  filter: invert(37%) sepia(10%) saturate(684%) hue-rotate(175deg) brightness(94%) contrast(87%);
  margin-bottom:0px;
  :hover{
      filter: invert(52%) sepia(71%) saturate(1044%) hue-rotate(166deg) brightness(101%) contrast(95%);
  }
  @media (max-width: 400px) {
    display:inline;
  }
`

const NavLink = ({ info }) => (
  <LinkNav to={info.path} exact={"true"} activeClassName="active">
     <Span className={info.label.toLowerCase()}>{info.label}</Span>
     <Img src={info.icon} alt={info.label}/>
  </LinkNav>
);

export default NavLink;
