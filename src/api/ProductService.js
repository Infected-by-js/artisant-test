import axios from './axiosInstance';
import * as endpoints from './endpoints';

export default {
  async getAll() {
    const { data: response } = await axios.get(endpoints.products);
    const { products } = response.data;

    return products;
  },
};
