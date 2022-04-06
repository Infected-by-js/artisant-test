import {useParams, useNavigate} from 'react-router-dom';
import {Container, ProductCard, LoaderPage, PageError} from '../../components';
import {getAvatarName} from '../../helpers/getAvatarName';
import {useProductQuery} from '../../hooks/';
import {HOME_PAGE_ROUTE} from '../../router/routes';
import * as S from './ProductPage.styled';

export const ProductPage = () => {
  const {productId} = useParams();
  const {product, isLoading, error} = useProductQuery(productId);
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(HOME_PAGE_ROUTE);
  };

  if (error) {
    return <PageError error={error.message} handleBack={handleClickBack} />;
  }

  return (
    <>
      <LoaderPage isShow={isLoading} />
      {!isLoading && (
        <Container>
          <S.PageContainer>
            <S.Title>This page wasn't in the task</S.Title>
            <S.Button onClick={handleClickBack}>Back to home</S.Button>
            <ProductCard
              author={product!.created_by.display_name}
              quantity={product!.quantity_available}
              quantityTotal={product!.quantity_nfts_created}
              name={product!.name}
              price={product!.initial_price}
              avatarName={getAvatarName(product!.avatar)}
            />
          </S.PageContainer>
        </Container>
      )}
    </>
  );
};
