import React, { Component } from 'react';
import "./Menu.css";
import {withRouter} from "react-router-dom";
class Menu extends Component {
    constructor(){
        super();
        this.black = () => {
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <div className='menu__product'>
                <div className='menu__product-heading grid'>
                    <div className='grid__colum12 heading'>
                        <div className='heading__icon grid__colum2'>
                            <i className="fa-solid fa-chevron-left" onClick={() => this.black()}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Menu);