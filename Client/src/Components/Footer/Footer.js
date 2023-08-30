import React, { Component } from 'react';
import './Footer.css';
import '../../Styles/Grid.css';
import DowloadingImg from '../../Assets/Img/1680087190573.3215.png';
import { LenalenData} from "./LenalenData";
import { LinkContactData } from "./LinkContactData";
import { CustomerData } from "./CustomerData";
import { NavLink } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>   
                <footer className="footer">
                    <div className="footer__header">
                        <div className="grid c__colum12 m__colum12">
                            <div className="grid__row">
                                <div className="footer__header-box"></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__container">
                        <div className="grid">
                            <div className="grid__row box__contact">
                                <div className="grid__colum25 c__colum12 m__colum6">
                                    <ul className="customer-care__list">
                                        <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                                        {CustomerData.map((item) => {
                                            return(
                                                <li key={item.id}><NavLink to="./">
                                                    {item.name}
                                                </NavLink></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="grid__colum25 c__colum12 m__colum6">
                                    <ul className="customer-care__list">
                                        <h3>VỀ LELALEN</h3>
                                        {LenalenData.map((item) => {
                                            return(
                                                item.id === 5 ?
                                                <li key={item.id}><NavLink to={item.link}>
                                                    {item.name}
                                                </NavLink></li>
                                                :
                                                <li key={item.id}>{item.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="grid__colum25 c__colum12 m__colum6">
                                    <div className="img__customer">
                                        <h3>THANH TOÁN</h3>
                                    </div>
                                    <div className="img__customer">
                                        <h3>ĐƠN VỊ VẬN CHUYỂN</h3>
                                    </div>
                                </div>
                                <div className="grid__colum25 c__colum12 m__colum6">
                                    <h3 className="customer__title">THEO DÕI CHÚNG TÔI TRÊN</h3>
                                    <ul className="link__contact">
                                        {LinkContactData.map((item) => {
                                            return(
                                                <li key={item.id}><i className={item.icon}></i><a href="./">{item.name}</a></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="grid__colum25 c__colum12 m__colum6">
                                    <h3 className="customer__title">TẢI ỨNG DỤNG TẠI</h3>
                                    <div className="link__app-dowlooding">
                                        <div className="link__QR">
                                            <a href="./"><img src={DowloadingImg} alt="Tải xuống" /></a>
                                        </div>
                                        <div className="link__app">
                                            <a href="./"><img src="Asset/Img/39f189e19764dab688d3850742f13718.png" alt="" /></a>
                                            <a href="./"><img src="Asset/Img/f4f5426ce757aea491dce94201560583.png" alt="" /></a>
                                            <a href="./"><img src="Asset/Img/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;