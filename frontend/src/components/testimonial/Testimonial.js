import React, { Component } from 'react'
import './testimonial.css'
export default class Testimonial extends Component {
  render(props) {
    return (
        <div class="testimonial">
        <div class="testimonialpara">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
        <div class="testimonialdetails">
          <p class="testimonialapostrophe">❛❛</p>
          <div class="testimonialname testimonialflex">
          <img
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=932&q=80"
            alt="face"/>
          <p>Name</p></div>
          <div class="testimonialrating testimonialflex">
          <img src="https://www.svgrepo.com/show/513408/star.svg" alt="star"/>
          <p>4.5</p></div>
        </div>
      </div>
    )
  }
}
