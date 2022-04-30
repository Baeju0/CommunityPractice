import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// react-live-clock 라이브러리(getDay대신)
import Year from "react-live-clock";
import Day from "react-live-clock";
import Time from "react-live-clock";

function Write() {
    let history = useHistory();

    //현재 날짜, 요일, 시간
    // js로 표시
    // function today() {
    //   let now = new Date();
    //   let year = now.getFullYear();
    //   let month = now.getMonth() + 1;
    //   let date = now.getDate();
    //   const week = ['일','월','화','수','목','금','토'];
    //   let nowWeek = week[now.getDay()];
    //   let hours = now.getHours();
    //   let minutes = now.getMinutes();

    //   return year + '.' + month + '.' + date + ' '+ nowWeek + '요일 ' + hours + ':' + minutes;
    // }

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


      {/* map함수 중첩으로 어떻게? */}
        {mock.map(function (mock, i) {
        return (
          <div className='mock' key={i}>
            <h3>제목 : {mock}</h3>
            <h3>내용 : {young[i]}</h3> {/*map함수 처리할 요소 말고 다른 요소에는[i] 붙임*/}
            {/* {today()}  */}
            {/* ※(수정하기) 기존 게시물도 리렌더링 되어서 날짜가 최신으로 업데이트 됨 */}
            
            <Year id="Year" format={"YYYY."} ticking={false} timezone={"KR/Pacific"}/>
            <Day format={"MM.DD "} ticking={false} timezone={"KR/Pacific"}/>
            <Time format={"ahh:mm"} ticking={false} timezone={"KR/Pacific"}/>
            <hr/>
          </div>
        );
      })
      }

        {/* {young.map(function (young, i) {
          return (
            <div className="young" key={i}>
              <h3>내용 : {young} </h3>
            </div>
          )
        })}

      <hr/> */}
        {/* 저장 만들기 */}
        {/* ※(보류) props로 데이터 전달하려고 했더니 페이지 멈춤 */}
    </div>
    )
}

export default Write;