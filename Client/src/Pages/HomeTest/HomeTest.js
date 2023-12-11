// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import "../../Styles/home.scss";
// import image from "../../Assets/Img/abc.png";
// import { connect } from 'react-redux';
// import { toast } from 'react-toastify';
// class HomeTest extends Component {
//     constructor(){
//         super();
//         this.zoom = () => {
//             this.props.history.push('/static/media/abc.3b20b356062d73bb536e.png')
//         }
//         this.state = {
//             name: "",
//             age: ""
//         }
//         this.change = (e) =>{
//             this.setState({
//                 name: e.target.value,
//             })
//         }
//         this.change1 = (e) =>{
//             this.setState({
//                 age: e.target.value
//             })
//         }
//         this.deteteData = (job) => {
//             this.props.deleteUserRedux(job)
//         }
//         this.addData =() => {
//             if(!this.state.name || !this.state.age){
//                 toast.warning("Error :(")
//                 return;
//             }
//             this.props.addUserRedux({
//                 id: Math.floor(Math.random() * 100000),
//                 name: this.state.name,
//                 age: this.state.age
//             })
//             toast.success("Success :)")
//             this.setState({
//                 name: "",
//                 age: ''
//             })
//         }
//         this.inputRef = React.createRef(null);
//         this.printf = () => {
//             if(this.inputRef.current.value === ""){
//                 this.inputRef.current.focus();
//             }else{
//                 alert(this.inputRef.current.value)
//             }
//         }
//     }
//     render() {
//         let name = this.props.dataRedux;
//         return (
//             <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems:"center"}}>
//                 Xin chào các bạn
//                 <img src={image} style={{width:'100px', height:'100px'}} onClick={() => this.zoom()}/>
//                 <div style={{display: 'flex'}}>
//                     <input type='text' placeholder='Name' value={this.state.name} onChange={(e) => this.change(e)} style={{marginRight: "10px"}}/>
//                     <input type='text' placeholder='Age' value={this.state.age} onChange={(e) => this.change1(e)} style={{marginRight: "10px"}}/>
//                     <input type="button" value="Add" onClick={() => this.addData()}/>
//                 </div>
//                 <div>
//                     {name.map((item, index) => {
//                         return(
//                             <div key={item.id}>
//                                 <p key={item.id}>{index + 1} {item.name} {item.age} <span onClick={() => this.deteteData(item)}>X</span></p>
//                             </div>
//                         )
//                     })}
//                 </div>
//                     <div style={{
//                     display: "flex",
//                     alignItems: 'center',
//                     marginTop: "50px"
//                 }}>
//                     <input placeholder='Ex..' type='text' ref={this.inputRef}/>
//                     <button onClick={() => this.printf()}>Container</button>
//                 </div>
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         dataRedux: state.user
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         deleteUserRedux: (userDelete) => dispatch({type: 'DELETE__USER', payload: userDelete}),
//         addUserRedux: (userAdd) => dispatch({type: 'ADD__USER', payload: userAdd})
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeTest));




import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../../Styles/home.scss";
import image from "../../Assets/Img/abc.png";
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

const HomeTest = (props) => {
    const inputRef = useRef("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const history = useHistory();
    const zoom = () => {
        history.push("/static/media/abc.3b20b356062d73bb536e.png")
    }
    const change = (e) => {
        setName(e.target.value)
    }
    const change1 = (e) => {
        setAge(e.target.value)
    }
    const addData = () => {
        if(!name || !age){
        toast.warning("Error :(")
        alert("Error!")
        return;
        }
        props.addUserRedux(
            {
                id: Math.floor(Math.random() * 100000),
                name: name,
                age: age
            }
        )
        toast.success("Success :)")
        setName("");
        setAge("");
    }
    const deteteData = (item) => {
        props.deleteUserRedux(item)
    }
    const printf = () => {
        if(inputRef.current.value === ""){
            inputRef.current.focus();
        }else{
            alert(inputRef.current.value)
        }
    }
    const listName = props.dataRedux;
    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems:"center"}}>
            Xin chào các bạn
            <img src={image} style={{width:'100px', height:'100px'}} onClick={() => zoom()}/>
            <div style={{display: 'flex'}}>
                <input type='text' placeholder='Name' value={name} onChange={(e) => change(e)} style={{marginRight: "10px"}}/>
                <input type='text' placeholder='Age' value={age} onChange={(e) => change1(e)} style={{marginRight: "10px"}}/>
                <input type="button" value="Add" onClick={() => addData()}/>
            </div>
            <div>
                {listName.map((item, index) => {
                    return(
                        <div key={item.id}>
                            <p key={item.id}>{index + 1} {item.name} {item.age} <span onClick={() => deteteData(item)}>X</span></p>
                        </div>
                    )
                })}
            </div>
                <div style={{
                display: "flex",
                alignItems: 'center',
                marginTop: "50px"
            }}>
                <input placeholder='Ex..' type='text' ref={inputRef}/>
                <button onClick={() => printf()}>Container</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE__USER', payload: userDelete}),
        addUserRedux: (userAdd) => dispatch({type: 'ADD__USER', payload: userAdd})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTest);