import {useQuery} from 'react-query';
import ProductService from '../api/ProductService';

export const useProducts = () => {
  const requestAll = () => ProductService.getAll();

  const {data: products, isLoading, error} = useQuery('products', requestAll);

  return {products, isLoading, error};
};
