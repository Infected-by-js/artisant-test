import axios from './axiosInstance';
import * as endpoints from './endpoints';
import {IProduct} from '../types/Product';

export interface IResponse {
  status: 'success' | 'failed';
  data: {products: IProduct[]};
}

export const getAll = async () => {
  try {
    const {data: response} = await axios.get<IResponse>(endpoints.products);
    const {products} = response.data;

    return products;
  } catch (error: any) {
    if (error?.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error);
  }
};

export const getById = async (id: number) => {
  try {
    const {data: response} = await axios.get(`${endpoints.products}/${id}`);
    const {product} = response.data;

    return product;
  } catch (error: any) {
    if (error?.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error);
  }
};
