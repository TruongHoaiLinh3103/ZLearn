// import useFetch from './Fech';
// import {useHistory} from "react-router-dom";
// const ListUser = () => {
//     const history = useHistory()
//     const {data: Data, looding} = useFetch("https://reqres.in/api/users?page=2");
//     const nextData = (item) => {
//         let id = item.id;
//         history.push(`/listUser/${id}`);
//     }
//     return (
//         <div style={{textAlign: "center"}}>
//             {looding === true ?
//                 (<h2>Looding...</h2>)
//                 :
//                 (Data.map((item) => {
//                     return(
//                         <p style={{margin:"10px 0px 0px 0px", textAlign:'center', cursor:"pointer"}} 
//                         onClick={() => nextData(item)} key={item.id}>{item.first_name} {item.last_name}</p>
//                     )
//                 }))
//             }
//         </div>
//     );
// };

// export default ListUser;

import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Color from '../../Utils/HOC/Color';

class ListUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true
        }
        this.nextData = (item) => {
            const id = item.id;
            this.props.history.push(`/listUser/${id}`)
        }
    }
    componentDidMount(){
        setTimeout(() => {
            axios.get("https://reqres.in/api/users?page=2").then((res) => {
                this.setState({
                    data: res && res.data && res.data.data ? res.data.data : [],
                })
            })
            this.setState({
                loading: false
            })
        }, 2000)
    }
    render() {
        let deltai = this.state.data;
        return (
            <div style={{textAlign: "center"}}>
            {this.state.looding ?
                (<h2>Looding...</h2>)
                :
                (deltai.map((item) => {
                    return(
                        <p style={{margin:"10px 0px 0px 0px", textAlign:'center', cursor:"pointer"}} 
                        onClick={() => this.nextData(item)} key={item.id}>{item.first_name} {item.last_name}</p>
                    )
                }))
            }
        </div>
        );
    }
}

export default withRouter(Color(ListUser));