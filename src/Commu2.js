import React, { useState } from "react";
import Write from "./Write";

function Commu2(props) {
    let [btn2, setBtn2] = useState(false);

    return(
        <div>
            <h3>Doing {props.merong}</h3>
        <hr/>
            {/* <button onClick={()=>{
                setBtn2(!btn2)
            }}>쓰기</button>
            {btn2 ? <Write/> : null} */}
        </div>
    )
}

export default Commu2;