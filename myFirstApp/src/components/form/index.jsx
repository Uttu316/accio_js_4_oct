import { useState } from "react";
import styles from "./form.module.css";
import InputBox from "./inputBox";
import RadioBox from "./radioBox";
import CheckBox from "./checkBox";
import Button from "./button";
import { isValidEmail, isValidName, isValidPassword, isValidPhone } from "../../utils/formValidations";

const Form = (props) => {
  const {state,setState,setIsReady} = props;

  
  const [erros,setErrors] = useState({
    message:""
  }) 
  const onChange = (e) => {
    let { name, id, value } = e.target;

    if (name === "allow") {
      let isAlreadyAllowed = !!state.allow;
      if (isAlreadyAllowed) {
        value = false;
      } else {
        value = true;
      }
    } else if (name === "gender") {
      value = id;
    }

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleErrors = ()=>{
    setErrors({message:''})
    const {name,email,allow,gender,password,phone} = state

    if(!isValidName(name)){
      setErrors({message:"Enter valid name"})
     return 
    }
    if(!isValidEmail(email)){
      setErrors({message:"Enter valid email"})
     return 
    }
    if(!isValidPassword(password)){
      setErrors({message:"Enter valid password"})
     return 
    }
    if(!isValidPhone(phone)){
      setErrors({message:"Enter valid phone"})
     return 
    }
    if(!gender){
      setErrors({message:"Select gender"})
     return 
    }
    if(!allow){
      setErrors({message:"Select cookies"})
     return 
    }
    return true
  }

  const onSubmit = (e) => {
   
    e.preventDefault();
   let isValid =  handleErrors()

   if(!isValid) return

   setIsReady(true)



  };
  return (
    <div className={styles.form_body}>
      <div className={styles.form_container}>
        <h2 className={styles.form_heading}>Form</h2>

        <form onSubmit={onSubmit} onChange={onChange}>
          <InputBox name={"name"} label={"Name"} />
          <InputBox name={"email"} type={"email"} label={"Email"} />
          <InputBox name="password" type={"password"} label={"Password"} />
          <InputBox name={"phone"} type={"tel"} label="Phone" />
          <RadioBox />
          <CheckBox />
          {!!erros.message && <p className={styles.error}>{erros.message}</p>}
          <Button label={"Submit"} onClick={onSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Form;
