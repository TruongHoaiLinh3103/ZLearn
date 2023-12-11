import React, { useContext } from 'react';
import MyComment from '../../Services/MyComment';
const Comment = () => {
    const {todo, deleteComments} = useContext(MyComment);
    const todos = todo;
    const deleteTodo = (job) => {
        deleteComments(job)
    }
    return (
        <div style={{textAlign: "center"}}>
            {todos.map((item) => {
                return(
                    <p key={item.id}>{item.name}<span style={{cursor:'pointer', margin:"0px 0px 0px 20px"}} onClick={() => deleteTodo(item)}>X</span></p>
                )
            })}
        </div>
    );
};

export default Comment;



// import React, { Component } from 'react';
// import MyComment from '../../Services/MyComment';

// class Comment extends Component {
//     constructor(){
//         super();
//         this.deleteTodo = (item) => {
//             this.context.deleteComments(item)
//         }
//     }
//     render() {
//         let todos = this.context.todo;
//         return (
//             <div style={{textAlign: "center"}}>
//                 {todos.map((item) => {
//                     return(
//                         <p key={item.id}>{item.name}<span style={{cursor:'pointer', margin:"0px 0px 0px 20px"}} onClick={() => this.deleteTodo(item)}>X</span></p>
//                     )
//                 })}
//             </div>
//         );
//     }
// }

// Comment.contextType = MyComment;

// export default Comment;