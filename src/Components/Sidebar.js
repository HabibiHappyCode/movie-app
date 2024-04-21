import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../Css/Sidebar.css'

export class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-contianer'>
                <FontAwesomeIcon icon={faHome} className='icon' />
                <p>home</p>
            </div>
        )
    }
}

export default Sidebar
