import { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
    const [state,setState] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        gender:"",
        allow:false

    })
    const onChange= (e)=>{
       let {name,id,value} = e.target;


       if(name==='allow'){
        let isAlreadyAllowed  = !!state.allow
        if(isAlreadyAllowed){
            value = false
        }else{
            value = true
        }
       }else if(name==='gender'){
        value = id
       }
       
      setState((prev)=>({...prev,[name]:value}))
    }
   
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(state)
    }
  return (
    <div className={styles.form_body}>
      <div className={styles.form_container}>
        <h2 className={styles.form_heading}>Form</h2>

        <form onSubmit={onSubmit} onChange={onChange}>
          <div className={styles.inputBox}>
            <label htmlFor="name">Name</label>
            <input  name="name" id="name" />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" id="password" />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="phone">Phone</label>
            <input name="phone" type="tel" id="phone" />
          </div>
          <div className={styles.inputBox}>
            <p className="label">Gender</p>
            <div className={styles.genderBox}>
              <label htmlFor="male" >Male</label>
              <input name="gender" id="male" type="radio" />
              <label htmlFor="female" >Female</label>
              <input name="gender" id="female" type="radio" />
            </div>
          </div>
          <div className={styles.allowBox}>
            <input type="checkbox" id="" name="allow"/>
            <label htmlFor="allow">Allow Cookies</label>
          </div>
          <button onClick={onSubmit} style={styles.submitBtn}>
            Submit
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Form;
