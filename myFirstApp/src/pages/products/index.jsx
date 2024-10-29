import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import { getProducts } from "../../services/productServices/getProducts";
import ProductsList from "../../components/productList";

const ProductsPage = () => {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState(null);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "done";

  const loadProducts = async () => {
    setStatus("loading");
    try {
      const products = await getProducts();
      setProducts(products);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  console.log({ products, status });

  return (
    <div id={"products"}>
      {isLoading && <Loader />}
      {isSuccess && <ProductsList products={products} />}
      {isError && <h3>Something Went Wrong! Retry Later</h3>}
    </div>
  );
};

export default ProductsPage;
