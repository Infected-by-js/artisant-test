import {useQuery} from 'react-query';
import {getProducts} from '../api/ProductService';
import {PAGE_LIMIT} from '../helpers/constants';

export const useProducts = (page = 1) => {
  const requestAll = () => getProducts({page, limit: PAGE_LIMIT});
  const {data: products, isLoading, error} = useQuery('products', requestAll);

  return {products, isLoading, error};
};
