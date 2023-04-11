import React, { Component } from 'react'
import sunnySideImage from '../../assets/sunnyside/desktop-preview.jpg'
import ProjectCard from '../../globals/ProjectCard'

export default class Junior extends Component {
    render() {
        return (
          <div className='bg-gray-300 min-h-screen pt-10 pb-10'>
          <div className='flex justify-center flex-wrap gap-8' >
            <ProjectCard 
              path="/Junior/Sunnyside"
              title="Sunnyside agency landing page"
              description="This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS."
              originalURL="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef/hub"
              image={sunnySideImage}
            />
          </div>
        </div>
        )
      }
    }
    