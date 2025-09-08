import {useState} from "react"

function CounterFunc(){
    const [count,setCount]=useState(0);
return(
    <div>
        <h1>Functional Componenet Counter</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count > 0 ? count - 1 :0)}>-</button>
    </div>
    )
}

export default CounterFunc; 