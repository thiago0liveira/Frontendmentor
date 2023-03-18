import React, { Component } from 'react'
import Card from './components/Card'

export default class QrCode extends Component {
  render() {
    return (
      <div className="flex justify-center w-screen h-screen bg-qr_code_bg">
        <Card/>
      </div>
    )
  }
}
