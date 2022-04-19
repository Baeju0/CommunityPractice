import logo from './logo.svg';
import './App.css';
import Commu from './Commu';
import { useState } from 'react';

// 입력값 저장
function App() {
  let [name, setName] = useState('Juyoung');
  let [entry, setEntry] = useState('');

  return (
    <div className="App">
      <div>안녕하세요! {name}님!</div>
      <p/><input onChange={(e)=>{ setEntry(e.target.value)
        }}/><button onClick={(e)=>{setName(entry)}}>확인</button>
        {/* <Hello name={name}/> */}
        <Commu name={name}/>
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
