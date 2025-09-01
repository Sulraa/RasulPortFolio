import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa'
import { handleResumeDownload, handleSmoothScroll, handleSocialLink } from '../utils/buttonHandlers'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 2;
`

const TerminalWindow = styled(motion.div)`
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`

const TerminalContent = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  text-align: left;
  line-height: 1.8;
`

const TerminalLine = styled(motion.div)`
  margin: 0.5rem 0;
  
  &::before {
    content: '$ ';
    color: ${props => props.theme.colors.accent};
  }
`

const TypedText = styled.span`
  color: ${props => props.theme.colors.text};
`

const HighlightText = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
`

const GradientText = styled.span`
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
`

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 2rem;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${props => props.theme.colors.accent};
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-5px);
  }

  /* Instagram-specific styling */
  &:nth-child(3):hover {
    color: #E1306C;
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background-size: 200% 200%;
    animation: instagram-gradient 2s ease infinite;
  }

  /* Facebook-specific styling */
  &:nth-child(4):hover {
    color: #1877F2;
    background: linear-gradient(135deg, #1877F2 0%, #42A5F5 50%, #1565C0 100%);
    box-shadow: 0 8px 25px rgba(24, 119, 242, 0.3);
    transform: translateY(-8px);
  }

  @keyframes instagram-gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }
`

const CTAButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: 2px solid ${props => props.primary ? props.theme.colors.accent : props.theme.colors.border};
  background: ${props => props.primary ? props.theme.colors.accent : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.primary ? props.theme.colors.accentBlue : props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 136, 0.3);
  }
`

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  const terminalLines = [
    'whoami',
    'Rasul Ampato - Aspiring UI/UX Designer & Frontend Developer',
    'cat skills.txt',
    'HTML • CSS • JavaScript • React • PHP • Python • MySQL',
    'ls projects/',
    'e-vote-system/ jammify-music/ balagtas-socialcare/ ...',
    'echo "Welcome to my digital space!"',
    'Ready to create amazing user experiences together? 🚀'
  ]

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const currentLine = terminalLines[currentLineIndex]
      
      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + currentLine[currentCharIndex])
          setCurrentCharIndex(prev => prev + 1)
        }, 50)
        
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + '\n')
          setCurrentLineIndex(prev => prev + 1)
          setCurrentCharIndex(0)
        }, 1000)
        
        return () => clearTimeout(timer)
      }
    }
  }, [currentCharIndex, currentLineIndex, terminalLines])

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            marginBottom: '1rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}
        >
          Hello, I'm <GradientText>Rasul Ampato</GradientText>
        </motion.h1>

        <TerminalWindow
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TerminalHeader>
            <TerminalButton color="#ff5f56" />
            <TerminalButton color="#ffbd2e" />
            <TerminalButton color="#27ca3f" />
            <span style={{ marginLeft: '1rem', fontSize: '0.9rem', color: '#a0a0a0' }}>
              terminal
            </span>
          </TerminalHeader>
          
          <TerminalContent>
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
              {displayedText}
              <span style={{ 
                animation: 'blink 1s infinite',
                color: '#00ff88'
              }}>|</span>
            </pre>
          </TerminalContent>
        </TerminalWindow>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialLink
            as={motion.button}
            onClick={() => handleSocialLink('https://github.com/Sulraa', 'GitHub')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit GitHub Profile"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            as={motion.button}
            onClick={() => handleSocialLink('https://www.linkedin.com/in/rasul-ampato-396461282/', 'LinkedIn')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit LinkedIn Profile"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            as={motion.a}
            onClick={() => handleSocialLink('https://www.instagram.com/its.sulra_/', 'Instagram')}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Follow me on Instagram @its.sulra_"
            style={{
              border: '2px solid rgba(225, 48, 108, 0.4)',
              background: 'linear-gradient(45deg, rgba(240, 148, 51, 0.1), rgba(225, 48, 108, 0.1))',
              position: 'relative'
            }}
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            as={motion.a}
            onClick={() => handleSocialLink('https://www.facebook.com/rasul.ampato.2024/', 'Facebook')}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Connect with me on Facebook"
            style={{
              border: '2px solid rgba(24, 119, 242, 0.4)',
              background: 'rgba(24, 119, 242, 0.1)',
              position: 'relative'
            }}
          >
            <FaFacebook />
          </SocialLink>
        </SocialLinks>

        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CTAButton
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSmoothScroll('projects')}
            aria-label="View My Projects"
          >
            View My Work
          </CTAButton>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            aria-label="Download Resume PDF"
          >
            <FaDownload />
            Download Resume
          </CTAButton>
        </CTAButtons>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
