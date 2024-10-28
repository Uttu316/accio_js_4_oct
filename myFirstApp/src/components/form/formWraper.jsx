import { useState } from "react";
import Form from ".";
import FormCard from "./formCard";

function FormWrapper() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    allow: false,
  });
  const [isReady,setIsReady] = useState(false)
  return (
    <div >
      {!isReady &&<Form  setIsReady={setIsReady} state={state} setState={setState}/>}
      {!!isReady&&<FormCard user={state} />}
    </div>
  );
}

export default FormWrapper;
