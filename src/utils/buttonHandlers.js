// Centralized button handlers for better performance and consistency

// Resume download handler
export const handleResumeDownload = () => {
  try {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Rasul_Ampato_Resume.pdf'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Analytics tracking (if needed)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        event_category: 'Resume',
        event_label: 'PDF Download'
      })
    }
  } catch (error) {
    console.error('Error downloading resume:', error)
    // Fallback: open in new tab
    window.open('/resume.pdf', '_blank')
  }
}

// Smooth scroll handler with offset for fixed navbar
export const handleSmoothScroll = (targetId, offset = 80) => {
  try {
    const element = document.getElementById(targetId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  } catch (error) {
    console.error('Error with smooth scroll:', error)
    // Fallback to regular scroll
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Email handler with validation
export const handleEmailContact = (email = 'ampatorasul@gmail.com') => {
  try {
    const mailtoLink = `mailto:${email}`
    window.location.href = mailtoLink
  } catch (error) {
    console.error('Error opening email client:', error)
    // Fallback: copy email to clipboard
    navigator.clipboard?.writeText(email).then(() => {
      alert('Email copied to clipboard!')
    }).catch(() => {
      alert(`Please email me at: ${email}`)
    })
  }
}

// Social media link handler with analytics
export const handleSocialLink = (url, platform) => {
  try {
    // Handle mailto links differently
    if (url.startsWith('mailto:')) {
      window.location.href = url
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Social Media',
        event_label: platform
      })
    }

    console.log(`${platform} link clicked:`, url)
  } catch (error) {
    console.error(`Error opening ${platform} link:`, error)
    // Fallback for mailto links
    if (url.startsWith('mailto:')) {
      try {
        window.location.href = url
      } catch (fallbackError) {
        console.error('Mailto fallback failed:', fallbackError)
      }
    }
  }
}

// Form submission handler
export const handleFormSubmit = (formData) => {
  try {
    const { name, email, subject, message } = formData
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields.')
      return false
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return false
    }
    
    // Create mailto link
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:ampatorasul@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`
    
    window.location.href = mailtoLink
    
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'submit', {
        event_category: 'Contact Form',
        event_label: 'Form Submission'
      })
    }
    
    return true
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting the form. Please try again.')
    return false
  }
}

// Check if resume exists
export const checkResumeExists = async () => {
  try {
    const response = await fetch('/resume.pdf', { method: 'HEAD' })
    return response.ok
  } catch (error) {
    console.error('Error checking resume:', error)
    return false
  }
}

// Performance optimization: Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Lazy loading intersection observer
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}

// Error boundary for button actions
export const safeExecute = (fn, fallback = () => {}) => {
  return (...args) => {
    try {
      return fn(...args)
    } catch (error) {
      console.error('Error executing function:', error)
      return fallback(...args)
    }
  }
}

// Preload critical resources
export const preloadResources = () => {
  try {
    // Preload resume if it exists
    const resumeLink = document.createElement('link')
    resumeLink.rel = 'prefetch'
    resumeLink.href = '/resume.pdf'
    document.head.appendChild(resumeLink)
    
    // Preload fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap'
    fontLink.as = 'style'
    document.head.appendChild(fontLink)
  } catch (error) {
    console.error('Error preloading resources:', error)
  }
}
