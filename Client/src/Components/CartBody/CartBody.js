import React, { Component } from 'react';
import './CartBody.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class CartBody extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            userName: ""
        }
        this.nextProduct = (data) => {
            // this.props.history.push()
            console.log(data)
        }
        this.nextKey = (e) => {
            if(e.which === 13){
                const useName = this.state.userName;
                axios.get(`http://localhost:4000/cart/${useName}`).then(res => {
                    this.setState({
                        data: res && res.data ? res.data : []
                    })
                })
            }
        }
        this.nextChange = (e) => {
            this.setState({
                userName: e.target.value
            })
        }
    }
    render() {
        return (
            <div className='grid'>
                <div className='grid__row'>
                    <div className='grid__colum12'>
                        <div className='title'>
                            <h3>Nhập Username của bạn để các sản phẩm hiện ra</h3>
                            <input type='text'
                                value={this.state.userName}
                                onKeyDown={(e) => this.nextKey(e)}
                                onChange={(e) => this.nextChange(e)}
                                placeholder='Vd: @apolo'
                                style={{
                                    width: "110px",
                                    padding: "10px 0px 10px 20px",
                                    margin: "0px 0px 20px 20px"
                                }}
                            />
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

export default withRouter(CartBody);