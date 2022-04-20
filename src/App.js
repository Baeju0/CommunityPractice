import logo from './logo.svg';
import './App.css';
import Commu from './Commu';
import Write from './Write';
import { useState } from 'react';

// 입력값 저장
function App(props) {
  let [name, setName] = useState('Juyoung');
  let [entry, setEntry] = useState('');
  let [title, setTitle] = useState(['Ht']);
  let [btn2, setBtn2] = useState(false);

  let [je, setJe] = useState('');
  let [mock, setMock] = useState('');

  let [nae, setNae] = useState('');
  let [young, setYoung] = useState('');

  return (
    <div className="App">
      <div>안녕하세요! {name}님!</div>
      <p/><input onChange={(e)=>{ setEntry(e.target.value)
        }}/><button onClick={(e)=>{setName(entry)}}>확인</button>
        {/* <Hello name={name}/> */}
        <Commu name={name}/>

        <button onClick={()=>{
                setBtn2(!btn2)
            }}>쓰기</button>
            {btn2 ? <div>
             <p/>제목 <input onChange={(e)=>{setJe(e.target.value);}}/> 
             <p/>내용 <input onChange={(e)=>{setNae(e.target.value);}}/> 
        
        <button onClick={(e)=>{setMock(je); setYoung(nae);}}>완료</button>
             <hr/>
             <p/> 제목 : {mock}
             <p/> 내용 : {young}
      </div> : null}

      {/* map 함수 사용해보기 */}

    </div>
  );
}


// props 연습
// function Hello(props) {
//   return (
//     <div>
//       <h2>Hi! {props.name}</h2>
//     </div>
//   )
// }

export default App;
