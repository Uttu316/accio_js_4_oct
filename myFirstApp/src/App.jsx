import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Feed from "./components/feed";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FormWrapper from "./components/form/formWraper"
import ClassCard from "./components/class";
import LifeCycle from "./components/class/lifeCycle";

function App() {
  const [showForm,setShowForm] = useState(true)

  const toggle = ()=>{
    setShowForm(!showForm)
  }
 return (
  <div id="app">
    {/* <ClassCard /> */}
   {!!showForm&& <LifeCycle/>}
   <button onClick={toggle}>Toggle</button>
  </div>
 )
}

export default App;
