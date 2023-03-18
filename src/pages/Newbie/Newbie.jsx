import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import Navbar from '../../globals/Navbar'
import qrCodeImage from '../../assets/qr-code-component-preview.jpg';

export default class Newbie extends Component {
  render() {
    return (
      <div className='bg-gray-300 h-screen'>
        <Navbar/>
          <div className='flex justify-center mt-10'>
            <div className='box-border h-4/5 w-80 mt-28 rounded-sm bg-white p-3.5 text-center shadow-md'>
          <Link to={"/Newbie/QrCode"}>
            <img src={qrCodeImage}/>
            <h2 className='font-bold text-xl'>Qr code component</h2>
            <p>A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.</p>
           </Link>
            <a className='font-extralight text-cyan-600' target='_blank' href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'>Challenge Especification</a>
            </div>
          </div>
      </div>
    )
  }
}
