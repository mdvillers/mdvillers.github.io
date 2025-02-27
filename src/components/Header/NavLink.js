import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const LinkNav = styled(Link)`
  color: #ffffff;
  transition: color 0.2s ease-out;
  text-decoration: none;

  &.active {
    span{
      color: #01ffff;
    }
    img{
      filter: invert(85%) sepia(82%) saturate(1507%) hue-rotate(110deg) brightness(104%) contrast(107%);
    }
  }
`;

const Span = styled.span`
  :hover {
    color: #01ffff;
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
  filter: invert(95%) sepia(95%) saturate(0%) hue-rotate(140deg) brightness(103%) contrast(109%);
  margin-bottom:0px;
  :hover{
      filter: invert(85%) sepia(82%) saturate(1507%) hue-rotate(110deg) brightness(104%) contrast(107%);
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
