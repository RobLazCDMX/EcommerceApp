import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";

import ContactUs from '../src/containers/Contact/ContactUs';
import NavBar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

import ProductsPage from './components/Products/ProductsPage'

// import Aux from '../src/hoc/Aux';


import './App.css';




class App extends Component {
  render() {
    return (


        <Router>
      <div>
        <NavBar />
        
        <Switch>
          <Route path="/" exact>
            <HomePage />
            
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route >
            {() => <div>404 Page not found!</div>}
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
    //   <Aux>
    //    <NavBar />
    //     {/* <!-- slide show --> */}
    //     <SlideShow />
    //     {/* <!-- Content  --> */}
    //     <HomePage />
    //     {/* <!-- Footer  --> */}
    //    <Footer />

         
        
    //   </Aux>
    );
  }
  
}

export default App;
