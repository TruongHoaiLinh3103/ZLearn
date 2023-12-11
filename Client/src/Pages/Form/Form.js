import React, {useState, useContext} from 'react';
import MyComment from '../../Services/MyComment';
const Form = () => {
    const {addComments} = useContext(MyComment)
    let [name, setName] = useState("");
    const resetName = (e) => {
        setName(e.target.value)
    }
    const addTodo = (e) => {
        if(e.which === 13){
            if(!name){
                window.alert("Comment không hợp lệ");
            }else{
                addComments({
                    id: Math.floor(Math.random() * 1000),
                    name: name
                })
                setName("")
            }
        }
    }
    return (
        <div style={{textAlign: "center"}}>
            <input type='text' value={name} 
            onChange={(e) => resetName(e)}
            onKeyDown={(e) => addTodo(e)}
            />
        </div>
    );
};

export default Form;


// import React, { Component } from 'react';
// import MyComment from '../../Services/MyComment';

// class Form extends Component {
//     constructor(context){
//         super(context);
//         this.state = {
//             name: ""
//         }
//         this.resetName = (e) => {
//             this.setState({name: e.target.value})
//         }
//         this.addTodo = (e) => {
//             if(e.which === 13){
//                 if(!this.state.name){
//                     window.alert("Comment không hợp lệ");
//                 }else{
//                     this.context.addComments({
//                         id: Math.floor(Math.random() * 1000),
//                         name: this.state.name
//                     })
//                     this.setState({name: ""})
//                 }
//             }
//         }
//     }
//     render() {
//         return (
//             <div style={{textAlign: "center"}}>
//                 <input type='text' value={this.state.name} 
//                 onChange={(e) => this.resetName(e)}
//                 onKeyDown={(e) => this.addTodo(e)}
//                 />
//             </div>
//         );
//     }
// }

// Form.contextType = MyComment;

// export default Form;