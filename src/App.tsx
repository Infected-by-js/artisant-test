import {useEffect, useMemo, useState} from 'react';
import type {ProductResponse} from './types/ProductResponse';
import {Header, ProductCard, Container} from './components/';
import ProductService from './api/ProductService';
import * as S from './App.styled';
import {PAGE_LIMIT} from './helpers/constants';
import {Filter} from './components/filter/Filter';
import {Product} from './types/Product';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [isHiddenOutOfStock, setIsHiddenOutOfStock] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await ProductService.getAll();
      const dataLimited = data.slice(0, PAGE_LIMIT);

      console.log(dataLimited);
      setProducts(dataLimited);
    };

    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (isHiddenOutOfStock) {
      return products.filter(
        (product: ProductResponse) => product.quantity_available
      );
    }
    return products;
  }, [products, isHiddenOutOfStock]);

  const handleHideOutOfStock = () => {
    setIsHiddenOutOfStock((prev) => !prev);
  };

  // FIXME: need to add page loader
  if (!products.length) {
    return <h1>Loading...</h1>;
  }

  console.log(filteredProducts);

  return (
    <S.AppContent>
      <Header />
      <Filter
        isHiddenOutOfStock={isHiddenOutOfStock}
        onHideOutOfStock={handleHideOutOfStock}
      />
      <Container>
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
