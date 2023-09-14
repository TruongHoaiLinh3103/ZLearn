import React, { Component } from 'react';
import Footer from "../Footer/Footer";
import "./KenhNguoiBan.css";
import axios from "axios";

class KenhNguoiBan extends Component {
    constructor(){
        super();
        this.state = {
            img: "",
            name: "",
            giamGia: "",
            price: ""
        }
        this.img = (e) => {
            this.setState({
                img: e.target.value
            })
        }
        this.name = (e) => {
            this.setState({
                name: e.target.value
            })
        }
        this.giamGia = (e) => {
            this.setState({
                giamGia: e.target.value
            })
        }
        this.price = (e) => {
            this.setState({
                price: e.target.value
            })
        }
        this.addProduct = () => {
            if(this.state.price === "" || this.state.img === "" || this.state.giamGia ==="" || this.state.name ===""){
                alert("Vui lòng nhập đầy đủ thông tin sản phẩm, thông tin không hợp lê!")
            }else{
                axios.post("http://localhost:4000/product", this.state, {
                    headers: {
                        accessToken: sessionStorage.getItem("accessToken")
                    }
                }).then(res => {
                    if(res.data.error){
                        alert("Vui lòng đăng nhập để bán sản phẩm!")
                    }else{
                        alert("Sản phẩm của bạn đã được phê duyệt để bán!")
                    }
                })
            }
        }
    }
    render() {
        return (
            <div className='grid'>
                <div className="center">
                    <form className="content__form">
                        <div className="content__inputs">
                        <label>
                            <input required="" type="text" onChange={(e) => this.img(e)} value={this.state.img} />
                            <span>Link ảnh sản phẩm</span>
                        </label>
                        <label>
                            <input required="" type="text" onChange={(e) => this.name(e)} value={this.state.name} />
                            <span>Tên sản phẩm</span>
                        </label>
                        <label>
                            <input required="" type="text" onChange={(e) => this.giamGia(e)} value={this.state.giamGia} />
                            <span>Giảm giá</span>
                        </label>
                        <label>
                            <input required="" type="text" onChange={(e) => this.price(e)} value={this.state.price} />
                            <span>Giá sản phẩm</span>
                        </label>
                        </div>
                        <button onClick={() => this.addProduct()} >Add sản phẩm</button>
                    </form>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
            
        );
    }
}

export default KenhNguoiBan;