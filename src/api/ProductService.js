import axios from './axiosInstance';
import * as endpoints from './endpoints';

export const getProducts = async ({page = 1, limit = 12}) => {
  try {
    const {data: response} = await axios.get(endpoints.products);
    const {products} = response.data;

    return products.slice(page, limit);
  } catch (error) {
    if (error?.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error);
  }
};
