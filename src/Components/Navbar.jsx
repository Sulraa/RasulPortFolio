import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;

  &::before {
    content: '>';
    color: ${props => props.theme.colors.accentBlue};
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(AnchorLink)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: ${props => props.theme.colors.accent};
    background: rgba(0, 255, 136, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.gradient};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::before {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`

const MobileNavLink = styled(AnchorLink)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    color: ${props => props.theme.colors.accent};
    background: rgba(0, 255, 136, 0.1);
  }
`

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#projects', label: 'projects' },
    { href: '#experience', label: 'experience' },
    { href: '#resume', label: 'resume' },
    { href: '#contact', label: 'contact' }
  ]

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: isScrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)'
        }}
      >
        <NavContent>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode />
            dev.portfolio
          </Logo>

          <NavLinks>
            {navItems.map((item, index) => (
              <NavLink
                key={item.href}
                href={item.href}
                offset={80}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContent>
      </NavContainer>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              offset={80}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </>
  )
}

export default Navbar
