import { API_BASE_NAME } from "./service.constants";

export const api = async (config) => {
  const { path, method = "GET", body, params, headers } = config;

  const URL = API_BASE_NAME + path;
  try {
    const res = await fetch(URL, {
      method,
      body,
      headers,
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e, "Error in API", URL);
    throw e;
  }
};
