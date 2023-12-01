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
            <div className="grid__row">
                {this.state.product.map((item) => {
                    return(
                        <div className="grid__colum2-5 c__colum6 m__colum3" key={item.id} onClick={() => this.click(item)}>
                            <div className="card__product">
                                <img className="card__product-img" src={item.img} alt=''/>
                                <div className="card__product-textBox">
                                    <p className="card__product-text head">{item.name}</p>
                                    <span>Loại: {item.giamGia}</span>
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