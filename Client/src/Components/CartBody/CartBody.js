import React, { Component } from 'react';
import './CartBody.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class CartBody extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        axios.get("http://localhost:4000/cart").then(res => {
            this.setState({
                data: res && res.data ? res.data : []
            })
        })
    }
    render() {
        return (
            <div className='grid'>
                <div className='grid__row'>
                    <div className='grid__colum12'>
                        <div className='title'>
                            <h3>Các sản phẩm đã được thêm vào giỏ hàng</h3>
                        </div>
                        <div className='cart__body'>
                            {this.state.data.map((item) => {
                                return(
                                    <div className='cart__body-body'>
                                        <div className='cart-body-body_checkboxAndImg'>
                                            <input type='checkbox' className='cart-body-body_checkbox'></input>
                                            <img src={item.img} alt='' className='body_checkboxAndImg-img'/>
                                        </div>
                                        <div className='cart__body-body_nameAndPrice'>
                                            <span className='body_tittleAndPrice-name'>{item.name}</span>
                                            <span className='body_tittleAndPrice-price'>{item.price}</span>
                                            <span className="body_tittleAndPrice-voucher">Giảm giá {item.giamGia}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}

export default connect(MapStateToProps)(withRouter(CartBody));