import { useEffect } from 'react'
import { preloadResources, debounce } from '../utils/buttonHandlers'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    preloadResources()

    // Optimize scroll performance
    const optimizedScrollHandler = debounce(() => {
      // Handle scroll events efficiently
      const scrollY = window.scrollY
      const navbar = document.querySelector('nav')
      
      if (navbar) {
        if (scrollY > 50) {
          navbar.style.background = 'rgba(10, 10, 10, 0.98)'
        } else {
          navbar.style.background = 'rgba(10, 10, 10, 0.95)'
        }
      }
    }, 10)

    // Add optimized scroll listener
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true })

    // Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all sections for lazy animation
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    // Preload images when they're about to enter viewport
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        }
      })
    }, { rootMargin: '50px' })

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => imageObserver.observe(img))

    // Performance monitoring
    if ('performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value)
            }
          }
        })
      })

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring not fully supported')
      }
    }

    // Memory cleanup
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler)
      observer.disconnect()
      imageObserver.disconnect()
    }
  }, [])

  // Service Worker registration for caching
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration)
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceOptimizer
