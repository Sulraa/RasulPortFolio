import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaGraduationCap, FaCertificate } from 'react-icons/fa'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AboutContent = styled.div`
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const AboutText = styled.div`
  text-align: left;
`

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 2rem;
`

const HighlightText = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SkillCategory = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

const SkillTag = styled.span`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const StatCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-5px);
  }
`

const StatIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`

const StatTitle = styled.h4`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

const StatDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`

const About = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['PHP', 'Python', 'MySQL'],
    tools: ['Git', 'VS Code', 'Figma']
  }

  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>

        <AboutGrid>
          <AboutText>
            <Description
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm <HighlightText>Rasul Ampato</HighlightText>, an aspiring UI/UX Designer and Frontend Developer
              currently pursuing my Bachelor of Science in Information Technology at Polytechnic College in Bulacan.
            </Description>

            <Description
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With <HighlightText>1 year of hands-on experience</HighlightText> from college projects,
              I've developed a passion for creating intuitive user interfaces and engaging web experiences.
              I believe in the power of design to solve real-world problems and enhance user experiences.
            </Description>

            <Description
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              My journey includes working on diverse projects from voting systems to music streaming platforms,
              always focusing on <HighlightText>user-centered design</HighlightText> and clean, efficient code.
            </Description>
          </AboutText>

          <SkillsContainer>
            <SkillCategory
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>
                <FaCode />
                Frontend Technologies
              </CategoryTitle>
              <SkillsList>
                {skills.frontend.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>

            <SkillCategory
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>
                <FaPalette />
                Backend & Database
              </CategoryTitle>
              <SkillsList>
                {skills.backend.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>
          </SkillsContainer>
        </AboutGrid>

        <StatsContainer>
          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <StatIcon><FaGraduationCap /></StatIcon>
            <StatTitle>Education</StatTitle>
            <StatDescription>
              4th Year BS Information Technology Student at Polytechnic College, Bulacan
            </StatDescription>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <StatIcon><FaCertificate /></StatIcon>
            <StatTitle>Certification</StatTitle>
            <StatDescription>
              RAITE 2024 Seminar Certification (November 4, 2024)
            </StatDescription>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <StatIcon><FaCode /></StatIcon>
            <StatTitle>Experience</StatTitle>
            <StatDescription>
              1+ Year of project development experience through college coursework and personal projects
            </StatDescription>
          </StatCard>
        </StatsContainer>
      </AboutContent>
    </AboutSection>
  )
}

export default About
