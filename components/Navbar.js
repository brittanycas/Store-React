import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Beer.png';

//Need various links and formatting

export default class Navbar extends Component {
    render() {
        return (
            <div className="App-nav">
                <Link to={'/'}>
                    <img src={logo} className="App-logo nav-content" alt="logo" />
                    <h3 className="nav-content nav-left">Store</h3>
                </Link>
                <Link to={'/cart'}>
                    <h3 className="nav-content nav-right">Cart</h3>
                </Link>
            </div>
        )
    }
}
