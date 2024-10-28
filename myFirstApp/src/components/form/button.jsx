


import styles from "./form.module.css";


const Button = (props)=>{
    const {onClick,label,style} = props;
   
    return (
        <button onClick={onClick} className={style|| styles.submitBtn}>
            {label}
          </button>
    )
}

export default Button