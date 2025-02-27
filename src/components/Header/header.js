import React from 'react'
import NavLink from './NavLink'
import headerList from '../../data/Navigation'
import styled from "styled-components"


const NavList = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const Header = () => (
  <nav className='nav'>
    <NavList>
      {
        headerList.map(navItem => (<NavLink info={navItem} key={navItem.label} />))
      }
    </NavList>
  </nav>
)

export default Header
