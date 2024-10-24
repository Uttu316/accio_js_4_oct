import { useState } from "react";
import "./counter.css";

const Counter = () => {
  let [count,setCount] = useState(0)

  const onAdd = ()=>{
    setCount(count+1)
  }

  const onMinus = ()=>{
    setCount(count-1)
    
  }
 
  return (
    <div className="counter_body">
      <div className="counter_container">
        <h3 className="counter_value">Count - {count}</h3>
        <div className="counter_actions">
          <button onClick={onAdd} className="counter_btn">Add +</button>
          <button onClick={onMinus} className="counter_btn">Minus -</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
