import React, { Component } from 'react'
import qrImage from '../../../../assets/image-qr-code.png';

export default class Card extends Component {
  render() {
    return (
      <div className='font-outfit box-border h-[470px] w-80 mt-36 rounded-2xl bg-white p-3.5 text-center shadow-md'>
        <img className='rounded-xl' src={qrImage} alt="QR code for visiting Frontend Mentor"/>
        <h2 className="text-2xl font-bold mt-4">Improve your front-end skills by building projects</h2>
        <p className='mt-6 mb-6 text-sm font-normal text-gray-400'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    )
  }
}
