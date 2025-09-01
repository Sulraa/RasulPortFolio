import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaVideo, FaCertificate, FaCalendarAlt } from 'react-icons/fa'

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ExperienceContent = styled.div`
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${props => props.theme.colors.gradient};
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 30px;
  }
`

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 60px;
  }
`

const TimelineContent = styled.div`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  width: 45%;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.1);
  }

  @media (max-width: 768px) {
    width: calc(100% - 60px);
  }
`

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  border: 3px solid ${props => props.theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.accent};
  z-index: 2;

  @media (max-width: 768px) {
    left: 30px;
    transform: translateY(-50%);
  }
`

const ItemTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`

const ItemSubtitle = styled.h4`
  color: ${props => props.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: normal;
`

const ItemDate = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ItemDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`

const ItemHighlight = styled.div`
  background: rgba(0, 255, 136, 0.1);
  border-left: 3px solid ${props => props.theme.colors.accent};
  padding: 1rem;
  border-radius: 0 8px 8px 0;
  margin-top: 1rem;
`

const HighlightText = styled.p`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  margin: 0;
`

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Bachelor of Science in Information Technology",
      subtitle: "Polytechnic College, Bulacan",
      date: "2021 - Present (4th Year)",
      description: "Currently pursuing my degree with focus on software development, web technologies, and system design. Actively engaged in various academic projects that have shaped my technical skills.",
      icon: <FaGraduationCap />,
      highlight: "Specializing in Frontend Development and UI/UX Design"
    },
    {
      id: 2,
      title: "Short Film Production",
      subtitle: "College Project - Inter-School Competition",
      date: "2023",
      description: "Led the production of a short film representing our college in an inter-school competition. This experience enhanced my project management, creative thinking, and collaborative skills.",
      icon: <FaVideo />,
      highlight: "Developed leadership and creative project management skills"
    },
    {
      id: 3,
      title: "RAITE 2024 Seminar",
      subtitle: "Professional Development Certification",
      date: "November 4, 2024",
      description: "Attended and completed the RAITE 2024 seminar, gaining insights into the latest trends and technologies in information technology and software development.",
      icon: <FaCertificate />,
      highlight: "Earned certification in emerging IT technologies"
    }
  ]

  return (
    <ExperienceSection id="experience">
      <ExperienceContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </SectionTitle>

        <TimelineContainer>
          <TimelineLine />

          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <TimelineIcon>
                {experience.icon}
              </TimelineIcon>

              <TimelineContent>
                <ItemTitle>{experience.title}</ItemTitle>
                <ItemSubtitle>{experience.subtitle}</ItemSubtitle>
                <ItemDate>
                  <FaCalendarAlt />
                  {experience.date}
                </ItemDate>
                <ItemDescription>
                  {experience.description}
                </ItemDescription>
                <ItemHighlight>
                  <HighlightText>{experience.highlight}</HighlightText>
                </ItemHighlight>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ExperienceContent>
    </ExperienceSection>
  )
}

export default Experience
