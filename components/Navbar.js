import React, { Component } from 'react'
import logo from '../Beer.png';

//Need various links and formatting

export default class Navbar extends Component {
    render() {
        return (
            <div className="App-nav">
                <a href="/">
                    <img src={logo} className="App-logo nav-content" alt="logo" />
                    <h3 className="nav-content nav-left">Store</h3>
                </a>
                <a href="/cart">
                    <h3 className="nav-content nav-right">Cart</h3>
                </a>
            </div>
        )
    }
}
