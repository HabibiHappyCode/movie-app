import React, { Component } from 'react'
import '../Css/Body.css'


export class Body extends Component {
  render() {
    return (
      <div className='contents'>
        {
            this.props.children
        }
      </div>
    )
  }
}

export default Body
