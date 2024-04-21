import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../Css/Search.css'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      list: []
    }
  }



  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <form className='search-container' onSubmit={this.submit}>

        <input className='search' type="text" name='text' onChange={this.change} />
        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} type="submit" />

      </form>
    )
  }
}

export default Search
