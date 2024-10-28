import { useEffect, useRef, useState } from "react";
import Button from "../form/button";

const Ref = () => {
const [time,setTime] = useState(0);

const ref = useRef(null)
const value = useRef('')
let id = useRef(null)



  const onSub = () => {};

  const setuptimer = ()=>{
   id.current =  setInterval(()=>{
        setTime((v)=>v+1)
        value.current = new Date()

    },1000)
  }

  useEffect(()=>{
   

    ref.current.style.background = "red"
    setuptimer()

    return ()=>{
        clearInterval(id.current)
    }
  },[])


  console.log(value.current)
  return (
    <div>
      <label>Name</label>
      <input  ref={ref} />

        <Button label="submit"   />


      <h4>{time}</h4>

    </div>
  );
};

export default Ref;
