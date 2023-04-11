import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
import ImgYellow from '../../../assets/sunnyside/desktop/image-transform.jpg'
import ImgRed from '../../../assets/sunnyside/desktop/image-stand-out.jpg'

export default class Sunnyside extends Component {
  render() {
    return (
      <div className="bg-sunnyside_blue" >
        <Navbar />
        <div className="mx-auto max-w-7xl pt-3  lg:px-10">
          <div className='bg-cover bg-no-repeat bg-center h-[670px] sm:bg-sunnyside-header-desktop bg-sunnyside-header-mobile'>
            <h2 className='tracking-widest pt-[6rem] text-6xl text-center font-fraunces text-white'>WE ARE CREATIVES</h2>
            <div className='flex items-center justify-center mt-28'>
              <ArrowLongDownIcon className=" h-36 w-36 stroke-1 text-white" />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-wrap'>
            <div className=' bg-white lg:w-1/2 sm:w-full w-full order-2 lg:order-1'>
              <div className='m-24'>
                <h2 className='font-fraunces font-semibold text-5xl mb-6' >Transform your brand</h2>
                <p className='mb-6'>We are a full-service creative agency specializing in helping brands grow fast.
                  Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a className='font-fraunces hover:rounded-full hover:bg-sunnyside_yellow hover:border-separate hover:px-2 mb-6' href='#'>LEARN MORE</a>
              </div>
            </div>
            <div className='bg-sunnyside_yellow  lg:w-1/2 sm:w-full w-full order-1 lg:order-2'>
              <img className='w-full' src={ImgYellow} />
            </div>
            <div className='bg-sunnyside_soft_red lg:w-1/2 sm:w-full w-full order-3 '>
              <img className='w-full' src={ImgRed} />
            </div>
            <div className=' bg-white lg:w-1/2 sm:w-full w-full order-4 '>
              <div className='m-24'>
                <h2 className='font-fraunces font-semibold text-5xl mb-6' >Stand out to the right audience</h2>
                <p className='mb-6'>Using a collaborative formula of designers, researches, photographers, videographers and copywriters, we'll build and extend your brand in digital places.
                </p>
                <a className='font-fraunces hover:rounded-full hover:bg-sunnyside_yellow hover:border-separate hover:px-2 mb-6' href='#'>LEARN MORE</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
