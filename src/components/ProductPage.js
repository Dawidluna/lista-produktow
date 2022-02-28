import React from 'react';
import '../index.css';
import Filters from './Filters';
import ProductList from './ProductList';

export default class ProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.setState = {
            year: "",
            month: ""
        }
    }
    render() {
        return(
            <div>
                <Filters />
                <ProductList />
            </div>
        );
    }
}