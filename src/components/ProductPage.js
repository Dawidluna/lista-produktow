import React from 'react';
import '../index.css';
import Filters from './Filters';
import ProductList from './ProductList';

export default class ProductPage extends React.Component {
    render() {
        return(
            <div>
                <Filters />
                <ProductList />
            </div>
        );
    }
}