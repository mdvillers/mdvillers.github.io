import React from 'react'
import NavLink from './NavLink'
import headerList from '../../data/Navigation'
import styled from "styled-components"


const NavList = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--surface-color);
  box-shadow: 0 4px 14px var(--shadow-color);
  @media (max-width: 400px) {
    justify-content: center;
  }
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
