import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";
import SearchNav from "../Components/SearchNav/SearchNav";
import logo from '../../src/Assets/Img/logo.png';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

class Nav extends React.Component{
    constructor(){
        super();
        this.img = () => {
            this.props.history.push("/")
        }
    }
    render(){
        return(
            <div className='body'>
                <nav className="navbar">
                    {/* LOGO */}
                    <div className="logo__shop">
                        <img src={logo} alt="" onClick={() => this.img()}/>
                    </div>
                    <div className="hidden">
                        <SearchNav />
                    </div>
                    {/* NAVIGATION MENU */}
                    <div className="menu">
                        <li><NavLink to="/" activeClassName="selected" exact={true}><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                        <li><NavLink to="/cart" activeClassName="selected"><i className="fa-solid fa-cart-shopping"></i>Giỏ hàng</NavLink></li>
                        <div className="Account">
                            <li><NavLink to="/register" activeClassName="selected"><i className="fa-solid fa-user"></i>Đăng ký</NavLink></li>
                            <span>|</span>
                            <li><NavLink to="/login" activeClassName="selected"><i className="fa-solid fa-user"></i>Đăng nhập</NavLink></li>
                        </div>
                    </div>
                    {/* USING CHECKBOX HACK */}
                    <label htmlFor="nav__bars" className="nav__bars">
                            <i className="fa-solid fa-bars"></i>
                        </label>
                        <input type="checkbox" hidden name="" id="nav__bars" />
                        <div className="nav__bars-box">
                            <label htmlFor="nav__bars" className="navbar__overlay"></label>
                            <div className="navbar__body">
                                <ul className="bars__box-nav">
                                    <li><NavLink to="/"><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                                    <li className="listProductHidden"><NavLink to="#" style={{cursor: "pointer"}}><i class="fa-solid fa-hand-holding-heart"></i>Danh mục sản phẩm</NavLink>
                                    <div className="all__product">
                                        <ul>
                                            <li><NavLink to="/tanCong">Tấn công</NavLink></li>
                                            <li><NavLink to="/phepThuat">Phép thuật</NavLink></li>
                                            <li><NavLink to="/phongThu">Phòng Thủ</NavLink></li>
                                            <li><NavLink to="/diRung">Đi rừng</NavLink></li>
                                            <li><NavLink to="/tocChay">Tốc chạy</NavLink></li>
                                            <li><NavLink to="/phuTro">Phụ trợ</NavLink></li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li><NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i>Giỏ hàng</NavLink></li>
                                    <li><NavLink to="/register"><i className="fa-solid fa-user"></i>Đăng ký</NavLink></li>
                                    <li><NavLink to="/login"><i className="fa-solid fa-user"></i>Đăng nhập</NavLink></li>
                                    <SearchNav></SearchNav>
                                </ul>
                                <label htmlFor="nav__bars" className="bars__box-icon">
                                    <i className="fa-solid fa-xmark"></i>
                                </label>
                            </div>
                        </div>
                </nav>
            </div>
        )
    }
}
export default withRouter(Nav);