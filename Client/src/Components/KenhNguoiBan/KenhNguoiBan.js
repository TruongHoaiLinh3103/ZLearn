import React, { Component } from 'react';
import "./KenhNguoiBan.css";
import axios from "axios";

class KenhNguoiBan extends Component {
    constructor(){
        super();
        this.state = {
            img: "",
            name: "",
            giamGia: "",
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
        this.loaiMuc = (e) => {
            this.setState({
                giamGia: e.target.value
            })
        }
        this.addProduct = () => {
            if(this.state.img === "" || this.state.loaiMuc ==="" || this.state.name ===""){
                alert("Vui lòng nhập đầy đủ thông tin của mục, thông tin không hợp lê!")
            }else{
                axios.post("http://localhost:4000/product", this.state, {
                    headers: {
                        accessToken: sessionStorage.getItem("accessToken")
                    }
                }).then(res => {
                    if(res.data.error){
                        alert("Vui lòng đăng nhập để đăng mục!")
                    }else{
                        alert("Mục của bạn đã được phê duyệt!")
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
                            <span>Ảnh mục</span>
                        </label>
                        <label>
                            <input required="" type="text" onChange={(e) => this.name(e)} value={this.state.name} />
                            <span>Tên mục</span>
                        </label>
                        <label>
                            <input required="" type="text" onChange={(e) => this.loaiMuc(e)} value={this.state.giamGia} />
                            <span>Loại mục</span>
                        </label>
                        </div>
                        <button onClick={() => this.addProduct()} >Add sản phẩm</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default KenhNguoiBan;