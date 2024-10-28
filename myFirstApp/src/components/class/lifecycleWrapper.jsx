import { useState } from "react"
import LifeCycle from "./lifeCycle"


const LifeCycleWrapper = ()=>{

    const [showForm,setShowForm] = useState(true)

    const toggle = ()=>{
      setShowForm(!showForm)
    }
   return (
    <div >
      {/* <ClassCard /> */}
     {!!showForm&& <LifeCycle/>}
     <button onClick={toggle}>Toggle</button>
    </div>
   )
}

export default LifeCycleWrapper