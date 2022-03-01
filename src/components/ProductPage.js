import React from 'react';
import '../index.css';
import Filters from './Filters';
import ProductList from './ProductList';

export default class ProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            year: "",
            month: ""
        }
        this.yearFilter = this.yearFilter.bind(this);
        this.monthFilter = this.monthFilter.bind(this);
    }

    yearFilter(year) {
        if(year == this.state.year) year="";
        this.setState({year: year});
    }

    monthFilter(month) {
        if(month == this.state.month) month="";
        this.setState({month: month});
    }

    render() {
        return(
            <div>
                <Filters yearFilter={this.yearFilter} monthFilter={this.monthFilter} year={this.state.year} month={this.state.month} />
                <ProductList year={this.state.year} month={this.state.month} />
            </div>
        );
    }
}