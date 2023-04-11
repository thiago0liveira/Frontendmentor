import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../globals/Navbar'
import Newbie from './Newbie/Newbie'
import Junior from './Junior/Junior'

export default class Pages extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Newbie />} />
            <Route path="/Newbie" element={<Newbie />} />
            <Route path="/Junior" element={<Junior />} />
        </Routes>
      </div>
    )
  }
}
