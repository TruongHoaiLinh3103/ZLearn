import React, { Component } from 'react';
import '../../Styles/Grid.css';
import '../../Styles/Basic.css';
import CartBody from '../CartBody/CartBody';
class Cart extends Component {
    render() {
        return (
            <div>
                <CartBody />
            </div>
        );
    }
}

export default Cart;