import React, { Component } from 'react';
import Footer from "../../Footer/Footer";
import Menu from '../Menu';
import AllProduct from  "../../ContainerHome/AllProduct/AllProduct"
class Phepthuat extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className='grid'>
                <AllProduct></AllProduct>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Phepthuat;