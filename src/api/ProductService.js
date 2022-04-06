import axios from "./axiosInstance";
import * as endpoints from "./endpoints";
import { getPageStep } from "../helpers/getPageStep";

export const getProducts = async ({ page = 1, limit = 12 }) => {
  try {
    const { data: response } = await axios.get(endpoints.products);
    const { products } = response.data;
    const { startPosition, endPosition } = getPageStep(page, limit);

    return products.slice(startPosition, endPosition);
  } catch (error) {
    if (error?.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error);
  }
};
