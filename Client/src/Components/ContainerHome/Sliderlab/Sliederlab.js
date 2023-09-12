import React, { Component } from 'react';
import "./Silderlab.css";
import { IMGDATA } from './Data/IMGDATA.js';
class Sliederlab extends Component {
    constructor(){
        super();
        const TOTAL_DE_CARDS = IMGDATA.length - 1;
        this.state = {
            number: 0,
            maxma: 1
        }
        this.prev = () => {
            if(this.state.number - 1 < 0){
                this.setState({
                    number: TOTAL_DE_CARDS
                })
            }else{
                this.setState({
                    number: this.state.number - 1
                })
            }
            console.log(this.state.number)
        }
        this.next = () => {
            if(this.state.number + 1 > TOTAL_DE_CARDS){
                this.setState({
                    number: 0
                })
            }else{
                this.setState({
                    number: this.state.number + 1
                })
            }
        }
        this.detail = (item) => {
            this.setState({
                number: item.id - 1
            })
            clearInterval(transition);
        }
        const transition = setInterval(() => {
            this.next()
        },5000)
    }
    render() {
        return (
            <div className='Sliederlab'>
                {IMGDATA.map((item, index) => {
                    return(
                        <div className='Sliederlab-list' key={index}
                        style={{
                            "--atualAtivo": index === this.state.number ? 1 : 0,
                            "--compensacao": (this.state.number - index) / 3,
                            "--direcao": Math.sign(this.state.number - index),
                            "--abs-compensacao": Math.abs(this.state.number - index) / 3,
                            pointerEvents: this.state.number === index ? "auto" : "none",
                            opacity:
                            Math.abs(this.state.number - index) >= this.state.maxma ? "0" : "1",
                        }}>
                            <img src={item.img} alt=''/>
                        </div>
                    )
                })}
                <div className='Sliederlab-btn'>
                    <button id='prev' onClick={() => this.prev()}><i class="fa-solid fa-arrow-left"></i></button>
                    <button id='next' onClick={() => this.next()}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <ul className='Sliederlab-dots'>
                    {IMGDATA.map((item) => {
                        let addClass = this.state.number === item.id - 1 ? "Sliederlab-dots_active" : '';
                        return(
                            <li className={addClass} onClick={() => this.detail(item)}></li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Sliederlab;