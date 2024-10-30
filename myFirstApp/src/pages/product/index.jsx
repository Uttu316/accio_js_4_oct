import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/productServices/getProduct";
import Loader from "../../components/loader";
import ProductCard from "../../components/productCard";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "done";

  const loadProduct = async () => {
    setStatus("loading");
    try {
      const product = await getProduct(productId);
      setProduct(product);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (productId) {
      loadProduct();
    }
  }, [productId]);

  return (
    <div>
      <h1>Product details</h1>
      {isLoading && <Loader />}
      {isSuccess && <ProductCard product={product} />}
      {isError && <h3>Something Went Wrong! Retry Later</h3>}
    </div>
  );
};

export default ProductPage;
