import { api } from "../fetch";
import { API_PATHS } from "../service.constants";

export const getProduct = async (productId) => {
  const productApiConfig = {
    path: API_PATHS.products + `/${productId}`,
  };

  try {
    const res = await api(productApiConfig);

    if (res && res.data) {
      const product = res.data;
      return product;
    }
    throw new Error("Data is not valid");
  } catch (e) {
    e.status = e.status + "";
    throw e;
  }
};
