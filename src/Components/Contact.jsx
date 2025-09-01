import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa'
import { handleSocialLink } from '../utils/buttonHandlers'

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactContent = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const InfoCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.1);
  }
`

const InfoTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const InfoText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 8px;
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }
`

const ContactForm = styled(motion.form)`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormLabel = styled.label`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
`

const FormInput = styled.input`
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 1rem;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`

const FormTextarea = styled.textarea`
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 1rem;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary};
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.accentBlue};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 136, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const StatusMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;

  ${props => props.type === 'success' && `
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid ${props.theme.colors.accent};
    color: ${props.theme.colors.accent};
  `}

  ${props => props.type === 'error' && `
    background: rgba(255, 95, 86, 0.1);
    border: 1px solid #ff5f56;
    color: #ff5f56;
  `}
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all required fields.')
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.')
      }

      // Use Formspree for reliable email delivery
      console.log('Submitting form with data:', formData)

      const response = await fetch('https://formspree.io/f/xqadlprl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactSection id="contact">
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </SectionTitle>

        <ContactGrid>
          <ContactInfo>
            <InfoCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <InfoTitle>
                <FaEnvelope />
                Get In Touch
              </InfoTitle>
              <InfoText>
                I'm always excited to discuss new opportunities, collaborate on projects,
                or simply connect with fellow developers and designers. Feel free to reach out!
              </InfoText>
              <InfoText>
                <strong>Email:</strong>
                <a
                  href="mailto:ampatorasul@gmail.com"
                  style={{
                    color: '#00ff88',
                    textDecoration: 'none',
                    marginLeft: '0.5rem',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.borderBottomColor = '#00ff88'}
                  onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
                >
                  ampatorasul@gmail.com
                </a>
              </InfoText>
              <InfoText>
                <FaMapMarkerAlt style={{ display: 'inline', marginRight: '0.5rem' }} />
                Bulacan, Philippines
              </InfoText>
            </InfoCard>

            <InfoCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <InfoTitle>
                <FaGithub />
                Follow My Work
              </InfoTitle>
              <InfoText>
                Connect with me on social platforms to stay updated with my latest projects
                and professional journey.
              </InfoText>
              <SocialLinks>
                <SocialLink
                  as={motion.button}
                  onClick={() => handleSocialLink('https://github.com/Sulraa', 'GitHub')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Visit GitHub Profile"
                >
                  <FaGithub />
                  GitHub
                </SocialLink>
                <SocialLink
                  as={motion.button}
                  onClick={() => handleSocialLink('https://www.linkedin.com/in/rasul-ampato-396461282/', 'LinkedIn')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Visit LinkedIn Profile"
                >
                  <FaLinkedin />
                  LinkedIn
                </SocialLink>
              </SocialLinks>
            </InfoCard>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello!"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              aria-label="Send Contact Message"
            >
              <FaPaperPlane />
              {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
            </SubmitButton>

            {submitStatus && (
              <StatusMessage
                type={submitStatus}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus === 'success' ? (
                  <>
                    <FaCheck />
                    Message sent successfully! I'll get back to you soon.
                  </>
                ) : (
                  <>
                    <FaTimes />
                    Failed to send message. Please try again or contact me directly at ampatorasul@gmail.com
                  </>
                )}
              </StatusMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactSection>
  )
}

export default Contact
