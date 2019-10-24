import React, { Component } from 'react'

//Individual product

export default class Products extends Component {
    render() {
        return (
            <div className="productWindow">
                <h2>{this.props.prod.name}</h2>
                <h3>{this.props.prod.tagline}</h3>
                <img src={this.props.prod.image_url} alt="bottle" height="120px"></img>
                <p>{this.props.prod.description.slice(0,80)}...</p>
            </div>
        )
    }
}
