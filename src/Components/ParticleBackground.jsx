import React, { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadStarsPreset } from '@tsparticles/preset-stars'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine)
  }, [])

  const particlesConfig = {
    preset: "stars",
    background: {
      opacity: 0
    },
    particles: {
      color: {
        value: ["#00ff88", "#00d4ff", "#8b5cf6"]
      },
      links: {
        color: "#00ff88",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    }
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  )
}

export default ParticleBackground
