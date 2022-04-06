import {useMemo} from 'react';
import {IProduct} from '../types/Product';

export const useFilterProducts = (
  products: IProduct[] | undefined,
  isAvailable: boolean
) => {
  return useMemo((): IProduct[] | undefined => {
    if (isAvailable) {
      return products?.filter(
        (product: IProduct) => product.quantity_available
      );
    }
    return products;
  }, [products, isAvailable]);
};
