import React from 'react';
import { useReducer } from 'react';
import rootNumber from '../../Redux/rootNumber';
import { useRef, useLayoutEffect, useEffect } from 'react';
const LearnReduxAndRef = () => {
    const inputRef = useRef(null);
    const [state ,dispatch] = useReducer(rootNumber, {
        number: 0, showPra: false
    })
    useEffect(() => {
        console.log(inputRef.current.value)
        inputRef.current.value = " Mình là Anikey"
    })
    useLayoutEffect(() => {
        inputRef.current.value = " Mình là Trương Hoài Linh"
    })
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            height: "500px",
            flexDirection: "column"
        }}>
            <h1>{state.number}</h1>
            <button style={{
                padding: "10px 20px",
                fontSize: "18px",
                backgroundColor: "white",
                color: "blue",
                border: "1px solid blue",
                cursor: "pointer"
            }} onClick={() => {
                dispatch({type: "tang"});
                dispatch({type: "show"})
            }}>Click</button>
            {state.showPra && 
                <p>Xin chào các bạn</p>
            }
            <div style={{
                display: "flex",
                alignItems: 'center',
                marginTop: "50px"
            }}>
                <input placeholder='Ex..' type='text' ref={inputRef}/>
            </div>
        </div>
    );
};

export default LearnReduxAndRef;
