import { FC } from "react";
import * as S from "./ProductCard.styled";
import { ProductCardAvatar } from "./ProductCardAvatar";

type Props = {
  avatarName: string;
  author: string;
  name: string;
  quantity: number;
  quantityTotal: number;
  price: number;
};

export const ProductCard: FC<Props> = (props) => {
  const { avatarName, author, name, quantity, quantityTotal, price } = props;

  return (
    <S.Card>
      <S.CardTop>
        <ProductCardAvatar avatarName={avatarName} />
        <S.Author>
          created by
          <S.NameLink href="/userId">{author}</S.NameLink>
        </S.Author>
        <S.Title>{name}</S.Title>
      </S.CardTop>
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
