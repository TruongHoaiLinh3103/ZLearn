import React, { Component } from 'react';
import './CartBody.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cart from '../../Assets/Img/cart-empty.png';
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
        let temp = this.props.dataRedux[0];
        let user = temp ? temp.username : undefined;
        return (
            <div className='grid'>
                <div className='grid__row'>
                    <div className='grid__colum12'>
                        <div className='title'>
                            <h3>Các sản phẩm đã được thêm vào giỏ hàng</h3>
                        </div>
                        {user ? 
                            <div className='cart__body'>
                                {this.state.data.map((item) => {
                                    return(
                                        <>
                                            {user === item.username &&
                                                <div className='cart__body-body' key={item.id}>
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
                                            }
                                        </>
                                    )
                                })}
                            </div>
                            :
                            <div style={{textAlign:'center'}}>
                                <h2
                                style={{
                                    fontSize: "20px",
                                    color: "rgb(101, 103, 107)",
                                    fontWeight: "700",
                                    lineHeight: "24px",
                                    margin: "40px",
                                }}
                                >Không có sản phẩm nào trong giỏ hàng của bạn</h2>
                                <img src={cart} alt='' style={{width:"200px"}}></img>
                            </div>
                        }
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