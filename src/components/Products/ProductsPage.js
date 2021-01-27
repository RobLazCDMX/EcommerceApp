import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js'
import './ProductItem.css'
import items from './ProductData.json';
import ProductItems from './ProductItems.js';

class Filter extends Component {
    state= {
        type: "default",
        cost: "default"
    }
    

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }


    render() {
    const { type, cost } = this.state;
        return (
           <Aux>
            
            <div className="grid-container">
                <label className="Label">Type:</label>
                <select  value={type} onChange={this.handlePriceDropdownSelect}> 
                    <option value="default">All</option>
                    <option value="Electrical">Electrical & Lighting Products</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="PowerTools">Hand and Power Tools</option>
                    <option value="BuildingMaterial">Building Material</option>
                    <option value="Fasteners">Fasteners</option>
                </select>
    
                <label className="Label">Price:</label>
                <select  value={cost} onChange={this.handlePriceDropdownSelect}>
                    <option value="default">All</option>
                    <option value="low">Under $30</option>
                    <option value="medium">$30 - $15</option>
                    <option value="high">Above $100</option>
                </select>
            </div>
           
  
            <div className="grid-container">
                {items.items.map((item) => {
                    if (type === 'default' && cost === 'default') {
                        return <ProductItems item={item} />
                    } else if (type === item.type && cost === item.cost) {
                        return <ProductItems item={item} />
                    } else if (type === item.type || cost === item.cost) {
                        return <ProductItems item={item} />
                    }
                })}
            </div>
                
           </Aux>
        );
    }
}


export default Filter;
