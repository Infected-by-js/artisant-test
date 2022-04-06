import ProductService from '../api/ProductService';
import {IProduct} from '../types/Product';
import {useQuery} from 'react-query';

export const useProductQuery = (productId: string | undefined) => {
  const requestById = () => ProductService.getById(Number(productId));

  const {data, error, isLoading} = useQuery<IProduct, Error>(
    [`episode-${productId}`, productId],
    requestById,
    {refetchOnWindowFocus: false}
  );

  return {product: data, isLoading, error};
};
