import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";

class ProductID extends Component {
    constructor(){
        super()
        this.state = {
            data: {},
            comment: [],
            Comment: ""
        }
        this.handleBackNotification = () =>{
            this.props.history.push('/')
        }
        this.setComment = (e) => {
            this.setState({
                Comment: e.target.value
            })
        }
        this.addComment = () => {
            const id = this.props.match.params.id;
            const data = {
                Comment: this.state.Comment,
                ProductId: id
            }
            axios.post(`http://localhost:4000/comment`, data,
            {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }
            ).then(res => {
                if(res.data.error){
                    alert("Vui lòng đăng nhập để bình luận")
                }else{
                    const commentToApp = {Comment: this.state.Comment}
                    this.setState({
                        comment: ([...this.state.comment, commentToApp]),
                    })
                    this.setState({
                        Comment: ""
                    })
                }
            })
        }
        this.Enter = (e) => {
            if(e.which === 13){
                const id = this.props.match.params.id;
                const data = {
                    Comment: this.state.Comment,
                    ProductId: id
                }
                axios.post(`http://localhost:4000/comment`, data,
                {
                    headers: {
                        accessToken: sessionStorage.getItem("accessToken")
                    }
                }
                ).then(res => {
                    if(res.data.error){
                        alert("Vui lòng đăng nhập để bình luận")
                    }else{
                        const commentToApp = {Comment: this.state.Comment, username: res.data.username}
                        this.setState({
                            comment: ([...this.state.comment, commentToApp]),
                        })
                        this.setState({
                            Comment: ""
                        })
                    }
                })
            }
        }
        this.handleNextCart = () => {
            const data = {
                img: this.state.data.img,
                name: this.state.data.name,
                giamGia: this.state.data.giamGia,
                price: this.state.data.price
            }
            axios.post("http://localhost:4000/cart", data,
            {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }
            ).then(res => {
                if(res.data.error){
                    alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng")
                }else{
                    alert("Thêm sản phẩm vào giỏ hàng thành công")
                }
            })
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        let res1 = await axios.get(`http://localhost:4000/product/byID/${id}`)
        this.setState({
            data: res1 && res1.data ? res1.data : {}
        })
        let res2 = await axios.get(`http://localhost:4000/comment/${id}`)
        this.setState({
            comment: res2 && res2.data ? res2.data : []
        })
    }
    render() {
        let { data } = this.state;
        let useData = Object.keys(data).length === 0
        return (
            <div>
                {useData === false &&
                    <div className="center" style={{width: "100%", textAlign: "center", margin: "10px 0px", display:"flex", flexDirection:"column"}}>
                        <div className="title"><h3>Thông tin sản phẩm</h3></div>
                        <div className="Name">
                            <img src={data.img} style={{width: "70%"}}></img>
                            <p>Tên sản phẩm: {data.name}</p>
                            <p>Giảm giá: {data.giamGia}</p> 
                            <p>Giá sản phẩm: {data.price}</p>
                            <br></br>
                            <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                                <button onClick={() => this.handleBackNotification()} 
                                style={{width: "70%", border: "none", 
                                outline: "none", padding: "5px", backgroundColor: "black", 
                                color: 'white', borderRadius: '30px', boxShadow: "5px"}}>Back</button>

                                <button onCLick={() => this.addCart()} 
                                style={{marginTop: "10px", width: "70%", border: "none", 
                                outline: "none", padding: "5px", backgroundColor: "black", 
                                color: 'white', borderRadius: '30px', 
                                boxShadow: "5px", cursor:"pointer"}} onClick={() => this.handleNextCart()}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div className='Comment' style={{margin:"15px 0px"}}>
                            <div className="title" style={{display:"flex", justifyContent:"center"}}><h3>Bình luận sản phẩm</h3></div>
                            <div className="addCommentContainer">
                                <input
                                    type="text"
                                    placeholder="Comment..."
                                    autoComplete="off"
                                    onChange={(e) => this.setComment(e)}
                                    value={this.state.Comment}
                                    style={{borderRadius: "20px", paddingLeft: "10px"}}
                                    onKeyDown={(e) => this.Enter(e)}
                                />
                                <button onClick={() => this.addComment()}
                                style={{border:"none", padding: "5px", borderRadius: "20px"}}> Add Comment</button>
                            </div>
                            {this.state.comment.map((item) => {
                                return(
                                    <div style={{margin:"10px 0px", width:'300px', display:'flex'}}>
                                        <label style={{color: 'blue', marginRight:"5px", justifyItems:"flex-start"}}>{item.username}: </label>
                                        <span style={{
                                            color: "black", 
                                            marginRight:"20px",
                                            display: "inline-block",
                                            maxWidth: "80%",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flex: "1"
                                        }}>{item.Comment}</span>
                                        {sessionStorage.getItem("accessToken") &&
                                            <span style={{
                                                padding:"5px",
                                                backgroundColor: 'black',
                                                color:"white",
                                                borderRadius: "100vh",
                                                justifyItems:"flex-end"
                                            }}>X</span>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(ProductID);