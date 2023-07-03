import React, { Component } from 'react';
import Footer from "../Footer/Footer";
import "./KenhNguoiBan.css";
import axios from "axios"

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
            axios.post("http://localhost:4000/product", this.state).then(res => {
                console.log("Success :)))")
            })
        }
    }
    render() {
        return (
            <div className='grid'>
                <div class="center">
                    <form class="content__form">
                        <div class="content__inputs">
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