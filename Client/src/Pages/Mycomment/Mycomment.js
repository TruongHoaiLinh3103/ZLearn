import React, {useState} from 'react';
import Form from "../Form/Form";
import Comment from "../Comment/Comment";
import MyComment from '../../Services/MyComment';

const Mycomment = () => {
    const [todo, setTodo] = useState([
        {id: 1, name: "Trương Hoài Linh"},
        {id: 2, name: "Nguyễn Thị Kiều Thu"},
    ])
    const addComments = (job) => {
        let add = todo;
        add.push(job);
        setTodo([...add]);
    }
    const deleteComments = (job) => {
        let dele = todo;
        dele = dele.filter(item => item.id !== job.id);
        setTodo(dele);
    }
    return (
        <MyComment.Provider style={{textAlign: "center"}} value={{todo, addComments, deleteComments}}>
            <Form/>
            <Comment/>
        </MyComment.Provider>
    );
};

export default Mycomment;


// import React, { Component } from 'react';
// import Form from "../Form/Form";
// import Comment from "../Comment/Comment";
// import MyComment from '../../Services/MyComment';

// class Mycomment extends Component {
//     constructor(){
//         super();
//         this.state = {
//             todo: [
//                 {id: 1, name: "Trương Hoài Linh"},
//                 {id: 2, name: "Nguyễn Thị Kiều Thu"},
//             ]
//         }
//         this.addComments = (job) => {
//             let add = this.state.todo;
//             add.push(job);
//             this.setState({
//                 todo: [...add]
//             });
//         }
//         this.deleteComments = (job) => {
//             let dele = this.state.todo;
//             dele = dele.filter(item => item.id !== job.id);
//             this.setState({
//                 todo: dele
//             });
//         }
//     }
//     render() {
//         const todo = this.state.todo;
//         const deleteComments = this.deleteComments;
//         const addComments = this.addComments;
//         return (
//             <MyComment.Provider style={{textAlign: "center"}} value={{todo, deleteComments, addComments}}>
//                 <Form/>
//                 <Comment/>y
//             </MyComment.Provider>
//             //Hoặc có thể dùng props truyền tham số từ cpn cha sang cpn con:
//             // cpn cha:
//             // this.state = {
//             //     temp: "Trương Hoài Linh"
//             // }
//             // <Temp blog={this.state.temp}/>
//             //cpn con:
//             //this.props.blog
//         );
//     }
// }

// export default Mycomment;