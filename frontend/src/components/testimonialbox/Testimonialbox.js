import React, { Component } from 'react'
import './testimonialbox.css'
import Testimonial from '../testimonial/Testimonial'
export default class Testimonialbox extends Component {
  render() {
    return (
        <>
        <div className='testimonialbox'>
            <h1>What our customers say about our products?</h1>
            <div className='testi'>
      <Testimonial/>
      <Testimonial/>
      </div>
      </div>
      </>
    )
  }
}
