import type {IProduct} from '../../types/Product';
import {getAvatarName} from '../../helpers/getAvatarName';
import {ProductCard} from '../product-card/ProductCard';
import * as S from './ProductList.styled';
import {FC, HTMLAttributes, SyntheticEvent} from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  products: IProduct[] | undefined;
  handleRoute: (id: number) => void;
}

export const ProductList: FC<Props> = ({products, handleRoute}) => {
  const handleClick = (event: SyntheticEvent<HTMLUListElement, MouseEvent>) => {
    const target = event.target as HTMLElement;
    const card = target.closest('li');
    if (!card) return;

    const productId = Number(card.dataset.id);
    handleRoute(productId);
  };
  return (
    <S.ProductList onClick={handleClick}>
      {products &&
        products.map((product: IProduct) => (
          <S.ProductItem key={product.product_id} data-id={product.product_id}>
            <ProductCard
              author={product.created_by.display_name}
              quantity={product.quantity_available}
              quantityTotal={product.quantity_nfts_created}
              name={product.name}
              price={product.initial_price}
              avatarName={getAvatarName(product.avatar)}
            />
          </S.ProductItem>
        ))}
    </S.ProductList>
  );
};
