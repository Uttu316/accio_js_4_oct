import { useNavigate } from "react-router-dom";



const ProductCard = (props)=>{
    const {product} = props;

    const navigate = useNavigate()

    const gotoDetails = ()=>{

        navigate(`/product/${product.id}`)
    }
    return (
        <div onClick={gotoDetails}>
        <img height={120} width={120} src={product.thumbnail} alt={product.title} />
        <div>

        <p><b>{product.title}</b></p>
        <p><i>{product.brand}</i></p>
        <p>Rs. {product.price}</p>
        <p>{product.description}</p>
        </div>
      </div>
    )
}

export default ProductCard