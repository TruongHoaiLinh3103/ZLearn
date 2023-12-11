import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";
import logo from '../../Assets/Img/d252646740d1958fccc0.jpg';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { connect } from 'react-redux';

class Nav extends React.Component{
    constructor(){
        super();
        this.img = () => {
            this.props.history.push("/")
        }
        this.logOut = (item) => {
            sessionStorage.removeItem("accessToken");
            this.props.deleteUserRedux(item)
            this.props.history.push("/")
        }
    }
    render(){
        let user = this.props.dataRedux;
        return(
            <div className='body'>
                <nav className="navbar">
                    {/* LOGO */}
                    <div className="logo__shop">
                        <img src={logo} alt="" onClick={() => this.img()}/>
                    </div>
                    {/* NAVIGATION MENU */}
                    <div className="menu">
                        <li><NavLink to="/" activeClassName="selected" exact={true}><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                        <li><NavLink to="/love" activeClassName="selected"><i className="fa-solid fa-heart"></i>Yêu thích</NavLink></li>
                        <div className="Account">
                            {!sessionStorage.getItem("accessToken") ? (
                                <>
                                    <li><NavLink to="/register" activeClassName="selected"><i className="fa-solid fa-user"></i>Đăng ký</NavLink></li>
                                    <span>|</span>
                                    <li><NavLink to="/login" activeClassName="selected"><i className="fa-solid fa-user"></i>Đăng nhập</NavLink></li>
                                </>
                            ) : (
                                user.map((item) => {
                                    return(
                                        <li className="body__logout" key={item.id}><span className="logOut" onClick={() => this.logOut(item)}>Logout</span></li>
                                    )
                                })
                            )}
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
                                    <li className="listProductHidden"><NavLink to="#" style={{cursor: "pointer"}}><i className="fa-solid fa-hand-holding-heart"></i>Danh mục</NavLink>
                                    <div className="all__product">
                                        <ul>
                                            <li><NavLink to="/tanCong">Tấn công</NavLink></li>
                                            <li><NavLink to="/phepThuat">Phép thuật</NavLink></li>
                                            <li><NavLink to="/phongThu">Phòng Thủ</NavLink></li>
                                            <li><NavLink to="/diRung">Đi rừng</NavLink></li>
                                            <li><NavLink to="/tocChay">Tốc chạy</NavLink></li>
                                            <li><NavLink to="/phuTro">Phụ trợ</NavLink></li>
                                            <li><NavLink to="/quanli">Quản lí</NavLink></li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li><NavLink to="/love"><i className="fa-solid fa-heart"></i>Yêu thích</NavLink></li>
                                    {!sessionStorage.getItem("accessToken") ? (
                                        <>
                                            <li><NavLink to="/register"><i className="fa-solid fa-user"></i>Đăng ký</NavLink></li>
                                            <li><NavLink to="/login"><i className="fa-solid fa-user"></i>Đăng nhập</NavLink></li>
                                        </>
                                    ) : 
                                    (
                                        <li className="body__logout"><span className="logOut" onClick={() => this.logOut()}>Logout</span></li>
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                </nav>
            </div>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}
const MapDispatchToProps = (dispatch) => {
    return{
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE__USER', payload: userDelete}),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(withRouter(Nav));
