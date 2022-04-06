import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useFilterProducts, useProducts} from '../../hooks/';
import {routeToProductPage} from '../../helpers/routeToProduct';
import {
  Container,
  Filter,
  Header,
  LoaderPage,
  ProductList,
} from '../../components';
import * as S from './HomePage.styled';

export const HomePage = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const {products, isLoading} = useProducts();
  const filteredProducts = useFilterProducts(products, isAvailable);
  const navigate = useNavigate();

  const handleToggleAvailable = () => {
    setIsAvailable((prev) => !prev);
  };

  const handleRouteToProduct = (productId: number) => {
    navigate(routeToProductPage(productId));
  };

  return (
    <>
      <LoaderPage isShow={isLoading} />
      {!isLoading && (
        <S.PageContainer>
          <Header />
          <Container>
            <Filter
              isAvailable={isAvailable}
              onPage={filteredProducts!.length}
              total={products!.length}
              handleToggleAvailable={handleToggleAvailable}
            />
            <ProductList
              products={filteredProducts}
              handleRoute={handleRouteToProduct}
            />
          </Container>
        </S.PageContainer>
      )}
    </>
  );
};
