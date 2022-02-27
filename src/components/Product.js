import React from 'react';
import '../index.css';

export default class Product extends React.Component {
    render() {
        return(
            <div class="product">
                <div className="imageContainer"><img src={`/img/${this.props.img}`} alt={'zdjęcie produktu'} /></div>
                <h4>{this.props.title}</h4>
                <h5>{this.props.premiera}</h5>
            </div>
        );
    }
}