import ProductCard from "../productCard";

const ProductsList = (props) => {
  const { products } = props;

  return (
    <div>
      {products.map((product) => (
       <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};


export default ProductsList