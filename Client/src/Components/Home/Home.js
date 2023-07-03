import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import ContainerHome from '../ContainerHome/ContainerHome'; 

class Home extends Component {
    render() {
        return (
            <div>
                <ContainerHome></ContainerHome>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;