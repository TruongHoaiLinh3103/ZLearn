import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import LoginFooter from '../LoginAndRegister/LoginFooter';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <LoginFooter></LoginFooter>
                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(Login);