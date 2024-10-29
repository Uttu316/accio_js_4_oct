import { useNavigate } from "react-router-dom"



const NotFoundPage = ()=>{

    const navigate = useNavigate()

    const onGotoHome = ()=>{
        navigate('/')
    }
    return (
        <div id="notFound">
            <h1>Not Found 404</h1>
            <button onClick={onGotoHome}>
                Go to Home
            </button>
        </div>
    )
}
export default NotFoundPage