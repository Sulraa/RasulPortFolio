import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCode, FaMusic, FaUsers, FaLock, FaCalendar } from 'react-icons/fa'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 450px;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.gradient};
  }
`

const ProjectIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(0, 255, 136, 0.1);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
`

const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`

const TechTag = styled.span`
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid ${props => props.theme.colors.accentBlue};
  color: ${props => props.theme.colors.accentBlue};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.8rem;
`

const ProjectStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.8rem;
  background: ${props => props.status === 'completed'
    ? 'rgba(0, 255, 136, 0.1)'
    : 'rgba(139, 92, 246, 0.1)'};
  border: 1px solid ${props => props.status === 'completed'
    ? props.theme.colors.accent
    : props.theme.colors.accentPurple};
  border-radius: 8px;
  color: ${props => props.status === 'completed'
    ? props.theme.colors.accent
    : props.theme.colors.accentPurple};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
`

const PrivacyNote = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const PrivacyText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Vote System",
      description: "A comprehensive voting system designed for Sulivan National High School Supreme Secondary Learner Government, enabling secure and transparent student elections.",
      icon: <FaUsers />,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      status: "completed",
      year: "2023"
    },
    {
      id: 2,
      title: "Jammify",
      description: "An online music streaming platform that allows users to discover, play, and organize their favorite music with an intuitive and modern interface.",
      icon: <FaMusic />,
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      status: "completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Balagtas SocialCare System",
      description: "A web-based social welfare and case management system with data-driven financial resource allocation for MSWDO of Balagtas, Bulacan.",
      icon: <FaCode />,
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      status: "ongoing",
      year: "2024"
    }
  ]

  return (
    <ProjectsSection id="projects">
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectIcon>
                {project.icon}
              </ProjectIcon>

              <ProjectTitle>{project.title}</ProjectTitle>

              <ProjectDescription>
                {project.description}
              </ProjectDescription>

              <TechStack>
                {project.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>

              <ProjectStatus status={project.status}>
                <FaCalendar />
                {project.year} • {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </ProjectStatus>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <PrivacyNote>
            <PrivacyText>
              <FaLock />
              Repository access is private for security and privacy reasons
            </PrivacyText>
          </PrivacyNote>
        </motion.div>
      </ProjectsContent>
    </ProjectsSection>
  )
}

export default Projects
