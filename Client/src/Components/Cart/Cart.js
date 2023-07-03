import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import '../../Styles/Grid.css';
import '../../Styles/Basic.css';
import CartBody from '../CartBody/CartBody';

class Cart extends Component {
    render() {
        return (
            <div>
                <CartBody />
                <Footer></Footer>
            </div>
        );
    }
}

export default Cart;