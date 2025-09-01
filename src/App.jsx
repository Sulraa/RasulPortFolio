import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ParticleBackground from './Components/ParticleBackground'
import PerformanceOptimizer from './Components/PerformanceOptimizer'
import ButtonTester from './Components/ButtonTester'

// Dark theme configuration
const theme = {
  colors: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    accent: '#00ff88',
    accentBlue: '#00d4ff',
    accentPurple: '#8b5cf6',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    border: '#333333',
    gradient: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #8b5cf6 100%)'
  },
  fonts: {
    primary: "'JetBrains Mono', 'Fira Code', monospace",
    secondary: "'Inter', 'Segoe UI', sans-serif"
  }
}

// Global styles for dark theme
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.secondary};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Performance optimizations */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.accent};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accentBlue};
  }

  /* Animation classes for performance optimizer */
  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

const App = () => {
  const [showTester, setShowTester] = React.useState(false)

  // Show button tester in development mode or when Ctrl+Shift+T is pressed
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        setShowTester(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <PerformanceOptimizer />
          <ParticleBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Resume />
                <Contact />
                <Footer />
              </>
            } />
          </Routes>
          {showTester && (
            <ButtonTester onClose={() => setShowTester(false)} />
          )}
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App