import React, { Component } from 'react';
import './ContainerHome.css';
import '../../Styles/Grid.css';
import '../../Styles/Basic.css';
import { Category } from './Category'; 
import { NavLink } from "react-router-dom";
import AllProduct from './AllProduct/AllProduct';
import Sliederlab from './Sliderlab/Sliederlab';

class ContainerHome extends Component {
    render() {
        return (
            <div className='container'>
                <div className="grid">
                    <Sliederlab/>
                    <div className="grid__row">
                        <div className="grid__colum2 c__colum0 m__colum0">
                            <div className='title'>
                                <h3>Danh mục sản phẩm</h3>
                            </div>
                            <ul className='Category'>
                                {Category.map((item) => {
                                    return(
                                        <li key={item.id}><NavLink to={item.idLink} activeClassName="selec">{item.name}</NavLink></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="grid__colum10 c__colum12 m__colum12">
                            <div className='title'>
                                <h3>Sản phẩm được đề xuất</h3>
                            </div>
                            <div className='home-product'>
                                <AllProduct></AllProduct>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerHome;