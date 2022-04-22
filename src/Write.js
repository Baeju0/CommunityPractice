import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Write() {
    let history = useHistory();

    // let [list, setList] = useState(['']);

    let [je, setJe] = useState(['']);
    let [mock, setMock] = useState(['첫번째 제목']);

    let [nae, setNae] = useState(['']);
    let [young, setYoung] = useState(['첫번째 글']);

    function addJemock() {
        let newMock = [...mock];
        newMock.push(je);
        setMock(newMock);
    }

    function addNaeyoung() {
        let newYoung = [...young];
        newYoung.push(nae);
        setYoung(newYoung);
    }

    return(
    <div>
    <p/>제목 <input onChange={(e)=>{setJe(e.target.value);}}/> 
    <p/>내용 <input onChange={(e)=>{setNae(e.target.value);}}/> 
        
        <p/><button onClick={()=> {
            history.goBack();
        }}>뒤로가기</button>
        {/* <button onClick={(e)=>{setMock(je); setYoung(nae);}}>완료</button> */}
        <button onClick={(e)=>{{addJemock(); addNaeyoung();}}}>완료</button>
        <hr/>
        {/* <hr/>
        <p/> 제목 : {mock}
        <p/> 내용 : {young} */}

        {/* array.map(currentValue[,index[,array]])
      currentValue : 처리할 현재 요소
      index : 처리할 현재 요소의 인덱스(0부터 시작)
      map()으로 호출한 배열 */}

        {mock.map(function (mock, i) {
        return (
          <div className='mock' key={i}>
            <h3>제목 : {mock}</h3>
            <h3>내용 : {young}</h3>
            <hr/>
          </div>
        );
      })
      }

        {/* 저장 만들기 */}
    </div>
    )
}

export default Write;