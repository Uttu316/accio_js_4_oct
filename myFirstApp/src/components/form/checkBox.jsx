
import styles from "./form.module.css";



const CheckBox = ()=>{
    return (
        <div className={styles.allowBox}>
        <input type="checkbox" id="allow" name="allow" />
        <label htmlFor="allow">Allow Cookies</label>
      </div>
    )
}
export default CheckBox