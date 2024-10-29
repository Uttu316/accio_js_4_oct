import { api } from "../fetch";
import { API_PATHS } from "../service.constants";

export const getProducts = async () => {
  const productApiConfig = {
    path: API_PATHS.products,
  };

  try {
    const res = await api(productApiConfig);

    if (res && res.data && res.data.data) {
      const products = res.data.data;
      return products;
    }
    throw new Error("Data is not valid");
  } catch (e) {
    e.status = e.status + "";
    throw e;
  }
};
