import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Feed from "./components/feed";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FormWrapper from "./components/form/formWraper"
import ClassCard from "./components/class";
import LifeCycleWrapper from "./components/class/lifecycleWrapper";
import HooksWrapper from "./components/hooks/hooksWrapper";
import Ref from "./components/ref";

function App() {
  return (
    <div id="app">
        <Ref/>
    </div>
  )
}

export default App;
