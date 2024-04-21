import React, { Component } from 'react'
import Search from './Search'
import '../Css/Header.css'
import logo from '../Images/logo.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="logo">
                    <img src={ logo } alt='logo' />
                </div>
                <div className="brand">
                    <p> habibi movies web </p>
                </div>

               <Search />

            </div>
        )
    }
}

export default Header
