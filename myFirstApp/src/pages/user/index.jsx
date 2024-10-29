import { Link, useParams } from "react-router-dom"




const UserPage = ()=>{

    const {username} = useParams()

    return (
        <div id="user">
            <h1>
                Hello {username}
            </h1>
            <Link to="/">Home</Link>
        </div>
    )
}


export default UserPage
