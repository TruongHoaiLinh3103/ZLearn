import React, { Component } from 'react';
import '../../Styles/Grid.css';
import './LoginFooterAndRegister.css'
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../Redux/action/Login';

class LoginFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useName: '',
            password: "",
        }
        // USERNAME
        this.useName = (e) => {
            this.setState({
                useName: e.target.value
            })
        }
        this.user = () => {
            if(!this.state.useName){
                toast.error("Vui lòng nhập Username !")
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
        // SIGN IN
        this.metho = () => {
            if(this.user() === 1 && this.pass() === 1){
                const data = {useName: this.state.useName, password: this.state.password};
                axios.post("http://localhost:4000/auth/login",data).then(res => {
                    if(res.data.error){  
                        window.alert(res.data.error)
                    }
                    else{
                        sessionStorage.setItem("accessToken", res.data)
                        this.props.addUser({
                            id: Math.floor(Math.random() * 100000),
                            username: this.state.useName
                        })
                        this.props.history.push("/")
                    }
                })
            }
        }
        
        // NEXT PAGE SIGN UP
        this.signUp = () => {
            this.props.history.push("/register")
        }
        this.changePassword = () => {
            this.props.history.push('/changePass')
        }
    }
    render() {
        return (
            <div className='grid'>
                <div className='grid__row'>
                    <div className='grid__colum12 backGroundColorFooter'>
                        <div className="form-container">
                            <p className="titleLoginAndRegister">Login</p>
                            <form className="form">
                                <div className="input-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" id="username" placeholder="" value={this.state.useName} 
                                    onChange={(e) => this.useName(e)}
                                    onBlur={() =>this.useNameBlur()}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="" value={this.state.password} 
                                    onChange={(e) => this.password(e)}
                                    onBlur={() =>this.passwordBlur()}
                                    />
                                    <div className="forgot">
                                        <a hrel="noopener noreferrer" href="#" onClick={() => this.changePassword()}>Change Password ?</a>
                                    </div>
                                </div>
                                <a onClick={() => this.metho()}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Sign in
                                </a>
                            </form>
                            <div className="social-message">
                                <div className="line"></div>
                                <p className="message">Login with social accounts</p>
                                <div className="line"></div>
                            </div>
                            <div className="social-icons">
                                <button aria-label="Log in with Google" className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className="signup">Don't have an account?
                                <a rel="noopener noreferrer" href="#" onClick={() => this.signUp()}> Sign up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginFooter));