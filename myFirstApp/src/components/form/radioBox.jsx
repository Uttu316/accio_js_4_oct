import styles from "./form.module.css";



const RadioBox = ()=>{
    return (
        <div className={styles.radioBox}>
        <p className={styles.label}>Gender</p>
        <div className={styles.genderBox}>
          <label htmlFor="male">Male</label>
          <input name="gender" id="male" type="radio" />
          <label htmlFor="female">Female</label>
          <input name="gender" id="female" type="radio" />
        </div>
      </div>
    )
}

export default RadioBox