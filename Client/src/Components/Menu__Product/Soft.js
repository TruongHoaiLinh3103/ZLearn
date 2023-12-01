import React, { Component } from 'react';

class Soft extends Component {
    render() {
        return (
            <div className='grid__colum10 c__colum12 m__colum12 navbar-product'>
                <div className='title'>
                    <h3>Sắp xếp theo</h3>
                </div>
                <div className='navbar-product__btn'>
                    <button className='navbar-product__btn-button'>
                        <span>Bán chạy</span>
                    </button>
                    <button className='navbar-product__btn-button'>
                        <span>Mới nhất</span>
                    </button>
                    <button className='navbar-product__btn-button'>
                        <span>Giá sản phẩm</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Soft;