
import styles from "./form.module.css";


const InputBox = (props)=>{
    const {name,label,type} = props
    return (
        <div className={styles.inputBox}>
        <input type={type}  name={name} id={name} />
        <label htmlFor={name}>{label}</label>
      </div>
    )
}
export default InputBox