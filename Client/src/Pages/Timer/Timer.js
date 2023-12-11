// import React, { Component } from 'react';

// class Timer extends Component {
//     constructor(){
//         super();
//         this.state = {
//             number: 10
//         }
//         this.aler = () => {
//             window.alert("Time Up!")
//         }
//     }
//     componentDidMount(){
//         this.timer = setInterval(() => {
//             this.setState({
//                 number: this.state.number - 1
//             })
//         }, 1000)
//     }
//     componentDidUpdate(prevProps, prevState){
//         if(prevState.number !== this.state.number && this.state.number === 0){
//             if(this.timer){
//                 clearInterval(this.timer)
//                 this.aler()
//             }
//         }
//     }
//     render() {
//         return (
//             <div style={{textAlign:"center"}}>
//                 <h3 style={{fontSize: "4em", color: 'blue'}}>{this.state.number}</h3>
//             </div>
//         );
//     }
// }

// export default Timer;

import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [number, setNumber] = useState(10);
    const aler = () => {
        window.alert("Time Up!");
    }
    useEffect(() => {
        if (number === 0){
            aler();
            return;
        }
        var timer = setInterval(() => {
            setNumber(number-1)
        },1000)
        return() => {
            clearInterval(timer)
        }
    })
    return (
        <div style={{textAlign: "center"}}>
            <h3 style={{fontSize: "4em", color: 'blue'}}>{number}</h3>
        </div>
    );
};

export default Timer;