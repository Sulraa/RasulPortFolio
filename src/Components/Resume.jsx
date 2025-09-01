import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import { handleResumeDownload, checkResumeExists } from '../utils/buttonHandlers'

const ResumeSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ResumeContent = styled.div`
  max-width: 1200px;
  width: 100%;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  font-family: ${props => props.theme.fonts.primary};
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`

const ResumeCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-align: center;
  max-width: 600px;
  width: 100%;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.1);
  }
`

const InfoTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

const InfoText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`

const ActionButton = styled(motion.button)`
  padding: 1.2rem 2rem;
  border: 2px solid ${props => props.primary ? props.theme.colors.accent : props.theme.colors.accentBlue};
  background: ${props => props.primary ? props.theme.colors.accent : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.accentBlue};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;

  &:hover {
    background: ${props => props.primary ? props.theme.colors.accentBlue : props.theme.colors.accentBlue};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`



const Resume = () => {
  const [resumeExists, setResumeExists] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if resume file exists
  useEffect(() => {
    const checkResume = async () => {
      setIsLoading(true)
      try {
        const exists = await checkResumeExists()
        setResumeExists(exists)
      } catch (error) {
        console.error('Error checking resume:', error)
        setResumeExists(false)
      } finally {
        setIsLoading(false)
      }
    }
    checkResume()
  }, [])

  const handlePreview = () => {
    if (resumeExists) {
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <ResumeSection id="resume">
      <ResumeContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Resume
        </SectionTitle>

        <ResumeContainer>
          <ResumeCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoTitle>
              <FaFilePdf />
              Professional Resume
            </InfoTitle>
            <InfoText>
              Download my comprehensive resume to learn more about my educational background,
              technical skills, project experience, and professional journey as an aspiring
              UI/UX Designer and Frontend Developer.
            </InfoText>
            <InfoText>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </InfoText>

            {isLoading ? (
              <ButtonGroup>
                <ActionButton disabled>
                  <FaDownload />
                  Loading...
                </ActionButton>
              </ButtonGroup>
            ) : resumeExists ? (
              <ButtonGroup>
                <ActionButton
                  primary
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download Resume PDF"
                >
                  <FaDownload />
                  Download PDF
                </ActionButton>
                <ActionButton
                  onClick={handlePreview}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Open Resume in New Tab"
                >
                  <FaExternalLinkAlt />
                  View Resume
                </ActionButton>
              </ButtonGroup>
            ) : (
              <ButtonGroup>
                <ActionButton disabled aria-label="Resume Not Available">
                  <FaDownload />
                  Resume Not Available
                </ActionButton>
              </ButtonGroup>
            )}
          </ResumeCard>
        </ResumeContainer>
      </ResumeContent>


    </ResumeSection>
  )
}

export default Resume
