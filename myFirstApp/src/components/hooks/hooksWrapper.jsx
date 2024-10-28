import { useCallback, useMemo, useState } from "react"
import Hooks from "."




const HooksWrapper  = ()=>{
    const [state,setState] = useState(false) 
    const [random,setRandom] = useState(null)

    const obj =  useMemo(()=>{

        return {
            random
        }
    },[random])


    const toggle = useCallback(()=>{
        setState(!state)
    },[state])

    
    const generateRandom = useCallback(()=>{
        let r = parseInt(Math.random()*1000)
        setRandom(r)
    },[])

    console.log("Parent rendered")
    return (
        <div>
            <Hooks generate={generateRandom} obj={obj}/>
           <button onClick={toggle}>Toogle</button>
           <button onClick={generateRandom}>
                Generate Random
           </button>
        </div>
    )
}

export  default HooksWrapper