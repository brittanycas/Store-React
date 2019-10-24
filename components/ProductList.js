import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import Products from './Products'

export default class ProductList extends Component {
    render() {
        return (
            <div className="productList">
                <ProductConsumer>
                    {value => {
                        if(value.length !== 0){
                            return value.map(el => {
                                return (
                                    <Products key={el.id} prod={el} />
                                )
                            })
                        } else {
                            return <h1>No products found</h1>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
