import React from 'react';
import Yadi from '../../assets/Yadi.png';
import Aux from '../../hoc/Aux';
import './Navbar.css';
import {Link} from 'react-router-dom';


const navBar = () => {
    return ( 
        <Aux>
            <div>
            <header>
            <img src={Yadi}  alt=" cannot be found" id="Logo"/>
            </header>
            <nav id="Header">
        
                <Link to="/">Home</Link>
                <Link to="/products">Product</Link>
                <Link to="/contact">Contact Us</Link>

            </nav>
            </div>    
        </Aux> 
    )
}
 
export default navBar;