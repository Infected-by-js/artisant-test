import {useMemo, useState} from 'react';

import type {ProductResponse} from './types/ProductResponse';
import {Header, ProductCard, Container} from './components/';
import * as S from './App.styled';
import {PAGE_LIMIT} from './helpers/constants';
import {Filter} from './components/filter/Filter';
import {useProducts} from './hooks/useProducts';

export const App = () => {
  const [isHiddenOutOfStock, setIsHiddenOutOfStock] = useState(false);
  const {products, isLoading, error} = useProducts();

  const limitedProducts = useMemo(() => {
    if (!isLoading) return products.slice(0, PAGE_LIMIT);
  }, [products, isLoading]);

  const filteredProducts = useMemo(() => {
    if (isHiddenOutOfStock) {
      return limitedProducts.filter(
        (product: ProductResponse) => product.quantity_available
      );
    }
    return limitedProducts;
  }, [limitedProducts, isHiddenOutOfStock]);

  const handleHideOutOfStock = () => {
    setIsHiddenOutOfStock((prev) => !prev);
  };

  // FIXME: need to add page loader
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.AppContent>
      <Header />
      <Container>
        <Filter
          isHiddenOutOfStock={isHiddenOutOfStock}
          onHideOutOfStock={handleHideOutOfStock}
        />
        <S.ProductList>
          {filteredProducts &&
            filteredProducts.map((product: ProductResponse) => (
              <S.ProductItem key={product.product_id}>
                <ProductCard
                  author={product.created_by.display_name}
                  quantity={product.quantity_available}
                  quantityTotal={product.quantity_nfts_created}
                  name={product.name}
                  price={product.initial_price}
                  fileName={
                    product.avatar.compressed
                      ? product.avatar.compressed
                      : product.avatar.original
                  }
                />
              </S.ProductItem>
            ))}
        </S.ProductList>
      </Container>
    </S.AppContent>
  );
};
