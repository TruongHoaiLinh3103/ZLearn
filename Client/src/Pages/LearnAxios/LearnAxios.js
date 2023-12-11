import React from 'react';
import axios from 'axios';
import  { useEffect, useState } from 'react';
import {useParams, useHistory} from "react-router-dom";
const LearnAxios = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const history = useHistory();
    try {
        useEffect(() => {
            async function fetchData() {
                if(params){
                    const id = params.id;
                    let res = await axios.get(`https://reqres.in/api/users/${id}`)
                    let data = res.data && res.data.data ? res.data.data : {}
                    setUser(data);
                }
              }
              fetchData();
        });
    } catch (error) {
        console.log(error)
    }
    const Data = Object.keys(user).length === 0
    return (
        <div style={{textAlign: "center"}}>
            {Data === false && 
                <div key={user.id}>
                    <img src={user.avatar} alt="Avatar"/>
                    <p>Email: {user.email}</p>
                    <p>Full name: {user.first_name} {user.last_name}</p>
                </div>
            }
            <button style={{border: "none", outline: "none", padding: "5px", backgroundColor: "aqua", color: 'black', borderRadius: '30px', boxShadow: "5px"}} onClick={() => {history.push("/listUser")}}>Back to List</button>
        </div>
    );
};

export default LearnAxios;



// import React, {Component} from "react";
// import axios from "axios";
// import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


// class LearnAxios extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             user: {}
//         }
//         this.back = () => {
//             this.props.history.push("/listUser")
//         }
//     }
//     async componentDidMount(){
//         let id = this.props.match.params.id;
//         let res = await axios.get(`https://reqres.in/api/users/${id}`)
//         this.setState({
//             user: res && res.data && res.data.data ? res.data.data : {}
//         })
//     }
//     render() {
//         const item = this.state.user;
//         const Data = Object.keys(item). length === 0
//         return (
//         <div style={{textAlign: "center"}}>
//             {Data === false && 
//                 <div key={item.id}>
//                     <img src={item.avatar} alt="Avatar"/>
//                     <p>Email: {item.email}</p>
//                     <p>Full name: {item.first_name} {item.last_name}</p>
//                 </div>
//             }
//             <button style={{border: "none", outline: "none", padding: "5px", backgroundColor: "aqua", color: 'black', borderRadius: '30px', boxShadow: "5px"}} onClick={() => this.back()}>Back to List</button>
//         </div>
//         );
//     }
// }

// export default withRouter(LearnAxios);