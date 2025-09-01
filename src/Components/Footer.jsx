import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaReact, FaHeart } from 'react-icons/fa'
import { 
  SiVite, 
  SiStyledcomponents, 
  SiFramer, 
  SiFormspree,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiEslint,
  SiNpm
} from 'react-icons/si'

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, 
    rgba(13, 13, 13, 0.95) 0%, 
    rgba(26, 26, 26, 0.95) 100%
  );
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.theme.colors.gradient};
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const TechSection = styled.div`
  text-align: center;
  width: 100%;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.8rem;
  }
`

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.05);
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }

  svg {
    font-size: 2rem;
    color: ${props => props.color || props.theme.colors.accent};
  }

  span {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 500;
  }
`

const CopyrightSection = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`

const CopyrightText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`

const HeartIcon = styled(FaHeart)`
  color: #ff6b6b;
  animation: heartbeat 2s ease-in-out infinite;

  @keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'Formspree', icon: SiFormspree, color: '#FA7268' },
  { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
  { name: 'NPM', icon: SiNpm, color: '#CB3837' }
]

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TechSection>
          <SectionTitle>
            Built With Amazing Technologies
          </SectionTitle>
          <TechGrid>
            {technologies.map((tech, index) => (
              <TechItem
                key={tech.name}
                color={tech.color}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <tech.icon />
                <span>{tech.name}</span>
              </TechItem>
            ))}
          </TechGrid>
        </TechSection>

        <CopyrightSection>
          <CopyrightText>
            <span>© 2025 Rasul Ampato. All rights reserved.</span>
          </CopyrightText>
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
