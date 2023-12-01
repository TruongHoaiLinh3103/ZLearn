import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import RegisterFooter from '../LoginAndRegister/RegisterFooter';
class Register extends Component {
    render() {
        return (
            <div>
                <RegisterFooter></RegisterFooter>
                <Footer></Footer>
            </div>
        );
    }
}

export default Register;