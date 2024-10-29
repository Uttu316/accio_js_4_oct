import { useParams } from "react-router-dom"




const ProductPage = ()=>{
    const {productId} = useParams()

    console.log({productId})
    return (
        <div>
            <h1>
                Product details
            </h1>
        </div>
    )
}

export default ProductPage