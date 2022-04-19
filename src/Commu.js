import React from "react";
import { useState } from 'react';
import Commu2 from "./Commu2";

function Commu(props) {
  
  let [merong, setMerong] = useState('');
  let [input2, setInput2] = useState('');

  //props 두 번이 가능한가?
    return(
        <div>
            <h1>Hi! {props.name}</h1>
            <h2>Nice to meet you!</h2>
            What are we going to do Today?
            <p><input onChange={(e)=>{setInput2(e.target.value)
            }}/> <button onClick={(e)=>{setMerong(input2)}}>저장</button></p>
            <Commu2 merong={merong}/>
        </div>
    )
}

export default Commu;