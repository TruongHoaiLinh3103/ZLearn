import React, { Component } from 'react';
import LoginFooter from '../LoginAndRegister/LoginFooter';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <LoginFooter></LoginFooter>
            </div>
        );
    }
}

export default withRouter(Login);