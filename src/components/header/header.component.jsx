import React, { Component } from 'react'
import './header.styles.scss'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="logo">
                    <h1>Artistic Programmer</h1>
                </div>
                <div>
                    <i className="fas fa-bars menu-icon"></i>
                </div>
            </nav>
        )
    }
}

export default Header