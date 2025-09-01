import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes, FaPlay, FaSpinner } from 'react-icons/fa'

const TesterContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(26, 26, 26, 0.95);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  z-index: 10000;
  max-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`

const TesterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const TesterTitle = styled.h4`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.text};
    background: rgba(255, 255, 255, 0.1);
  }
`

const TestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TestItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(10, 10, 10, 0.5);
  border-radius: 6px;
  font-size: 0.8rem;
`

const TestName = styled.span`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
`

const TestStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => {
    switch (props.status) {
      case 'pass': return props.theme.colors.accent
      case 'fail': return '#ff5f56'
      case 'running': return props.theme.colors.accentBlue
      default: return props.theme.colors.textSecondary
    }
  }};
`

const RunAllButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 6px;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.theme.colors.accentBlue};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const ButtonTester = ({ onClose }) => {
  const [tests, setTests] = useState({
    navigation: 'pending',
    heroButtons: 'pending',
    socialLinks: 'pending',
    contactForm: 'pending',
    resumeDownload: 'pending',
    smoothScroll: 'pending',
    responsiveNav: 'pending'
  })
  const [isRunning, setIsRunning] = useState(false)

  const testFunctions = {
    navigation: () => {
      // Test navigation links
      const navLinks = document.querySelectorAll('nav a, nav button')
      return navLinks.length >= 6 // home, about, projects, experience, resume, contact
    },
    
    heroButtons: () => {
      // Test hero section buttons
      const heroButtons = document.querySelectorAll('#home button')
      return heroButtons.length >= 2 // View My Work, Download Resume
    },
    
    socialLinks: () => {
      // Test social media links
      const socialButtons = document.querySelectorAll('[aria-label*="GitHub"], [aria-label*="LinkedIn"], [aria-label*="Email"]')
      return socialButtons.length >= 3
    },
    
    contactForm: () => {
      // Test contact form elements
      const form = document.querySelector('#contact form')
      const inputs = form?.querySelectorAll('input, textarea')
      const submitButton = form?.querySelector('button[type="submit"]')
      return form && inputs?.length >= 4 && submitButton
    },
    
    resumeDownload: async () => {
      // Test resume download functionality
      try {
        const response = await fetch('/resume.pdf', { method: 'HEAD' })
        return response.ok
      } catch {
        return false
      }
    },
    
    smoothScroll: () => {
      // Test smooth scroll functionality
      const sections = document.querySelectorAll('section[id]')
      return sections.length >= 5 // hero, about, projects, experience, contact
    },
    
    responsiveNav: () => {
      // Test responsive navigation
      const mobileMenuButton = document.querySelector('[aria-label*="menu"], nav button[aria-expanded]')
      return !!mobileMenuButton
    }
  }

  const runSingleTest = async (testName) => {
    setTests(prev => ({ ...prev, [testName]: 'running' }))
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate test time
      const result = await testFunctions[testName]()
      setTests(prev => ({ ...prev, [testName]: result ? 'pass' : 'fail' }))
    } catch (error) {
      console.error(`Test ${testName} failed:`, error)
      setTests(prev => ({ ...prev, [testName]: 'fail' }))
    }
  }

  const runAllTests = async () => {
    setIsRunning(true)
    
    for (const testName of Object.keys(testFunctions)) {
      await runSingleTest(testName)
    }
    
    setIsRunning(false)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pass': return <FaCheck />
      case 'fail': return <FaTimes />
      case 'running': return <FaSpinner className="spinning" />
      default: return null
    }
  }

  const testLabels = {
    navigation: 'Navigation Menu',
    heroButtons: 'Hero Buttons',
    socialLinks: 'Social Links',
    contactForm: 'Contact Form',
    resumeDownload: 'Resume Download',
    smoothScroll: 'Smooth Scrolling',
    responsiveNav: 'Mobile Navigation'
  }

  return (
    <TesterContainer
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <TesterHeader>
        <TesterTitle>Button & Feature Tests</TesterTitle>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
      </TesterHeader>

      <TestList>
        {Object.entries(tests).map(([testName, status]) => (
          <TestItem key={testName}>
            <TestName>{testLabels[testName]}</TestName>
            <TestStatus status={status}>
              {getStatusIcon(status)}
              {status === 'pending' ? 'Pending' : 
               status === 'running' ? 'Testing...' :
               status === 'pass' ? 'Pass' : 'Fail'}
            </TestStatus>
          </TestItem>
        ))}
      </TestList>

      <RunAllButton 
        onClick={runAllTests} 
        disabled={isRunning}
      >
        {isRunning ? (
          <>
            <FaSpinner className="spinning" />
            Running Tests...
          </>
        ) : (
          <>
            <FaPlay />
            Run All Tests
          </>
        )}
      </RunAllButton>

      <style jsx>{`
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </TesterContainer>
  )
}

export default ButtonTester
