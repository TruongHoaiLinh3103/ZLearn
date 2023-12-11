import React, { Component } from 'react';
import Menu from '../Menu';
import AllProduct from  "../../ContainerHome/AllProduct/AllProduct"
class Tocchay extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className='grid'>
                <AllProduct></AllProduct>
                </div>
            </div>
        );
    }
}

export default Tocchay;