import { useContext } from "react"
import AppContext from "../../contexts/appcontext/appContext"




const AboutPage = ()=>{
    const {name,setName} = useContext(AppContext)
    console.log({name,setName})

    const onChange = ()=>{
        const r = parseInt(Math.random()*100)
        setName(r)
    }
    const URL = `https://randomuser.me/api/portraits/men/${name}.jpg`
    return (
        <div id="about">
            <h1>About</h1>
            <img src={URL} />
            <button onClick={onChange}>
                Change Photo
            </button>
        </div>
    )
}

export default AboutPage