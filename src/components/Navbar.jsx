import { useState } from "react";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

   const Container = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 80px;
    background-color: #121212;
    z-index: 10;
  `;
  
  const PortLogo = styled.a`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(30%, 60%);
    font-weight: bold;
    font-size: 25px;
    color: white;
  `;
  
  const NavItem = styled.ul`
    display: flex;
    width: 100%;
    margin: 0 1rem;
    justify-content: center;
    font-weight: bold;
    font-size: 15px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  
  const NavLink = styled.a`
    margin: 0 2rem;
    cursor: pointer;
    color: white;

    &:hover {
      color: #b3a2c7;
    }
  `;

  const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 120%);
      font-size: 1.5rem;
      cursor: pointer;
      color: white;
    }
  `;

  const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: black;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '50%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const MobileLink = styled.a`
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #b3a2c7;
  }

  &.active {
    border-bottom: 2px solid white;
  }
`;

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <Container>
      <PortLogo href="/">
        Portfolio
      </PortLogo>

      <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
      </MobileIcon>

      <NavItem>
        <NavLink href="#hero">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
      </NavItem>

      {
        isOpen &&
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#hero" onClick={() => {
            setIsOpen(!isOpen)
          }}>About</MobileLink>
          <MobileLink href='#skills' onClick={() => {
            setIsOpen(!isOpen)
          }}>Skills</MobileLink>
          <MobileLink href='#experience' onClick={() => {
            setIsOpen(!isOpen)
          }}>Experience</MobileLink>
          <MobileLink href='#projects' onClick={() => {
            setIsOpen(!isOpen)
          }}>Projects</MobileLink>
          <MobileLink href='#education' onClick={() => {
            setIsOpen(!isOpen)
          }}>Education</MobileLink>
        </MobileMenu>
      }

    </Container>
  )
}

export default Navbar