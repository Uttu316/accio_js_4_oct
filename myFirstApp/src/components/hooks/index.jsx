import { useEffect, useState } from "react";

const Hooks = (props) => {
    const {obj,generate} = props
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
    generate()
  };


  useEffect(()=>{

    console.log("useEffect called",obj.random)  
  
  },[obj])

  useEffect(()=>{
    console.log("Generate changed")
  },[generate])

  console.log("Hooks Rendered")
  return (
    <div>
      <h1>Welcome to Hooks</h1>

      <p>Count {count}</p>
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Hooks;
