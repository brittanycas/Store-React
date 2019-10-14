import React, { Component } from 'react'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        if(value.length !== 0){
                            console.log(value.length)
                            return <h1>{value[0].name}</h1>
                        } else {
                            return <h1>null</h1>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
