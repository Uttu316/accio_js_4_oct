import { Link, useNavigate } from "react-router-dom"




const ProfilePage = ()=>{

    const navigate  = useNavigate()
    const onGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div id="profile">
            <h1>Profile</h1>
            <Link to="/about">About</Link>
            
            <button onClick={onGoBack}>
                Go back
            </button>
        </div>
    )
}

export default ProfilePage