import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Write() {
    let history = useHistory();

    let [je, setJe] = useState('');
    let [mock, setMock] = useState('');

    let [nae, setNae] = useState('');
    let [young, setYoung] = useState('');

    return(
    <div>
    <p/>제목 <input onChange={(e)=>{setJe(e.target.value);}}/> 
    <p/>내용 <input onChange={(e)=>{setNae(e.target.value);}}/> 
        
        <button onClick={(e)=>{setMock(je); setYoung(nae);}}>완료</button>
        <hr/>
        <p/> 제목 : {mock}
        <p/> 내용 : {young}

        <p/><button onClick={()=> {
            history.goBack();
        }}>뒤로가기</button>

        {/* 저장 만들기 */}
    </div>
    )
}

export default Write;