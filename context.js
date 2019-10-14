import React, { Component } from 'react'
import { beerList } from './data'

let productList = beerList;

const ProductContext = React.createContext();

class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value={productList}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
