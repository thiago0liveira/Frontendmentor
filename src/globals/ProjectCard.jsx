
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectCard extends Component {
  render() {
    const { path, title, description, originalURL, image } = this.props;
    return (
      <div>
         <div className='box-border h-fit w-80  rounded-sm bg-white p-3.5 text-center shadow-md'>
          <Link to={path}>
            <img src={image}/>
            <h2 className='font-bold text-md'>{title}</h2>
            <p className='text-sm' >{description}</p>
           </Link>
            <a className='font-semibold text-gray-400' target='_blank' href={originalURL}>Challenge Especification</a>
            </div>
      </div>
    )
  }
}
