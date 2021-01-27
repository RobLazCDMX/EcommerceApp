import React from 'react';
import './ProductItem.css';


class Products extends React.Component {
    render() {
        return (
            <div >
                <h2 >{this.props.item.name}</h2>
                <img className="Img" alt="Not available"
                    src={this.props.item.image} />
                <p >Price: ${this.props.item.price}</p>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

export default Products;