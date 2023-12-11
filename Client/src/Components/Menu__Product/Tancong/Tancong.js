import React, { Component } from 'react';
import Menu from '../Menu';
import AllProduct from  "../../ContainerHome/AllProduct/AllProduct"
class Tancong extends Component {
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

export default Tancong;