import React, { Component } from 'react';
import "./AllProduct.css";
// chưu link grid.css
import axios from "axios";
import '../../../Styles/Grid.css';
import {withRouter} from "react-router-dom";
class AllProduct extends Component {
    constructor(){
        super()
        this.state = {
            product: []
        }
        this.click = (product) => {
            let id = product.id;
            this.props.history.push(`/product/${id}`)
            // console.log(product)
        }
    }

    async componentDidMount(){
        let res = await axios.get("http://localhost:4000/product")
        this.setState({
            product: res && res.data ? res.data : []
         })
    }
    render() {
        return (
            <div class="grid__row">
                {this.state.product.map((item) => {
                    return(
                        <div class="grid__colum2-5 c__colum6 m__colum3" key={item.id} onClick={() => this.click(item)}>
                            <div class="card__product">
                                <img class="card__product-img" src={item.img}></img>
                                <div class="card__product-textBox">
                                    <p class="card__product-text head">{item.name}</p>
                                    <span>Giảm giá {item.giamGia}</span>
                                    <p class="card__product-text price">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default withRouter(AllProduct);