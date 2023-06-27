import React, { Component } from 'react'
import './box.css'
export default class Box extends Component {

  render() {
    return (
        <div id="cover">
        <form method="get" action="">
          <div class="tb">
            <div class="td">
              <input type="text" placeholder="Search" required/>
            </div>
            <div class="td" id="s-cover">
              <button className='boxbutton' type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
