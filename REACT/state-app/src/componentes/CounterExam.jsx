import { useState } from "react"

export default function CounterExam() {

    const [count, setCount] = useState(0);

    return(
        <div style={{border:'2px solid pink'}}>
            <h2>count : {count}</h2>
            <button onClick={()=>{
                setCount((count) => count + 1);
            }}> 
                +1
                </button>
            <button onClick={()=>{
                setCount((count) => count - 1);
            }}>
                -1
                </button>
            <button onClick={()=>{setCount(0)}}>Reset</button>

        </div>    
    );

};