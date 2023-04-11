import React, { Component } from 'react'
import qrCodeImage from '../../assets/qr-code/qr-code-component-preview.jpg';
import ProjectCard from '../../globals/ProjectCard';

export default class Newbie extends Component {
  render() {
    return (
      <div className='bg-gray-300 min-h-screen pt-10 pb-10'>
        {/* <Navbar/> */}
        <div className='flex justify-center flex-wrap gap-8' >
          <ProjectCard 
            path="/Newbie/QrCode"
            title="Qr code component"
            description=" perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet."
            originalURL="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
            image={qrCodeImage}
          />
        </div>
      </div>
    )
  }
}
