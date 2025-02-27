import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const LinkNav = styled(Link)`
  color: #ffffff;
  transition: color 0.2s ease-out;
  text-decoration: none;

  &.active {
    color: #01ffff;
  }
`;

const Span = styled.span`
  :hover {
    color: #01ffff;
    transition: color 0.2s;
  }
  @media (max-width: 500px) {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: 3ch; /* Show only the first character */
    transition: max-width 0.3s ease-in-out; /* Smooth transition */

    :hover {
      max-width: 100%; /* Expand to full width on hover */
      color: #01ffff;
      transition: color 0.2s;
    }
  }
`;
const NavLink = ({ info }) => (
  <LinkNav to={info.path} exact={"true"} activeClassName="active">
     <Span>{info.label}</Span>
  </LinkNav>
);

export default NavLink;
