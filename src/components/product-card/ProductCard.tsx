import {FC} from 'react';
import {ProductCardAvatar} from './ProductCardAvatar';
import {useObserver} from '../../hooks/useObserver';
import * as S from './ProductCard.styled';

type Props = {
  avatarName: string;
  author: string;
  name: string;
  quantity: number;
  quantityTotal: number;
  price: number;
};

export const ProductCard: FC<Props> = (props) => {
  const {avatarName, author, name, quantity, quantityTotal, price} = props;
  const {refEl, isInViewport} = useObserver();

  return (
    <S.Card ref={refEl}>
      <ProductCardAvatar
        avatarName={avatarName}
        autorName={author}
        isInViewport={isInViewport}
        title={name}
      />
      <S.CardBottom>
        <S.Available>
          <S.Text>available</S.Text>
          <S.AvailableCount>
            {quantity} of {quantityTotal}
          </S.AvailableCount>
        </S.Available>
        <S.Price>
          <S.Text>price</S.Text>
          <S.PriceCount>{price} ETH</S.PriceCount>
        </S.Price>
      </S.CardBottom>
    </S.Card>
  );
};
