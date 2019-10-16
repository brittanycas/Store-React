import React, { Component } from 'react'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
    render() {
        return (
            <div className="productList">
                <ProductConsumer>
                    {value => {
                        if(value.length !== 0){
                            return value.map(el => {
                                return (
                                    <div className="productWindow">
                                        <h2>{el.name}</h2>
                                        <h3>{el.tagline}</h3>
                                        <img src={el.image_url} alt="bottle" height="120px"></img>
                                        <p>{el.description.slice(0,80)}...</p>
                                    </div>
                                )
                            })
                        } else {
                            return <h1>null</h1>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
