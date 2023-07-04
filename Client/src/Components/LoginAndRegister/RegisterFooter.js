import React, { Component } from 'react';
import './LoginFooterAndRegister.css'
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import axios from "axios";

class RegisterFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            useName: '',
            email: "",
            password: "",
            confirmPassword: "",
        }

        // FULLNAME
        this.fullname = (e) => {
            this.setState({
                fullname: e.target.value
            })
        }
        this.name = () => {
            if(!this.state.fullname){
                toast.error("Vui lòng nhập họ tên đầy đủ của bạn!")
                return 0;
            }
            else{
                this.isValid = (temp) =>{
                    let regex = /([A-Za-z_]{1,15})/
                    return regex.test(temp);
                }
                if(this.isValid(this.state.fullname) === false){
                    toast.warning("Tên chỉ có các kí tự chữ")
                    return 0
                }
                else{
                    // toast.success("Username success :)")
                    return 1;
                } 
            }
        }
        this.fullnameBlur = () => {
            this.name()
        }

        // USERNAME
        this.useName = (e) => {
            this.setState({
                useName: e.target.value
            })
        }
        this.user = () => {
            if(!this.state.useName){
                toast.error("Vui lòng nhập Username!")
                return 0;
            }
            else{
                this.isValid = (temp) =>{
                    let regex = /@([A-Za-z0-9_]{1,15})/
                    return regex.test(temp);
                }
                if(this.isValid(this.state.useName) === false){
                    toast.warning("Thêm ký tự '@' trước Username")
                    return 0
                }
                else{
                    // toast.success("Username success :)")
                    return 1;
                } 
            }
        }
        this.useNameBlur = () => {
            this.user()
        }

        // EMAIL
        this.email = (e) => {
            this.setState({
                email: e.target.value
            })
        }
        this.mail = () => {
            if(!this.state.email){
                toast.error("Vui lòng nhập Email!")
                return 0;
            }
            else{
                this.isValid = (temp) =>{
                    let regex =  /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                    return regex.test(temp);
                }
                if(this.isValid(this.state.email) === false){
                    toast.warning("Email nhập vào không chính xác")
                    return 0
                }
                else{
                    // toast.success("Username success :)")
                    return 1;
                } 
            }
        }
        this.emailBlur = () => {
            this.mail()
        }

        // PASSWORD
        this.password = (e) => {
            this.setState({
                password: e.target.value
            })
        }
        this.pass = () => {
            if(!this.state.password){
                toast.error("Vui lòng nhập mật khẩu!")
                return 0;
            }
            else{
                this.isValid = (temp) =>{
                    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                    return regex.test(temp);
                }
                if(this.isValid(this.state.password) === false){
                    toast.warning("Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt")
                    return 0;
                }
                else{
                    // toast.success("Password success :)")
                    return 1;
                } 
            }
        }
        this.passwordBlur = () => {
            this.pass()
        }

        // CONFIRM PASSWORD
        this.confirmPassword = (e) => {
            this.setState({
                confirmPassword: e.target.value
            })
        }
        this.confirm = () => {
            if(!this.state.confirmPassword){
                toast.error("Vui lòng nhập mật khẩu xác minh!")
                return 0;
            }
            else{
                if(this.state.confirmPassword !== this.state.password){
                    toast.warning("Mật khẩu nhập lại không hợp lệ")
                    return 0;
                }
                else{
                    // toast.success("Password success :)")
                    return 1;
                } 
            }
        }
        this.confirmPasswordBlur = () => {
            this.confirm()
        }

        // SIGN UP
        this.click = () => {
            this.name() === 1 && 
            this.user() === 1 && 
            this.mail() === 1 && 
            this.pass() === 1 &&  
            this.confirm() === 1 &&
            axios.post("http://localhost:4000/auth", this.state).then(res => {
                window.alert("Đăng kí thành công")
                this.setState({
                    fullname: "",
                    useName: '',
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
            })
        }
        // NEXT PAGE SIGN IN
        this.signIn = () => {
            this.props.history.push("/login")
        }
    }
    render() {
        return (
            <div className='grid'>
                <div className='grid__row'>
                    <div className='grid__colum12 backGroundColorFooter'>
                        <div class="form-container">
                            <p class="titleLoginAndRegister">Register</p>
                            <form class="form">
                                <div class="input-group">
                                    <label for="fullname">Fullname</label>
                                    <input type="text" name="fullname" id="fullname" placeholder=""
                                    value={this.state.fullname}
                                    onChange={(e) => this.fullname(e)}
                                    onBlur={() => this.fullnameBlur()}
                                    />
                                </div>
                                <div class="input-group">
                                    <label for="username">Username</label>
                                    <input type="text" name="username" id="username" placeholder=""
                                    value={this.state.useName}
                                    onChange={(e) => this.useName(e)}
                                    onBlur={() =>this.useNameBlur()}
                                    />
                                </div>
                                <div class="input-group">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder=""
                                    value={this.state.email}
                                    onChange={(e) => this.email(e)}
                                    onBlur={() => this.emailBlur()}
                                    />
                                </div>
                                <div class="input-group">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder=""
                                    value={this.state.password}
                                    onChange={(e) => this.password(e)}
                                    onBlur={() =>this.passwordBlur()}
                                    />
                                </div>
                                <div class="input-group">
                                    <label for="confirmPassword">Confirm Password</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder=""
                                    value={this.state.confirmPassword}
                                    onChange={(e) => this.confirmPassword(e)}
                                    onBlur={() => this.confirmPasswordBlur()}
                                    />
                                </div>
                                <a onClick={() => this.click()}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Sign up
                                </a>
                            </form>
                            <div class="social-message">
                                <div class="line"></div>
                                <p class="message">Login with social accounts</p>
                                <div class="line"></div>
                            </div>
                            <div class="social-icons">
                                <button aria-label="Log in with Google" class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>
                            </div>
                            <p class="signup">Already have an acount ?
                                <a rel="noopener noreferrer" href="#" class="" onClick={() => this.signIn()}> Sign in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterFooter);