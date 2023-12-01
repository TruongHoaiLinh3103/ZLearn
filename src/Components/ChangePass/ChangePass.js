import React, { Component } from 'react';
import './ChangePass.css';
import Footer from '../Footer/Footer';
class ChangePass extends Component {
    constructor(){
        super();
        this.state = {
            oldPass: '',
            nowPass: '',
            ChangePass: '',
        }
        this.oldChange = (e) => {
            this.setState({
                oldPass: e.target.value
            })
        }
        this.nowChange = (e) => {
            this.setState({
                nowPass: e.target.value
            })
        }
        this.okChange = (e) => {
            this.setState({
                ChangePass: e.target.value
            })
        }
        this.perfectChange = () => {
            console.log("Anh không đẹp trai")
        }
    }
    render() {
        return (
            <div>
                <div className='ChangePass'>
                    <div className='ChangePass-box'>
                        <h2>Thay đổi mật khẩu</h2>
                        <div className='ChangePass-box_item'>
                            <input type='password' value={this.state.oldPass} onChange={(e) => this.oldChange(e)} placeholder='Mật khẩu cũ'/>
                        </div>
                        <div className='ChangePass-box_item'>
                            <input type='password' value={this.state.nowPass} onChange={(e) => this.nowChange(e)} placeholder='Mật khẩu mới'/>
                        </div>
                        <div className='ChangePass-box_item'>
                            <input type='password' value={this.state.ChangePass} onChange={(e) => this.okChange(e)} placeholder='Nhập lại mật khẩu mới'/>
                        </div>
                        <div className='ChangePass-box_item'>
                            <button className='ChangePass-box_item_btn' 
                            onClick={() => this.perfectChange()}>Thay đổi mật khẩu</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ChangePass;