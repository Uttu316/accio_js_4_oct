


import styles from "./form.module.css";


const Button = React.forwardRef((props,ref)=>{
    const {onClick,label,style} = props;
   
    return (
        <button ref={ref} onClick={onClick} className={style|| styles.submitBtn}>
            {label}
          </button>
    )
})

export default Button