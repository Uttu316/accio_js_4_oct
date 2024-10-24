

import Logo from "../logo"
import "./header.css"

const Header = (props)=>{
    const {title} = props

    return (
        <header className="header">
           <Logo title={title}  />
        
        </header>
    )
}

export default Header